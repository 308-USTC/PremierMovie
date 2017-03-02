var fs = require('fs');
var superagent = require('superagent');
var mysql = require('mysql');
var path = require('path');
////////////////////////////////////

var ia = [
    [
        ["排行", "片名", "主演", "地区", "类型", "指数", "走势"],
        ["1", "朗读者", " 钟汉良 Angelababy 甘婷婷 孙艺洲 于波 ", " 中国大陆 ", " 古装 ", "265,503,948", "↓"],
    ],
    [
        ["排行", "片名", "主演", "地区", "类型", "评分"],
        ["1", "血战钢锯岭", " 迪丽热巴 盛一伦 李溪芮 张彬彬 ", " 中国大陆 ", "爱情 ", "9.9"],
    ],
    [
        ["排行", "片名", "主演", "地区", "类型", "评论数", "走势"],
        ["1", "斗地主", " 钟汉良 Angelababy 甘婷婷 孙艺洲 于波 ", " 中国大陆 ", " 古装 ", "265,503,948", "↓"],
    ],
    [
        ["排行", "片名", "主演", "地区", "类型", "比率"],
        ["1", "情圣", " 迪丽热巴 盛一伦 李溪芮 张彬彬 ", " 中国大陆 ", "爱情 ", "9.9"],
    ],
];
var ij = 0;

/////////////////////////////////////////////////////////////////////////////////////////////////
// 在数组中添加明星的名字，格式如下： var stars = ['舒畅', '井柏然', '张大大', '刘昊然', '谭松韵', '孙艺洲'];
var stars = [];
fs.readFile('movie.json', 'utf-8', (err, data) => {
    var idNameMap = JSON.parse(data);
    var timer = setInterval(() => {
        //console.log(idNameMap[i].movie_id, idNameMap[i].movie_name)
        if (ij == 5) {
            clearInterval(timer);
        } else {
            queryById(idNameMap[ij].movie_id, ij);
        }
        ij++;
    }, 3 * 1000);

});


/////////////////////////////////////////////////////////////////////////////////////////////////
function queryById(id, i) {
    superagent.get('https://api.douban.com/v2/movie/subject/' + id)
        .end((err, res) => {
            if (err) console.log(err);
            var js = JSON.parse(res.text);
            console.log(i, js);

            fs.writeFile(path.join(__dirname, 'log.txt'), '\n' + i + ' : ' + JSON.stringify(js) + '\n', { flag: 'a' }, (err2) => {
                if (err2) console.log('fs writeFile err: ', err2);
            });

            // row cell
            if (Math.floor(i / 10) % 2 == 1) {
                ia[Math.floor(i / 10)][i % 10 + 1] = [
                    i % 10 + 1,
                    js.title, !!js.casts ? (js.casts[0].name + ' ' + !!js.casts[1] ? js.casts[1].name : '' + ' ' + !!js.casts[2] ? js.casts[2].name : '' + ' ' + !!js.casts[3] ? js.casts[3].name : '') : '',
                    js.countries.join(' '),
                    js.genres.join(' '),
                    js.rating.average
                ];
            } else {
                ia[Math.floor(i / 10)][i % 10 + 1] = [
                    i % 10 + 1,
                    js.title, !!js.casts ? (js.casts[0].name + ' ' + !!js.casts[1] ? js.casts[1].name : '' + ' ' + !!js.casts[2] ? js.casts[2].name : '' + ' ' + !!js.casts[3] ? js.casts[3].name : '') : '',
                    js.countries.join(' '),
                    js.genres.join(' '),
                    Math.floor(Math.random() * 10000),
                    Math.random() > .5 ? '↑' : '↓'
                ];
            }
            //获取单个js文件
            wtjs(js);
            //生成movie.js
            wtia(ia);
        });
}



function queryByNameInMySql(name) {
    var connection = mysql.createConnection({
        host: '219.219.220.203',
        user: 'ouyong',
        password: 'hello',
        database: 'douban_movie'
    });
    connection.connect(); //连接数据库
    connection.query('SELECT * FROM movie_info WHERE movie_name="' + name + '"', (err, rows, fields) => {
        if (err) {
            console.log(name, err); //throw err; 
        } else if (!rows[0]) { //查询结果为空
            fs.writeFile(path.join(__dirname, '无数据电影名单.txt'), '\n' + name + '\n', { flag: 'a' }, (err2) => {
                if (err2) console.log('fs writeFile err: ', err2);
            });
        } else {
            // console.log(rows[0]);
            wtjs(rows[0]);
        }
    });
    connection.end(); //关闭连接
}

function wtia(ia) {
    let loop = `
var str = [
    '<li><span class="t-1">排行</span><span class="t-2">片名</span><span class="t-10">主演</span><span class="t-4">地区</span><span class="t-4">类型</span><span class="t-5">昨日新增</span><span class="t-6">走势</span></li>',
    '<li><span class="t-1">排行</span><span class="t-2">片名</span><span class="t-10">主演</span><span class="t-4">地区</span><span class="t-4">类型</span><span class="t-6">评分</span></li>',
    '<li><span class="t-1">排行</span><span class="t-2">片名</span><span class="t-10">主演</span><span class="t-4">地区</span><span class="t-4">类型</span><span class="t-5">昨日新增</span><span class="t-6">走势</span></li>',
    '<li><span class="t-1">排行</span><span class="t-2">片名</span><span class="t-10">主演</span><span class="t-4">地区</span><span class="t-4">类型</span><span class="t-6">评分</span></li>'
];

for (var k = 0; k < ia.length; ++k) {
    var listr = str[k];
    for (var i = 0; i < ia[k].length; ++i) {
        var lilen = ia[k][0].length;
        if (i == 0) {
            var li0 = $(listr);
            for (var j = 0; j < lilen; ++j) {
                li0.find('span:nth-child(' + (j + 1) + ')').html(ia[k][0][j]);
            }
            $($('.chart-list')[k]).html(li0);
        } else {
            var li = $(listr);
            li.find('span:first-child').html('<i class="rank-' + ((ia[k][i][0] > 3) ? 'other' : 'T3') + '">' + ia[k][i][0] + '</i>');
            li.find('span:nth-child(2)').html('<a href="search.html?' + ia[k][i][1] + '" title="点击查看：' + ia[k][i][1] + '" target="_blank">' + ia[k][i][1] + '</a>');

            for (var j = 2; j < lilen; ++j) {
                li.find('span:nth-child(' + (j + 1) + ')').html(ia[k][i][j]);
            }
            var last = li.find('span:last-child').text();
            if (last == '↑' || last == '↓') {
                li.find('span:last-child').addClass((last == '↑') ? 'up' : 'down');
            }
            $($('.chart-list')[k]).append(li);
        }
    }
}
    `
    fs.writeFile(path.join(__dirname, 'js/movie.js'), '\n var ia = ' + JSON.stringify(ia) + '\n' + loop, function(err2) {
        if (err2) console.log('fs writeFile err: ', err2);
    });
}

function wtjs(i) {
    var infor = {
        "content": [{
            "name": "name",
            "value": i.title
        }, {
            "name": "导演",
            "value": i.directors[0].name
        }, {
            "name": "主演",
            "value": !!i.casts ? (i.casts[0].name + ' ' + !!i.casts[1] ? i.casts[1].name : '' + ' ' + !!i.casts[2] ? i.casts[2].name : '' + ' ' + !!i.casts[3] ? i.casts[3].name : '') : '',
        }, {
            "name": "类型",
            "value": i.genres.join(' ')
        }, {
            "name": "制片国家/地区",
            "value": i.countries.join(' ')
        }, {
            "name": "上映日期",
            "value": i.year
        }, {
            "name": "summary",
            "value": i.summary.replace('©豆瓣', '')
        }, {
            "name": "评分",
            "value": i.rating.average
        }, {
            "name": "image",
            "value": i.images.large
        }, {
            "name": "id",
            "value": i.id
        }]
    };

    let loop = `
    
var bar_stack_option = {
    title: {
        //text: '',
        //subtext: '纯属虚构',
        x: 'left'
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    legend: {
        data: ['热度变化', '百度指数', '评论数']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: [{
        type: 'category',
        data: ["09/30", "10/01", "10/02", "10/03", "10/04", "10/05", "10/06", "10/07", "10/08", "10/09", "10/10", "10/11", "10/12", "10/13", "10/14", "10/15", "10/16", "10/17", "10/18", "10/19", "10/20", "10/21", "10/22", "10/23", "10/24", "10/25", "10/26"]
    }],
    yAxis: [{
        name: '热度',
        type: 'value',
    }, {
        name: '评论数',
        type: 'value',
    }, {
        name: '百度指数',
        type: 'value',
        offset: 65
    }],
    series: [{
        name: '热度变化',
        type: 'line',
        data: [3898.2, 5972.9, 6539.0, 7285.2, 7706.9, 8606.3, 9112.5, 7997.5, 5177.8, 5150.5, 3700.9, 3295.5, 3023.2, 2737.1, 3727.9, 6218.4, 4915.5, 1988.2, 1811.4, 1680.2, 1435.6, 1246.6, 2410.7, 2085.0, 822.0, 819.7, 737.0]
    }, {
        name: '评论数',
        type: 'line',
        yAxisIndex: 1,
        data: [2674, 4782, 5896, 6898, 7041, 7486, 7498, 7276, 6100, 4179, 3155, 2571, 2257, 1930, 2019, 3200, 3087, 1853, 1318, 1193, 985, 884, 1071, 1009, 878, 704, 213]
    }, {
        name: '百度指数',
        type: 'line',
        yAxisIndex: 2,
        data: [301898, 304456, 302805, 398524, 425936, 528746, 522102, 489435, 392881, 371374, 282109, 246626, 235598, 237054, 286918, 315762, 290585, 185248, 153730, 144104, 134518, 147049, 166831, 154624, 108557, 93739, 88569]
    }, ]
};


var pie2_option = {
    title: {
        text: '观众分析',
        x: 'center'
    },
    tooltip: {
        trigger: 'item',
        formatter: "{b} : {c}%"
    },
    legend: {
        orient: 'vertical',
        left: 'left',
        data: ['电影1']
    },
    series: [{
        name: '性别比例',
        type: 'pie',
        radius: '50%',
        center: ['20%', '60%'],
        data: [{
            value: 63.5,
            name: '男性'
        }, {
            value: 36.5,
            name: '女性'
        }],
        itemStyle: {
            emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
        }
    }, {
        name: '年龄分布',
        type: 'pie',
        radius: ['35%', '50%'],
        center: ['70%', '60%'],
        data: [{
            value: 5,
            name: '70后'
        }, {
            value: 14,
            name: '80后'
        }, {
            value: 26,
            name: '90后'
        }, {
            value: 25,
            name: '00后'
        }, {
            value: 18,
            name: '60后'
        }, ],
        itemStyle: {
            emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
        }
    }]
};

var word_list = [{
    text: "主旋律",
    weight: 5201,
}, {
    text: "剧情",
    weight: 4993,
}, {
    text: "演技",
    weight: 3008
}, {
    text: "枪战",
    weight: 2445
}, {
    text: "动作",
    weight: 4927
}, {
    text: "场面",
    weight: 3135
}, {
    text: "国产",
    weight: 5352
}, {
    text: "节奏",
    weight: 3076
}, {
    text: "精彩",
    weight: 2348
}, {
    text: "情节",
    weight: 2458
}, {
    text: "演员",
    weight: 2256
}, {
    text: "故事",
    weight: 2824
}, {
    text: "动作片",
    weight: 1131
}, {
    text: "紧凑",
    weight: 3069
}, {
    text: "良心",
    weight: 1567
}, {
    text: "紧张",
    weight: 2083
}, {
    text: "很棒",
    weight: 1022
}, {
    text: "事件",
    weight: 2303
}, {
    text: "大片",
    weight: 1805
}, {
    text: "镜头",
    weight: 1516
}, {
    text: "毒品",
    weight: 1164
}, {
    text: "硬汉",
    weight: 1066
}, {
    text: "血腥",
    weight: 877
}, {
    text: "特效",
    weight: 595
}, {
    text: "拖沓",
    weight: 500
}, {
    text: "尴尬",
    weight: 683
}, {
    text: "诚意",
    weight: 525
}];


///////////////////////////////////////////////////////////////////////

$('.product-details').html('<h5>简介：</h5><p class="intro"></p>');
for (var i = 0; i < infor.content.length; ++i) {
    if (infor.content[i].name === 'summary') {
        $('.intro').html(infor.content[i].value);
    } else if (infor.content[i].name === 'id') {
        continue;
    } else if (infor.content[i].name === 'image') {
        $('.product-image-large img').attr('src', infor.content[i].value);
    } else if (infor.content[i].name === 'name') {
        $('.section-breadcrumbs h1').html(infor.content[i].value);
        $('title').html('冠影 · PREMIER MOVIE - ' + infor.content[i].value);
    } else {
        $('#tab2 table').append('<tr><td>' + infor.content[i].name + '</td><td>' + infor.content[i].value + '</td></tr>')
    }
}



var tab1 = document.getElementById('tab1');
var bar_dom = document.getElementById('bar_dom');

echarts.init(bar_dom).setOption(bar_stack_option, true);
$('#key_dom').jQCloud(word_list);


///////////////////////////////////////////////////////////////////////
var pie2_dom = document.createElement('div');

tab1.appendChild(pie2_dom);

var pie2_Chart = echarts.init(pie2_dom);
pie2_Chart.setOption(pie2_option, true);

function randomData() {
    return Math.round(Math.random() * 1000);
}
    `;
    fs.writeFile(path.join(__dirname, 'js/search/' + i.title + '.js'), '\n var infor = ' + JSON.stringify(infor) + '\n' + loop, function(err2) {
        if (err2) console.log('fs writeFile err: ', err2);
    });
}


/*
' { "rating": { "max": 10, "average": 6.7, "stars": "35", "min": 0 }, "reviews_count": 295, "wish_count": 4273, "douban_site": "", "year": "2002", "images": { "small": "https://img1.doubanio.com\/view\/movie_poster_cover\/ipst\/public\/p1774548839.jpg", "large": "https://img1.doubanio.com\/view\/movie_poster_cover\/lpst\/public\/p1774548839.jpg", "medium": "https://img1.doubanio.com\/view\/movie_poster_cover\/spst\/public\/p1774548839.jpg" }, "alt": "https:\/\/movie.douban.com\/subject\/1306123\/", "id": "1306123", "mobile_url": "https:\/\/movie.douban.com\/subject\/1306123\/mobile", "title": "\u82f1\u96c4", "do_count": null, "share_url": "https:\/\/m.douban.com\/movie\/subject\/1306123", "seasons_count": null, "schedule_url": "", "episodes_count": null, "countries": ["\u4e2d\u56fd\u5927\u9646", "\u9999\u6e2f"], "genres": ["\u5267\u60c5", "\u52a8\u4f5c", "\u6b66\u4fa0"], "collect_count": 160834, "casts": [{ "alt": "https:\/\/movie.douban.com\/celebrity\/1025146\/", "avatars": { "small": "https://img1.doubanio.com\/img\/celebrity\/small\/1369201135.38.jpg", "large": "https://img1.doubanio.com\/img\/celebrity\/large\/1369201135.38.jpg", "medium": "https://img1.doubanio.com\/img\/celebrity\/medium\/1369201135.38.jpg" }, "name": "\u674e\u8fde\u6770", "id": "1025146" }, { "alt": "https:\/\/movie.douban.com\/celebrity\/1115918\/", "avatars": { "small": "https://img3.doubanio.com\/img\/celebrity\/small\/33525.jpg", "large": "https://img3.doubanio.com\/img\/celebrity\/large\/33525.jpg", "medium": "https://img3.doubanio.com\/img\/celebrity\/medium\/33525.jpg" }, "name": "\u6881\u671d\u4f1f", "id": "1115918" }, { "alt": "https:\/\/movie.douban.com\/celebrity\/1274231\/", "avatars": { "small": "https://img3.doubanio.com\/img\/celebrity\/small\/793.jpg", "large": "https://img3.doubanio.com\/img\/celebrity\/large\/793.jpg", "medium": "https://img3.doubanio.com\/img\/celebrity\/medium\/793.jpg" }, "name": "\u5f20\u66fc\u7389", "id": "1274231" }, { "alt": "https:\/\/movie.douban.com\/celebrity\/1045565\/", "avatars": { "small": "https://img3.doubanio.com\/img\/celebrity\/small\/2294.jpg", "large": "https://img3.doubanio.com\/img\/celebrity\/large\/2294.jpg", "medium": "https://img3.doubanio.com\/img\/celebrity\/medium\/2294.jpg" }, "name": "\u9648\u9053\u660e", "id": "1045565" }], "current_season": null, "original_title": "\u82f1\u96c4", "summary": "\u6218\u56fd\u672b\u671f\uff0c\u71d5\u3001\u8d75\u3001\u695a\u3001\u97e9\u3001\u9b4f\u3001\u9f50\u3001\u79e6\u4e03\u96c4\u5e76\u8d77\uff0c\u60df\u79e6\u56fd\u6700\u4e3a\u5f3a\u5927\uff0c\u6025\u6b32\u541e\u5e76\u516d\u56fd\u4e00\u7edf\u5929\u4e0b\uff0c\u79e6\u738b\uff08\u9648\u9053\u660e\uff09\u56e0\u6b64\u6210\u4e3a\u516d\u56fd\u5927\u654c\uff0c\u5404\u5730\u4e0d\u540c\u7684\u523a\u79e6\u6545\u4e8b\u4e00\u76f4\u5728\u4e0a\u6f14\uff0c\u5176\u4e2d\u8d75\u56fd\u523a\u5ba2\u6b8b\u5251\uff08\u6881\u671d\u4f1f\uff09\u3001\u98de\u96ea\uff08\u5f20\u66fc\u7389\uff09\u3001\u5982\u6708\uff08\u7ae0\u5b50\u6021\uff09\u3001\u957f\u7a7a\uff08\u7504\u5b50\u4e39\uff09\u56e0\u540d\u9707\u5929\u4e0b\u7684\u9ad8\u8d85\u5251\u672f\uff0c\u4ee4\u79e6\u738b\u5341\u5e74\u91cc\u6ca1\u7761\u8fc7\u4e00\u4e2a\u5b89\u7a33\u89c9\u3002\n\u67d0\u65e5\u95fb\u5f97\u6b8b\u5251\u7b49\u4eba\u5df2\u88ab\u540d\u53eb\u65e0\u540d\uff08\u674e\u8fde\u6770\uff09\u7684\u79e6\u56fd\u5251\u5ba2\u6740\u6b7b\uff0c\u79e6\u738b\u5927\u559c\u6025\u53ec\u5176\u4e0a\u6bbf\u76f8\u89c1\uff0c\u5374\u4e5f\u8c28\u614e\u5c0f\u5fc3\u4ee5\u9632\u6709\u8bc8\uff0c\u79e6\u738b\u548c\u65e0\u540d\u6597\u667a\u6597\u52c7\u7684\u8f83\u91cf\u9042\u5373\u5c55\u5f00\u3002\u00a9\u8c46\u74e3", "subtype": "movie", "directors": [{ "alt": "https:\/\/movie.douban.com\/celebrity\/1054398\/", "avatars": { "small": "https://img1.doubanio.com\/img\/celebrity\/small\/568.jpg", "large": "https://img1.doubanio.com\/img\/celebrity\/large\/568.jpg", "medium": "https://img1.doubanio.com\/img\/celebrity\/medium\/568.jpg" }, "name": "\u5f20\u827a\u8c0b", "id": "1054398" }], "comments_count": 17928, "ratings_count": 117811, "aka": ["Hero"] }';
*/
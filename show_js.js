var fs = require('fs');
var superagent = require('superagent');
var mysql = require('mysql');
var path = require('path');
////////////////////////////////////

var ia = [
    [
        ["排行", "片名", "类型", "播放量", "走势"],
        ["1", "朗读者", " 古装 ", "265,503,948", "↓"],
    ],
    [
        ["排行", "片名", "类型", "收视率", "走势"],
        ["1", "朗读者", " 古装 ", "0.01%", "↓"],
    ],
    [
        ["排行", "片名", "类型", "播放量", "走势"],
        ["1", "朗读者", " 古装 ", "265,503,948", "↓"],
    ],
];
var ij = 0;

/////////////////////////////////////////////////////////////////////////////////////////////////
// 在数组中添加明星的名字，格式如下： var stars = ['舒畅', '井柏然', '张大大', '刘昊然', '谭松韵', '孙艺洲'];
var stars = [];
fs.readFile('show.json', 'utf-8', (err, data) => {
    var idNameMap = JSON.parse(data);
    var timer = setInterval(() => {
        //console.log(idNameMap[i].movie_id, idNameMap[i].movie_name)
        if (ij == 30) {
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
            //console.log(i, js);

            fs.writeFile(path.join(__dirname, 'js/search/show/log.txt'), '\n' + i + ' : ' + JSON.stringify(js) + '\n', { flag: 'a' }, (err2) => {
                if (err2) console.log('fs writeFile err: ', err2);
            });

            if (Math.floor(i / 10) % 2 == 0) {
                ia[Math.floor(i / 10)][i % 10 + 1] = [
                    i % 10 + 1,
                    js.title,
                    js.genres.join(' '),
                    Math.floor(Math.random() * 10000000),
                    Math.random() > .5 ? '↑' : '↓'
                ];
            } else if (Math.floor(i / 10) % 2 == 1) {
                ia[Math.floor(i / 10)][i % 10 + 1] = [
                    i % 10 + 1,
                    js.title,
                    js.genres.join(' '),
                    Math.floor(Math.random() * 10000) / 10000 + '%',
                    Math.random() > .5 ? '↑' : '↓'
                ];
            } else {
                ia[Math.floor(i / 10)][i % 10 + 1] = [
                    (i % 10 + 1) % 3,
                    js.title,
                    js.genres.join(' '),
                    Math.floor(Math.random() * 10000000),
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
    var str = ['<li><span class="t-1">排行</span><span class="t-7">片名</span><span class="t-5">类型</span><span class="t-5">播放量</span><span class="t-6">走势</span></li>','<li><span class="t-1">排行</span><span class="t-7">片名</span><span class="t-5">类型</span><span class="t-5">收视率</span><span class="t-6">走势</span></li>','<li><span class="t-1">排行</span><span class="t-7">片名</span><span class="t-5">类型</span><span class="t-5">播放量</span><span class="t-6">走势</span></li>',,
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
                li.find('span:nth-child(2)').html('<a href="searchshow.html?' + ia[k][i][1] + '" title="点击查看：' + ia[k][i][1] + '" target="_blank">' + ia[k][i][1] + '</a>');

                for (var j = 2; j < lilen; ++j) {
                    li.find('span:nth-child(' + (j + 1) + ')').html(ia[k][i][j]);
                }
                var last = li.find('span:last-child').text();
                if (last == '↑' || last == '↓') {
                    li.find('span:last-child').addClass((last == '↑') ? 'up' : 'down');
                }
                $($('.chart-list')[k]).append(li);
                if (k == 2) {
                    li.find('span:first-child').html('<i class="rank-T3">' + ((i % 3) != 0 ? (i % 3) : 3) + '</i>');
                }
                if (k == 2 && i > 0 && i % 3 == 0) { //各类型top3的分割
                    $($('.chart-list')[k]).append('<li class="chart-cut"><i></i></li>');
                }
            }
        }
    }
    `
    fs.writeFile(path.join(__dirname, 'js/show.js'), '\n var ia = ' + JSON.stringify(ia) + '\n' + loop, function(err2) {
        if (err2) console.log('fs writeFile err: ', err2);
    });
}

function wtjs(i) {
    var infor = {
        "content": [{
            "name": "name",
            "value": i.title
        }, {
            "name": "主演",
            "value":
                ((a) => {
                    let r = '';
                    for (let i = 0; i < a.length; ++i) {
                        r += a[i].name + ' ';
                    }
                    return r;
                })(i.casts),
        }, {
            "name": "类型",
            "value": i.genres.join(' ')
        }, {
            "name": "国家/地区",
            "value": i.countries.join(' ')
        }, {
            "name": "开播日期",
            "value": i.year
        }, {
            "name": "summary",
            "value": i.summary
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
    fs.writeFile(path.join(__dirname, 'js/search/show/' + i.title + '.js'), '\n var infor = ' + JSON.stringify(infor) + '\n' + loop, function(err2) {
        if (err2) console.log('fs writeFile err: ', err2);
    });
}

 var infor = {"content":[{"name":"name","value":"欢乐好声音"},{"name":"导演","value":"加斯·詹宁斯"},{"name":"主演","value":"马修·麦康纳 瑞茜·威瑟斯彭 塞思·麦克法兰 斯嘉丽·约翰逊 "},{"name":"类型","value":"喜剧 动画 歌舞"},{"name":"制片国家/地区","value":"美国"},{"name":"上映日期","value":"2016"},{"name":"summary","value":"曾制作过《小黄人》的环球公司和Illumination Entertainment今天公布了他们一部新的动画电影档期和配音阵容。该片堪称动物界的“达人秀”和“好声音”，片中会用到超过85首热门歌曲！\n这部动画片叫做《歌唱秀》（Sing），将于2016年12月21日上映。马修·麦康纳希（Matthew McConaughey）为剧院老板巴斯特（Buster Moon）——一只考拉配音，这家剧院是他父亲建立的，曾经十分辉煌，但现在门庭冷落。为了重振剧院，考拉经理决定举办一场全世界最伟大的歌唱大赛，冠军将获得10万美元的奖金！这在动物王国已经算是巨款了！\n这场歌唱大赛最终选出了五位决赛选手，他们分别是：\n瑞茜·威瑟斯彭（Reese Witherspoon）配音的猪妈妈罗茜塔（Rosita），她年轻时一直有音乐梦想，后来一窝生了25只猪仔后梦想就烟消云散了。如今她参赛一方面是为圆梦，另一方面也是因为经济上入不敷出。\n斯嘉丽·约翰森（Scarlett Johansson）配音的少女豪猪艾什（Ash），她和男友建立了一个庞克摇滚乐队，但男友总是打击她，让她觉得自己没有音乐才华。如今她要摆脱傲慢的男友，开始自己的单飞事业。\n塞斯·麦克法兰（Seth MacFarlane）配音的老鼠歌手麦克（Mike），他有着辛纳特拉的动听歌喉，但心机很深，无时无刻不在利用遇到的每个人。\n托瑞·凯利（Tori Kelly）配音的小象米纳（Meena），胆子很小，有舞台恐惧症。\n塔伦·埃格顿（Taron Egerton）配音的年轻大猩猩强尼（Johnny），父亲一心想让他继承自己家族的黑帮事业，但他不愿子承父业、只想唱歌。\n此外，约翰·C·莱利（John C. Reilly）也将加盟本片，为考拉老板最好的朋友黑绵羊艾迪（Eddie）配音，他不看好歌唱比赛这个主意。\n《歌唱秀》由真人电影导演加斯·詹宁斯（Garth Jennings）执导，他曾拍过《银河系漫游指南》（The Hitchhiker’s Guide to the Galaxy）、《兰博之子》（Son of Rambow）等片。"},{"name":"评分","value":8.3},{"name":"image","value":"https://img5.doubanio.com/view/movie_poster_cover/lpst/public/p2411622136.jpg"},{"name":"id","value":"26354572"}]}

    
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
    
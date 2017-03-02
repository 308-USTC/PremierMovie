
 var infor = {"content":[{"name":"name","value":"X战警"},{"name":"导演","value":"布莱恩·辛格"},{"name":"主演","value":"帕特里克·斯图尔特"},{"name":"类型","value":"动作 科幻"},{"name":"制片国家/地区","value":"美国 加拿大"},{"name":"上映日期","value":"2000"},{"name":"summary","value":"具有特殊能力的一群变种人组成了一个维护世界的小组——X战警小队。成员包括能吸收对方记忆的淘气、双眼能放致命射线的独眼狼、能随意控制气候的暴风女（哈莉•贝瑞 Halle Berry 饰）、具有隔空取物和瞬间移动移动能力的琴葛蕾（法米克•詹森 Famke Janssen 饰）。\n不久，钢狼（休•杰克曼 Hugh Jackman 饰）也出现了。不过钢狼脾气暴躁、独来独往，X战警小队想极力拉拢钢狼加入队伍，无奈孤傲的钢狼一时也没有答应。邪恶轴心能控制磁力和地球引力的万磁王此时也在极力拉拢钢狼，X战警小队不仅要费尽心思对付万磁王，还要小心亦正亦邪的钢狼。他们能否取得最后的胜利？"},{"name":"评分","value":7.5},{"name":"image","value":"https://img3.doubanio.com/view/movie_poster_cover/lpst/public/p918381401.jpg"},{"name":"id","value":"1295250"}]}

    
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
    
var infor = {
    "content": [{
        "name": "moviename",
        "value": "湄公河行动"
    }, {
        "name": "导演",
        "value": "林超贤"
    }, {
        "name": "编剧",
        "value": "林超贤"
    }, {
        "name": "主演",
        "value": "张涵予 / 彭于晏 / 孙淳 / 陈宝国 / 冯文娟 / 刘显达 / 赵健 / 吴旭东 / 吴嘉龙 / 卢惠光 / 柏华力·莫高彼斯彻 / 维他亚·潘斯林加姆"
    }, {
        "name": "类型",
        "value": "动作 / 犯罪"
    }, {
        "name": "制片国家/地区",
        "value": "中国大陆 / 香港"
    }, {
        "name": "语言",
        "value": "汉语普通话 / 粤语 / 泰语 / 缅甸语 / 英语"
    }, {
        "name": "上映日期",
        "value": "2016-09-30(中国大陆) / 2016-10-07(台湾)"
    }, {
        "name": "片长",
        "value": "124分钟"
    }, {
        "name": "又名",
        "value": "湄公河大案 / 湄公河 / Operation Mekong"
    }, {
        "name": "IMDb链接",
        "value": "tt6044910"
    }, {
        "name": "summary",
        "value": "金三角湄公河上，一处被称为“鬼门关”的河段，两艘来自中国的商船遭到不明身份之人的枪击袭击。未过多久，泰国军方召开新闻发布会，指责中国商船贩卖毒品。虽然发布会宣称船员全部逃亡，但是十三具遭受残忍杀害的中国船员尸体很快被人发现。这起胆大妄为的案件令中国警方大为震惊，云南省缉毒总队队长高刚（张涵予 饰）受命带特别行动小组前往泰国，并与情报员方新武（彭于晏 饰）合作接洽。根据现有资料显示，这件案子由盘踞在金三角的大毒枭糯卡所为。糯卡贪婪残忍，胆大包天，是湄公河流域上一颗惊扰运输安全的毒瘤。为了将这个恶棍绳之于法，中国、老挝、缅甸开展了三国联合巡逻，集中对糯卡的制毒窝点进行扫荡。而高刚等人也深入最危险境地，与丧失人性的贩毒分子进行惨烈对决……"
    }]
};


var bar_stack_option = {
    title: {
        text: '票房数据',
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
        data: ['日票房', '百度指数', '评论数']
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
        name: '日票房(万元)',
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
        name: '日票房',
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


var map_option = {
    title: {
        text: '观众地域分布',
        subtext: '纯属虚构',
        x: 'center', //位置 也可为left
        y: '10%',
    },
    tooltip: {
        trigger: 'item',
        formatter: "{b} : {c} 人"
    },
    /*legend: {
    	orient: 'vertical',
    	left: 'left',
    	data:['电影1']
    },*/
    visualMap: {
        min: 0,
        max: 2500,
        left: 'left',
        top: 'center',
        text: ['高', '低'], // 文本，默认为数值文本
        calculable: true
    },
    toolbox: {
        show: true,
        orient: 'vertical',
        left: 'right',
        top: 'center',
        feature: {
            dataView: {
                readOnly: false
            },
            restore: {},
            saveAsImage: {}
        }
    },
    series: [{
        name: '《湄公河行动》',
        type: 'map',
        mapType: 'china',
        roam: false,
        label: {
            normal: {
                show: true
            },
            emphasis: {
                show: true
            }
        },
        data: [{
            name: '北京',
            value: randomData()
        }, {
            name: '天津',
            value: randomData()
        }, {
            name: '上海',
            value: randomData()
        }, {
            name: '重庆',
            value: randomData()
        }, {
            name: '河北',
            value: randomData()
        }, {
            name: '河南',
            value: randomData()
        }, {
            name: '云南',
            value: randomData()
        }, {
            name: '辽宁',
            value: randomData()
        }, {
            name: '黑龙江',
            value: randomData()
        }, {
            name: '湖南',
            value: randomData()
        }, {
            name: '安徽',
            value: randomData()
        }, {
            name: '山东',
            value: randomData()
        }, {
            name: '新疆',
            value: randomData()
        }, {
            name: '江苏',
            value: randomData()
        }, {
            name: '浙江',
            value: randomData()
        }, {
            name: '江西',
            value: randomData()
        }, {
            name: '湖北',
            value: randomData()
        }, {
            name: '广西',
            value: randomData()
        }, {
            name: '甘肃',
            value: randomData()
        }, {
            name: '山西',
            value: randomData()
        }, {
            name: '内蒙古',
            value: randomData()
        }, {
            name: '陕西',
            value: randomData()
        }, {
            name: '吉林',
            value: randomData()
        }, {
            name: '福建',
            value: randomData()
        }, {
            name: '贵州',
            value: randomData()
        }, {
            name: '广东',
            value: randomData()
        }, {
            name: '青海',
            value: randomData()
        }, {
            name: '西藏',
            value: randomData()
        }, {
            name: '四川',
            value: randomData()
        }, {
            name: '宁夏',
            value: randomData()
        }, {
            name: '海南',
            value: randomData()
        }, {
            name: '台湾',
            value: randomData()
        }, {
            name: '香港',
            value: randomData()
        }, {
            name: '澳门',
            value: randomData()
        }]
    }]
};;

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

$('.product-details').html('<h5>总票房：<div class="price"></div></h5><h5>简介：</h5><p class="intro"></p>');
for (var i = 0; i < infor.content.length; ++i) {
    if (infor.content[i].name === 'summary') {
        $('.intro').html(infor.content[i].value);
    } else if (infor.content[i].name === 'moviename') {
        $('.section-breadcrumbs h1').html(infor.content[i].value);
        $('title').html('冠影 · PREMIER MOVIE - ' + infor.content[i].value);
        $('.product-image-large img').attr('src', 'images/pm-ov/movie5.jpg');
        $('.price').html('9.71亿');
    } else {
        $('#tab2 table').append('<tr><td>' + infor.content[i].name + '</td><td>' + infor.content[i].value + '</td></tr>')
    }
}


var tab1 = document.getElementById('tab1');
var bar_dom = document.getElementById('bar_dom');
echarts.init(bar_dom).setOption(bar_stack_option, true);
$('#key_dom').jQCloud(word_list);


///////////////////////////////////////////////////////////////////////
var map_dom = document.createElement('div');
var pie2_dom = document.createElement('div');

tab1.appendChild(map_dom);
tab1.appendChild(pie2_dom);

echarts.init(map_dom).setOption(map_option, true);
echarts.init(pie2_dom).setOption(pie2_option, true);

function randomData() {
    return Math.round(Math.random() * 1000);
}

//////////////////////////////

/*
function createRandomItemStyle() {
    return {
        normal: {
            color: 'rgb(' + [
                Math.round(Math.random() * 160),
                Math.round(Math.random() * 160),
                Math.round(Math.random() * 160)
            ].join(',') + ')'
        }
    };
}

var word_cloud_option = {
    title: {
        text: 'Google Trends',
        link: 'http://www.google.com/trends/hottrends'
    },
    tooltip: {
        show: true
    },
    series: [{
        name: 'Google Trends',
        type: 'wordCloud',
        size: ['80%', '80%'],
        textRotation: [0, 45, 90, -45],
        textPadding: 0,
        autoSize: {
            enable: true,
            minSize: 14
        },
        data: [{
                name: "Sam S Club",
                value: 10000,
                itemStyle: {
                    normal: {
                        color: 'black'
                    }
                }
            },
            {
                name: "Macys",
                value: 6181,
                itemStyle: createRandomItemStyle()
            },
            {
                name: "Amy Schumer",
                value: 4386,
                itemStyle: createRandomItemStyle()
            },
            {
                name: "Jurassic World",
                value: 4055,
                itemStyle: createRandomItemStyle()
            },
            {
                name: "Charter Communications",
                value: 2467,
                itemStyle: createRandomItemStyle()
            },
            {
                name: "Chick Fil A",
                value: 2244,
                itemStyle: createRandomItemStyle()
            },
            {
                name: "Planet Fitness",
                value: 1898,
                itemStyle: createRandomItemStyle()
            },
            {
                name: "Pitch Perfect",
                value: 1484,
                itemStyle: createRandomItemStyle()
            },
            {
                name: "Express",
                value: 1112,
                itemStyle: createRandomItemStyle()
            },
            {
                name: "Home",
                value: 965,
                itemStyle: createRandomItemStyle()
            },
            {
                name: "Johnny Depp",
                value: 847,
                itemStyle: createRandomItemStyle()
            },
            {
                name: "Lena Dunham",
                value: 582,
                itemStyle: createRandomItemStyle()
            },
            {
                name: "Lewis Hamilton",
                value: 555,
                itemStyle: createRandomItemStyle()
            },
            {
                name: "KXAN",
                value: 550,
                itemStyle: createRandomItemStyle()
            },
            {
                name: "Mary Ellen Mark",
                value: 462,
                itemStyle: createRandomItemStyle()
            },
            {
                name: "Farrah Abraham",
                value: 366,
                itemStyle: createRandomItemStyle()
            },
            {
                name: "Rita Ora",
                value: 360,
                itemStyle: createRandomItemStyle()
            },
            {
                name: "Serena Williams",
                value: 282,
                itemStyle: createRandomItemStyle()
            },
            {
                name: "NCAA baseball tournament",
                value: 273,
                itemStyle: createRandomItemStyle()
            },
            {
                name: "Point Break",
                value: 265,
                itemStyle: createRandomItemStyle()
            }
        ]
    }]
};


var word_cloud_dom = document.createElement('div');
tab1.appendChild(word_cloud_dom);
echarts.init(word_cloud_dom).setOption(word_cloud_option, true);*/
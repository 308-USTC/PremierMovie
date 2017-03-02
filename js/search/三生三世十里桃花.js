var infor = {
    "content": [{
        "name": "moviename",
        "value": "三生三世十里桃花"
    }, {
        "name": "导演",
        "value": " 林玉芬"
    }, {
        "name": "编剧",
        "value": "弘伙 / 唐七"
    }, {
        "name": "主演",
        "value": "杨幂 / 赵又廷 / 张智尧 / 迪丽热巴 / 高伟光 / 张彬彬 / 于朦胧 / 连奕名 / 黄梦莹 / 祝绪丹 / 刘芮麟 / 代斯"
    }, {
        "name": "类型",
        "value": " 剧情 / 爱情"
    }, {
        "name": "制片国家/地区",
        "value": "中国大陆"
    }, {
        "name": "语言",
        "value": "汉语普通话"
    }, {
        "name": "首播",
        "value": "2017-01-30(中国大陆)"
    }, {
        "name": "集数",
        "value": "58"
    }, {
        "name": "单集片长",
        "value": "45分钟"
    }, {
        "name": "又名",
        "value": "三生三世十里桃花电视剧版 / To the Sky Kingdom / Eternal Love"
    }, {
        "name": "summary",
        "value": "妖君擎苍向神族挑起战争，神族付出惨痛代价封印了擎苍，同年天孙夜华出世。七万年后擎苍破出封印，青丘狐帝幺女白浅再次将擎苍封印，因此被封法力、记忆和容貌，落入凡尘与夜华相识、相恋，后被带入天宫。\
         　　天宫中，爱慕夜华的素锦屡次陷害白浅，并让白浅误会夜华冷酷无情，继而又害白浅被挖双眼。白浅伤心欲绝，产子后，纵身跃下诛仙台。因诛仙台戾气破解封印，她恢复记忆，为忘记夜华，饮下忘情药。\
         　　百年后二人在东海重逢。夜华认出白浅，相随相伴，再续前缘，更唤醒白浅记忆。面对往日仇怨，白浅问素锦讨回双眼，怎料又中了素锦的计，再不肯原谅夜华。此时擎苍再次醒转，夜华来不及解释，亲自斩杀擎苍,付出生命封了东皇钟，面对魂飞魄散的夜华，白浅悔恨自责。幸而三年后，夜华苏醒，二人再续前缘。"
    }]
};


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
        data: ['集播放量']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: [{
        type: 'category',
        data: ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58]
    }],
    yAxis: [{
        name: '集播放量',
        type: 'value',
    }],
    series: [{
        name: '集播放量',
        type: 'bar',
        data: [3898.2, 5972.9, 6539.0, 7285.2, 7706.9, 8606.3, 9112.5, 7997.5, 5177.8, 5150.5, 3700.9, 3295.5, 3023.2, 2737.1, 3727.9, 6218.4, 4915.5, 1988.2, 1811.4, 1680.2, 1435.6, 1246.6, 2410.7, 2085.0, 822.0, 819.7, 737.0]
    }]
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

$('.product-details').html('</h5><h5>简介：</h5><p class="intro"></p>');
for (var i = 0; i < infor.content.length; ++i) {
    if (infor.content[i].name === 'summary') {
        $('.intro').html(infor.content[i].value);
    } else if (infor.content[i].name === 'moviename') {
        $('.section-breadcrumbs h1').html(infor.content[i].value);
        $('title').html('冠影 · PREMIER MOVIE - ' + infor.content[i].value);
        $('.product-image-large img').attr('src', 'https://img5.doubanio.com/view/movie_poster_cover/lpst/public/p2412572406.jpg');
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
var infor = { "content": [{ "name": "name", "value": "金刚狼3" }, { "name": "导演", "value": "詹姆斯·曼高德" }, { "name": "主演", "value": " 休·杰克曼 / 帕特里克·斯图尔特 / 达芙妮·基恩 / 波伊德·霍布鲁克 / 斯戴芬·莫昌特 " }, { "name": "类型", "value": "动作 奇幻 科幻" }, { "name": "制片国家/地区", "value": "美国" }, { "name": "上映日期", "value": "2017-03-03(中国大陆/美国) / 2017-03-17(柏林电影节)" }, { "name": "summary", "value": "2029年，变种人大幅减少，X战警已经解散。身心疲惫的金刚狼罗根（休·杰克曼 Hugh Jackman 饰）自愈因子逐渐消失，整天饮酒度日，靠当司机养家。他在墨西哥边境隐居，并照顾着饱受病痛折磨的老X教授（帕特里克·斯图尔特 Patrick Stewart 饰）。有一天，一位陌生女子让罗根送一个叫劳拉（达芙妮·金 Dafne Keen 饰）的女孩去加拿大边境，一开始罗根拒绝了，但查尔斯一直在等着这个女孩的出现，劳拉拥有超强的战斗力，而且在许多方面都很像金刚狼。她被一个强大公司的幕后人物所追踪，因为她的DNA里有连接罗根的秘密，一场无休止的追捕由此展开……" }, { "name": "评分", "value": 8.5 }, { "name": "image", "value": "https://img1.doubanio.com/view/movie_poster_cover/lpst/public/p2063167557.jpg" }, { "name": "id", "value": "1792928" }] };

var bar_stack_option = {
    title: {
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
        data: ['2017-03-03', '2017-03-04', '2017-03-05', '2017-03-06', '2017-03-07', '2017-03-08', '2017-03-09', '2017-03-10', '2017-03-11', '2017-03-12', '2017-03-13', '2017-03-14', '2017-03-15', '2017-03-16', '2017-03-17', '2017-03-18', '2017-03-19', '2017-03-20', '2017-03-21', '2017-03-22', '2017-03-23', '2017-03-24', '2017-03-25', '2017-03-26', '2017-03-27', '2017-03-28']
    }],
    yAxis: [{
        name: '日票房',
        type: 'value',
    },
    {
        name: '评论数',
        type: 'value',
    }, {
        name: '百度指数',
        type: 'value',
        offset: 65
    }
    ],
    series: [
        {
            name: '日票房',
            type: 'line',
            data: ["9619.6", "12758.7", "8956.6", "3329.0", "2861.0", "4198.2", "2027.1", "2998.5", "5320.2", "3713.2", "1282.2", "1254.0", "1081.8", "1009.1", "978.2", "1760.1", "1366.1", "502.4", "459.4", "446.9", "418.8", "129.3", "288.7", "234.7", "92.0", "86.8",]
        },
        {
            name: '评论数',
            type: 'line',
            yAxisIndex: 1,
            data: [9268, 13765, 11799, 5886, 3336, 2843, 2238, 1822, 2887, 2884, 1610, 910, 702, 407, 325, 447, 499, 293, 231, 216, 195, 163, 219, 42,]
        }, {
            name: '百度指数',
            type: 'line',
            yAxisIndex: 2,
            data: [39251, 61055, 257876, 353039, 348791, 178684, 131663, 118827, 88004, 100889, 146408, 132861, 66239, 57420, 49798, 46267, 54489, 76186, 68278, 38252, 33626, 33778, 31191, 37807, 55755, 58708, 26102,]
        },
    ]
};

var word_list = [{ "text": "衰老", "weight": 0.39893711758186784 }, { "text": "悲壮", "weight": 0.3074731463487184 }, { "text": "血腥", "weight": 0.5992816929022302 }, { "text": "孤单", "weight": 0.23748638279529047 }, { "text": "心疼", "weight": 0.3900671834150495 }, { "text": "很棒", "weight": 0.19192138403659958 }, { "text": "不悲", "weight": 0.17768533248290277 }, { "text": "落魄", "weight": 0.020959146706285334 }, { "text": "孤独", "weight": 0.04364496868152813 }, { "text": "深沉", "weight": 0.11636022638698366 }, { "text": "浓烈", "weight": 0.00801730335401557 }, { "text": "苍凉", "weight": 0.32603589266939403 }, { "text": "凄凉", "weight": 0.0730035514519481 }, { "text": "特效", "weight": 0.07034755954449275 }, { "text": "厉害", "weight": 0.036223637442274394 }, { "text": "粗暴", "weight": 0.23031575248343955 }, { "text": "暴躁", "weight": 0.11544706461509065 }, { "text": "生猛", "weight": 0.447811904636378 }, { "text": "平庸", "weight": 0.3607403143826863 }, { "text": "笨拙", "weight": 0.044744229914892755 }, { "text": "简单", "weight": 0.44410026231498406 }, { "text": "愚蠢", "weight": 0.4157898131190541 }, { "text": "凶狠", "weight": 0.2715554661830934 }, { "text": "强悍", "weight": 0.15833303358930756 }, { "text": "庞大", "weight": 0.210058591094117 }, { "text": "野蛮", "weight": 0.19450574193050288 }, { "text": "衰弱", "weight": 0.1486302267268923 }, { "text": "阴郁", "weight": 0.2976373684018179 }, { "text": "模糊", "weight": 0.3161842597179753 }, { "text": "自由", "weight": 0.1177455195617234 }, { "text": "寂寞", "weight": 0.12705658330155412 }, { "text": "复刻", "weight": 0.1094400301702579 }, { "text": "年轻", "weight": 0.04171850779251435 }, { "text": "憔悴", "weight": 0.02831344346356793 }, { "text": "不乐", "weight": 0.1170864741960793 }, { "text": "电影", "weight": 0.8140988794277844 }, { "text": "教授", "weight": 0.16280104410835233 }, { "text": "漫威", "weight": 0.07970784705238292 }, { "text": "变种", "weight": 0.013823840722546514 }, { "text": "战警", "weight": 0.16235998445603178 }, { "text": "情怀", "weight": 0.1684433002457645 }, { "text": "故事", "weight": 0.05301415177013191 }, { "text": "观众", "weight": 0.013146367296932525 }, { "text": "公路", "weight": 0.17946607707990153 }, { "text": "镜头", "weight": 0.1375724935631492 }, { "text": "萝莉", "weight": 0.04948666728824443 }, { "text": "结局", "weight": 0.09861200772071192 }, { "text": "角色", "weight": 0.13146011744099606 }, { "text": "剧情", "weight": 0.00006901911819595752 }, { "text": "人物", "weight": 0.11965754882799123 }, { "text": "西部片", "weight": 0.030292710605899283 }, { "text": "漫画", "weight": 0.18395711438594003 }, { "text": "场面", "weight": 0.009934013858500408 }, { "text": "时代", "weight": 0.10445312134537905 }, { "text": "演技", "weight": 0.07078260701536265 }, { "text": "结尾", "weight": 0.0939920040127042 }, { "text": "整体", "weight": 0.07015687464803565 }, { "text": "情感", "weight": 0.023900202877749938 }, { "text": "十字架", "weight": 0.077230927383825 }, { "text": "动作", "weight": 0.1252402234375684 }, { "text": "节奏", "weight": 0.06904744326353263 }, { "text": "小女孩", "weight": 0.0020465081437410983 }, { "text": "精彩", "weight": 0.1126821751575346 }, { "text": "时间", "weight": 0.04675720543272198 }, { "text": "悲情", "weight": 0.1235766288159967 }, { "text": "暴力", "weight": 0.003462033666803549 }, { "text": "人类", "weight": 0.08800863366626659 }, { "text": "风格", "weight": 0.08544364202080387 }, { "text": "家庭", "weight": 0.10689372164465111 }, { "text": "科幻", "weight": 0.05956117272298276 }, { "text": "", "weight": null }];


var pie_option = {
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
            value: 55,
            name: '男性'
        }, {
            value: 45,
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
        name: '好评率',
        type: 'pie',
        radius: ['35%', '50%'],
        center: ['70%', '60%'],
        data: [{
            value: 49.5,
            name: '超赞'
        }, {
            value: 27.4,
            name: '好'
        }, {
            value: 12,
            name: '一般'
        }, {
            value: 7.6,
            name: '失望'
        }, {
            value: 3.5,
            name: '烂片'
        },],
        itemStyle: {
            emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
        }
    }]
};


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
        if (infor.content[i].value != null)
            $('#tab2 table').append('<tr><td>' + infor.content[i].name + '</td><td>' + infor.content[i].value + '</td></tr>')
    }
}


var tab1 = document.getElementById('tab1');

var bar_dom = document.getElementById('bar_dom');
echarts.init(bar_dom).setOption(bar_stack_option, true);

var pie_dom = document.getElementById("pie_dom");
echarts.init(pie_dom).setOption(pie_option, true);

$('#key_dom').jQCloud(word_list);

function randomData() {
    return Math.round(Math.random() * 1000);
}
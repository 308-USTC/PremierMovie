
var infor = { "content": [{ "name": "name", "value": "生化危机：终章" }, { "name": "导演", "value": "保罗·安德森," }, { "name": "编剧", "value": "保罗·安德森," }, { "name": "主演", "value": "米拉·乔沃维奇,伊恩·格雷,艾丽·拉特,鲁比·罗丝,李准基,肖恩·罗伯茨,威廉·莱维,欧文·马肯,罗拉,艾尔·安德森,密尔顿·施尔,西沃恩·霍奇森,凯文·奥托,保罗·汉普赛尔," }, { "name": "类型", "value": "动作,科幻,惊悚,恐怖," }, { "name": "上映日期", "value": "2017-02-24(中国大陆),2016-12-23(日本),2017-01-27(美国)," }, { "name": "summary", "value": "爱丽丝（米拉·乔沃维奇 Milla Jovovich 饰）在华盛顿特区被威斯克背叛后身陷险境，人类几乎要失去最后的希望。作为唯一的幸存者，也是人类对抗僵尸大军的最后防线，爱丽丝必须回到噩梦开始的地方——浣熊市，才能完成拯救世界救赎人类的正义使命。回归故事发生的起点浣熊市，爱丽丝将和昔日的朋友一起对抗僵尸和最新变种怪物，与 保护伞公司展开了一场惊心动魄的终极决战。" }, { "name": "评分", "value": 6.8 }, { "name": "image", "value": "https://img3.doubanio.com/view/movie_poster_cover/lpst/public/p2429713841.jpg" }, { "name": "id", "value": "20471852" }] }

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
        data: ['2017-02-24', '2017-02-25', '2017-02-26', '2017-02-27', '2017-02-28', '2017-03-01', '2017-03-02', '2017-03-03', '2017-03-04', '2017-03-05', '2017-03-06', '2017-03-07', '2017-03-08', '2017-03-09', '2017-03-10', '2017-03-11', '2017-03-12', '2017-03-13', '2017-03-14', '2017-03-15', '2017-03-16', '2017-03-17', '2017-03-18', '2017-03-19', '2017-03-20', '2017-03-21', '2017-03-22', '2017-03-23', '2017-03-24', '2017-03-25', '2017-03-26', '2017-03-27', '2017-03-28', '2017-03-29']
    }],
    yAxis: [{
        name: '日票房',
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
        data: ['19922.8', '23338.4', '16238.9', '5932.3', '4729.0', '3691.0', '3022.0', '3055.0', '4802.6', '3287.0', '1207.5', '1106.5', '1682.0', '878.8', '901.0', '1829.5', '1444.7', '585.2', '593.4', '539.7', '524.2', '408.2', '740.6', '615.1', '264.5', '254.5', '241.5', '223.6', '0.8', '0.1', '0.0', '0.0', '0.0', '0.0']
    }, {
        name: '评论数',
        type: 'line',
        yAxisIndex: 1,
        data: [3289, 4493, 3894, 1986, 1049, 879, 753, 659, 863, 848, 503, 376, 379, 261, 249, 362, 379, 249, 185, 278, 406, 447, 523, 547, 355, 284, 222, 193, 165, 230, 250, 165, 113, 102, 42,]
    }, {
        name: '百度指数',
        type: 'line',
        yAxisIndex: 2,
        data: [142416, 204488, 156670, 89012, 65790, 61789, 53622, 53318, 64482, 49970, 30004, 25927, 26328, 22595, 23931, 32839, 30049, 17816, 15876, 18294, 21336, 22901, 29042, 26678, 16927, 14962, 14037, 12971, 14368, 18748, 16617, 10979]

    },]
};

var word_list = [{text:'恐怖', weight: 0.025686534687605372},{text:'特效', weight: 0.018475974857804462},{text:'惊悚', weight: 0.017516822168773455},{text:'不错', weight: 0.017309999873024996},{text:'紧张', weight: 0.01622930360471706},{text:'紧凑', weight: 0.011249826753398716},{text:'挺爽', weight: 0.01117703201631337},{text:'厉害', weight: 0.010464783666016164},{text:'美好', weight: 0.010464783666016164},{text:'圆满', weight: 0.010464783666016164},{text:'勇敢', weight: 0.010464783666016164},{text:'简单', weight: 0.010464783666016164},{text:'粗暴', weight: 0.010464783666016164},{text:'恢宏', weight: 0.010464783666016164},{text:'庞大', weight: 0.010464783666016164},{text:'昏暗', weight: 0.010464783666016164},{text:'不易', weight: 0.010464783666016164},{text:'遗憾', weight: 0.010464783666016164},{text:'凌乱', weight: 0.010464783666016164},{text:'坚毅', weight: 0.010464783666016164},{text:'奇妙', weight: 0.010464783666016164},{text:'平平', weight: 0.010464783666016164},{text:'无奇', weight: 0.010464783666016164},{text:'僵硬', weight: 0.010464783666016164},{text:'愚蠢', weight: 0.010464783666016164},{text:'电影', weight: 0.01950782450046003},{text:'剧情', weight: 0.01669816518048709},{text:'丧尸', weight: 0.011312426453443552},{text:'女主', weight: 0.01070238537827623},{text:'游戏', weight: 0.0077877716740094504},{text:'动作', weight: 0.00752539615552653},{text:'故事', weight: 0.006645156895107792},{text:'情怀', weight: 0.0063148323232615974},{text:'剪辑', weight: 0.00628371839060317},{text:'结局', weight: 0.006256965186953318},{text:'镜头', weight: 0.006225405228538681},{text:'终章', weight: 0.006184213912071464},{text:'画面', weight: 0.005871690774446195},{text:'僵尸', weight: 0.005557347903334647},{text:'结尾', weight: 0.005425584336727559},{text:'主角', weight: 0.005361881417209295},{text:'彩蛋', weight: 0.005237618788925908},{text:'全程', weight: 0.0046279394805143785},{text:'人类', weight: 0.003962927225755185},{text:'经典', weight: 0.003748547704209664},{text:'激光', weight: 0.00348385678127323},{text:'音效', weight: 0.003463215985366805},{text:'女神', weight: 0.003413051410875474},{text:'节奏', weight: 0.0033539839181001034},{text:'电影院', weight: 0.005696481070628236}];

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
            value: 50.8,
            name: '超赞'
        }, {
            value: 28.0,
            name: '好'
        }, {
            value: 12.6,
            name: '一般'
        }, {
            value: 5.8,
            name: '失望'
        }, {
            value: 2.9,
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

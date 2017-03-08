var infor = { "content": [{ "name": "name", "value": "蒲公英" }, { "name": "导演", "value": "伊丹十三" }, { "name": "主演", "value": "山崎努 宫本信子 役所广司 大泷秀治 " }, { "name": "类型", "value": "喜剧" }, { "name": "制片国家/地区", "value": "日本" }, { "name": "上映日期", "value": "1985" }, { "name": "summary", "value": "单身妈妈蒲公英（宫本信子 饰）在丈夫去世后独自经营一家名为“来来轩”的拉面馆，但她的手艺实在欠佳，以致食客稀少，小店举步维艰。\n长途货运司机黑郎（山崎努 饰）和Gun（渡边谦 饰）暴雨之夜落脚来来轩，黑郎直言不讳指出了拉面存在的问题。学艺心切的蒲公英请求黑郎收她为徒，提升厨艺。出于对母子境遇的同情，黑郎对蒲公英展开魔鬼式训练，并带着她走访附近的拉面馆，学习吸取同行们的经验。在这一过程中，不断有业内的名师和热心的好友加入进来，共同协助蒲公英研制足以吸引万千食客的美味拉面……" }, { "name": "评分", "value": 8.3 }, { "name": "image", "value": "https://img3.doubanio.com/view/movie_poster_cover/lpst/public/p1967178623.jpg" }, { "name": "id", "value": "1294009" }] }

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
        data: ["09/30", "10/01", "10/02", "10/03", "10/04", "10/05", "10/06", "10/07", "10/08", "10/09", "10/10", "10/11", "10/12", "10/13", "10/14", "10/15", "10/16", "10/17", "10/18", "10/19", "10/20", "10/21", "10/22", "10/23", "10/24", "10/25", "10/26"]
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

var word_list = [{ text: '不错', weight: 0.01214946867225019 },
    { text: '惊喜', weight: 0.01104100167328003 },
    { text: '温柔', weight: 0.010586579487726865 },
    { text: '舒服', weight: 0.009989459871543498 },
    { text: '很棒', weight: 0.00963601867981032 },
    { text: '简单', weight: 0.009615077684923158 },
    { text: '有趣', weight: 0.008479205939521808 },
    { text: '幽默', weight: 0.008151498824733917 },
    { text: '风靡', weight: 0.008151498824733917 },
    { text: '坚韧', weight: 0.008151498824733917 },
    { text: '惊艳', weight: 0.007731031271960948 },
    { text: '真挚', weight: 0.007258842556802745 },
    { text: '淳厚', weight: 0.007258842556802745 },
    { text: '激动', weight: 0.007258842556802745 },
    { text: '欣喜', weight: 0.007258842556802745 },
    { text: '一星', weight: 0.007258842556802745 },
    { text: '平和', weight: 0.006871385006590386 },
    { text: '真诚', weight: 0.006871385006590386 },
    { text: '愉悦', weight: 0.006867429577780833 },
    { text: '平实', weight: 0.0066874458261044 },
    { text: '美好', weight: 0.006418253724672276 },
    { text: '诙谐', weight: 0.0061926971505094994 },
    { text: '生硬', weight: 0.006106397940045175 },
    { text: '一大', weight: 0.006106397940045175 },
    { text: '平淡', weight: 0.0060799076032955895 },
    { text: '节目', weight: 0.023575373684006983 },
    { text: '主持人', weight: 0.014337386701517055 },
    { text: '书信', weight: 0.013697394566388634 },
    { text: '读信', weight: 0.008570005345488482 },
    { text: '历史', weight: 0.008059264303472624 },
    { text: '老师', weight: 0.007786036570810163 }
]


///////////////////////////////////////////////////////////////////////

$('.product-details').html('<h5>简介：</h5><p class="intro"></p>');
for (var i = 0; i < infor.content.length; ++i) {
    if (infor.content[i].name === 'summary') {
        $('.intro').html(infor.content[i].value);
    } else if (infor.content[i].name === 'image') {
        $('.product-image-large img').attr('src', infor.content[i].value);
    } else if (infor.content[i].name === 'starname') {
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
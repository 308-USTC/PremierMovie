var fs = require('fs');
var mysql = require('mysql');
var path = require('path');

/////////////////////////////////////////////////////////////////////////////////////////////////
// 在数组中添加明星的名字，格式如下： var stars = ['舒畅', '井柏然', '张大大', '刘昊然', '谭松韵', '孙艺洲'];
var stars = ['舒畅', '井柏然', '张大大', '刘昊然', '谭松韵', '孙艺洲'];

/////////////////////////////////////////////////////////////////////////////////////////////////

for (var i = 0; i < stars.length; ++i) {
    queryStarByName(stars[i]);
}

function queryStarByName(name) {

    var connection = mysql.createConnection({
        host: '219.219.220.203',
        user: 'ouyong',
        password: 'hello',
        database: 'douban_person'
    });
    connection.connect(); //连接数据库
    connection.query('SELECT * FROM person_info WHERE person_name="' + name + '"', (err, rows, fields) => {
        if (err) {
            console.log(name, err); //throw err; 
        } else if (!rows[0]) { //查询结果为空
            fs.writeFile(path.join(__dirname, 'TV-无数据名单.txt'), '\n' + name + '\n', { flag: 'a' }, (err2) => {
                if (err2) console.log('fs writeFile err: ', err2);
            });
        } else {
            // console.log(rows[0]);
            wtjs(rows[0]);
        }
    });
    connection.end(); //关闭连接
}

function wtjs(i) {
    var infor = {
        "content": [{
            "name": "starname",
            "value": i.person_name
        }, {
            "name": "性别",
            "value": i.sex
        }, {
            "name": "星座",
            "value": i.constellation
        }, {
            "name": "出生日期",
            "value": i.birthday
        }, {
            "name": "出生地",
            "value": i.homeplace
        }, {
            "name": "职业",
            "value": i.occupation
        }, {
            "name": "summary",
            "value": i.abstract
        }, {
            "name": "image",
            "value": i.image
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
    `;
    fs.writeFile(path.join(__dirname, 'js/search/tv/' + i.person_name + '.js'), '\n var infor = ' + JSON.stringify(infor) + '\n' + loop, function(err2) {
        if (err2) console.log('fs writeFile err: ', err2);
    });
}
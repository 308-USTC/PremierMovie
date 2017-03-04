var fs = require('fs');
var superagent = require('superagent');
var mysql = require('mysql');
var path = require('path');
var xl = require('node-xlrd');
////////////////////////////////////

saveByMySql()

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

/////////////////////////////////////////////////////////////////////////////////////////////////

var ij = 0;

function saveByDouBanApi() {
    fs.readFile('movie.json', 'utf-8', (err, data) => {
        var idNameMap = JSON.parse(data);
        var timer = setInterval(() => {
            //console.log(idNameMap[i].movie_id, idNameMap[i].movie_name)
            if (ij == 40) {
                clearInterval(timer);
            } else {
                queryById(idNameMap[ij].movie_id, ij);
            }
            ij++;
        }, 3 * 1000);
    });
}

function queryById(id, i) {
    superagent.get('https://api.douban.com/v2/movie/subject/' + id)
        .end((err, res) => {
            if (err) console.log(err);
            var js = JSON.parse(res.text);
            //console.log(i, js);

            fs.writeFile(path.join(__dirname, '../js/search/movie/log.txt'), '\n' + i + ' : ' + JSON.stringify(js) + '\n', { flag: 'a' }, (err2) => {
                if (err2) console.log('fs writeFile err: ', err2);
            });

            // row cell
            if (Math.floor(i / 10) % 2 == 1) {
                ia[Math.floor(i / 10)][i % 10 + 1] = [
                    i % 10 + 1,
                    js.title,
                    ((a) => {
                        let r = '';
                        for (let i = 0; i < a.length; ++i) {
                            r += a[i].name + ' ';
                        }
                        return r;
                    })(js.casts),
                    js.countries.join(' '),
                    js.genres.join(' '),
                    js.rating.average
                ];
            } else {
                ia[Math.floor(i / 10)][i % 10 + 1] = [
                    i % 10 + 1,
                    js.title,
                    ((a) => {
                        let r = '';
                        for (let i = 0; i < a.length; ++i) {
                            r += a[i].name + ' ';
                        }
                        return r;
                    })(js.casts),
                    js.countries.join(' '),
                    js.genres.join(' '),
                    Math.floor(Math.random() * 10000),
                    Math.random() > .5 ? '↑' : '↓'
                ];
            }
            //获取单个js文件
            wtjs(js);
            //生成movie.js

            var infor = {
                "content": [{
                    "name": "name",
                    "value": ia.title
                }, {
                    "name": "导演",
                    "value": ia.directors[0].name
                }, {
                    "name": "主演",
                    "value":
                        ((a) => {
                            let r = '';
                            for (let i = 0; i < a.length; ++i) {
                                r += a[i].name + ' ';
                            }
                            return r;
                        })(ia.casts),
                }, {
                    "name": "类型",
                    "value": ia.genres.join(' ')
                }, {
                    "name": "制片国家/地区",
                    "value": ia.countries.join(' ')
                }, {
                    "name": "上映日期",
                    "value": ia.year
                }, {
                    "name": "summary",
                    "value": ia.summary.replace('©豆瓣', '')
                }, {
                    "name": "评分",
                    "value": ia.rating.average
                }, {
                    "name": "image",
                    "value": ia.images.large
                }, {
                    "name": "id",
                    "value": ia.id
                }]
            };
            //wtia(infor);
        });
}

/////////////////////////////////////////////////////////////////////////////////////////////////

function saveByMySql() {
    fs.readFile('movieList.txt', 'utf-8', (err, data) => {
        var list = data.split('\r\n\r\n');
        //console.log(list);
        list.forEach((item, index) => {
            queryByNameInMySql(item);
        })
    });
}

function queryByNameInMySql(name) {
    var connection = mysql.createConnection({
        host: '219.219.220.203',
        user: 'ouyong',
        password: 'hello',
        database: 'douban_movie'
    });
    //连接数据库
    connection.connect((err) => {
        if (err) console.log(err, 'connect :' + name);
    });

    connection.query('SELECT * FROM movie_info WHERE movie_name="' + name + '"', (err, rows, fields) => {
        if (err) {
            console.log(name, err);
        } else {
            var i = rows[0];
            if (i == undefined) {
                fs.writeFile(path.join(__dirname, '../js/search/movie/movieNull.txt'), '\n' + name + '\n', { flag: 'a' }, (err2) => {
                    if (err2) console.log('fs writeFile err: ', err2);
                });
                return;
            }
            var infor = {
                "content": [{
                        "name": "name",
                        "value": i.movie_name
                    }, {
                        "name": "导演",
                        "value": i.director
                    }, {
                        "name": "编剧",
                        "value": i.screenwriter
                    }, {
                        "name": "主演",
                        "value": i.actor
                    }, {
                        "name": "类型",
                        "value": i.type
                    },
                    /*{
                                       "name": "制片国家/地区", //数据库无此字段
                                       "value": i.countries.join(' ')
                                   },*/
                    {
                        "name": "上映日期",
                        "value": i.date
                    }, {
                        "name": "summary",
                        "value": i.abstract
                    }, {
                        "name": "评分",
                        "value": i.score
                    }, {
                        "name": "image",
                        "value": i.image
                    }, {
                        "name": "id",
                        "value": i.movie_id
                    }
                ]
            };
            wtjs(infor);
        }
    });
    connection.end(); //关闭连接
}

/////////////////////////////////////////////////////////////////////////////////////////////////

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
                li.find('span:nth-child(2)').html('<a href="searchmovie.html?' + ia[k][i][1] + '" title="点击查看：' + ia[k][i][1] + '" target="_blank">' + ia[k][i][1] + '</a>');

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
    fs.writeFile(path.join(__dirname, '../js/movie.js'), '\n var ia = ' + JSON.stringify(ia) + '\n' + loop, function(err2) {
        if (err2) console.log('fs writeFile err: ', err2);
    });
}

function wtjs(infor) {
    let xlspath = 'xls-movie/' + infor.content[0].value + '_全国_整体趋势.xls';

    xl.open(xlspath, (err, bk) => {
        // console.log('opened', path);
        if (err) { console.log(err.name, err.message); return; }
        var dates = { date: [], idx: [] };
        var shtCount = bk.sheet.count;
        for (var sIdx = 0; sIdx < shtCount; sIdx++) {
            // console.log('sheet "%d" ', sIdx);
            // console.log('  check loaded : %s', bk.sheet.loaded(sIdx));
            var sht = bk.sheets[sIdx],
                rCount = sht.row.count,
                cCount = sht.column.count;
            // console.log('  name = %s; index = %d; rowCount = %d; columnCount = %d', sht.name, sIdx, rCount, cCount);
            for (var rIdx = 1; rIdx < rCount; rIdx++) {
                dates.date.push("'" + sht.cell(rIdx, 1) + "'");
                dates.idx.push(sht.cell(rIdx, 3));
            }
            // console.log(dates);
        }

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
            data: [` + dates.date + `]
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
            data: [` + dates.idx + `]
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
            if(infor.content[i].value != null)
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
        fs.writeFile(path.join(__dirname, '../js/search/movie/' + infor.content[0].value + '.js'), '\n var infor = ' + JSON.stringify(infor) + '\n' + loop, function(err2) {
            if (err2) console.log('fs writeFile err: ', err2);
        });
    });
}
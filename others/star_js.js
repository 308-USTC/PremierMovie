let fs = require('fs');
let superagent = require('superagent');
let mysql = require('mysql');
let path = require('path');
let xl = require('node-xlrd');
////////////////////////////////////

saveByMySql();

////////////////////////////////////

var ia = [
    [
        ["排行", "明星", "媒体关注度", "商业价值", "明星标签", "热度变化", "票房号召力", "走势"],
        ["1", "舒畅", "69,273", "69,273", "影视圈 家庭剧 内地 小玉", "69,273", "265,503,948", "↓"],
    ]
];
/////////////////////////////////////////////////////////////////////////////////////////////////
var ij = 0;

function saveByDouBanApi() {
    fs.readFile('star.json', 'utf-8', (err, data) => {
        var idNameMap = JSON.parse(data);
        var timer = setInterval(() => {
            //console.log(idNameMap[i].movie_id, idNameMap[i].movie_name)
            if (ij == 10) {
                clearInterval(timer);
            } else {
                queryById(idNameMap[ij].person_id, ij);
            }
            ij++;
        }, 3 * 1000);
    });
}

function queryById(id, i) {
    superagent.get('https://api.douban.com/v2/movie/celebrity/' + id)
        .end((err, res) => {
            if (err) console.log(err);
            var js = JSON.parse(res.text);
            //console.log(i, js);

            fs.writeFile(path.join(__dirname, 'js/search/star/log.txt'), '\n' + i + ' : ' + JSON.stringify(js) + '\n', { flag: 'a' }, (err2) => {
                if (err2) console.log('fs writeFile err: ', err2);
            });

            // row cell
            ia[Math.floor(i / 10)][i % 10 + 1] = [
                i % 10 + 1,
                js.name,
                Math.floor(Math.random() * 1000000),
                Math.floor(Math.random() * 1000000),
                ((a) => {
                    let r = '';
                    for (let i = 0; i < a.length; ++i) {
                        r += a[i].subject.title + ' ';
                    }
                    return r;
                })(js.works),
                Math.floor(Math.random() * 1000000),
                Math.floor(Math.random() * 1000000),
                Math.random() > .5 ? '↑' : '↓'
            ];

            var infor = {
                "content": [{
                    "name": "name",
                    "value": i.name
                }, {
                    "name": "性别",
                    "value": i.gender
                }, {
                    "name": "作品",
                    "value":
                        ((a) => {
                            let r = '';
                            for (let i = 0; i < a.length; ++i) {
                                r += a[i].subject.title + ' ';
                            }
                            return r;
                        })(i.works),
                }, {
                    "name": "出生地区",
                    "value": i.born_place
                }, {
                    "name": "image",
                    "value": i.avatars.large
                }, {
                    "name": "id",
                    "value": i.id
                }]
            };
            //获取单个js文件
            wtjs(js);
            //生成movie.js
            wtia(ia);
        });
}

/////////////////////////////////////////////////////////////////////////////////////////////////
function saveByMySql() {
    fs.readFile('starList.txt', 'utf-8', (err, data) => {
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
        database: 'douban_person'
    });
    connection.connect((err) => {
        if (err) console.log(err, 'connect :' + name);
    }); //连接数据库
    connection.query('SELECT * FROM person_info WHERE person_name="' + name + '"', (err, rows, fields) => {
        if (err) {
            console.log(name, err); //throw err; 
        } else {
            // console.log(rows[0]);
            var i = rows[0];
            if (i == undefined) {
                fs.writeFile(path.join(__dirname, '../js/search/star/starnull.txt'), '\n' + name + '\n', { flag: 'a' }, (err2) => {
                    if (err2) console.log('fs writeFile err: ', err2);
                });
                return;
            }

            var infor = {
                "content": [{
                    "name": "name",
                    "value": i.person_name
                }, {
                    "name": "别名",
                    "value": i.chinese_name
                }, {
                    "name": "性别",
                    "value": i.sex
                }, {
                    "name": "星座",
                    "value": i.constellation
                }, {
                    "name": "职业",
                    "value": i.occupation
                }, {
                    "name": "出生日期",
                    "value": i.birthday
                }, {
                    "name": "地区",
                    "value": i.homeplace
                }, {
                    "name": "image",
                    "value": i.image
                }, {
                    "name": "summary",
                    "value": i.long_abstract || i.abstract
                }, {
                    "name": "id",
                    "value": i.id
                }]
            };

            wtjs(infor);
        }
    });
    connection.end(); //关闭连接
}

function wtia(ia) {
    let loop = `
    var str = [
        '<li><span class="t-6">排行</span><span class="t-13">明星</span><span class="t-5">媒体关注度</span><span class="t-5">商业价值</span><span class="t-10">明星标签</span><span class="t-5">热度变化</span><span class="t-5">票房号召力</span><span class="t-6">走势</span></li>'
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
                li.find('span:nth-child(2)').html('<a href="searchstar.html?' + ia[k][i][1] + '" title="点击查看：' + ia[k][i][1] + '" target="_blank">' + ia[k][i][1] + '</a>');

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
    fs.writeFile(path.join(__dirname, '../js/star.js'), '\n var ia = ' + JSON.stringify(ia) + '\n' + loop, function(err2) {
        if (err2) console.log('fs writeFile err: ', err2);
    });
}

function wtjs(infor) {

    let xlspath = 'xls-star/' + infor.content[0].value + '_全国_整体趋势.xls';

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
                data: []
            }, {
                name: '评论数',
                type: 'line',
                yAxisIndex: 1,
                data: []
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
        fs.writeFile(path.join(__dirname, '../js/search/star/' + infor.content[0].value + '.js'), '\n var infor = ' + JSON.stringify(infor) + '\n' + loop, function(err2) {
            if (err2) console.log('fs writeFile err: ', err2);
        });
    });
}
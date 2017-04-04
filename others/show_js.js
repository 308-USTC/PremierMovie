var fs = require('fs');
var superagent = require('superagent');
var mysql = require('mysql');
var path = require('path');
let xl = require('node-xlrd');
////////////////////////////////////

var ia = [
    [
        ["排行", "片名", "主持人/嘉宾", "类型", "播放量", "同比上期"]
    ],
    [
        ["排行", "片名", "主持人/嘉宾", "类型", "评论数", "同比上期"]
    ],
    [
        ["排行", "片名", "主持人/嘉宾", "类型", "评分"]
    ]
];

/////////////////////////////////////////////////////////////////////////////////////////////////
var ij = 0;
var stars = [];
fs.readFile('show.json', 'utf-8', (err, data) => {
    var idNameMap = JSON.parse(data);
    console.log(idNameMap.length);

    var timer = setInterval(() => {
        if (ij >= 29) {
            clearInterval(timer);
        } else {
            queryById(idNameMap[ij].movie_id, ij);
        }
        ij++;
    }, 3 * 1000);
});

function queryById(id, i) {
    superagent.get('https://api.douban.com/v2/movie/subject/' + id)
        .end((err, res) => {
            if (err) console.log(err);
            var js = JSON.parse(res.text);
            // console.log(i, js);
            // fs.writeFile(path.join(__dirname, 'showlog.txt'), '\n' + i + ' : ' + JSON.stringify(js) + '\n', { flag: 'a' }, (err2) => {
            //     if (err2) console.log('fs writeFile err: ', err2);
            // });

            if (Math.floor(i / 10) % 2 == 2) {
                ia[Math.floor(i / 10)][i % 10 + 1] = [
                    i % 10 + 1,
                    js.title,
                    js.summary,
                    js.genres.join(' '),
                    js.rating.average,
                    Math.random() > .5 ? '↑' : '↓'
                ];
            } else {
                ia[Math.floor(i / 10)][i % 10 + 1] = [
                    i % 10 + 1,
                    js.title,
                    js.summary,
                    js.genres.join(' '),
                    js.comments_count,
                    Math.random() > .5 ? '↑' : '↓'
                ];
            }

            i = js;
            var infor = {
                "content": [{
                    "name": "name",
                    "value": i.title.replace(' ', '')
                }, {
                    "name": "主演",
                    "value":
                        ((a) => {
                            let r = '';
                            for (let i = 0; i < a.length; ++i) {
                                r += a[i].name + ' ';
                            }
                            return r;
                        })(i.casts),
                }, {
                    "name": "类型",
                    "value": i.genres.join(' ')
                }, {
                    "name": "国家/地区",
                    "value": i.countries.join(' ')
                }, {
                    "name": "开播日期",
                    "value": i.year
                }, {
                    "name": "summary",
                    "value": i.summary
                }, {
                    "name": "评分",
                    "value": i.rating.average
                }, {
                    "name": "image",
                    "value": i.images.large
                }, {
                    "name": "id",
                    "value": i.id
                }]
            };

            //获取单个js文件
            wtjs(infor);
            //生成movie.js
            wtia(ia);
        });
}


/////////////////////////////////////////////////////////////////////////////////////////////////

function queryByNameInMySql(name) {
    var connection = mysql.createConnection({
        host: '219.219.220.203',
        user: 'ouyong',
        password: 'hello',
        database: 'douban_movie'
    });
    connection.connect(); //连接数据库
    connection.query('SELECT * FROM movie_info WHERE movie_name="' + name + '"', (err, rows, fields) => {
        if (err) {
            console.log(name, err); //throw err; 
        } else if (!rows[0]) { //查询结果为空
            fs.writeFile(path.join(__dirname, '无数据电影名单.txt'), '\n' + name + '\n', { flag: 'a' }, (err2) => {
                if (err2) console.log('fs writeFile err: ', err2);
            });
        } else {
            // console.log(rows[0]);
            wtjs(rows[0]);
        }
    });
    connection.end(); //关闭连接
}

function wtia(ia) {
    let loop = `

var title = $('#sec-title');
var chart = $('#chart-data');
// 替换标题和时间
title.html('<span>综艺</span>排行榜TOP10').parent().append('<p> 更新时间: 2017/03/15 </p>');
// 替换tab 
chart.html('<div class="charts-kinds"><a href="javascript:;" class="j-tab selected">综艺热播榜</a><a href="javascript:;" class="j-tab">综艺热议榜</a><a href="javascript:;" class="j-tab">综艺好评榜</a></div>');

Handlebars.registerHelper('selected', function(idx, opt){
    if(idx === 0) return 'selected';
});

Handlebars.registerHelper('rank', function(idx, opt){
    if(idx === '排行') return idx;
    if(idx <= 3) return '<i class="rank-T3">'+idx+'</i>';
    return '<i class="rank-other">'+idx+'</i>';
});

var lastIdx;
Handlebars.registerHelper('index', function(idx, opt){
    if( !parseInt(idx) ) {
        lastIdx = 100000;
        return idx;
    }
    if(idx < 10) return idx;
    
    lastIdx = lastIdx - Math.floor( Math.random()*lastIdx/2 ) ;
    return lastIdx;
});

Handlebars.registerHelper('status', function(val, opt){
    if(!val) return;
    if(!parseInt(val)) return val;
    if(val > 0) return '<span class="up"> + '+ Math.floor(Math.random()*1000) +'</span>';
    return '<span class="down"> - '+  Math.floor(Math.random()*1000)  +'</span>'
});

var olstr ='<style>.t-2{width:140px}.t-3{width:320px}.t-4{width:110px}.t-5{text-align:center}.t-6{width:60px}@media(max-width:767px){.charts-content.t-4,.charts-content.t-3{display:none}}</style>{{#each this}}<ol class="chart-list j-for {{#selected @index}}{{/selected}}">{{#with this}}{{#each this}}<li><span class="t-1">{{#rank this.[0]}}{{/rank}} </span><span class="t-2"><a href="search.html?show/{{ this.[1] }}"title="点击查看：{{ this.[1] }}"target="_blank">{{this.[1]}}</a></span><span class="t-3">{{this.[2]}}</span><span class="t-4">{{this.[3]}}</span><span class="t-5 text-center">{{#index this.[4]}}{{/index}}</span><span class="t-6 text-center">{{#status this.[5]}}{{/status}} </span></li>{{/each}}{{/with}}</ol>{{/each}}'


var template = Handlebars.compile(olstr);
var allstr = template(ia);
chart.append(allstr);
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

$('.j-tab').hover(function() {
    if ($(this).hasClass('selected')) {
        return false;
    }
    $(this).siblings().removeClass('selected').end().addClass('selected');
    $('.j-for').removeClass('selected').eq($(this).index()).addClass('selected');
});

    `
    fs.writeFile(path.join(__dirname, '../js/show.js'), '\n var ia = ' + JSON.stringify(ia) + '\n' + loop, function(err2) {
        if (err2) console.log('fs writeFile err: ', err2);
    });
}

function wtjs(infor) {
    let name = infor.content[0].value; // 生成单个js文件的关键为名字
    let datas = { date: [], trend: [], comnum: [], idx: [], keywords: [] }; // 所有数据详细, 分别为日期, 热度变化, 评论数, 百度指数, 热词键值对
    let xlsName = name;
    // 读取关键字文件, 检查文件是否存在
    if (fs.existsSync(path.join(__dirname, 'keywords-show/' + name + 'keywords.txt'))) {

    } else {
        console.log(name + ' keywords文件未找到');
        xlsName = '向往的生活'; // 暂时使用 向往的生活 代替
    }
    let kws = fs.readFileSync(path.join(__dirname, 'keywords-show/' + xlsName + 'keywords.txt'), 'utf-8');
    let list = kws.split('\n');
    list.forEach((item, index) => {
        let kw = item.split(',');
        datas.keywords.push({
            text: kw[0],
            weight: kw[1] * (Math.random() * 50) //随机扩大1-50倍
        });
    });

    //打开xls文件, 并将文件读入bk
    xl.open('xls-show/' + name + '_全国_整体趋势.xls', (err, bk) => {
        if (err) {
            console.log(err.name, err.message);
        } else {
            let shtCount = bk.sheet.count; // excle表单数量
            for (let sIdx = 0; sIdx < shtCount; sIdx++) {
                let sht = bk.sheets[sIdx], // 获取表单
                    rCount = sht.row.count,
                    cCount = sht.column.count;
                for (let rIdx = 1; rIdx < rCount; rIdx++) {
                    datas.date.push("'" + sht.cell(rIdx, 1) + "'"); //将日期以字符串填入数组
                    datas.idx.push(sht.cell(rIdx, 3)); // 将百度指数填入
                }
            }
        }
        let loop = ` 
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
                data: [` + datas.date + `]
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
                data: [` + datas.trend + `]
            }, {
                name: '评论数',
                type: 'line',
                yAxisIndex: 1,
                data: [` + datas.comnum + `]
            }, {
                name: '百度指数',
                type: 'line',
                yAxisIndex: 2,
                data: [` + datas.idx + `]
            }, ]
        };

        var word_list = ` + JSON.stringify(datas.keywords) + `;


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

        function randomData() {
            return Math.round(Math.random() * 1000);
        }
        `;
        fs.writeFile(path.join(__dirname, '../js/search/show/' + name + '.js'), '\n var infor = ' + JSON.stringify(infor) + '\n' + loop, function(err2) {
            if (err2) console.log('fs writeFile err: ', err2);
        });
    });
}

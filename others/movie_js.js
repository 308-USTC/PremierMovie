let fs = require('fs');
let superagent = require('superagent');
let mysql = require('mysql');
let path = require('path');
let xl = require('node-xlrd');
////////////////////////////////////


////////////////////////////////////
let ia = [
    [
        ["排行", "片名", "主演", "导演", "类型", "影响力指数", "同比上期"]
    ],
    [
        ["排行", "片名", "主演", "导演", "类型", "评分"]
    ],
    [
        ["排行", "片名", "主演", "导演", "类型", "评论数", "同比上期"]
    ],
    [
        ["排行", "片名", "主演", "导演", "类型", "评分", "票房"]
    ],
];

/////////////////////////////////////////////////////////////////////////////////////////////////

saveByMySql('movie');

function saveByMySql() {
    fs.readFile('movieList.txt', 'utf-8', (err, data) => {
        let list = data.split('\r\n\r\n'); //将所有电影名单分割
        let i = 0;
        // console.log(list);
        list.forEach((item, index) => {
            if (item && i <= 39) { //当item存在时发起请求,同时不能使用index,否则个数会出错
                queryByNameInMySql(item.replace(/(^\s*)|(\s*$)/g, ''), i++); //利用reg trim
            }
        });
    });
}

// queryByNameInMySql('朗读者', 0);
// 通过数据库获取数据, 传入名称和在排行榜中的位置(即从上到下的索引)
function queryByNameInMySql(name, idx) {
    let connection = mysql.createConnection({
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
            let i = rows[0];
            if (i == undefined) {
                fs.writeFile(path.join(__dirname, 'movieNull.txt'), '\n' + name + '\n', { flag: 'a' }, (err2) => {
                    if (err2) console.log('fs writeFile err: ', err2);
                });
                i = {};
                i.movie_name = name; // 片名
                i.actor = i.director = i.type = i.score = '';
            }

            // infor用于生成单个js, 无票房数据
            let infor = {
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
                }, {
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
                }]
            };
            // console.log(infor);
            wtjs(infor);

            // 按照位置
            if (Math.floor(idx / 10) % 2 == 1) {
                // ["排行", "片名", "主演", "导演", "类型", "评分"]
                ia[Math.floor(idx / 10)][idx % 10 + 1] = [
                    idx % 10 + 1, // 排名
                    i.movie_name, // 片名
                    i.actor, // 主演
                    i.director, // 导演
                    i.type, // 类型
                    i.score // 评分
                ];
            } else {
                // ["排行", "片名", "主演", "导演", "类型", "指数", "走势"]
                ia[Math.floor(idx / 10)][idx % 10 + 1] = [
                    idx % 10 + 1, // 排名
                    i.movie_name, // 片名
                    i.actor, // 主演
                    i.director, // 导演
                    i.type, // 类型
                    Math.floor(Math.random() * 10000), // 指数
                    Math.random() > .5 ? '↑' : '↓' //走势
                ];
            }
            // console.log(ia);
            wtia(ia);
        }
    });
    connection.end(); //关闭连接
}

/////////////////////////////////////////////////////////////////////////////////////////////////
// 生成movie.html 电影排行榜的函数, 传入ia为2元数组,内含每一个榜单的具体数据
function wtia(ia) {
    let loop = `
    var str = [
        '<li><span class="t-1">排行</span><span class="t-2">片名</span><span class="t-10">主演</span><span class="t-4">导演</span><span class="t-4">类型</span><span class="t-5">昨日新增</span><span class="t-6">走势</span></li>',
        '<li><span class="t-1">排行</span><span class="t-2">片名</span><span class="t-10">主演</span><span class="t-4">导演</span><span class="t-4">类型</span><span class="t-6">评分</span></li>',
        '<li><span class="t-1">排行</span><span class="t-2">片名</span><span class="t-10">主演</span><span class="t-4">导演</span><span class="t-4">类型</span><span class="t-5">昨日新增</span><span class="t-6">走势</span></li>',
        '<li><span class="t-1">排行</span><span class="t-2">片名</span><span class="t-10">主演</span><span class="t-4">导演</span><span class="t-4">类型</span><span class="t-6">评分</span></li>'
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
    $('.j-tab').hover(function() {
        if ($(this).hasClass('selected'))
            return false;

        $(this).siblings().removeClass('selected').end().addClass('selected');
        $('.j-for').removeClass('selected').eq($(this).index()).addClass('selected');
    });
    `
    fs.writeFile(path.join(__dirname, '../js/movie.js'), '\n var ia = ' + JSON.stringify(ia) + '\n' + loop, function(err2) {
        if (err2) console.log('fs writeFile err: ', err2);
    });
}
// 生成js/search/movie/*.js的函数, 传入infor为json对象, 内含生成电影详情的具体数据
function wtjs(infor) {
    let name = infor.content[0].value; // 生成单个js文件的关键为名字
    let datas = { date: [], trend: [], comnum: [], idx: [], keywords: [] }; // 所有数据详细, 分别为日期, 热度变化, 评论数, 百度指数, 热词键值对
    let xlsName = name;
    // 读取关键字文件, 检查文件是否存在
    if (fs.existsSync(path.join(__dirname, 'keywords-movie/' + name + 'keywords.txt'))) {

    } else {
        console.log(name + ' keywords文件未找到');
        xlsName = '推销员'; // 暂时使用 推销员 代替
    }
    let kws = fs.readFileSync(path.join(__dirname, 'keywords-movie/' + xlsName + 'keywords.txt'), 'utf-8');
    let list = kws.split('\n');
    list.forEach((item, index) => {
        let kw = item.split(',');
        datas.keywords.push({
            text: kw[0],
            weight: kw[1] * (Math.random() * 50) //随机扩大1-50倍
        });
    });

    //打开xls文件, 并将文件读入bk
    xl.open('xls-movie/' + name + '_全国_整体趋势.xls', (err, bk) => {
        if (err) { console.log(err.name, err.message); } else {
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
        fs.writeFile(path.join(__dirname, '../js/search/movie/' + name + '.js'), '\n var infor = ' + JSON.stringify(infor) + '\n' + loop, function(err2) {
            if (err2) console.log('fs writeFile err: ', err2);
        });
    });
}
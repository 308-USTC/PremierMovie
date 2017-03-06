// 此目录为备用代码段目录, 暂时未使用的函数, 设置 等代码都会放在此目录下
return false; //防止被误调,直接返回false

/////////////////////////////////////////////////////////////////////////////////////////////////
// 此函数从豆瓣开放api获取数据, 数据不完整, 未修改更新, 不建议使用

var ij = 0;
// 需要从 movie.json中读取豆瓣id, 异步从豆瓣获取数据, 3s一次请求
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

// 详细页面的饼状图配置
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

var pie2_dom = document.createElement('div');
tab1.appendChild(pie2_dom);
var pie2_Chart = echarts.init(pie2_dom);
pie2_Chart.setOption(pie2_option, true);

///////////////////////////////////////////////////////////////////////

// 电影地区字段
{
    "name": "制片国家/地区", //数据库无此字段
    "value": i.countries.join(' ')
},
var cheerio = require('cheerio');
var fs = require('fs');
var path = require('path');
var superagent = require('superagent');

scrap();

function scrap() {
    superagent.get('http://www.filmboard.cn/tv.html')
        .set('Accept', 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8')
        .end((err, res) => {
            // console.log('restext: ' + res.text);
            let $ = cheerio.load(res.text);
            let ols = $(res.text).find('ol.chart-list');
            let ia = [];
            for (let i = 0; i < ols.length; ++i) {
                let lis = $(ols[i]).find('li');
                let ja = [];
                for (let j = 0; j < lis.length; ++j) {
                    let spans = $(lis[j]).find('span');
                    let ka = [];
                    for (let k = 0; k < spans.length; ++k) {
                        ka.push($(spans[k]).text().replace(/[\r\n\t]/g, ' ').replace(/\s+/g, ' '));
                    }
                    ja.push(ka);
                }
                ia.push(ja);
            }
            let loop = `

var str = ['<li><span class="t-1">排行</span><span class="t-2">片名</span><span class="t-10">主演</span><span class="t-4">地区</span><span class="t-4">类型</span><span class="t-5">昨日新增</span><span class="t-6">走势</span></li>','<li><span class="t-1">排行</span><span class="t-2">关键字</span><span class="t-3">上榜天数</span><span class="t-4">最高排名</span> <span class="t-5">昨日新增</span><span class="t-6">走势</span></li>','<li><span class="t-1">排行</span><span class="t-2">片名</span><span class="t-3">主演</span><span class="t-4">地区</span><span class="t-5">类型</span><span class="t-6">评分</span></li>'
];

for (var k = 0; k < ia.length; ++k) {
    var listr = str[k];
    for (var i = 0; i < ia[k].length; ++i) {
        var lilen = ia[k][0].length;
        if (i == 0) {
            var li0 = $(listr);
            for (var j = 0; j < lilen; ++j)
                li0.find('span:nth-child(' + j + 1 + ')').html(ia[k][0][j]);

            $($('.chart-list')[k]).html(li0);
        } else {
            var li = $(listr);
            li.find('span:first-child').html('<i class="rank-' + ((ia[k][i][0] > 3) ? 'other' : 'T3') + '">' + ia[k][i][0] + '</i>');
            li.find('span:nth-child(2)').html('<a href="search.html?' + ia[k][i][1] + '" title="点击查看：' + ia[k][i][1] + '" target="_blank">' + ia[k][i][1] + '</a>');

            for (var j = 2; j < lilen; ++j)
                li.find('span:nth-child(' + (j + 1) + ')').html(ia[k][i][j]);

            if (k != 2)
                li.find('span:last-child').addClass((li.find('span:last-child').text() == '↑') ? 'up' : 'down');

            $($('.chart-list')[k]).append(li);
        }
    }
}
            `;
            fs.writeFile(path.join(__dirname, 'js/tv.js'), '\n var ia =' + JSON.stringify(ia) + '\n' + loop, function(err2) {
                if (err2) console.log('fs writeFile err: ', err2);
            });
        });
}
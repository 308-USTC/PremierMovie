
 var infor = {"content":[{"name":"name","value":"生化危机6"},{"name":"导演","value":"保罗·安德森,"},{"name":"编剧","value":"保罗·安德森,"},{"name":"主演","value":"米拉·乔沃维奇,伊恩·格雷,艾丽·拉特,鲁比·罗丝,李准基,肖恩·罗伯茨,威廉·莱维,欧文·马肯,罗拉,艾尔·安德森,密尔顿·施尔,西沃恩·霍奇森,凯文·奥托,保罗·汉普赛尔,"},{"name":"类型","value":"动作,科幻,惊悚,恐怖,"},{"name":"上映日期","value":"2017-02-24(中国大陆),2016-12-23(日本),2017-01-27(美国),"},{"name":"summary","value":"爱丽丝在华盛顿特区被威斯克背叛后身陷险境，人类几乎要失去最后的希望。作为唯一的幸存者，也是人类对抗僵尸大军的最后防线，爱丽丝必须回到噩梦开始的地方——浣熊市，才能完成拯救世界救赎人类的正义使命。回归故事发生的起点浣熊市，爱丽丝将和昔日的朋友一起对抗僵尸和最新变种怪物，与保护伞公司展开了一场惊心动魄的终极决战。"},{"name":"评分","value":6.9},{"name":"image","value":"https://img3.doubanio.com/view/movie_poster_cover/lpst/public/p2429713841.jpg"},{"name":"id","value":"20471852"}]}
 
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
                data: ['2017-01-20','2017-01-21','2017-01-22','2017-01-23','2017-01-24','2017-01-25','2017-01-27','2017-01-28','2017-01-29','2017-01-30','2017-01-31','2017-02-01','2017-02-02','2017-02-03','2017-02-04','2017-02-05','2017-02-06','2017-02-07','2017-02-08','2017-02-09','2017-02-10','2017-02-11','2017-02-12','2017-02-13','2017-02-14','2017-02-15','2017-02-16','2017-02-17','2017-02-18','2017-02-19','2017-02-20','2017-02-21','2017-02-22','2017-02-23','2017-02-24','2017-02-25','2017-02-26','2017-02-27','2017-02-28','2017-03-01','2017-03-02','2017-03-03','2017-03-04','2017-03-05']
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
                data: [17136,18277,19973,20015,23705,27646,26554,35618,33489,31940,34072,37498,39934,43404,46674,45584,45852,48074,46893,42105,45315,43513,39012,35029,31708,34960,37745,44358,49934,46159,6,43094,49077,65790,191237,222010,183029,96358,72186,62956,54410,61977,83688,71235]
            }, ]
        };

        var word_list = [];


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
        
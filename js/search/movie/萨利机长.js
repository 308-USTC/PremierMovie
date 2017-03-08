
 var infor = {"content":[{"name":"name","value":"萨利机长"},{"name":"导演","value":"克林特·伊斯特伍德,"},{"name":"编剧","value":"托德·考马尔尼基,切斯利·舒伦伯格,杰弗里·札斯洛,"},{"name":"主演","value":"汤姆·汉克斯,艾伦·艾克哈特,劳拉·琳妮,杰瑞·费拉拉,安娜·冈,奥图姆·瑞瑟,霍特·麦克卡兰尼,迈克·奥麦利,杰米·谢尔丹,安·库萨克,莫莉·哈根,马克斯·阿德勒,萨姆·亨廷顿,韦恩·巴斯楚普,维勒莉·玛哈菲,"},{"name":"类型","value":"剧情,传记,灾难,"},{"name":"上映日期","value":"2016-12-09(中国大陆),2016-09-09(美国),"},{"name":"summary","value":"影片根据真实事件改编，2009年1月15日，萨利（汤姆·汉克斯 Tom Hanks 饰）在全美航空1549号班担任机长，飞机起飞两分钟后遭到飞鸟攻击，两架发动机全部熄火，萨利决定在哈德逊河上迫降，155人全数生还。但之后的调查显示他做了错误的抉择，认为大可选择返回拉瓜地亚机场。机内到底发生了什么呢？"},{"name":"评分","value":8.3},{"name":"image","value":"https://img3.doubanio.com/view/movie_poster_cover/lpst/public/p2403319543.jpg"},{"name":"id","value":"26416603"}]}
 
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
                data: ['2017-01-20','2017-01-21','2017-01-22','2017-01-23','2017-01-24','2017-01-25','2017-01-26','2017-01-27','2017-01-28','2017-01-29','2017-01-30','2017-01-31','2017-02-01','2017-02-02','2017-02-03','2017-02-04','2017-02-05','2017-02-06','2017-02-07','2017-02-08','2017-02-09','2017-02-10','2017-02-11','2017-02-12','2017-02-13','2017-02-14','2017-02-15','2017-02-16','2017-02-17','2017-02-18','2017-02-19','2017-02-20','2017-02-21','2017-02-22','2017-02-23','2017-02-24','2017-02-25','2017-02-26','2017-02-27','2017-02-28','2017-03-01','2017-03-02','2017-03-03','2017-03-04','2017-03-05']
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
                data: [4327,4955,4139,3830,3892,4292,5547,10072,16128,15492,12733,11358,9982,9482,0,8601,10422,7893,0,6813,6036,6099,6659,6362,4477,3944,3842,3666,4014,4851,4290,3508,4526,3855,3855,3426,3954,4716,3422,3200,3172,2787,2857,3669,3595]
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
        
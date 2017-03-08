
 var infor = {"content":[{"name":"name","value":"极限特工"},{"name":"导演","value":"罗伯·科恩,"},{"name":"编剧","value":"里奇·威尔克斯,"},{"name":"主演","value":"范·迪塞尔,艾莎·阿基多,马尔顿·索克斯,塞缪尔·杰克逊,Michael Roof,里奇·穆勒,维尔内尔·达赫,Petr Jákl,Jan Pavel Filipensky,汤姆·埃沃雷特,丹尼·特雷霍,托马斯·伊安·格里菲斯,伊芙,莱拉·阿尔切里,威廉·霍普,"},{"name":"类型","value":"动作,犯罪,冒险,"},{"name":"上映日期","value":"2002-08-09(美国),"},{"name":"summary","value":"克桑德（范•迪塞尔 Vin Diesel 饰）是极限运动界的明星，但他离经叛道，总是以他的身手对社会上那些败类名流发出挑战，当地警方对他也经常无可奈何。特工头子奥古斯塔斯看上了克桑德，于是派人将他抓了回来，说服他前往捷克进行一项危险而艰巨的任务。捷克的地下犯罪组织头子尤里（马尔顿•索克斯 Marton Csokas 饰）正在进行一项疯狂的计划，他抓走了很多前苏联的科学家，利用他们研究一种威力无比的武器——毒气弹。他企图利用即将研制成功的武器引起世界大战，进而达到他统治世界的目的。克桑德以走私汽车贩子的身份前往捷克接近了尤里的组织，一场惊心动魄的行动展开了！"},{"name":"评分","value":7.3},{"name":"image","value":"https://img1.doubanio.com/view/movie_poster_cover/lpst/public/p972392728.jpg"},{"name":"id","value":"1306737"}]}
 
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
                data: [3645,3832,4653,4479,4726,4072,3520,3006,14838,17733,11847,14648,15645,17219,24504,28156,34167,46874,53533,76409,113070,240071,227584,208498,150545,143209,109718,70169,72747,86708,78303,47169,40006,35608,31961,30797,35157,30371,20436,17154,16156,14574,14046,16442,15328]
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
        
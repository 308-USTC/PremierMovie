
 var infor = {"content":[{"name":"name","value":"驴得水"},{"name":"导演","value":"周申,刘露,"},{"name":"编剧","value":"周申,刘露,"},{"name":"主演","value":"任素汐,大力,刘帅良,裴魁山,阿如那,韩彦博,卜冠今,王堃,高阳,苏千越,查尔斯·亚瑟,王峰,"},{"name":"类型","value":"剧情,喜剧,"},{"name":"上映日期","value":"2016-10-28(中国大陆),"},{"name":"summary","value":"一群“品行不端”却怀揣教育梦想的大学教师，从大城市来到偏远乡村开办了一所小学校。学校待遇惨淡、生活艰苦，但老师们都自得其乐，每天嘻嘻哈哈打成一片。然而教育部特派员要来突击检查的消息打破了安宁，因为学校有一位“驴得水老师”隐藏着不可告人的秘密。就在所有人都担心丑事即将败露的时候，一个神奇天才的出现拯救了大家，然而谁能料到真正的麻烦才刚刚开始……"},{"name":"评分","value":8.3},{"name":"image","value":"https://img3.doubanio.com/view/movie_poster_cover/lpst/public/p2393044761.jpg"},{"name":"id","value":"25921812"}]}
 
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
                data: [21192,23032,21523,20609,19754,21472,21071,13856,24874,26454,25695,25524,25648,25569,24427,23714,25560,21127,20770,20041,18645,17906,17222,16988,13545,30445,36637,37252,46883,50556,44420,30721,29272,29378,27573,26912,30551,31931,22309,18849,18645,18753,19200,23185,24949]
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
        
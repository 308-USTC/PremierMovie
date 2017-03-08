
 var infor = {"content":[{"name":"name","value":"乐高蝙蝠侠大电影"},{"name":"导演","value":"克里斯·麦凯,"},{"name":"编剧","value":"赛斯·格雷厄姆-史密斯,克里斯·麦克纳,埃里克·萨默斯,贾里德·斯特恩,约翰·惠廷顿,鲍勃·凯恩,比尔·芬格,杰里·西格尔,乔·舒斯特,"},{"name":"主演","value":"威尔·阿奈特,罗莎里奥·道森,拉尔夫·费因斯,迈克尔·塞拉,扎克·加利凡纳基斯,珍妮·斯蕾特,玛丽亚·凯莉,查宁·塔图姆,乔纳·希尔,亚当·德维尼,柯南·奥布莱恩,杰森·曼兹沃克斯,艾迪·伊扎德,赛斯·格林,佐伊·克罗维兹,凯特 米库契,瑞琪·琳德赫姆,杰梅奈·克莱门特,艾丽·坎伯尔,"},{"name":"类型","value":"喜剧,动作,动画,冒险,"},{"name":"上映日期","value":"2017-03-03(中国大陆),2017-02-01(巴黎-首映),2017-02-10(美国),"},{"name":"summary","value":"蝙蝠侠（威尔·阿奈特 配音）一边要阻止小丑（扎克·加利费安纳基斯 配音）犯罪，一边要抚养罗宾长大（迈克尔·塞拉 配音），而且，为了保护哥谭市的安全，蝙蝠侠不得不从一个独行侠，变成善于“团队合作”的城市警察。"},{"name":"评分","value":8.3},{"name":"image","value":"https://img3.doubanio.com/view/movie_poster_cover/lpst/public/p2417949761.jpg"},{"name":"id","value":"26145033"}]}
 
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
                data: [654,659,652,681,4563,45056,28925,5926,7554,11168,4905,5968,6006,7068,11566,3369,4604,5203,4899,4857,9329,6990,10576,7212,6495,12055,9247,8755,7879,6785,6140,8825,6370,14603,8062,12742,7484,0,10887,14441,22969,38056,120892,224828,65186]
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
        
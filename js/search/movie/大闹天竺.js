
 var infor = {"content":[{"name":"name","value":"大闹天竺"},{"name":"导演","value":"王宝强,"},{"name":"编剧","value":"束焕,丁丁,"},{"name":"主演","value":"王宝强,白客,岳云鹏,柳岩,黄渤,林永健,马浴柯,陈佩斯,朱时茂,王祖蓝,刘昊然,"},{"name":"类型","value":"喜剧,动作,冒险,"},{"name":"上映日期","value":"2017-01-28(中国大陆),"},{"name":"summary","value":"盛唐集团总裁唐宗突然离世并留下遗训,让他的儿子唐森（白客 饰）在穷小子武空（王宝强 饰）的陪同下前往印度寻找遗嘱。在印度巧遇自恋臭美却又忠诚的朱天鹏（岳云鹏 饰）,以及美丽性感却深藏秘密的美女吴静（柳岩 饰）,四人兜兜转转竟结为同盟,而最令四人不解的是为何这次取遗嘱之旅凶险重重,危机四伏,并且遗嘱之所以放在印度，更是隐藏着秘密。"},{"name":"评分","value":3.9},{"name":"image","value":"https://img3.doubanio.com/view/movie_poster_cover/lpst/public/p2408307430.jpg"},{"name":"id","value":"26389696"}]}
 
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
                data: [21957,19882,21587,20552,22377,25296,28781,42459,356518,350888,265301,218733,185347,162124,151384,126009,112232,89594,78459,79992,64737,58437,48258,41609,34652,33396,31862,30473,29709,31627,35949,27536,24267,21734,20079,20281,22854,21473,15590,15131,16293,15936,16880,20437,21188]
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
        

 var infor = {"content":[{"name":"name","value":"七月与安生"},{"name":"导演","value":"曾国祥,"},{"name":"编剧","value":"林咏琛,李媛,许伊萌,吴楠,安妮宝贝,"},{"name":"主演","value":"周冬雨,马思纯,李程彬,李萍,蔡纲,蒙亭宜,沙全泽,姚欣言,李昊芳,蒋亭轩,"},{"name":"类型","value":"剧情,爱情,"},{"name":"上映日期","value":"2016-09-14(中国大陆),2016-10-27(香港),"},{"name":"summary","value":"七月（马思纯 饰）和安生（周冬雨 饰）的第一次相识在十三岁，她们一个是特立独行飞扬跋扈的“野孩子”，一个是单纯温婉循规蹈矩的“乖乖女”，从那一年开始，七月和安生几乎形影不离，她是她的光，她是她的影子，直到某一天，一位名为苏家明（李程彬 饰）的少年出现在了七月的身边，七月恋爱了。安生决定前往北京讨生活，临别之前，七月意外的发现苏家明贴身带着的玉佩，竟然出现在了安生的衣领里。安生走了，七月和苏家明的恋情持续着，他们考入了同一所大学，约定一毕业就结婚。可是，事情并没有像七月所想象的那样发展，而她和苏家明之间的关系，亦因为安生的归来而产生了新的变数。"},{"name":"评分","value":7.6},{"name":"image","value":"https://img3.doubanio.com/view/movie_poster_cover/lpst/public/p2378140502.jpg"},{"name":"id","value":"25827935"}]}
 
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
                data: [22371,23929,21925,20540,19966,20294,18492,12215,21218,21196,21784,20061,20127,18056,18178,17584,16223,17059,24121,24913,20041,16666,15182,13672,10299,9097,9721,9565,9385,10635,10126,8184,9630,9615,8153,7979,10886,9503,6336,5845,5954,7914,8366,9763,9868]
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
        
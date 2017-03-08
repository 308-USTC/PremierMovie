
 var infor = {"content":[{"name":"name","value":"罗曼蒂克消亡史"},{"name":"导演","value":"程耳"},{"name":"编剧","value":"程耳"},{"name":"主演","value":null},{"name":"类型","value":"剧情,动作,悬疑,"},{"name":"上映日期","value":"2016-12-16(中国大陆)"},{"name":"summary","value":"他一直拖到一九四九年五月初才坐上去香港的轮船，算得上真正的末班车。没有人知道他在拖什么或等待什么，我想他自己也未必知道，不过是下意识的拖延。不久他就死在香港，死前再没有值得记述的事件或说过的话，他基本没再说话，这没什么可奇怪的，一切都不值一提，他终于走向自己的沉默。上世纪30年代的上海，叱咤风云的帮派大佬，不甘寂寞的交际花，说着地道上海话的日本妹夫，只收交通费的杀手，被冷落却忠诚的姨太太，外表光鲜的电影皇后，深宅大院里深不可测的管家，偶尔偷腥的电影皇帝，荷尔蒙满溢大脑的帮派小弟，一心想要破处的处男，善良的妓女，随波逐流的明星丈夫，投靠日本人的帮派二哥，日理万机却抽空恋爱的戴先生。战争之下，繁华落尽。帮派大佬逃亡香港，交际花不知所踪，日本妹夫死在上海，电影皇后被丈夫抛弃，处男遇上妓女，姨太太杀死二哥。战争惨烈，战争终于结束。他轻易选择沉默，因为伤口..."},{"name":"评分","value":7.7},{"name":"image","value":"https://img1.doubanio.com/view/movie_poster_cover/lpst/public/p2404553168.jpg"},{"name":"id","value":"24751763"}]}
 
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
                data: [8440,10039,8436,7276,7259,6958,7535,4859,8222,8738,8836,8065,8409,8936,8935,8552,7998,7030,7877,7360,6285,6589,6383,6786,5385,5764,5967,5990,6419,7535,7173,5961,6904,82238,184910,157604,142339,126153,72080,58249,57614,50779,51982,60349,58827]
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
        
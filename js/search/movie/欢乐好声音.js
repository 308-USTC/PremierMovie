
 var infor = {"content":[{"name":"name","value":"欢乐好声音"},{"name":"导演","value":"加斯·詹宁斯,克里斯托夫·卢尔德莱,"},{"name":"编剧","value":"加斯·詹宁斯,"},{"name":"主演","value":"马修·麦康纳,瑞茜·威瑟斯彭,塞思·麦克法兰,斯嘉丽·约翰逊,塔伦·埃格顿,托瑞·凯利,约翰·C·赖利,珍妮弗·桑德斯,詹妮弗·哈德森,加斯·詹宁斯,彼得·塞拉菲诺威茨,尼克·克罗尔,贝克·班尼特,杰·费罗尔,尼克·奥弗曼,"},{"name":"类型","value":"喜剧,动画,歌舞,"},{"name":"上映日期","value":"2017-02-17(中国大陆),2016-09-11(多伦多电影节),2016-12-21(美国),"},{"name":"summary","value":"曾制作过《小黄人》的环球公司和Illumination Entertainment今天公布了他们一部新的动画电影档期和配音阵容。该片堪称动物界的“达人秀”和“好声音”，片中会用到超过85首热门歌曲！这部动画片叫做《歌唱秀》（Sing），将于2016年12月21日上映。马修·麦康纳希（Matthew McConaughey）为剧院老板巴斯特（Buster Moon）——一只考拉配音，这家剧院是他父亲建立的，曾经十分辉煌，但现在门庭冷落。为了重振剧院，考拉经理决定举办一场全世界最伟大的歌唱大赛，冠军将获得10万美元的奖金！这在动物王国已经算是巨款了！这场歌唱大赛最终选出了五位决赛选手，他们分别是：瑞茜·威瑟斯彭（Reese Witherspoon）配音的猪妈妈罗茜塔（Rosita），她年轻时一直有音乐梦想，后来一窝生了25只猪仔后梦想就烟消云散了。..."},{"name":"评分","value":8.3},{"name":"image","value":"https://img5.doubanio.com/view/movie_poster_cover/lpst/public/p2411622136.jpg"},{"name":"id","value":"26354572"}]}
 
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
                data: [978,844,981,944,1006,974,1133,728,1037,1152,1289,1130,1283,1401,1514,1472,1568,1742,1712,1986,2535,2674,2961,3140,2980,3511,5746,11156,41884,71819,72609,43525,75,36555,33114,36512,52123,47209,26619,19646,17191,15798,16567,23735,24463]
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
        
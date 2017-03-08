
 var infor = {"content":[{"name":"name","value":"最强大脑第四季"},{"name":"主演","value":"蒋昌建 陶晶莹 刘国梁 章子怡 "},{"name":"类型","value":"真人秀"},{"name":"国家/地区","value":"中国大陆"},{"name":"开播日期","value":"2017"},{"name":"summary","value":"《最强大脑》是江苏卫视借鉴德国节目《Super Brain》推出的国内首档大型科学类真人秀节目，是专注于传播脑科学知识和脑力竞技的节目。\n2016年12月5日，《最强大脑》第四季节目组宣布，将引入“人机大战”模式，百度研发的人工智能机器人“小度”将作为特别选手参赛，与人类“最强大脑”现场对决。"},{"name":"评分","value":6.9},{"name":"image","value":"https://img1.doubanio.com/view/movie_poster_cover/lpst/public/p2410906719.jpg"},{"name":"id","value":"26950044"}]}
 
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
                data: ['2017-01-20','2017-01-21','2017-01-22','2017-01-23','2017-01-24','2017-01-25','2017-01-26','2017-01-27','2017-01-28','2017-01-29','2017-01-30','2017-01-31','2017-02-01','2017-02-02','2017-02-03','2017-02-04','2017-02-05','2017-02-06','2017-02-07','2017-02-08','2017-02-09','2017-02-10','2017-02-11','2017-02-12','2017-02-13','2017-02-14','2017-02-15','2017-02-16','2017-02-17','2017-02-18','2017-02-19','2017-02-20','2017-02-21','2017-02-22','2017-02-23','2017-02-24','2017-02-25','2017-02-26','2017-02-27','2017-02-28','2017-03-01']
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
                data: [99744,99610,39185,24770,19489,20334,21628,26621,56465,36259,30740,26134,26158,31347,65953,63773,34527,22927,19316,19514,19719,49330,60034,29686,19135,14933,14932,15842,50317,77809,41083,23079,18993,18520,19166,61565,98085,42736,23253,18138,18015]
            }, ]
        };

        var word_list = [{"text":"简单","weight":0.6299011263573931},{"text":"善良","weight":0.6060106695963745},{"text":"有趣","weight":0.7048653957429192},{"text":"舒服","weight":0.43086425127121875},{"text":"尴尬","weight":0.6709054326331476},{"text":"一星","weight":0.7640992360498596},{"text":"干净","weight":0.5666996248262173},{"text":"清新","weight":0.6812487773106028},{"text":"懒懒","weight":0.7353289090469666},{"text":"不错","weight":0.39834791561126864},{"text":"幽默","weight":0.6238484794806254},{"text":"无聊","weight":0.3522847623219593},{"text":"辛苦","weight":0.4654872076536968},{"text":"轻松","weight":0.1964482723898431},{"text":"挺好","weight":0.08448767578468876},{"text":"平淡","weight":0.13910685287578256},{"text":"和谐","weight":0.4251567559752079},{"text":"幸福","weight":0.03839520290045691},{"text":"浮躁","weight":0.2869131659291508},{"text":"庸俗","weight":0.4513074638602774},{"text":"最气","weight":0.33456305047550305},{"text":"最恨","weight":0.3107849853488804},{"text":"真诚","weight":0.04262190241988836},{"text":"爱和","weight":0.2696348217625182},{"text":"乐趣","weight":0.45156030584410006},{"text":"很好","weight":0.33256979878081283},{"text":"年轻","weight":0.30174761261114613},{"text":"诚恳","weight":0.41259773097377167},{"text":"艰辛","weight":0.10336574737917512},{"text":"活好","weight":0.27513133535084994},{"text":"快乐","weight":0.10404193455361783},{"text":"美好","weight":0.10641622301698593},{"text":"疯狂","weight":0.37546902159971024},{"text":"纯美","weight":0.08152282807765704},{"text":"精致","weight":0.3510333293333756},{"text":"节目","weight":1.1906553016288777},{"text":"老师","weight":0.721468703174964},{"text":"综艺","weight":0.9456531326815251},{"text":"版权","weight":0.05683720978400755},{"text":"农村","weight":0.1257655183268705},{"text":"小厨","weight":0.04082129776474211},{"text":"做菜","weight":0.07201886197800332},{"text":"广告","weight":0.10214723082321518},{"text":"观众","weight":0.11205078043675959},{"text":"原创","weight":0.11707580183019439},{"text":"原版","weight":0.04444327147066517},{"text":"样子","weight":0.1588044562356448},{"text":"爸爸","weight":0.13855046305520638},{"text":"儿子","weight":0.01261079410314681},{"text":"姑娘","weight":0.010083890769068057},{"text":"评论","weight":0.13399432209196463},{"text":"房子","weight":0.043737236211623336},{"text":"评分","weight":0.09557315431056426},{"text":"人生","weight":0.03733626454694078},{"text":"学生","weight":0.07719269724783827},{"text":"动物","weight":0.048548274510508235},{"text":"国产","weight":0.0242784364057455},{"text":"类型","weight":0.11631103975702443},{"text":"自带","weight":0.035287213448076005},{"text":"朋友","weight":0.10842091011175259},{"text":"塑料","weight":0.02803024906619444},{"text":"智商","weight":0.014330091611965882},{"text":"全程","weight":0.05337864989143815},{"text":"内容","weight":0.025424892607996588},{"text":"垃圾","weight":0.00993479816077026},{"text":"芒果","weight":0.007899556321047696},{"text":"太重","weight":0.09548663777550553},{"text":"一星","weight":0.03993724503449791},{"text":"时代","weight":0.017020642622579196},{"text":"画面","weight":0.10354217706837941},{"text":"","weight":null}];


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
        
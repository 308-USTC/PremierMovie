
 var infor = {"content":[{"name":"name","value":"最强大脑"},{"name":"导演","value":""},{"name":"编剧"},{"name":"主演","value":""},{"name":"类型","value":""},{"name":"上映日期"},{"name":"summary"},{"name":"评分","value":""},{"name":"image"},{"name":"id"}]}
 
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
                data: [107848,121973,58365,40434,33787,35458,33541,33122,55525,42838,40960,36967,38432,47597,84968,95219,55738,41867,36021,37590,36403,73188,98321,58926,42117,29029,30252,30878,79059,123361,72285,44721,38576,38740,39371,105799,186098,88490,61260,52191,49794,47031,134356,223747,120617]
            }, ]
        };

        var word_list = [{"text":"快乐","weight":1.0544678432318666},{"text":"快本","weight":0.2146333356020222},{"text":"欢乐","weight":0.10866064421510604},{"text":"无聊","weight":0.20324802777478246},{"text":"尴尬","weight":0.4624405733913296},{"text":"不错","weight":0.5054587696725695},{"text":"孤独","weight":0.7136193958210217},{"text":"幽默","weight":0.618065866443915},{"text":"幸福","weight":0.8462124727261564},{"text":"成熟","weight":0.5848896674816179},{"text":"简单","weight":0.5626075836346495},{"text":"活泼","weight":0.5488012785083589},{"text":"清醒","weight":0.721294333581298},{"text":"稳重","weight":0.6819512572865811},{"text":"灵活","weight":0.7332912037602577},{"text":"粗爆","weight":0.26851217846995007},{"text":"寂静","weight":0.21187991400662967},{"text":"悲伤","weight":0.09445683968438028},{"text":"短暂","weight":0.0010278722392223691},{"text":"低极","weight":0.46244032785909545},{"text":"温和","weight":0.3795917896286916},{"text":"虚假","weight":0.1978515645352366},{"text":"抑郁","weight":0.3482309221911434},{"text":"独爱","weight":0.01496526948196599},{"text":"挺乱","weight":0.013156555146365517},{"text":"重看","weight":0.03203844300104415},{"text":"常鲜","weight":0.13137517868683296},{"text":"辉煌","weight":0.064793155919991},{"text":"有趣","weight":0.03359382452158793},{"text":"必看","weight":0.03505138992287186},{"text":"幼稚","weight":0.13153730809233766},{"text":"最多","weight":0.12559586447399593},{"text":"很假","weight":0.11628417644184627},{"text":"健康","weight":0.02071662110641183},{"text":"興趣","weight":0.12119239516403843},{"text":"节目","weight":2.2161731952259176},{"text":"综艺","weight":0.42644703214145896},{"text":"游戏","weight":0.3217585984615454},{"text":"大本营","weight":0.649190190648511},{"text":"主持人","weight":0.27236635073173077},{"text":"观众","weight":0.4501173690000182},{"text":"老师","weight":0.13065531872749572},{"text":"陪伴","weight":0.15454208995397872},{"text":"时间","weight":0.17606031770494932},{"text":"情怀","weight":0.015420718210959469},{"text":"笑点","weight":0.21930443138878705},{"text":"电视","weight":0.05339907478408878},{"text":"小学","weight":0.22866020460328285},{"text":"小时候","weight":0.16126822771777818},{"text":"机智","weight":0.10955937078242932},{"text":"人员","weight":0.13599520964329057},{"text":"大学","weight":0.05909589880539421},{"text":"弱智","weight":0.18445906401995885},{"text":"习惯","weight":0.15383474903462552},{"text":"艺人","weight":0.031193612186910025},{"text":"唱片","weight":0.15643338805779322},{"text":"玩游戏","weight":0.05466702960270206},{"text":"智商","weight":0.14222741522732707},{"text":"电影","weight":0.11427031676970763},{"text":"世界","weight":0.15830290432958127},{"text":"老牌","weight":0.0944612741867455},{"text":"电视机","weight":0.045530048820788586},{"text":"理由","weight":0.055199749796184604},{"text":"粉丝","weight":0.14327195739273385},{"text":"机制","weight":0.06469906255187374},{"text":"距离","weight":0.004547774522191044},{"text":"无脑","weight":0.0490966428918469},{"text":"女朋友","weight":0.1496643297545746},{"text":"队友","weight":0.05578702380006768},{"text":"受众","weight":0.01350341190971785},{"text":"","weight":null}];


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
        
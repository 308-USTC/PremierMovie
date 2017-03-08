
 var infor = {"content":[{"name":"name","value":"奇葩说"},{"name":"导演","value":""},{"name":"编剧"},{"name":"主演","value":""},{"name":"类型","value":""},{"name":"上映日期"},{"name":"summary"},{"name":"评分","value":""},{"name":"image"},{"name":"id"}]}
 
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
                data: [8990,17449,13350,9811,10278,8813,7312,4990,7248,7046,7574,7954,7740,7795,10976,11153,9600,8852,8932,9229,8771,10747,10530,8884,7905,7355,8047,8101,10966,11197,10842,9014,9101,9558,9260,11591,12905,10513,8617,8479,10991,12324,14998,14775,14252]
            }, ]
        };

        var word_list = [{"text":"快乐","weight":1.649161876985642},{"text":"快本","weight":0.9632235804576884},{"text":"欢乐","weight":0.11407543316310208},{"text":"无聊","weight":0.5530646497627542},{"text":"尴尬","weight":0.9613747324137092},{"text":"不错","weight":0.07794103985813416},{"text":"孤独","weight":0.24257990098146906},{"text":"幽默","weight":0.6232909537791593},{"text":"幸福","weight":0.15332114376765615},{"text":"成熟","weight":0.38782505852379184},{"text":"简单","weight":0.055511119449660286},{"text":"活泼","weight":0.6342041348768436},{"text":"清醒","weight":0.0988974131886985},{"text":"稳重","weight":0.5146688929604524},{"text":"灵活","weight":0.6453634751453009},{"text":"粗爆","weight":0.2859259537567879},{"text":"寂静","weight":0.04645390256533328},{"text":"悲伤","weight":0.36020135673934095},{"text":"短暂","weight":0.09586438542850205},{"text":"低极","weight":0.24706551599853924},{"text":"温和","weight":0.2180944318145025},{"text":"虚假","weight":0.05365571813374346},{"text":"抑郁","weight":0.006157337581964517},{"text":"独爱","weight":0.04658944593179375},{"text":"挺乱","weight":0.1004389683646976},{"text":"重看","weight":0.04270422072038379},{"text":"常鲜","weight":0.061795169464119754},{"text":"辉煌","weight":0.12859371185380905},{"text":"有趣","weight":0.029545696537843703},{"text":"必看","weight":0.00014389241434703128},{"text":"幼稚","weight":0.0976404018883527},{"text":"最多","weight":0.12167612606223817},{"text":"很假","weight":0.08865545182652997},{"text":"健康","weight":0.10377466327571758},{"text":"興趣","weight":0.06764656746339767},{"text":"节目","weight":1.2227790396931157},{"text":"综艺","weight":0.8244163541496806},{"text":"游戏","weight":0.1776872639324415},{"text":"大本营","weight":0.7151482167427604},{"text":"主持人","weight":0.6267477988865738},{"text":"观众","weight":0.4693455230949441},{"text":"老师","weight":0.08974156997868896},{"text":"陪伴","weight":0.01079686179923749},{"text":"时间","weight":0.06761502329131366},{"text":"情怀","weight":0.048806219853247935},{"text":"笑点","weight":0.04434588697227728},{"text":"电视","weight":0.23062801145591058},{"text":"小学","weight":0.15923721596515297},{"text":"小时候","weight":0.15447576087624845},{"text":"机智","weight":0.04501947529608621},{"text":"人员","weight":0.18277628719379813},{"text":"大学","weight":0.07955538464246283},{"text":"弱智","weight":0.1621009748490879},{"text":"习惯","weight":0.13793901257146915},{"text":"艺人","weight":0.005843931836307702},{"text":"唱片","weight":0.07513507369491965},{"text":"玩游戏","weight":0.03881598533125882},{"text":"智商","weight":0.05892119642219517},{"text":"电影","weight":0.1039823136702476},{"text":"世界","weight":0.14924665552993885},{"text":"老牌","weight":0.1181414617820624},{"text":"电视机","weight":0.1246277980538417},{"text":"理由","weight":0.14067260556691263},{"text":"粉丝","weight":0.15067939092713642},{"text":"机制","weight":0.03177390654556275},{"text":"距离","weight":0.04737169310828972},{"text":"无脑","weight":0.07008092930989451},{"text":"女朋友","weight":0.14464219361713085},{"text":"队友","weight":0.05350835378566449},{"text":"受众","weight":0.11730750866283876},{"text":"","weight":null}];


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
        

 var infor = {"content":[{"name":"name","value":"极限挑战"},{"name":"导演","value":""},{"name":"编剧"},{"name":"主演","value":""},{"name":"类型","value":""},{"name":"上映日期"},{"name":"summary"},{"name":"评分","value":""},{"name":"image"},{"name":"id"}]}
 
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
                data: [11304,13908,39370,25535,20441,20234,19595,13174,15573,14597,16162,17279,18012,20464,23144,23922,23863,23025,25089,26327,22888,26319,24137,20986,17436,17547,18096,16141,17710,21498,21550,16394,18434,17475,15641,15303,19688,19610,15369,14643,14566,14138,14654,20479,23640]
            }, ]
        };

        var word_list = [{"text":"和谐","weight":0.23351235892813213},{"text":"良心","weight":0.14522124439697295},{"text":"尴尬","weight":0.2504837731829289},{"text":"极限","weight":0.4029475167437718},{"text":"单薄","weight":0.09923199422679281},{"text":"羞耻","weight":0.1830925116997242},{"text":"无聊","weight":0.4478499135886158},{"text":"乏味","weight":0.13783432747805602},{"text":"充满","weight":0.40022071537977627},{"text":"完美","weight":0.6249782941024504},{"text":"真诚","weight":0.16335411168205452},{"text":"聪明","weight":0.45373764671854666},{"text":"睿智","weight":0.4393694239731461},{"text":"简单","weight":0.3323013404526536},{"text":"粗暴","weight":0.24200401358737933},{"text":"蛮快","weight":0.5644802521421245},{"text":"年轻","weight":0.33582123476650033},{"text":"强大","weight":0.542653102986567},{"text":"鲜明","weight":0.4480855006560646},{"text":"独特","weight":0.23614352105125314},{"text":"惊喜","weight":0.48751647027998163},{"text":"幸福","weight":0.2644839963796967},{"text":"最苦","weight":0.3151653071986555},{"text":"最累","weight":0.19275733117850527},{"text":"激烈","weight":0.5710014576580128},{"text":"微妙","weight":0.3310106495973017},{"text":"甜甜","weight":0.37817354257014285},{"text":"纯净","weight":0.05643083064035466},{"text":"红兴","weight":0.442606935685869},{"text":"狭窄","weight":0.542453741502277},{"text":"险恶","weight":0.38134063449363564},{"text":"骄傲","weight":0.4337625986016904},{"text":"惊艳","weight":0.5030597229829332},{"text":"轻松","weight":0.2484247746804469},{"text":"要好看","weight":0.4500224427023091},{"text":"综艺","weight":1.2129575974766758},{"text":"节目","weight":0.32203715434749536},{"text":"游戏","weight":0.26645738252592094},{"text":"笑点","weight":0.3140947153931421},{"text":"渤哥","weight":0.32365292077021174},{"text":"智商","weight":0.09891749731016193},{"text":"魅力","weight":0.06143561368823015},{"text":"兄弟","weight":0.18524525628830443},{"text":"小猪","weight":0.24048248196706834},{"text":"男人","weight":0.20435112286422508},{"text":"男人帮","weight":0.05713811707679474},{"text":"演唱会","weight":0.09321036136897058},{"text":"节目组","weight":0.12063623129309281},{"text":"残粉","weight":0.07422080850383748},{"text":"演技","weight":0.186319624839863},{"text":"导演组","weight":0.19481921530219695},{"text":"精彩","weight":0.1744560983884066},{"text":"内容","weight":0.1592163839084409},{"text":"剪辑","weight":0.018262576519126432},{"text":"情商","weight":0.1142253202141231},{"text":"算子","weight":0.07828237149885808},{"text":"风格","weight":0.001288149900911262},{"text":"公益","weight":0.1710156896737677},{"text":"自带","weight":0.048295161856248874},{"text":"电影","weight":0.06283364623841652},{"text":"全程","weight":0.06464515768127549},{"text":"节奏","weight":0.09354552523803272},{"text":"转粉","weight":0.11290717116879297},{"text":"出租车","weight":0.005831399732285774},{"text":"地方","weight":0.12177346372820828},{"text":"定位","weight":0.0661135129778858},{"text":"典型","weight":0.06180898724725067},{"text":"用心","weight":0.10369515018710357},{"text":"镜头","weight":0.04834682604900624},{"text":"粉丝","weight":0.1355335320736332},{"text":"","weight":null}];


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
        
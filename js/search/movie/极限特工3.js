
 var infor = {"content":[{"name":"name","value":"极限特工3"},{"name":"导演","value":""},{"name":"编剧"},{"name":"主演","value":""},{"name":"类型","value":""},{"name":"上映日期"},{"name":"summary"},{"name":"评分","value":""},{"name":"image"},{"name":"id"}]}
 
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
                data: [5015,4556,5540,5525,5554,4727,4054,3389,6163,5599,5447,5602,6237,7139,8927,8839,10908,11448,12653,14801,24907,92852,94643,98022,66994,60691,52979,41788,42471,48393,46477,30320,26301,24171,21352,20479,22359,20931,15149,13215,13521,12810,13422,16987,16045]
            }, ]
        };

        var word_list = [{"text":"细腻","weight":0.2496408647328931},{"text":"平淡","weight":0.18613070052925942},{"text":"善良","weight":0.35382505123824126},{"text":"沉闷","weight":0.16418287756203878},{"text":"惊悚","weight":0.17697220573920852},{"text":"焦虑","weight":0.38754306642316283},{"text":"伤害","weight":0.3832704025769705},{"text":"很小","weight":0.1370707811274959},{"text":"落后","weight":0.4052463463287891},{"text":"幽默","weight":0.0011285178476530852},{"text":"微妙","weight":0.44063835937741813},{"text":"不安","weight":0.39423223490243603},{"text":"尊严","weight":0.13796209897254316},{"text":"平凡","weight":0.3379010081463809},{"text":"悲伤","weight":0.3582897261272561},{"text":"尊重","weight":0.4108268766913362},{"text":"完美","weight":0.05759507795449726},{"text":"羞耻","weight":0.2305795800748413},{"text":"歡喜","weight":0.09936490150342535},{"text":"细微","weight":0.28853437139120686},{"text":"隐晦","weight":0.30225028390858827},{"text":"幸福","weight":0.3638949989015869},{"text":"犀利","weight":0.23781678005975196},{"text":"模糊","weight":0.28955929366289557},{"text":"揪心","weight":0.1322534261194638},{"text":"琐碎","weight":0.38982826566437995},{"text":"扎实","weight":0.26849342072888466},{"text":"巧妙","weight":0.16984850448096195},{"text":"尴尬","weight":0.12984753615784295},{"text":"无聊","weight":0.018079799587659155},{"text":"可悲","weight":0.16657112783819694},{"text":"不急","weight":0.24027513188041258},{"text":"不慢","weight":0.018475096028668744},{"text":"有趣","weight":0.34666531033110193},{"text":"强大","weight":0.1186677493213094},{"text":"电影","weight":0.7317993808874954},{"text":"社会","weight":0.4536672769172061},{"text":"故事","weight":0.40551915643715225},{"text":"男主","weight":0.010896984572616869},{"text":"推销员","weight":0.30184512506994404},{"text":"困境","weight":0.12091489441083657},{"text":"妻子","weight":0.2943049855014146},{"text":"人性","weight":0.021081072282657796},{"text":"剧本","weight":0.14018193136360546},{"text":"剧情","weight":0.08080783038519067},{"text":"家庭","weight":0.10880798610394747},{"text":"戏中戏","weight":0.25471904224648356},{"text":"文化","weight":0.23624913219554425},{"text":"剧作","weight":0.1915700402303189},{"text":"关系","weight":0.12064247223024256},{"text":"现实","weight":0.2291500666538092},{"text":"女性","weight":0.17110962271855837},{"text":"宗教","weight":0.061518692865594866},{"text":"情感","weight":0.0694264218955795},{"text":"角色","weight":0.07856357421718756},{"text":"老头","weight":0.09046924283668922},{"text":"结尾","weight":0.2058790718192328},{"text":"人物","weight":0.20507633485875296},{"text":"互文","weight":0.14365296174660563},{"text":"戏剧","weight":0.18537519418382514},{"text":"细节","weight":0.0122385447036844},{"text":"影片","weight":0.05737335699214356},{"text":"观众","weight":0.14217259786697348},{"text":"情绪","weight":0.06324614877204118},{"text":"事件","weight":0.13268779070874026},{"text":"演员","weight":0.04392676175216623},{"text":"镜头","weight":0.043324758863037105},{"text":"精彩","weight":0.14456547582788862},{"text":"情节","weight":0.07327544145968191},{"text":"丈夫","weight":0.08236637741200742},{"text":"","weight":null}];


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
        
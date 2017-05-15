
 var infor = {"content":[{"name":"name","value":"记忆大师"},{"name":"导演","value":"陈正道,"},{"name":"编剧","value":"任鹏,"},{"name":"主演","value":"黄渤,徐静蕾,段奕宏,杨子姗,许玮甯,"},{"name":"类型","value":"悬疑,犯罪,"},{"name":"上映日期","value":"2017-04-28(中国大陆),"},{"name":"summary","value":"公元2019 年一种记忆存取手术在全球推广，作家江丰与妻子张代晨感情破裂，江丰删除了他们十年婚姻的爱情片段。妻子要求他取回记忆，重新载入脑海的竟然是一个连环杀人犯的记忆..."},{"name":"评分","value":null},{"name":"image","value":"https://img3.doubanio.com/view/movie_poster_cover/lpst/public/p2404692270.jpg"},{"name":"id","value":"25884801"}]}
 
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
                data: []
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
                data: []
            }, ]
        };

        var word_list = [{"text":"细腻","weight":0.2515805663538611},{"text":"平淡","weight":0.035814076991716334},{"text":"善良","weight":0.3954775013915327},{"text":"沉闷","weight":0.2628446889824885},{"text":"惊悚","weight":0.2103022538981789},{"text":"焦虑","weight":0.22776847819787105},{"text":"伤害","weight":0.34588115420062426},{"text":"很小","weight":0.5470173213477343},{"text":"落后","weight":0.05928838192975136},{"text":"幽默","weight":0.06776478356532306},{"text":"微妙","weight":0.4263914141253961},{"text":"不安","weight":0.3357705422996917},{"text":"尊严","weight":0.14015065151124567},{"text":"平凡","weight":0.3311764200394253},{"text":"悲伤","weight":0.11434284408095137},{"text":"尊重","weight":0.09000272603693074},{"text":"完美","weight":0.3197952142587752},{"text":"羞耻","weight":0.12724306071555772},{"text":"歡喜","weight":0.08726135452060976},{"text":"细微","weight":0.12300079542284177},{"text":"隐晦","weight":0.40472653390575986},{"text":"幸福","weight":0.3681774567986378},{"text":"犀利","weight":0.23595712730161372},{"text":"模糊","weight":0.08595404074583675},{"text":"揪心","weight":0.32809552333265635},{"text":"琐碎","weight":0.3974972283230239},{"text":"扎实","weight":0.18597555696799034},{"text":"巧妙","weight":0.07448302616181993},{"text":"尴尬","weight":0.0832096962508544},{"text":"无聊","weight":0.1371836130215621},{"text":"可悲","weight":0.030082905238269862},{"text":"不急","weight":0.3952034064709456},{"text":"不慢","weight":0.22126631981311215},{"text":"有趣","weight":0.06134495787092145},{"text":"强大","weight":0.05110059652615861},{"text":"电影","weight":0.2877435377492336},{"text":"社会","weight":0.07861043117629074},{"text":"故事","weight":0.21570557363136197},{"text":"男主","weight":0.14354203721104233},{"text":"推销员","weight":0.22666314666636983},{"text":"困境","weight":0.1627305172377067},{"text":"妻子","weight":0.15545502865274763},{"text":"人性","weight":0.23978895186565566},{"text":"剧本","weight":0.2612526493157087},{"text":"剧情","weight":0.20128200687445308},{"text":"家庭","weight":0.17590742852037297},{"text":"戏中戏","weight":0.005056947258575868},{"text":"文化","weight":0.2238373695159937},{"text":"剧作","weight":0.23871043864966404},{"text":"关系","weight":0.2238817028205717},{"text":"现实","weight":0.23713318110027612},{"text":"女性","weight":0.03853888966647091},{"text":"宗教","weight":0.22652012891611598},{"text":"情感","weight":0.13872107396304048},{"text":"角色","weight":0.04396227578179856},{"text":"老头","weight":0.15412549550091326},{"text":"结尾","weight":0.17001564323780818},{"text":"人物","weight":0.101694719653004},{"text":"互文","weight":0.06812923643855556},{"text":"戏剧","weight":0.08152385549117636},{"text":"细节","weight":0.1459916063329088},{"text":"影片","weight":0.12078963913836034},{"text":"观众","weight":0.03617631862918041},{"text":"情绪","weight":0.026573214700725087},{"text":"事件","weight":0.11013629531550662},{"text":"演员","weight":0.11576985233371567},{"text":"镜头","weight":0.08033356241460836},{"text":"精彩","weight":0.025066280402266543},{"text":"情节","weight":0.020215402858361854},{"text":"丈夫","weight":0.1407501481837808},{"text":"","weight":null}];


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
        
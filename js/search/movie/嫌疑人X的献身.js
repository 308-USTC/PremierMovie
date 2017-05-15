
 var infor = {"content":[{"name":"name","value":"嫌疑人X的献身"},{"name":"导演","value":"西谷弘,"},{"name":"编剧","value":"福田靖,东野圭吾,"},{"name":"主演","value":"福山雅治,柴崎幸,堤真一,松雪泰子,北村一辉,金泽美穗,"},{"name":"类型","value":"剧情,悬疑,犯罪,"},{"name":"上映日期","value":"2008-10-04(日本),"},{"name":"summary","value":"天才物理学家汤川学（福山雅治 饰）此次又受内海薰（柴崎幸 饰）所托，调查一件不可思议命案。受害人富樫慎二被发现死在河边，面目指纹尽毁。最大的嫌疑人是他的前妻花冈靖子（松雪泰子 饰），然而靖子却有着完美的不在场证明。一个人能够同一时间出现在不同地方吗？当汤川发现住在靖子隔壁的是当年的大学同学、同为天才的数学家石神哲哉（堤真一  饰）时引起兴趣。毕业后因要照顾父母没有留校反而去高中教数学、一直生活得很落魄的石神每晚利用公用电话教靖子如何应对警察追查，靖子渐渐感到被束缚，但是由于给出的口供毫无可疑之处，警察决定放弃对靖子的调查，这时汤川却指出石神是关键人物。案件的真相如何？世界上真有一个人同时出现在两个地方的事情吗？本片改编自日本人气推理小说家东野圭吾06年的直木奖获奖作品。"},{"name":"评分","value":8.3},{"name":"image","value":"https://img1.doubanio.com/view/movie_poster_cover/lpst/public/p698531629.jpg"},{"name":"id","value":"2369845"}]}
 
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

        var word_list = [{"text":"细腻","weight":0.6664227137158864},{"text":"平淡","weight":0.5846926823706902},{"text":"善良","weight":0.2871770578733429},{"text":"沉闷","weight":0.5988094834520069},{"text":"惊悚","weight":0.3149191949410234},{"text":"焦虑","weight":0.09469165107615629},{"text":"伤害","weight":0.09870980415161933},{"text":"很小","weight":0.34522654942374265},{"text":"落后","weight":0.3932143960720758},{"text":"幽默","weight":0.0639869391155348},{"text":"微妙","weight":0.2810133948546737},{"text":"不安","weight":0.35105449835869595},{"text":"尊严","weight":0.18059590015410745},{"text":"平凡","weight":0.14596120238389973},{"text":"悲伤","weight":0.3412400962962831},{"text":"尊重","weight":0.27551445857779444},{"text":"完美","weight":0.19929662881687943},{"text":"羞耻","weight":0.36459575485117207},{"text":"歡喜","weight":0.4031517196497436},{"text":"细微","weight":0.28701836201000275},{"text":"隐晦","weight":0.3310371721166691},{"text":"幸福","weight":0.13386365224486294},{"text":"犀利","weight":0.05920409092158823},{"text":"模糊","weight":0.3597594148489126},{"text":"揪心","weight":0.18164125813180956},{"text":"琐碎","weight":0.27341058838716154},{"text":"扎实","weight":0.1265412755194424},{"text":"巧妙","weight":0.15313676861493605},{"text":"尴尬","weight":0.0826223386478652},{"text":"无聊","weight":0.3358547251757762},{"text":"可悲","weight":0.1057494046097939},{"text":"不急","weight":0.18702995915730872},{"text":"不慢","weight":0.16913392600705188},{"text":"有趣","weight":0.32932528343818007},{"text":"强大","weight":0.3572385941851643},{"text":"电影","weight":0.41093936182505375},{"text":"社会","weight":0.15760294289405719},{"text":"故事","weight":0.08419235367239915},{"text":"男主","weight":0.0639018665874371},{"text":"推销员","weight":0.15439983161974272},{"text":"困境","weight":0.11518209723987514},{"text":"妻子","weight":0.15188406355093648},{"text":"人性","weight":0.2752336894836313},{"text":"剧本","weight":0.17220201626798115},{"text":"剧情","weight":0.09149356484011194},{"text":"家庭","weight":0.1116788743426182},{"text":"戏中戏","weight":0.0132013146665697},{"text":"文化","weight":0.011958057123283915},{"text":"剧作","weight":0.020370414407233146},{"text":"关系","weight":0.11294174826080379},{"text":"现实","weight":0.01559924961275142},{"text":"女性","weight":0.16776885599074534},{"text":"宗教","weight":0.052931290666627634},{"text":"情感","weight":0.1909877238950676},{"text":"角色","weight":0.011551618213685385},{"text":"老头","weight":0.16957647697952039},{"text":"结尾","weight":0.12853099555204112},{"text":"人物","weight":0.03724232755196802},{"text":"互文","weight":0.04591346849639365},{"text":"戏剧","weight":0.013136715270970241},{"text":"细节","weight":0.12845164316398056},{"text":"影片","weight":0.1002692943466992},{"text":"观众","weight":0.15117463996730143},{"text":"情绪","weight":0.17199024556526538},{"text":"事件","weight":0.08372910340736073},{"text":"演员","weight":0.11441972967599251},{"text":"镜头","weight":0.14205416465858967},{"text":"精彩","weight":0.008981669180960628},{"text":"情节","weight":0.0969782176199872},{"text":"丈夫","weight":0.15369755793087395},{"text":"","weight":null}];


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
        
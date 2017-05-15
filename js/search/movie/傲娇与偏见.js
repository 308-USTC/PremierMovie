
 var infor = {"content":[{"name":"name","value":"傲娇与偏见"},{"name":"导演","value":"李海蜀,"},{"name":"编剧","value":"李海蜀,黄彦威,"},{"name":"主演","value":"迪丽热巴,张云龙,高伟光,马薇薇,范湉湉,"},{"name":"类型","value":"喜剧,爱情,"},{"name":"上映日期","value":""},{"name":"summary","value":"唐楠楠（迪丽热巴 饰）是一名北漂网络写手，她的思维天马行空，总是乱入到各种场景中，她误打误撞搅黄了贱萌富二代朱侯（张云龙 饰）的求爱仪式，随后两人发生了一系列剪不断理还乱的爆笑故事，富有同情心却又无比抠门的唐楠楠要养活流落街头的高富帅，一对生活理念和生活习惯有着天壤之别的欢喜冤家，将会发生怎样诞又令人捧腹的有趣故事？他们面临爱情和事业的两难选择时，又将如何取舍？"},{"name":"评分","value":null},{"name":"image","value":"https://img1.doubanio.com/view/movie_poster_cover/lpst/public/p2366459388.jpg"},{"name":"id","value":"26644002"}]}
 
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

        var word_list = [{"text":"细腻","weight":0.3354932875411462},{"text":"平淡","weight":0.512008835043349},{"text":"善良","weight":0.14470616266771746},{"text":"沉闷","weight":0.27519015282016684},{"text":"惊悚","weight":0.673394174760971},{"text":"焦虑","weight":0.032348725633130154},{"text":"伤害","weight":0.13019565011597556},{"text":"很小","weight":0.21996279782590752},{"text":"落后","weight":0.22582492093348583},{"text":"幽默","weight":0.18642922232913353},{"text":"微妙","weight":0.336822677247151},{"text":"不安","weight":0.3755503633985934},{"text":"尊严","weight":0.1433189434750408},{"text":"平凡","weight":0.11733776288939439},{"text":"悲伤","weight":0.05334094365032944},{"text":"尊重","weight":0.11668666191104071},{"text":"完美","weight":0.26503306972501534},{"text":"羞耻","weight":0.11431881080975159},{"text":"歡喜","weight":0.06309727245521357},{"text":"细微","weight":0.10945617484248327},{"text":"隐晦","weight":0.39749394826402557},{"text":"幸福","weight":0.3491070305744813},{"text":"犀利","weight":0.13291010066205133},{"text":"模糊","weight":0.054743888623415685},{"text":"揪心","weight":0.26144849226944655},{"text":"琐碎","weight":0.23489505582121223},{"text":"扎实","weight":0.1098550475107544},{"text":"巧妙","weight":0.023723817181936564},{"text":"尴尬","weight":0.23933384205416938},{"text":"无聊","weight":0.07628892055049409},{"text":"可悲","weight":0.14661252391269625},{"text":"不急","weight":0.11816964960923355},{"text":"不慢","weight":0.3747373094613841},{"text":"有趣","weight":0.07639410299883731},{"text":"强大","weight":0.025750432530092533},{"text":"电影","weight":0.47885501602217645},{"text":"社会","weight":0.2408905366488229},{"text":"故事","weight":0.21233138390878883},{"text":"男主","weight":0.21840646927651342},{"text":"推销员","weight":0.3456529232042651},{"text":"困境","weight":0.22797723547307713},{"text":"妻子","weight":0.056407757568994715},{"text":"人性","weight":0.1423143987913878},{"text":"剧本","weight":0.22039900492429623},{"text":"剧情","weight":0.14807446699487953},{"text":"家庭","weight":0.0675417895741409},{"text":"戏中戏","weight":0.014186013104270655},{"text":"文化","weight":0.23234625680918194},{"text":"剧作","weight":0.13543560588846576},{"text":"关系","weight":0.26550898466057604},{"text":"现实","weight":0.18965928874351398},{"text":"女性","weight":0.14720384730885974},{"text":"宗教","weight":0.03150432667765823},{"text":"情感","weight":0.05778026307511688},{"text":"角色","weight":0.0259167295147282},{"text":"老头","weight":0.20683917544848188},{"text":"结尾","weight":0.12271450340027772},{"text":"人物","weight":0.1505212803017053},{"text":"互文","weight":0.0141062922953305},{"text":"戏剧","weight":0.13191562950954877},{"text":"细节","weight":0.00856938417749988},{"text":"影片","weight":0.05827388090921434},{"text":"观众","weight":0.13894646937878335},{"text":"情绪","weight":0.028375513123266707},{"text":"事件","weight":0.043899209206987005},{"text":"演员","weight":0.004421177548940926},{"text":"镜头","weight":0.017230370036055372},{"text":"精彩","weight":0.08228143915431557},{"text":"情节","weight":0.0445654816127636},{"text":"丈夫","weight":0.05621251455128042},{"text":"","weight":null}];


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
        
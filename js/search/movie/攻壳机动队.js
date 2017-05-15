
 var infor = {"content":[{"name":"name","value":"攻壳机动队"},{"name":"导演","value":"押井守,"},{"name":"编剧","value":"伊藤和典,士郎正宗,"},{"name":"主演","value":"田中敦子,大塚明夫,山寺宏一,大木民夫,家弓家正,玄田哲章,山内雅人,小川真司,"},{"name":"类型","value":"动作,科幻,动画,"},{"name":"上映日期","value":"1995-11-18(日本),"},{"name":"summary","value":"公元2029年，未来世界是高科技与信息化的世界。人类生活水平的提高伴随着犯罪活动的高科技化，于是，专门镇压高科技犯罪的特殊部队——公安9课成立了。队长草薙素子，作为一位全身“义体化”的女警，带领公安9课不断展开行动。是次，公安9课帮助公安6课秘密解决了一位程序员外逃他国的麻烦琐事，又卷入传说中的黑客“傀儡师”的犯罪事件。当行动陷入僵局之际，傀儡师竟然不请自来，出现在公安9课！素子与她的战友们，不知不觉地被卷入了一场涉及政府的阴谋之中。"},{"name":"评分","value":8.9},{"name":"image","value":"https://img3.doubanio.com/view/movie_poster_cover/lpst/public/p1910922395.jpg"},{"name":"id","value":"1291936"}]}
 
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

        var word_list = [{"text":"细腻","weight":0.9382655397125619},{"text":"平淡","weight":0.5409390799321567},{"text":"善良","weight":0.1544236583838307},{"text":"沉闷","weight":0.2490794058669852},{"text":"惊悚","weight":0.18270492986993384},{"text":"焦虑","weight":0.12044887502495491},{"text":"伤害","weight":0.07697349096395008},{"text":"很小","weight":0.055924710884582174},{"text":"落后","weight":0.4564492741990196},{"text":"幽默","weight":0.48972982479021887},{"text":"微妙","weight":0.061111666517566186},{"text":"不安","weight":0.3777870749070554},{"text":"尊严","weight":0.14201409060910528},{"text":"平凡","weight":0.2027699927789541},{"text":"悲伤","weight":0.2642483471170019},{"text":"尊重","weight":0.28042082159635745},{"text":"完美","weight":0.025334930126397853},{"text":"羞耻","weight":0.33637410057742034},{"text":"歡喜","weight":0.16166803225037207},{"text":"细微","weight":0.04492868742122107},{"text":"隐晦","weight":0.31063955746289607},{"text":"幸福","weight":0.09382304000380742},{"text":"犀利","weight":0.005064387009744931},{"text":"模糊","weight":0.41542479834114776},{"text":"揪心","weight":0.1480826322371966},{"text":"琐碎","weight":0.02343584676195524},{"text":"扎实","weight":0.029940501341143153},{"text":"巧妙","weight":0.37520913814485213},{"text":"尴尬","weight":0.04803581770403367},{"text":"无聊","weight":0.415789864754546},{"text":"可悲","weight":0.31726478080852194},{"text":"不急","weight":0.17994184382265044},{"text":"不慢","weight":0.17586217759858364},{"text":"有趣","weight":0.3929526382419481},{"text":"强大","weight":0.1166726841595352},{"text":"电影","weight":0.5925789355221236},{"text":"社会","weight":0.21493106297000875},{"text":"故事","weight":0.49031324686739675},{"text":"男主","weight":0.046783389564471665},{"text":"推销员","weight":0.18328856251288617},{"text":"困境","weight":0.02188496723497918},{"text":"妻子","weight":0.2669290458419703},{"text":"人性","weight":0.16908675336801018},{"text":"剧本","weight":0.04873640566990502},{"text":"剧情","weight":0.1928843696322875},{"text":"家庭","weight":0.18398309532753607},{"text":"戏中戏","weight":0.23562783912686067},{"text":"文化","weight":0.2874600063146827},{"text":"剧作","weight":0.01980040718896162},{"text":"关系","weight":0.23873100574707062},{"text":"现实","weight":0.17314542819721612},{"text":"女性","weight":0.22350596419093438},{"text":"宗教","weight":0.18873853854967973},{"text":"情感","weight":0.10909973180776597},{"text":"角色","weight":0.0797235204565931},{"text":"老头","weight":0.19272549867844216},{"text":"结尾","weight":0.15095752582696406},{"text":"人物","weight":0.16549407231775987},{"text":"互文","weight":0.20004692406959473},{"text":"戏剧","weight":0.09440158896979733},{"text":"细节","weight":0.09952763786214172},{"text":"影片","weight":0.03809616774941244},{"text":"观众","weight":0.030884232283525714},{"text":"情绪","weight":0.0921006983346079},{"text":"事件","weight":0.12498728830133306},{"text":"演员","weight":0.15696129865346278},{"text":"镜头","weight":0.18258858755989807},{"text":"精彩","weight":0.01050012565297212},{"text":"情节","weight":0.07028912742586563},{"text":"丈夫","weight":0.07487969886533799},{"text":"","weight":null}];


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
        
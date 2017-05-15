
 var infor = {"content":[{"name":"name","value":"蓝精灵：寻找神秘村"},{"name":"导演","value":"凯利·阿斯博瑞,"},{"name":"编剧","value":"帕米拉·里本,Stacey Harman,Peyo,"},{"name":"主演","value":"乔·曼根尼罗,朱莉娅·罗伯茨,曼迪·帕廷金,米歇尔·罗德里格兹,艾丽·坎伯尔,黛米·洛瓦托,丹尼·朴迪,阿芮尔·温特,雷恩·威尔森,杰克·麦克布瑞尔,"},{"name":"类型","value":"动画,家庭,"},{"name":"上映日期","value":"2017-04-07(美国),"},{"name":"summary","value":"该片原名“Get Smurfy”，是一部100%的CG电脑动画片，导演是《怪物史瑞克2》的凯利·阿斯博瑞（Kelly Asbury）。《蓝精灵：失落的村庄》与之前的两部真人版《蓝精灵》在剧情上并无关联，配音人员也都大换血。其中，“蓝爸爸”（Papa Smurf）由曼迪·帕廷金（Mandy Patinkin）配音，“蓝妹妹”（Smurfette）由黛米·洛瓦托（Demi Lovato）配音，“健健”由乔·曼根尼罗（Joe Manganiello）配音、“笨笨”由杰克·迈克布雷耶（Jack McBrayer）配音、“聪聪”由丹尼·普迪（Danny Pudi）配音、大反派“格格巫”（Gargamel）则由雷恩·威尔森（Rainn Wilson）配音。影片讲述聪聪、笨笨、健健和蓝妹妹一起，出发前去寻找传说中的“失落的蓝精灵村庄”，而格格巫也在寻找这座村庄..."},{"name":"评分","value":null},{"name":"image","value":"https://img1.doubanio.com/view/movie_poster_cover/lpst/public/p2429938617.jpg"},{"name":"id","value":"19899718"}]}
 
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

        var word_list = [{"text":"细腻","weight":0.14428944635617322},{"text":"平淡","weight":0.5048781045030861},{"text":"善良","weight":0.26675766207771967},{"text":"沉闷","weight":0.12413071302246532},{"text":"惊悚","weight":0.3825028351989858},{"text":"焦虑","weight":0.0687212729684749},{"text":"伤害","weight":0.073489493963931},{"text":"很小","weight":0.004930774731470548},{"text":"落后","weight":0.38009059950497914},{"text":"幽默","weight":0.17362198234507514},{"text":"微妙","weight":0.261543983686136},{"text":"不安","weight":0.35228721813377856},{"text":"尊严","weight":0.22974704680153735},{"text":"平凡","weight":0.2828598914406438},{"text":"悲伤","weight":0.331301153079407},{"text":"尊重","weight":0.3058469596220414},{"text":"完美","weight":0.33859834620986456},{"text":"羞耻","weight":0.02886468325963896},{"text":"歡喜","weight":0.37081155406591226},{"text":"细微","weight":0.035162847365311625},{"text":"隐晦","weight":0.3648217493286875},{"text":"幸福","weight":0.27236161595058767},{"text":"犀利","weight":0.13879070595776918},{"text":"模糊","weight":0.18616180840408525},{"text":"揪心","weight":0.15044554990185335},{"text":"琐碎","weight":0.05041561902030888},{"text":"扎实","weight":0.085062110635458},{"text":"巧妙","weight":0.011959875133578908},{"text":"尴尬","weight":0.40513439828209746},{"text":"无聊","weight":0.18997704057442208},{"text":"可悲","weight":0.07596406131805815},{"text":"不急","weight":0.37178472043267036},{"text":"不慢","weight":0.05600177017028214},{"text":"有趣","weight":0.18333184874797365},{"text":"强大","weight":0.3960549414533265},{"text":"电影","weight":0.34836351051143694},{"text":"社会","weight":0.3292193639001302},{"text":"故事","weight":0.4827923526215052},{"text":"男主","weight":0.37919089930790734},{"text":"推销员","weight":0.1919560818884885},{"text":"困境","weight":0.270783249001737},{"text":"妻子","weight":0.13832060135394755},{"text":"人性","weight":0.19809433312840508},{"text":"剧本","weight":0.13461154904949735},{"text":"剧情","weight":0.18641259824697165},{"text":"家庭","weight":0.01942384618121639},{"text":"戏中戏","weight":0.12493907011411115},{"text":"文化","weight":0.02797068876740874},{"text":"剧作","weight":0.03889395888345858},{"text":"关系","weight":0.1751559934718117},{"text":"现实","weight":0.12500133326344304},{"text":"女性","weight":0.25139607441030776},{"text":"宗教","weight":0.007584058412803947},{"text":"情感","weight":0.006360379410013213},{"text":"角色","weight":0.17102481669210265},{"text":"老头","weight":0.17125122247803787},{"text":"结尾","weight":0.058081177023770164},{"text":"人物","weight":0.1870903761368099},{"text":"互文","weight":0.03304929540709163},{"text":"戏剧","weight":0.12067773148450663},{"text":"细节","weight":0.04904880433031449},{"text":"影片","weight":0.19250930683858838},{"text":"观众","weight":0.11540808117718664},{"text":"情绪","weight":0.17942816653025626},{"text":"事件","weight":0.08846838695106057},{"text":"演员","weight":0.015687319538412833},{"text":"镜头","weight":0.0775078674370775},{"text":"精彩","weight":0.1324213105884741},{"text":"情节","weight":0.09873961409025651},{"text":"丈夫","weight":0.06325092168502018},{"text":"","weight":null}];


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
        
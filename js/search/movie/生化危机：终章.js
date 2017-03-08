
 var infor = {"content":[{"name":"name","value":"生化危机：终章"},{"name":"导演","value":"保罗·安德森,"},{"name":"编剧","value":"保罗·安德森,"},{"name":"主演","value":"米拉·乔沃维奇,伊恩·格雷,艾丽·拉特,鲁比·罗丝,李准基,肖恩·罗伯茨,威廉·莱维,欧文·马肯,罗拉,艾尔·安德森,密尔顿·施尔,西沃恩·霍奇森,凯文·奥托,保罗·汉普赛尔,"},{"name":"类型","value":"动作,科幻,惊悚,恐怖,"},{"name":"上映日期","value":"2017-02-24(中国大陆),2016-12-23(日本),2017-01-27(美国),"},{"name":"summary","value":"爱丽丝（米拉·乔沃维奇 Milla Jovovich 饰）在华盛顿特区被威斯克背叛后身陷险境，人类几乎要失去最后的希望。作为唯一的幸存者，也是人类对抗僵尸大军的最后防线，爱丽丝必须回到噩梦开始的地方——浣熊市，才能完成拯救世界救赎人类的正义使命。回归故事发生的起点浣熊市，爱丽丝将和昔日的朋友一起对抗僵尸和最新变种怪物，与 保护伞公司展开了一场惊心动魄的终极决战。"},{"name":"评分","value":6.8},{"name":"image","value":"https://img3.doubanio.com/view/movie_poster_cover/lpst/public/p2429713841.jpg"},{"name":"id","value":"20471852"}]}
 
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

        var word_list = [{"text":"细腻","weight":0.42019092698996263},{"text":"平淡","weight":0.5970086772706013},{"text":"善良","weight":0.2683733765631934},{"text":"沉闷","weight":0.06428260166803579},{"text":"惊悚","weight":0.5081829136703795},{"text":"焦虑","weight":0.25412039253112595},{"text":"伤害","weight":0.5213724225838392},{"text":"很小","weight":0.23528961936080378},{"text":"落后","weight":0.32596946215904377},{"text":"幽默","weight":0.37979287305532344},{"text":"微妙","weight":0.23156036753034695},{"text":"不安","weight":0.07649834445602223},{"text":"尊严","weight":0.12881559134858783},{"text":"平凡","weight":0.07874452357746768},{"text":"悲伤","weight":0.3689476667798647},{"text":"尊重","weight":0.2799711008828468},{"text":"完美","weight":0.05627369981753721},{"text":"羞耻","weight":0.09676724648043353},{"text":"歡喜","weight":0.27491128212166444},{"text":"细微","weight":0.21072305896835075},{"text":"隐晦","weight":0.11844285411723572},{"text":"幸福","weight":0.0945024757144531},{"text":"犀利","weight":0.09088294739815028},{"text":"模糊","weight":0.1255757087485094},{"text":"揪心","weight":0.11652547970549033},{"text":"琐碎","weight":0.00539851068855705},{"text":"扎实","weight":0.09446670138005325},{"text":"巧妙","weight":0.39887969130148854},{"text":"尴尬","weight":0.1113148958710311},{"text":"无聊","weight":0.26640091771133556},{"text":"可悲","weight":0.1713162926658732},{"text":"不急","weight":0.3268685174900729},{"text":"不慢","weight":0.04545277132226931},{"text":"有趣","weight":0.3320359036108085},{"text":"强大","weight":0.1298723619228975},{"text":"电影","weight":0.4520207475881165},{"text":"社会","weight":0.10185193119072655},{"text":"故事","weight":0.44497432535244064},{"text":"男主","weight":0.21879611622106568},{"text":"推销员","weight":0.31038167682927165},{"text":"困境","weight":0.29777515466616106},{"text":"妻子","weight":0.11808646473871572},{"text":"人性","weight":0.03421653559469518},{"text":"剧本","weight":0.1428576521653018},{"text":"剧情","weight":0.0024677693693144825},{"text":"家庭","weight":0.17158843274840976},{"text":"戏中戏","weight":0.22389061778401204},{"text":"文化","weight":0.14890036062715953},{"text":"剧作","weight":0.14987847167579843},{"text":"关系","weight":0.09956830770410673},{"text":"现实","weight":0.10883323400805368},{"text":"女性","weight":0.16842325733865202},{"text":"宗教","weight":0.10671729190067791},{"text":"情感","weight":0.0026413578754790703},{"text":"角色","weight":0.10691530585877526},{"text":"老头","weight":0.15509527523308914},{"text":"结尾","weight":0.15925481318427773},{"text":"人物","weight":0.13458528523919136},{"text":"互文","weight":0.2020157064505841},{"text":"戏剧","weight":0.09899554271134618},{"text":"细节","weight":0.1708824127203748},{"text":"影片","weight":0.036079264269761484},{"text":"观众","weight":0.1639907277181875},{"text":"情绪","weight":0.1872773322061606},{"text":"事件","weight":0.17063084002726817},{"text":"演员","weight":0.14903074981901937},{"text":"镜头","weight":0.015203053033351116},{"text":"精彩","weight":0.091795798805058},{"text":"情节","weight":0.03464593190977458},{"text":"丈夫","weight":0.057726383188869475},{"text":"","weight":null}];


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
        
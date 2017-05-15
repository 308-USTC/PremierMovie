
 var infor = {"content":[{"name":"name","value":"速度与激情8"},{"name":"导演","value":"F·加里·格雷,"},{"name":"编剧","value":"盖瑞·斯科特·汤普森,"},{"name":"主演","value":"范·迪塞尔,道恩·强森,查理兹·塞隆,杰森·斯坦森,米歇尔·罗德里格兹,娜塔莉·伊曼纽尔,埃尔莎·帕塔奇,海伦·米伦,泰瑞斯·吉布森,库尔特·拉塞尔,乔丹娜·布鲁斯特,卢卡斯·布莱克,卢达克里斯,克里斯托弗·海维尤,斯科特·伊斯特伍德,"},{"name":"类型","value":"动作,犯罪,"},{"name":"上映日期","value":"2017-04-12(法国),2017-04-14(美国),"},{"name":"summary","value":"《速度与激情8》早已定于2017年4月14日在北美上映，眼看已经进入2016年了，影片仍未传出开拍的动静。近日，导演F·加里·格雷在接受外媒采访时，谈到了影片的最新进展，并向观众保证：不让观众觉得一切又是老调重弹。"},{"name":"评分","value":null},{"name":"image","value":"https://img3.doubanio.com/view/movie_poster_cover/lpst/public/p2404597073.jpg"},{"name":"id","value":"26260853"}]}
 
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

        var word_list = [{"text":"细腻","weight":0.35493482334967835},{"text":"平淡","weight":0.6682199845199628},{"text":"善良","weight":0.14897668135621486},{"text":"沉闷","weight":0.3924764897094431},{"text":"惊悚","weight":0.23734899347771},{"text":"焦虑","weight":0.595979359685178},{"text":"伤害","weight":0.34096595631255033},{"text":"很小","weight":0.2851778770784055},{"text":"落后","weight":0.39221788720459666},{"text":"幽默","weight":0.11652626163448258},{"text":"微妙","weight":0.019039013187638995},{"text":"不安","weight":0.41327278569173664},{"text":"尊严","weight":0.170172101437689},{"text":"平凡","weight":0.35450819962780056},{"text":"悲伤","weight":0.1399001602338433},{"text":"尊重","weight":0.29016142866387545},{"text":"完美","weight":0.14377694772883393},{"text":"羞耻","weight":0.3843418741542424},{"text":"歡喜","weight":0.17390965546931036},{"text":"细微","weight":0.19499498462840945},{"text":"隐晦","weight":0.40155215318911724},{"text":"幸福","weight":0.1029431483337508},{"text":"犀利","weight":0.288323192103874},{"text":"模糊","weight":0.1138352377029494},{"text":"揪心","weight":0.23293677864788573},{"text":"琐碎","weight":0.0759152425196936},{"text":"扎实","weight":0.2156699591656551},{"text":"巧妙","weight":0.33806441424895733},{"text":"尴尬","weight":0.3957926269710186},{"text":"无聊","weight":0.11618195938643557},{"text":"可悲","weight":0.18275920482721508},{"text":"不急","weight":0.37349639302926857},{"text":"不慢","weight":0.41201937780291176},{"text":"有趣","weight":0.21586906156280017},{"text":"强大","weight":0.05684880193993134},{"text":"电影","weight":0.1564523260111913},{"text":"社会","weight":0.5174091921908196},{"text":"故事","weight":0.060714368327683274},{"text":"男主","weight":0.28473884231993485},{"text":"推销员","weight":0.18262014771870153},{"text":"困境","weight":0.11282019937472475},{"text":"妻子","weight":0.10339846153271444},{"text":"人性","weight":0.2741722542714513},{"text":"剧本","weight":0.23920102800604712},{"text":"剧情","weight":0.2127986366917592},{"text":"家庭","weight":0.006563762851296611},{"text":"戏中戏","weight":0.21541595948639572},{"text":"文化","weight":0.06989376769187745},{"text":"剧作","weight":0.24983515227061923},{"text":"关系","weight":0.035945739732265274},{"text":"现实","weight":0.1995384916103626},{"text":"女性","weight":0.2094671202798531},{"text":"宗教","weight":0.12123881614048473},{"text":"情感","weight":0.11292512273582128},{"text":"角色","weight":0.1441126697056173},{"text":"老头","weight":0.010176950070047494},{"text":"结尾","weight":0.1483170351221249},{"text":"人物","weight":0.0771882814234349},{"text":"互文","weight":0.1156801294452438},{"text":"戏剧","weight":0.20948999336905635},{"text":"细节","weight":0.07611225084046284},{"text":"影片","weight":0.06953787745304359},{"text":"观众","weight":0.11672783050367819},{"text":"情绪","weight":0.11309732472903382},{"text":"事件","weight":0.05827376625777685},{"text":"演员","weight":0.11632270089520948},{"text":"镜头","weight":0.05071430763167149},{"text":"精彩","weight":0.07434564146881716},{"text":"情节","weight":0.12137675297087833},{"text":"丈夫","weight":0.14885680529006134},{"text":"","weight":null}];


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
        
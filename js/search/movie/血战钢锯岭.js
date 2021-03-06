
 var infor = {"content":[{"name":"name","value":"血战钢锯岭"},{"name":"导演","value":"梅尔·吉布森,"},{"name":"编剧","value":"安德鲁·奈特,罗伯特·申坎,"},{"name":"主演","value":"安德鲁·加菲尔德,萨姆·沃辛顿,文斯·沃恩,雨果·维文,卢克·布雷西,泰莉莎·帕尔墨,瑞切尔·格里菲斯,纳撒尼尔·布佐尼克,理查德·劳斯伯格,马特·纳夫莱,费拉斯·迪拉尼,瑞安·柯尔,卢克·佩格勒,"},{"name":"类型","value":"剧情,动作,传记,历史,战争,"},{"name":"上映日期","value":"2016-12-08(中国大陆),2016-11-04(美国),"},{"name":"summary","value":"1945年，第二次世界大战接近尾声，作为邪恶轴心重要成员的日本，其嚣张态势已成强弩之末。是年，决定战局走向的冲绳岛战役拉开序幕，成千上万斗志昂扬的美国大兵被派往冲绳，等待他们的则是敌军重兵防守、凶险异常的钢锯岭。在这群人中间，却有一个不愿拿起武器的军医。他名叫戴斯蒙德·道斯（安德鲁·加菲尔德 Andrew Garfield 饰），来自美国的弗吉尼亚。太平洋爆发之际，瘦弱的戴斯蒙德志愿成为救死扶伤的军医而应征入伍。可因童年和家庭的原因，他始终不愿拿起枪支操练，为此宁愿背上拒服兵役的罪名被送上军事法庭。几经周折，戴斯蒙德最终和战友来到了钢锯岭。枪林弹雨，转瞬之间无数人应声倒地。在信仰和信念的支持下，戴斯蒙德仅凭一己之力拯救了数十条濒死的生命……本片根据真人真事改编。"},{"name":"评分","value":8.7},{"name":"image","value":"https://img1.doubanio.com/view/movie_poster_cover/lpst/public/p2397337958.jpg"},{"name":"id","value":"26325320"}]}
 
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
                data: [501,40151,38236,34263,36263,37987,35810,23827,33535,32108,31793,32696,31963,31081,29989,29802,29282,26760,28256,38305,47213,136704,137346,152273,89306,65284,57283,54685,54350,58863,55708,39415,39188,36190,31892,32737,37450,38726,44942,31830,27413,25430,26956,33846,31529]
            }, ]
        };

        var word_list = [{"text":"血腥","weight":0.603081517476144},{"text":"残酷","weight":0.24141462107863387},{"text":"完美","weight":0.5267478674108477},{"text":"勇敢","weight":0.6247923864028815},{"text":"恐怖","weight":0.24321128723388669},{"text":"坚定","weight":0.400695920294673},{"text":"强壮","weight":0.03213388536459043},{"text":"紧张","weight":0.12083321909947577},{"text":"善良","weight":0.1740467049540213},{"text":"温柔","weight":0.3485883576352905},{"text":"辉煌","weight":0.05912242279196995},{"text":"幸好","weight":0.24920667511160705},{"text":"简单","weight":0.1204079621370639},{"text":"瘦弱","weight":0.010599760473864779},{"text":"温和","weight":0.26598044974213353},{"text":"庞大","weight":0.34125016514967216},{"text":"惨烈","weight":0.23565320307803833},{"text":"厉害","weight":0.1495189972909521},{"text":"渺小","weight":0.2486780038368028},{"text":"悲伤","weight":0.21024290651220978},{"text":"尴尬","weight":0.3501228974690226},{"text":"太慢","weight":0.25784493252466645},{"text":"着急","weight":0.3144078582941932},{"text":"鲜明","weight":0.07351262695719367},{"text":"揪心","weight":0.027826897924643323},{"text":"辛苦","weight":0.06261875075076531},{"text":"卑微","weight":0.17133080860398311},{"text":"凶残","weight":0.27473588546693756},{"text":"狡猾","weight":0.362240236718609},{"text":"飽滿","weight":0.2584930294546766},{"text":"偉大","weight":0.25399404942815795},{"text":"滑稽","weight":0.02728066795905558},{"text":"荒唐","weight":0.1747902793627602},{"text":"冗杂","weight":0.08387477754740331},{"text":"沉闷","weight":0.1441672034193955},{"text":"信仰","weight":0.047183945655219474},{"text":"战争","weight":0.28271484443440786},{"text":"电影","weight":0.9614233197608802},{"text":"战场","weight":0.20596897452658292},{"text":"战争片","weight":0.29870406368884167},{"text":"故事","weight":0.09409424160398601},{"text":"战争场面","weight":0.3377555413744665},{"text":"男主","weight":0.3104892973748979},{"text":"主角","weight":0.23341459709435905},{"text":"人性","weight":0.12663051364319317},{"text":"宗教","weight":0.13462688851902924},{"text":"剧情","weight":0.05168354882951391},{"text":"影片","weight":0.06942247023423727},{"text":"主旋律","weight":0.032779045122828226},{"text":"场面","weight":0.13735208248099964},{"text":"救人","weight":0.16595567217599283},{"text":"镜头","weight":0.12287611954990597},{"text":"人物","weight":0.14671581601418132},{"text":"上帝","weight":0.10370311529566555},{"text":"宗教信仰","weight":0.13054813267600635},{"text":"女主","weight":0.09926275409069968},{"text":"力量","weight":0.02159888904420386},{"text":"鬼子","weight":0.028393919719062258},{"text":"价值观","weight":0.027569121603970806},{"text":"真人","weight":0.07536809380416434},{"text":"感人","weight":0.05525626699758379},{"text":"主题","weight":0.11359570531361247},{"text":"爱情","weight":0.07316304975198974},{"text":"铺垫","weight":0.006124468854667162},{"text":"观众","weight":0.12039625966641408},{"text":"小时","weight":0.04289945096326399},{"text":"画面","weight":0.02342407925092557},{"text":"精神","weight":0.11127202036923192},{"text":"结尾","weight":0.04456118903074871},{"text":"热血","weight":0.09266294327344224},{"text":"","weight":null}];


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
        
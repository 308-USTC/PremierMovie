
 var infor = {"content":[{"name":"name","value":"拆弹专家"},{"name":"导演","value":"邱礼涛,"},{"name":"编剧","value":null},{"name":"主演","value":"刘德华,姜武,宋佳,"},{"name":"类型","value":"动作,悬疑,犯罪,"},{"name":"上映日期","value":"2017-04-28(中国大陆),"},{"name":"summary","value":"最新警匪动作电影《拆弹专家》（Shock Wave）将于4月份开拍，刘德华担任制作人和主演，由寰宇公司、博纳影业和刘德华的新公司梦造者联合制作，邱礼涛担任导演，投资2300万美元。片中刘德华将饰演一名卧底，追缉炸弹狂徒。预计将在2017年中期上映。之前该片曾曝出的阵容为张家辉、谢霆锋（反派）、张智霖。"},{"name":"评分","value":null},{"name":"image","value":"https://img5.doubanio.com/view/movie_poster_cover/lpst/public/p2426893016.jpg"},{"name":"id","value":"26748673"}]}
 
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

        var word_list = [{"text":"细腻","weight":0.3184304002740259},{"text":"平淡","weight":0.0009167235467582436},{"text":"善良","weight":0.28528747925679465},{"text":"沉闷","weight":0.461031402946167},{"text":"惊悚","weight":0.4981728558731658},{"text":"焦虑","weight":0.6600447249236729},{"text":"伤害","weight":0.3933511475604597},{"text":"很小","weight":0.3125220584738052},{"text":"落后","weight":0.037535549210025346},{"text":"幽默","weight":0.2763031923870039},{"text":"微妙","weight":0.3705931040326869},{"text":"不安","weight":0.0947968574239204},{"text":"尊严","weight":0.20915651973011107},{"text":"平凡","weight":0.3423216987247408},{"text":"悲伤","weight":0.07233646708227019},{"text":"尊重","weight":0.11966281428259738},{"text":"完美","weight":0.1418680520244086},{"text":"羞耻","weight":0.34158054225491563},{"text":"歡喜","weight":0.1002687160532717},{"text":"细微","weight":0.2237569028873078},{"text":"隐晦","weight":0.021417465696199223},{"text":"幸福","weight":0.3343738130308777},{"text":"犀利","weight":0.1479227396537666},{"text":"模糊","weight":0.35006808953303936},{"text":"揪心","weight":0.3172016630597874},{"text":"琐碎","weight":0.19818065406923022},{"text":"扎实","weight":0.23047933401298176},{"text":"巧妙","weight":0.37501355296552624},{"text":"尴尬","weight":0.3204383570815952},{"text":"无聊","weight":0.1944184950187865},{"text":"可悲","weight":0.221421089564164},{"text":"不急","weight":0.10184285198555583},{"text":"不慢","weight":0.3607980285566168},{"text":"有趣","weight":0.4047905541124754},{"text":"强大","weight":0.18860361263831252},{"text":"电影","weight":0.1116204824879178},{"text":"社会","weight":0.1323518702331048},{"text":"故事","weight":0.17846768377051336},{"text":"男主","weight":0.39423032903284333},{"text":"推销员","weight":0.005401900731379607},{"text":"困境","weight":0.11935583588548702},{"text":"妻子","weight":0.2476734170201388},{"text":"人性","weight":0.08008896753861047},{"text":"剧本","weight":0.12133046273915471},{"text":"剧情","weight":0.29698592352595343},{"text":"家庭","weight":0.12159478028957839},{"text":"戏中戏","weight":0.28993566791223113},{"text":"文化","weight":0.046055641728403963},{"text":"剧作","weight":0.036092069528937856},{"text":"关系","weight":0.13391508685126893},{"text":"现实","weight":0.24877871781809266},{"text":"女性","weight":0.09875285837755977},{"text":"宗教","weight":0.1446922852621118},{"text":"情感","weight":0.028710818429136278},{"text":"角色","weight":0.09801874348516774},{"text":"老头","weight":0.009600476775426504},{"text":"结尾","weight":0.21718338595771458},{"text":"人物","weight":0.05134955829893038},{"text":"互文","weight":0.17597715470625244},{"text":"戏剧","weight":0.1444513895165742},{"text":"细节","weight":0.039302723263912945},{"text":"影片","weight":0.15849202783787936},{"text":"观众","weight":0.05371297343169304},{"text":"情绪","weight":0.14430405516846426},{"text":"事件","weight":0.06686968308838022},{"text":"演员","weight":0.16541148939146758},{"text":"镜头","weight":0.17074388152987124},{"text":"精彩","weight":0.04351056256897728},{"text":"情节","weight":0.14236063764552326},{"text":"丈夫","weight":0.12599087443889687},{"text":"","weight":null}];


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
        
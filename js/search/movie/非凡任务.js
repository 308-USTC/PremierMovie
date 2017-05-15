
 var infor = {"content":[{"name":"name","value":"非凡任务"},{"name":"导演","value":""},{"name":"编剧"},{"name":"主演","value":""},{"name":"类型","value":""},{"name":"上映日期"},{"name":"summary"},{"name":"评分","value":""},{"name":"image"},{"name":"id"}]}
 
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

        var word_list = [{"text":"细腻","weight":0.7506050458275069},{"text":"平淡","weight":0.6522517886519547},{"text":"善良","weight":0.06359694056288352},{"text":"沉闷","weight":0.5156116616538887},{"text":"惊悚","weight":0.3433881581348524},{"text":"焦虑","weight":0.27894434966510046},{"text":"伤害","weight":0.35576607624470513},{"text":"很小","weight":0.16527667573452273},{"text":"落后","weight":0.0024546726013298017},{"text":"幽默","weight":0.04850781163095593},{"text":"微妙","weight":0.35684309797989144},{"text":"不安","weight":0.2523386947546},{"text":"尊严","weight":0.052613595874939786},{"text":"平凡","weight":0.13816759537545573},{"text":"悲伤","weight":0.15877686447732256},{"text":"尊重","weight":0.3984639765613487},{"text":"完美","weight":0.09144419045192637},{"text":"羞耻","weight":0.3980279268800808},{"text":"歡喜","weight":0.35103236268399785},{"text":"细微","weight":0.1352671977486014},{"text":"隐晦","weight":0.17616072958039156},{"text":"幸福","weight":0.366085813444103},{"text":"犀利","weight":0.0012446889990800876},{"text":"模糊","weight":0.3972140892907399},{"text":"揪心","weight":0.018159508896176728},{"text":"琐碎","weight":0.3914994919214849},{"text":"扎实","weight":0.11489102026875549},{"text":"巧妙","weight":0.30477933822953046},{"text":"尴尬","weight":0.016480013295313165},{"text":"无聊","weight":0.11426181894346953},{"text":"可悲","weight":0.248039080093615},{"text":"不急","weight":0.11314603860071427},{"text":"不慢","weight":0.005718994828860857},{"text":"有趣","weight":0.32004559979507974},{"text":"强大","weight":0.17465655253050946},{"text":"电影","weight":0.03366166764802775},{"text":"社会","weight":0.13396967501583218},{"text":"故事","weight":0.4534351331298565},{"text":"男主","weight":0.13257835768591963},{"text":"推销员","weight":0.26089015723514264},{"text":"困境","weight":0.278969268072937},{"text":"妻子","weight":0.24394076251348748},{"text":"人性","weight":0.27048511735683983},{"text":"剧本","weight":0.05219878198547905},{"text":"剧情","weight":0.17778955597511442},{"text":"家庭","weight":0.24481425231826748},{"text":"戏中戏","weight":0.10365205254253003},{"text":"文化","weight":0.0361740169250727},{"text":"剧作","weight":0.04226736610130489},{"text":"关系","weight":0.25015110281365105},{"text":"现实","weight":0.16223331915649705},{"text":"女性","weight":0.09340451143411277},{"text":"宗教","weight":0.1935158187761244},{"text":"情感","weight":0.1350171425130056},{"text":"角色","weight":0.2153319373341497},{"text":"老头","weight":0.02380361440462038},{"text":"结尾","weight":0.03183017555062085},{"text":"人物","weight":0.1993586009617137},{"text":"互文","weight":0.033414700926739295},{"text":"戏剧","weight":0.16329277041276022},{"text":"细节","weight":0.1189873530992737},{"text":"影片","weight":0.06850318152250541},{"text":"观众","weight":0.08706636351799471},{"text":"情绪","weight":0.14811619494699202},{"text":"事件","weight":0.1477546364541877},{"text":"演员","weight":0.01149083405228613},{"text":"镜头","weight":0.04388798708723011},{"text":"精彩","weight":0.040857397888789594},{"text":"情节","weight":0.009216594743511978},{"text":"丈夫","weight":0.10667549924834664},{"text":"","weight":null}];


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
        
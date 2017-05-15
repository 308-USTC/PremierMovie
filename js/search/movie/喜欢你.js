
 var infor = {"content":[{"name":"name","value":"喜欢你"},{"name":"导演","value":""},{"name":"编剧"},{"name":"主演","value":""},{"name":"类型","value":""},{"name":"上映日期"},{"name":"summary"},{"name":"评分","value":""},{"name":"image"},{"name":"id"}]}
 
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

        var word_list = [{"text":"细腻","weight":0.6419305152203008},{"text":"平淡","weight":0.31686409093492884},{"text":"善良","weight":0.3091300093309291},{"text":"沉闷","weight":0.06956756387985803},{"text":"惊悚","weight":0.3754368075901698},{"text":"焦虑","weight":0.10239361590925951},{"text":"伤害","weight":0.0033229475693768848},{"text":"很小","weight":0.00592812358296532},{"text":"落后","weight":0.5592400491151756},{"text":"幽默","weight":0.07914939703496154},{"text":"微妙","weight":0.41711390632293566},{"text":"不安","weight":0.24828452109662325},{"text":"尊严","weight":0.15656698183649778},{"text":"平凡","weight":0.29322833926223274},{"text":"悲伤","weight":0.043642591670073616},{"text":"尊重","weight":0.33544176803048525},{"text":"完美","weight":0.0872781100663542},{"text":"羞耻","weight":0.1836467714763566},{"text":"歡喜","weight":0.17218604798861153},{"text":"细微","weight":0.35686529489774305},{"text":"隐晦","weight":0.08955654302119194},{"text":"幸福","weight":0.24397947847579454},{"text":"犀利","weight":0.3146532082127584},{"text":"模糊","weight":0.13625995728113466},{"text":"揪心","weight":0.11227809768281075},{"text":"琐碎","weight":0.4110261849420145},{"text":"扎实","weight":0.030446161084788977},{"text":"巧妙","weight":0.11375405107958093},{"text":"尴尬","weight":0.3202536170928859},{"text":"无聊","weight":0.08306942674746215},{"text":"可悲","weight":0.23465143810695624},{"text":"不急","weight":0.03136032725990585},{"text":"不慢","weight":0.19379146958002574},{"text":"有趣","weight":0.261929948941101},{"text":"强大","weight":0.28370965880835736},{"text":"电影","weight":0.4151411675227583},{"text":"社会","weight":0.10998185359518048},{"text":"故事","weight":0.3459035722963217},{"text":"男主","weight":0.09484842870667427},{"text":"推销员","weight":0.10075253292328441},{"text":"困境","weight":0.03377551541158577},{"text":"妻子","weight":0.31194082389644173},{"text":"人性","weight":0.16441861730307725},{"text":"剧本","weight":0.2431133332941628},{"text":"剧情","weight":0.20074092915441766},{"text":"家庭","weight":0.21736820183934677},{"text":"戏中戏","weight":0.04132631640858798},{"text":"文化","weight":0.17303889319184698},{"text":"剧作","weight":0.19903523290953},{"text":"关系","weight":0.23731218206205665},{"text":"现实","weight":0.16415165039935786},{"text":"女性","weight":0.22500210386488428},{"text":"宗教","weight":0.18889624526440177},{"text":"情感","weight":0.03590997646290658},{"text":"角色","weight":0.030941587330032376},{"text":"老头","weight":0.00822692937702064},{"text":"结尾","weight":0.02800939886066303},{"text":"人物","weight":0.07154388665034549},{"text":"互文","weight":0.040972969373269844},{"text":"戏剧","weight":0.04228691997734406},{"text":"细节","weight":0.03016769420885883},{"text":"影片","weight":0.16315368378008688},{"text":"观众","weight":0.065541686822451},{"text":"情绪","weight":0.10769692023019585},{"text":"事件","weight":0.004953490523182427},{"text":"演员","weight":0.05579837644091737},{"text":"镜头","weight":0.13749573189512707},{"text":"精彩","weight":0.1206169554867255},{"text":"情节","weight":0.1362880335719992},{"text":"丈夫","weight":0.15922995447319513},{"text":"","weight":null}];


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
        
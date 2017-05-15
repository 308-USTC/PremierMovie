
 var infor = {"content":[{"name":"name","value":"摔跤吧！爸爸"},{"name":"导演","value":""},{"name":"编剧"},{"name":"主演","value":""},{"name":"类型","value":""},{"name":"上映日期"},{"name":"summary"},{"name":"评分","value":""},{"name":"image"},{"name":"id"}]}
 
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

        var word_list = [{"text":"细腻","weight":0.49135787562334715},{"text":"平淡","weight":0.49429923222184174},{"text":"善良","weight":0.435622769010331},{"text":"沉闷","weight":0.34959336994086376},{"text":"惊悚","weight":0.3272448069639541},{"text":"焦虑","weight":0.38189468791402714},{"text":"伤害","weight":0.46154656406399386},{"text":"很小","weight":0.3852748207359462},{"text":"落后","weight":0.31636692617532364},{"text":"幽默","weight":0.32651651077921134},{"text":"微妙","weight":0.30220519834568893},{"text":"不安","weight":0.31445365102033435},{"text":"尊严","weight":0.3371775209618675},{"text":"平凡","weight":0.18555010612139358},{"text":"悲伤","weight":0.16573529838910586},{"text":"尊重","weight":0.03628389122338658},{"text":"完美","weight":0.3629191637046762},{"text":"羞耻","weight":0.2509162483955847},{"text":"歡喜","weight":0.23206213643224452},{"text":"细微","weight":0.34984254462720166},{"text":"隐晦","weight":0.1934678447144887},{"text":"幸福","weight":0.02133123282999025},{"text":"犀利","weight":0.044606527584945474},{"text":"模糊","weight":0.35990891146836346},{"text":"揪心","weight":0.3264965563961175},{"text":"琐碎","weight":0.01723220386538787},{"text":"扎实","weight":0.07225174485542656},{"text":"巧妙","weight":0.09316139045725015},{"text":"尴尬","weight":0.027575655549058862},{"text":"无聊","weight":0.3606191386657942},{"text":"可悲","weight":0.20303404478485648},{"text":"不急","weight":0.18267395664539685},{"text":"不慢","weight":0.4008396447546764},{"text":"有趣","weight":0.3035939003802455},{"text":"强大","weight":0.15842280318755933},{"text":"电影","weight":0.3793720788022791},{"text":"社会","weight":0.46248694713901434},{"text":"故事","weight":0.3016020275365901},{"text":"男主","weight":0.1829006432643166},{"text":"推销员","weight":0.05022058853971454},{"text":"困境","weight":0.11190746514046236},{"text":"妻子","weight":0.0837929543839243},{"text":"人性","weight":0.22958639747139364},{"text":"剧本","weight":0.13169915700726248},{"text":"剧情","weight":0.3049601767978529},{"text":"家庭","weight":0.12303282824662644},{"text":"戏中戏","weight":0.16646613106160338},{"text":"文化","weight":0.2558048517160122},{"text":"剧作","weight":0.0955078304276132},{"text":"关系","weight":0.23658810706472236},{"text":"现实","weight":0.23156933313396844},{"text":"女性","weight":0.19009546587315757},{"text":"宗教","weight":0.20367482510556775},{"text":"情感","weight":0.14048400721699553},{"text":"角色","weight":0.07543013375866935},{"text":"老头","weight":0.11410713604176737},{"text":"结尾","weight":0.016301910094234567},{"text":"人物","weight":0.19061351717487776},{"text":"互文","weight":0.09508710849658851},{"text":"戏剧","weight":0.20030476362955862},{"text":"细节","weight":0.13908647863044796},{"text":"影片","weight":0.0479887890814156},{"text":"观众","weight":0.12555322323174264},{"text":"情绪","weight":0.06792657217407251},{"text":"事件","weight":0.08351946859584251},{"text":"演员","weight":0.15007543207252136},{"text":"镜头","weight":0.158514155426343},{"text":"精彩","weight":0.0041689422236501706},{"text":"情节","weight":0.1464901395947645},{"text":"丈夫","weight":0.09428352811041774},{"text":"","weight":null}];


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
        
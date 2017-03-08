
 var infor = {"content":[{"name":"name","value":"王牌对王牌第一季"},{"name":"主演","value":"王祖蓝 白百何 "},{"name":"类型","value":"真人秀"},{"name":"国家/地区","value":"中国大陆"},{"name":"开播日期","value":"2016"},{"name":"summary","value":"《王牌对王牌》是浙江卫视2016年第一季度全新打造的大型棚内明星艺能成长类节目。近日，浙江卫视首度正式曝光了明年的版面编排，四个季度累计的季播节目多达22档以上，当属卫视之冠。其中第一季度更是周末三天全部叠播编排，每周累计7档季播节目。而明年的第一季度将由《王牌对王牌》和《二十四小时》两档节目叠播填充，《王牌对王牌》节目模式为“中国最红王牌队员对决”。"},{"name":"评分","value":5},{"name":"image","value":"https://img5.doubanio.com/view/movie_poster_cover/lpst/public/p2311215416.jpg"},{"name":"id","value":"26694902"}]}
 
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

        var word_list = [{"text":"简单","weight":1.1554432563151118},{"text":"善良","weight":0.5575666517386001},{"text":"有趣","weight":0.642837460510588},{"text":"舒服","weight":0.41313895238132164},{"text":"尴尬","weight":0.32860960856179827},{"text":"一星","weight":0.5655130087187851},{"text":"干净","weight":0.39221522150295957},{"text":"清新","weight":0.4320695169288514},{"text":"懒懒","weight":0.11694895061047324},{"text":"不错","weight":0.6111660303650783},{"text":"幽默","weight":0.5047910975210642},{"text":"无聊","weight":0.21866653527924312},{"text":"辛苦","weight":0.682336873197211},{"text":"轻松","weight":0.556964071928735},{"text":"挺好","weight":0.3112968962601263},{"text":"平淡","weight":0.036576142577408516},{"text":"和谐","weight":0.4832765773086981},{"text":"幸福","weight":0.31135449456376385},{"text":"浮躁","weight":0.22686598272309663},{"text":"庸俗","weight":0.47957453927841676},{"text":"最气","weight":0.21510727934314083},{"text":"最恨","weight":0.14770117638683722},{"text":"真诚","weight":0.42981491767607594},{"text":"爱和","weight":0.29503645036833387},{"text":"乐趣","weight":0.4078893258439569},{"text":"很好","weight":0.29189342214624353},{"text":"年轻","weight":0.4221933473264521},{"text":"诚恳","weight":0.1207854064423372},{"text":"艰辛","weight":0.0884896855997924},{"text":"活好","weight":0.35403855109002935},{"text":"快乐","weight":0.3226229029807866},{"text":"美好","weight":0.3778991453632555},{"text":"疯狂","weight":0.22868638020097534},{"text":"纯美","weight":0.28832640226412554},{"text":"精致","weight":0.3260429421289159},{"text":"节目","weight":0.08954355201468807},{"text":"老师","weight":0.7584570352578656},{"text":"综艺","weight":0.2936629251446719},{"text":"版权","weight":0.11449691750330562},{"text":"农村","weight":0.23174428161669988},{"text":"小厨","weight":0.04891180483488782},{"text":"做菜","weight":0.01894873577813677},{"text":"广告","weight":0.117278518549512},{"text":"观众","weight":0.08271333134379437},{"text":"原创","weight":0.06431881304653952},{"text":"原版","weight":0.13140487588038047},{"text":"样子","weight":0.13759401553290143},{"text":"爸爸","weight":0.10823528901661539},{"text":"儿子","weight":0.01249797917605293},{"text":"姑娘","weight":0.11375536983960663},{"text":"评论","weight":0.09914962075753202},{"text":"房子","weight":0.07102866626576836},{"text":"评分","weight":0.0036276775975858707},{"text":"人生","weight":0.04308566045877881},{"text":"学生","weight":0.06808781548731062},{"text":"动物","weight":0.08676559380730525},{"text":"国产","weight":0.013909182288699824},{"text":"类型","weight":0.05069214340974762},{"text":"自带","weight":0.03147803594469886},{"text":"朋友","weight":0.07124585361097219},{"text":"塑料","weight":0.07357246552531894},{"text":"智商","weight":0.08283376029647654},{"text":"全程","weight":0.07681235916570762},{"text":"内容","weight":0.03708605797230569},{"text":"垃圾","weight":0.03935386195720707},{"text":"芒果","weight":0.06597039519149901},{"text":"太重","weight":0.04110739775287603},{"text":"一星","weight":0.0020058981258037705},{"text":"时代","weight":0.025464811260709166},{"text":"画面","weight":0.0028251513899599586},{"text":"","weight":null}];


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
        
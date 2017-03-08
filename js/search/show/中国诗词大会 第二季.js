
 var infor = {"content":[{"name":"name","value":"中国诗词大会 第二季"},{"name":"主演","value":"董卿 康震 王立群 蒙曼 "},{"name":"类型","value":"真人秀"},{"name":"国家/地区","value":"中国大陆"},{"name":"开播日期","value":"2017"},{"name":"summary","value":"《中国诗词大会》（第二季）是科教频道自主研发的一档大型演播室季播节目。本节目以“赏中华诗词、寻文化基因、品生活之美”为宗旨，邀请全国各个年龄段、各个领域的诗词爱好者共同参与诗词知识比拼。"},{"name":"评分","value":8.5},{"name":"image","value":"https://img3.doubanio.com/view/movie_poster_cover/lpst/public/p2418525053.jpg"},{"name":"id","value":"26963073"}]}
 
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

        var word_list = [{"text":"简单","weight":1.0898265441368369},{"text":"善良","weight":1.2527441384110891},{"text":"有趣","weight":0.1998631106326021},{"text":"舒服","weight":0.358126447594786},{"text":"尴尬","weight":0.26374473451110375},{"text":"一星","weight":0.014519482773138564},{"text":"干净","weight":0.6236489674441719},{"text":"清新","weight":0.6862781086784716},{"text":"懒懒","weight":0.3536519734470247},{"text":"不错","weight":0.4896966345079549},{"text":"幽默","weight":0.3183514367284932},{"text":"无聊","weight":0.06505861870629959},{"text":"辛苦","weight":0.592179886706009},{"text":"轻松","weight":0.41679158705856795},{"text":"挺好","weight":0.4987424718324969},{"text":"平淡","weight":0.14331961826666612},{"text":"和谐","weight":0.1614049919860966},{"text":"幸福","weight":0.16835848248691884},{"text":"浮躁","weight":0.20791778615272022},{"text":"庸俗","weight":0.23384383726404695},{"text":"最气","weight":0.47543472991288777},{"text":"最恨","weight":0.2733239825502604},{"text":"真诚","weight":0.1966076719243014},{"text":"爱和","weight":0.07946630469724275},{"text":"乐趣","weight":0.4295313835062285},{"text":"很好","weight":0.44157866046612426},{"text":"年轻","weight":0.18287038104549364},{"text":"诚恳","weight":0.09655565644776659},{"text":"艰辛","weight":0.10368386916443166},{"text":"活好","weight":0.30160114185578507},{"text":"快乐","weight":0.3682298807177239},{"text":"美好","weight":0.17118625843411955},{"text":"疯狂","weight":0.04592704046618605},{"text":"纯美","weight":0.3532976896825146},{"text":"精致","weight":0.2975012967927683},{"text":"节目","weight":1.0569916935628827},{"text":"老师","weight":1.1395852941280011},{"text":"综艺","weight":0.3452505779562581},{"text":"版权","weight":0.062274405153821974},{"text":"农村","weight":0.13273871393294137},{"text":"小厨","weight":0.19276974705698266},{"text":"做菜","weight":0.085641795307803},{"text":"广告","weight":0.13521546601202847},{"text":"观众","weight":0.10654933810229088},{"text":"原创","weight":0.027385486443020735},{"text":"原版","weight":0.15098724200153119},{"text":"样子","weight":0.07710753131467953},{"text":"爸爸","weight":0.09270144956702603},{"text":"儿子","weight":0.01750477745199049},{"text":"姑娘","weight":0.08323483343086088},{"text":"评论","weight":0.08743536468786872},{"text":"房子","weight":0.0033212614184839986},{"text":"评分","weight":0.049365422158033884},{"text":"人生","weight":0.02511455850356682},{"text":"学生","weight":0.08736902203503039},{"text":"动物","weight":0.022166957198890294},{"text":"国产","weight":0.09061655356544052},{"text":"类型","weight":0.0596683336017412},{"text":"自带","weight":0.07689967630057613},{"text":"朋友","weight":0.056335039896156416},{"text":"塑料","weight":0.1085189532478258},{"text":"智商","weight":0.03245304146980985},{"text":"全程","weight":0.016243478806137912},{"text":"内容","weight":0.09583819552586703},{"text":"垃圾","weight":0.058505182712638104},{"text":"芒果","weight":0.10114660393094936},{"text":"太重","weight":0.0677371208265968},{"text":"一星","weight":0.05874122209552739},{"text":"时代","weight":0.08104771141990341},{"text":"画面","weight":0.04393595148909339},{"text":"","weight":null}];


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
        
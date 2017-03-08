
 var infor = {"content":[{"name":"name","value":"中国成语大会 第二季"},{"name":"主演","value":"张腾岳 蒋方舟 余世存 郦波 "},{"name":"类型","value":"真人秀"},{"name":"国家/地区","value":"中国大陆"},{"name":"开播日期","value":"2015"},{"name":"summary","value":"《中国成语大会》是继《中国汉字听写大会》之后，又一档重大影响力大型电视文化节目，于2014年4月18日起登陆央视。每周五晚20:00CCTV-10科教频道播出。是中央电视台2014年的重点节目，是实力传媒推出的第二档原创形态的电视节目创新品种。"},{"name":"评分","value":9.4},{"name":"image","value":"https://img3.doubanio.com/view/movie_poster_cover/lpst/public/p2318834011.jpg"},{"name":"id","value":"26696653"}]}
 
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

        var word_list = [{"text":"简单","weight":0.8989928041190437},{"text":"善良","weight":1.1723383736801936},{"text":"有趣","weight":0.39118624899414356},{"text":"舒服","weight":0.18594811769007916},{"text":"尴尬","weight":0.3480894349642187},{"text":"一星","weight":0.5554055549025324},{"text":"干净","weight":0.49688639663578577},{"text":"清新","weight":0.1802035422998569},{"text":"懒懒","weight":0.24837014459718193},{"text":"不错","weight":0.6521940160009847},{"text":"幽默","weight":0.3185435468815347},{"text":"无聊","weight":0.1401149289764462},{"text":"辛苦","weight":0.21286580509822614},{"text":"轻松","weight":0.3825482800996957},{"text":"挺好","weight":0.5452826735188039},{"text":"平淡","weight":0.19711227459296132},{"text":"和谐","weight":0.24502446404565137},{"text":"幸福","weight":0.05041017074236742},{"text":"浮躁","weight":0.11612656840420439},{"text":"庸俗","weight":0.04500648796768946},{"text":"最气","weight":0.16166031336966208},{"text":"最恨","weight":0.07355730469643217},{"text":"真诚","weight":0.21345350328957188},{"text":"爱和","weight":0.4215341696882466},{"text":"乐趣","weight":0.1742958674687838},{"text":"很好","weight":0.47053339775887837},{"text":"年轻","weight":0.20535381565874816},{"text":"诚恳","weight":0.41476845717193017},{"text":"艰辛","weight":0.24594576366375664},{"text":"活好","weight":0.1335589078379356},{"text":"快乐","weight":0.025061112148585342},{"text":"美好","weight":0.29702106249257776},{"text":"疯狂","weight":0.09818987588656819},{"text":"纯美","weight":0.15957802208728628},{"text":"精致","weight":0.10670346550941832},{"text":"节目","weight":0.1497316543624155},{"text":"老师","weight":0.1414418179743831},{"text":"综艺","weight":0.22461031144804955},{"text":"版权","weight":0.18621274594766918},{"text":"农村","weight":0.35111449769438297},{"text":"小厨","weight":0.15217552152366098},{"text":"做菜","weight":0.003954840576024036},{"text":"广告","weight":0.009116495430803749},{"text":"观众","weight":0.028755868835321986},{"text":"原创","weight":0.07716654934810128},{"text":"原版","weight":0.08411734479396099},{"text":"样子","weight":0.012735883904790392},{"text":"爸爸","weight":0.1535587901198824},{"text":"儿子","weight":0.05356141919355752},{"text":"姑娘","weight":0.12699138240041732},{"text":"评论","weight":0.09408058806730682},{"text":"房子","weight":0.13020016598800038},{"text":"评分","weight":0.10250175113318663},{"text":"人生","weight":0.09194486328969811},{"text":"学生","weight":0.03774526722975828},{"text":"动物","weight":0.09788835029569402},{"text":"国产","weight":0.05029501127435516},{"text":"类型","weight":0.024691783873745717},{"text":"自带","weight":0.09458635875089315},{"text":"朋友","weight":0.012079395073879744},{"text":"塑料","weight":0.03816099917446856},{"text":"智商","weight":0.0798405651801106},{"text":"全程","weight":0.058789041726950285},{"text":"内容","weight":0.02573642999695276},{"text":"垃圾","weight":0.10368612999084895},{"text":"芒果","weight":0.03698183931034101},{"text":"太重","weight":0.0830712808795468},{"text":"一星","weight":0.10756605018974484},{"text":"时代","weight":0.02939717480415399},{"text":"画面","weight":0.06404849857353238},{"text":"","weight":null}];


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
        
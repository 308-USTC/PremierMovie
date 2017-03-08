
 var infor = {"content":[{"name":"name","value":"极限挑战 第三季"},{"name":"主演","value":"黄渤 孙红雷 黄磊 罗志祥 "},{"name":"类型","value":"真人秀"},{"name":"国家/地区","value":"中国大陆"},{"name":"开播日期","value":"2017"},{"name":"summary","value":"极限挑战第二季收官，并表示极限挑战第三季将于明年到来 。"},{"name":"评分","value":0},{"name":"image","value":"https://img5.doubanio.com/view/movie_poster_cover/lpst/public/p2425070196.jpg"},{"name":"id","value":"26830087"}]}
 
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

        var word_list = [{"text":"简单","weight":1.1770044678626044},{"text":"善良","weight":1.0799657703355379},{"text":"有趣","weight":0.4226782012296076},{"text":"舒服","weight":0.4783609323256672},{"text":"尴尬","weight":0.5829795272115785},{"text":"一星","weight":0.7301835098123922},{"text":"干净","weight":0.18263269321527809},{"text":"清新","weight":0.46633011677589764},{"text":"懒懒","weight":0.2387200611221347},{"text":"不错","weight":0.057875180799733736},{"text":"幽默","weight":0.2619508663312991},{"text":"无聊","weight":0.6765389247189287},{"text":"辛苦","weight":0.318185797999516},{"text":"轻松","weight":0.5391818890856064},{"text":"挺好","weight":0.28938707179469336},{"text":"平淡","weight":0.06996732284273842},{"text":"和谐","weight":0.2599947360858713},{"text":"幸福","weight":0.4293249429244178},{"text":"浮躁","weight":0.010021239326189233},{"text":"庸俗","weight":0.25320633271412113},{"text":"最气","weight":0.26308515187065734},{"text":"最恨","weight":0.05717190184833234},{"text":"真诚","weight":0.49091448282454625},{"text":"爱和","weight":0.4445679726759046},{"text":"乐趣","weight":0.3429603641360193},{"text":"很好","weight":0.3304346115693596},{"text":"年轻","weight":0.0909767856961061},{"text":"诚恳","weight":0.26678390754968156},{"text":"艰辛","weight":0.5154740294963198},{"text":"活好","weight":0.12589841681026018},{"text":"快乐","weight":0.1011112704702919},{"text":"美好","weight":0.37965791962866097},{"text":"疯狂","weight":0.18477533854205927},{"text":"纯美","weight":0.21273794064994522},{"text":"精致","weight":0.011176869251939047},{"text":"节目","weight":0.9509799156920854},{"text":"老师","weight":1.1549990776575423},{"text":"综艺","weight":1.0597098834518557},{"text":"版权","weight":0.1180774141266806},{"text":"农村","weight":0.29245968524834143},{"text":"小厨","weight":0.19857357978843457},{"text":"做菜","weight":0.09595261972133702},{"text":"广告","weight":0.12995145027611169},{"text":"观众","weight":0.13156454020657196},{"text":"原创","weight":0.022801008896900496},{"text":"原版","weight":0.025625659831779748},{"text":"样子","weight":0.015554639902526616},{"text":"爸爸","weight":0.07445841560983539},{"text":"儿子","weight":0.11068261301238365},{"text":"姑娘","weight":0.006177649054938568},{"text":"评论","weight":0.11573436774705576},{"text":"房子","weight":0.11476759654778759},{"text":"评分","weight":0.05174359436953125},{"text":"人生","weight":0.017928591737013354},{"text":"学生","weight":0.040687855323240235},{"text":"动物","weight":0.027939114211243562},{"text":"国产","weight":0.10424702302132093},{"text":"类型","weight":0.06177349452848685},{"text":"自带","weight":0.03002547445679012},{"text":"朋友","weight":0.06475702034087476},{"text":"塑料","weight":0.08904169081249329},{"text":"智商","weight":0.0005514955948256976},{"text":"全程","weight":0.07422625476164303},{"text":"内容","weight":0.06447213614232365},{"text":"垃圾","weight":0.07868079292651074},{"text":"芒果","weight":0.0771276810384973},{"text":"太重","weight":0.1044562263292389},{"text":"一星","weight":0.07376905196058568},{"text":"时代","weight":0.08418861848309309},{"text":"画面","weight":0.050914064450955684},{"text":"","weight":null}];


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
        

 var infor = {"content":[{"name":"name","value":"跨界歌王 第一季"},{"name":"主演","value":"高晓松 宋柯 刘涛 王凯 "},{"name":"类型","value":"音乐 真人秀"},{"name":"国家/地区","value":"中国大陆"},{"name":"开播日期","value":"2016"},{"name":"summary","value":"《跨界歌王》 是北京电视台倾全台之力重磅推出的首档大型明星跨界音乐节目，将于2016年5月28日开始，在北京卫视每周六21:18播出。《跨界歌王》旨在突破固有的娱乐边界，汇集了活跃在影视、娱乐等领域的众多重量级当红明星。他们在各自的领域成就斐然，却都曾拥有音乐的梦想。在《跨界歌王》的舞台上，他们将重拾音乐之梦，展现鲜为人知且令观众惊艳的音乐才华，争夺年度“跨界歌王”的殊荣。"},{"name":"评分","value":5.2},{"name":"image","value":"https://img1.doubanio.com/view/movie_poster_cover/lpst/public/p2359221058.jpg"},{"name":"id","value":"26802921"}]}
 
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

        var word_list = [{"text":"简单","weight":0.3491072627766332},{"text":"善良","weight":0.09877802781735721},{"text":"有趣","weight":0.36765045428247634},{"text":"舒服","weight":0.008959449506348144},{"text":"尴尬","weight":0.6740098917425341},{"text":"一星","weight":0.19195305649027933},{"text":"干净","weight":0.0983401543490843},{"text":"清新","weight":0.6062855301301264},{"text":"懒懒","weight":0.1714276012982881},{"text":"不错","weight":0.5613800940582669},{"text":"幽默","weight":0.1774380464601748},{"text":"无聊","weight":0.34602621248055015},{"text":"辛苦","weight":0.13129975907033978},{"text":"轻松","weight":0.1458208935559454},{"text":"挺好","weight":0.27927614359029146},{"text":"平淡","weight":0.29952230426286897},{"text":"和谐","weight":0.2700275385160881},{"text":"幸福","weight":0.16089224757467102},{"text":"浮躁","weight":0.2816634831173913},{"text":"庸俗","weight":0.40129808667797323},{"text":"最气","weight":0.41123282590699384},{"text":"最恨","weight":0.07762638444417057},{"text":"真诚","weight":0.16912490428953486},{"text":"爱和","weight":0.49531037322567106},{"text":"乐趣","weight":0.2595265280199167},{"text":"很好","weight":0.494861107892589},{"text":"年轻","weight":0.025064991605825725},{"text":"诚恳","weight":0.49818203924961124},{"text":"艰辛","weight":0.19973491250489195},{"text":"活好","weight":0.27198012213493894},{"text":"快乐","weight":0.15318336048944964},{"text":"美好","weight":0.4713016640072803},{"text":"疯狂","weight":0.3838974950968503},{"text":"纯美","weight":0.13700845385867705},{"text":"精致","weight":0.15780287578738716},{"text":"节目","weight":0.4126820460844628},{"text":"老师","weight":0.2436475095192341},{"text":"综艺","weight":0.545171804152613},{"text":"版权","weight":0.0009036316669670675},{"text":"农村","weight":0.3455719313845292},{"text":"小厨","weight":0.1269875296525709},{"text":"做菜","weight":0.033423475588893165},{"text":"广告","weight":0.05756268144816489},{"text":"观众","weight":0.15924242840371908},{"text":"原创","weight":0.10932201808278036},{"text":"原版","weight":0.12237543558958922},{"text":"样子","weight":0.13734491625732376},{"text":"爸爸","weight":0.0034415210975133606},{"text":"儿子","weight":0.059463925067651184},{"text":"姑娘","weight":0.09255924610095191},{"text":"评论","weight":0.03715469712079739},{"text":"房子","weight":0.09761868951211504},{"text":"评分","weight":0.11537564565392176},{"text":"人生","weight":0.05944326162459245},{"text":"学生","weight":0.09340593273468087},{"text":"动物","weight":0.06432474060768541},{"text":"国产","weight":0.12219362303809929},{"text":"类型","weight":0.10521683205708267},{"text":"自带","weight":0.11591141101078728},{"text":"朋友","weight":0.08184915142293352},{"text":"塑料","weight":0.09264267573206302},{"text":"智商","weight":0.04827284020587198},{"text":"全程","weight":0.022517037417262326},{"text":"内容","weight":0.0666295335325249},{"text":"垃圾","weight":0.04373720433984618},{"text":"芒果","weight":0.04496458098300456},{"text":"太重","weight":0.0959080063862095},{"text":"一星","weight":0.07133032699065482},{"text":"时代","weight":0.10324503095536243},{"text":"画面","weight":0.06477513784679453},{"text":"","weight":null}];


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
        
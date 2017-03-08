
 var infor = {"content":[{"name":"name","value":"明星大侦探 第一季"},{"name":"主演","value":"何炅 撒贝宁 乔振宇 王鸥 "},{"name":"类型","value":"犯罪 悬疑 真人秀"},{"name":"国家/地区","value":"中国大陆"},{"name":"开播日期","value":"2016"},{"name":"summary","value":"《明星大侦探》作为中国首档明星推理综艺秀，节目创意源自韩国《犯罪现场》，内容包括“30%跌宕剧情+40%综艺搞笑+30%智能推理”，堪称综艺版的《唐人街探案》。韩国原版付费频道收视1.54%(收费频道VS普通频道收视比率为10倍)，受众集中为高知、高收入人群。超高收视、超高人气及好口碑让节目组对本土化悬疑推理大IP《明星大侦探》的播出信心满满。\n另外，从《神探夏洛克》、《心理罪》、《唐人街探案》等悬疑推理题材电视剧、电影的热播情况来看，一大波忠实“悬疑推理”粉丝基础，佐证了《明星大侦探》的巨大市场潜力。\n据了解，每期节目6位嘉宾参与，1人扮演侦探，5人为嫌疑人。每期节目解决1起不可思议的杀人事件，真凶就在嫌疑人之中。6位玩家需在现场6-8个场景内，寻找线索指认真凶!据悉，节目将在芒果TV和芒果直播APP平台播出，网友可以全程参与互动竞猜嫌疑人，还可点播回看精彩剧情。"},{"name":"评分","value":8.6},{"name":"image","value":"https://img1.doubanio.com/view/movie_poster_cover/lpst/public/p2323006147.jpg"},{"name":"id","value":"26737158"}]}
 
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

        var word_list = [{"text":"简单","weight":0.8467812203023136},{"text":"善良","weight":0.8925843958513735},{"text":"有趣","weight":0.6231480742702445},{"text":"舒服","weight":0.23492885550787637},{"text":"尴尬","weight":0.3196303358415818},{"text":"一星","weight":0.7333567490160033},{"text":"干净","weight":0.7321343470073368},{"text":"清新","weight":0.7412540868161503},{"text":"懒懒","weight":0.6936260710793499},{"text":"不错","weight":0.5317678901266846},{"text":"幽默","weight":0.01635247954475763},{"text":"无聊","weight":0.4794309828624431},{"text":"辛苦","weight":0.5229914677657413},{"text":"轻松","weight":0.3676779761609115},{"text":"挺好","weight":0.37022025628541827},{"text":"平淡","weight":0.2230183203793164},{"text":"和谐","weight":0.02396601849389196},{"text":"幸福","weight":0.392100613577633},{"text":"浮躁","weight":0.21019408836913817},{"text":"庸俗","weight":0.43023595247232915},{"text":"最气","weight":0.31567468247017494},{"text":"最恨","weight":0.4959265577152195},{"text":"真诚","weight":0.04255393346439412},{"text":"爱和","weight":0.4290369336105815},{"text":"乐趣","weight":0.28008473479777585},{"text":"很好","weight":0.4466101494667683},{"text":"年轻","weight":0.15458224279449362},{"text":"诚恳","weight":0.508916048946965},{"text":"艰辛","weight":0.21144261929217364},{"text":"活好","weight":0.028192790128660234},{"text":"快乐","weight":0.2074270295017992},{"text":"美好","weight":0.04455871806156563},{"text":"疯狂","weight":0.13217216725643555},{"text":"纯美","weight":0.10792228999713797},{"text":"精致","weight":0.19086593565587917},{"text":"节目","weight":0.8770597280863714},{"text":"老师","weight":0.8446702078061062},{"text":"综艺","weight":0.21853238503805122},{"text":"版权","weight":0.3988767743414489},{"text":"农村","weight":0.15107466700568278},{"text":"小厨","weight":0.17447407614770458},{"text":"做菜","weight":0.17080398471320482},{"text":"广告","weight":0.1261407672024084},{"text":"观众","weight":0.11600444675972153},{"text":"原创","weight":0.1248487138042483},{"text":"原版","weight":0.13807261865779938},{"text":"样子","weight":0.08458286049731319},{"text":"爸爸","weight":0.14266326360052056},{"text":"儿子","weight":0.013253818401168235},{"text":"姑娘","weight":0.003216788133249369},{"text":"评论","weight":0.10114962423365939},{"text":"房子","weight":0.04372594155830571},{"text":"评分","weight":0.019677503640495825},{"text":"人生","weight":0.11411579729701009},{"text":"学生","weight":0.009572427149430223},{"text":"动物","weight":0.10395505483727913},{"text":"国产","weight":0.11320524749250116},{"text":"类型","weight":0.10200891524219809},{"text":"自带","weight":0.07839325325094032},{"text":"朋友","weight":0.07233467823837823},{"text":"塑料","weight":0.07156066116815536},{"text":"智商","weight":0.06713507899946494},{"text":"全程","weight":0.07800518362063322},{"text":"内容","weight":0.054078475508803264},{"text":"垃圾","weight":0.046933294385861704},{"text":"芒果","weight":0.06828390689007699},{"text":"太重","weight":0.019141664768272244},{"text":"一星","weight":0.03028017027185685},{"text":"时代","weight":0.09859297909687632},{"text":"画面","weight":0.016532400806349157},{"text":"","weight":null}];


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
        
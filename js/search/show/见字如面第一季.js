
 var infor = {"content":[{"name":"name","value":"见字如面第一季"},{"name":"主演","value":"翟毓红 许子东 杨雨 林更新 "},{"name":"类型","value":"脱口秀"},{"name":"国家/地区","value":"中国大陆"},{"name":"开播日期","value":"2016"},{"name":"summary","value":"国内首档也是全屏唯一一档季播型书信朗读节目《见字如面》，由成功制作了“中国汉字听写大会“和中国成语大会”两档国民文化节目的国内顶尖视频创作团队实力文化制作。《见字如面》是一档以明星读信为主要形式的阅读推广季播节目，旨在用书信打开历史节点，带领观众走进那些依然鲜活的时代场 景、人生故事，去触碰那些依然可感的人物情状和社会风物，重新领会中国人的精神情怀与生活智慧。"},{"name":"评分","value":9},{"name":"image","value":"https://img1.doubanio.com/view/movie_poster_cover/lpst/public/p2407328337.jpg"},{"name":"id","value":"26936282"}]}
 
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

        var word_list = [{"text":"简单","weight":0.9666352106325792},{"text":"善良","weight":1.142058544586572},{"text":"有趣","weight":0.29852896202653795},{"text":"舒服","weight":0.09760052932130796},{"text":"尴尬","weight":0.18772727163890918},{"text":"一星","weight":0.3288261260306631},{"text":"干净","weight":0.1753904615719645},{"text":"清新","weight":0.28271998427753686},{"text":"懒懒","weight":0.18960274888108516},{"text":"不错","weight":0.21644777621230168},{"text":"幽默","weight":0.42175738459161194},{"text":"无聊","weight":0.17191163896357953},{"text":"辛苦","weight":0.23789123811374432},{"text":"轻松","weight":0.5488226100398873},{"text":"挺好","weight":0.15562199252090347},{"text":"平淡","weight":0.11881328426822467},{"text":"和谐","weight":0.19358249447417006},{"text":"幸福","weight":0.21355916377127498},{"text":"浮躁","weight":0.07183270589774281},{"text":"庸俗","weight":0.16520417067806029},{"text":"最气","weight":0.23606053680725655},{"text":"最恨","weight":0.41602035251005914},{"text":"真诚","weight":0.13400269869370626},{"text":"爱和","weight":0.45061593617385526},{"text":"乐趣","weight":0.3292545983491086},{"text":"很好","weight":0.055001716775029685},{"text":"年轻","weight":0.18222670367770766},{"text":"诚恳","weight":0.46023399291867984},{"text":"艰辛","weight":0.18669370010251168},{"text":"活好","weight":0.24974361637617482},{"text":"快乐","weight":0.2005578959473081},{"text":"美好","weight":0.4860536004773459},{"text":"疯狂","weight":0.29151806834780103},{"text":"纯美","weight":0.1486458554066805},{"text":"精致","weight":0.29141336570362064},{"text":"节目","weight":1.384345010078578},{"text":"老师","weight":0.5905647668775236},{"text":"综艺","weight":0.4265164248148987},{"text":"版权","weight":0.17169124187202375},{"text":"农村","weight":0.2089322946873935},{"text":"小厨","weight":0.05899800452483832},{"text":"做菜","weight":0.1627841734238946},{"text":"广告","weight":0.006064821184220685},{"text":"观众","weight":0.057601632097282814},{"text":"原创","weight":0.11841611143082752},{"text":"原版","weight":0.028997722394372396},{"text":"样子","weight":0.09867952480422088},{"text":"爸爸","weight":0.10471119955318438},{"text":"儿子","weight":0.08624010510344686},{"text":"姑娘","weight":0.1316680875666494},{"text":"评论","weight":0.0000712113320946021},{"text":"房子","weight":0.07146845604362521},{"text":"评分","weight":0.03378643860439151},{"text":"人生","weight":0.021264593711607205},{"text":"学生","weight":0.11034295301540159},{"text":"动物","weight":0.12118309221302836},{"text":"国产","weight":0.09410264585116941},{"text":"类型","weight":0.051043096844161716},{"text":"自带","weight":0.08663241919348623},{"text":"朋友","weight":0.10166475415692997},{"text":"塑料","weight":0.03263805596051516},{"text":"智商","weight":0.11336823252059104},{"text":"全程","weight":0.08064639333324651},{"text":"内容","weight":0.07891080478700356},{"text":"垃圾","weight":0.003477043532072016},{"text":"芒果","weight":0.09933017981585615},{"text":"太重","weight":0.10791057999749708},{"text":"一星","weight":0.02662920786908487},{"text":"时代","weight":0.014231637837772327},{"text":"画面","weight":0.04168620529628372},{"text":"","weight":null}];


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
        
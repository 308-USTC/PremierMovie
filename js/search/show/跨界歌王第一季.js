
 var infor = {"content":[{"name":"name","value":"跨界歌王第一季"},{"name":"主演","value":"高晓松 宋柯 刘涛 王凯 "},{"name":"类型","value":"音乐 真人秀"},{"name":"国家/地区","value":"中国大陆"},{"name":"开播日期","value":"2016"},{"name":"summary","value":"《跨界歌王》 是北京电视台倾全台之力重磅推出的首档大型明星跨界音乐节目，将于2016年5月28日开始，在北京卫视每周六21:18播出。《跨界歌王》旨在突破固有的娱乐边界，汇集了活跃在影视、娱乐等领域的众多重量级当红明星。他们在各自的领域成就斐然，却都曾拥有音乐的梦想。在《跨界歌王》的舞台上，他们将重拾音乐之梦，展现鲜为人知且令观众惊艳的音乐才华，争夺年度“跨界歌王”的殊荣。"},{"name":"评分","value":5.2},{"name":"image","value":"https://img1.doubanio.com/view/movie_poster_cover/lpst/public/p2359221058.jpg"},{"name":"id","value":"26802921"}]}
 
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

        var word_list = [{"text":"简单","weight":0.8652793915943191},{"text":"善良","weight":1.206875889741137},{"text":"有趣","weight":0.6888943640597575},{"text":"舒服","weight":0.4453897672326271},{"text":"尴尬","weight":0.04117835089432522},{"text":"一星","weight":0.3083379661987775},{"text":"干净","weight":0.07479072022170105},{"text":"清新","weight":0.24571123044595208},{"text":"懒懒","weight":0.14769373543714778},{"text":"不错","weight":0.23331232277026995},{"text":"幽默","weight":0.15283445688869757},{"text":"无聊","weight":0.21486348089364285},{"text":"辛苦","weight":0.634881111939763},{"text":"轻松","weight":0.025551544142503806},{"text":"挺好","weight":0.5395190549312133},{"text":"平淡","weight":0.003915594670919463},{"text":"和谐","weight":0.30109348447962386},{"text":"幸福","weight":0.3403824836429791},{"text":"浮躁","weight":0.05133177322900177},{"text":"庸俗","weight":0.42343723211453965},{"text":"最气","weight":0.2816329112651137},{"text":"最恨","weight":0.460770364135597},{"text":"真诚","weight":0.4961213276353526},{"text":"爱和","weight":0.223564894628228},{"text":"乐趣","weight":0.31974626481172674},{"text":"很好","weight":0.24158842363364266},{"text":"年轻","weight":0.5260662315445405},{"text":"诚恳","weight":0.29961110450441875},{"text":"艰辛","weight":0.027690940097420007},{"text":"活好","weight":0.06920352732991568},{"text":"快乐","weight":0.19686025836735635},{"text":"美好","weight":0.13775641727922697},{"text":"疯狂","weight":0.003916367896758114},{"text":"纯美","weight":0.2538482514674014},{"text":"精致","weight":0.020027811133285573},{"text":"节目","weight":0.18734423834256828},{"text":"老师","weight":0.9615464439311684},{"text":"综艺","weight":0.5726993038794324},{"text":"版权","weight":0.24761663156310304},{"text":"农村","weight":0.10671810238979496},{"text":"小厨","weight":0.14964347706365586},{"text":"做菜","weight":0.09416742137640005},{"text":"广告","weight":0.14330774773900096},{"text":"观众","weight":0.05607649161516094},{"text":"原创","weight":0.13388538640498926},{"text":"原版","weight":0.11847375725224717},{"text":"样子","weight":0.07597489450590714},{"text":"爸爸","weight":0.1284733716688209},{"text":"儿子","weight":0.06123516068980499},{"text":"姑娘","weight":0.08392524970269051},{"text":"评论","weight":0.06161227396701348},{"text":"房子","weight":0.028808430088253886},{"text":"评分","weight":0.017540486187735994},{"text":"人生","weight":0.1277207894632768},{"text":"学生","weight":0.1059922134622954},{"text":"动物","weight":0.02125487164143918},{"text":"国产","weight":0.1187661532933833},{"text":"类型","weight":0.05163682142684278},{"text":"自带","weight":0.011347906171380415},{"text":"朋友","weight":0.081995764301796},{"text":"塑料","weight":0.039017031279057465},{"text":"智商","weight":0.04912974498330085},{"text":"全程","weight":0.0709060829534576},{"text":"内容","weight":0.057145619611399655},{"text":"垃圾","weight":0.0517295444595097},{"text":"芒果","weight":0.006714840007858768},{"text":"太重","weight":0.08705082322566814},{"text":"一星","weight":0.0310819164729887},{"text":"时代","weight":0.08790038341657452},{"text":"画面","weight":0.059148305663523276},{"text":"","weight":null}];


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
        
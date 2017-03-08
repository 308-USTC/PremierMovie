
 var infor = {"content":[{"name":"name","value":"少年锦衣卫"},{"name":"导演","value":"陈柏言"},{"name":"主演","value":"马正阳 丽阳 范哲琛 宝木中阳 "},{"name":"类型","value":"动画 武侠"},{"name":"制片国家/地区","value":"中国大陆"},{"name":"上映日期","value":"2017"},{"name":"summary","value":"大明初起，明太祖朱元璋设锦衣卫亲军指挥使司，后分设南北镇抚司，稽查百官，权势煊赫。锦衣卫沿袭百年，南北镇抚司势如水火，相争不下。朝堂党争激烈，江湖盗匪猖獗，盛世繁华之下，却隐藏着汹涌暗流……"},{"name":"评分","value":8.7},{"name":"image","value":"https://img5.doubanio.com/view/movie_poster_cover/lpst/public/p2428502176.jpg"},{"name":"id","value":"26896964"}]}
 
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
                data: ['2017-01-20','2017-01-21','2017-01-22','2017-01-23','2017-01-24','2017-01-25','2017-01-26','2017-01-27','2017-01-28','2017-01-29','2017-01-30','2017-01-31','2017-02-01','2017-02-02','2017-02-03','2017-02-04','2017-02-05','2017-02-06','2017-02-07','2017-02-08','2017-02-09','2017-02-10','2017-02-11','2017-02-12','2017-02-13','2017-02-14','2017-02-15','2017-02-16','2017-02-17','2017-02-18','2017-02-19','2017-02-20','2017-02-21','2017-02-22','2017-02-23','2017-02-24','2017-02-25','2017-02-26','2017-02-27','2017-02-28','2017-03-01','2017-03-02','2017-03-03','2017-03-04','2017-03-05']
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
                data: [922,826,760,985,817,760,791,647,736,657,659,657,1467,939,811,848,1535,1218,1367,1709,11477,8995,7131,6302,4956,3510,4608,14280,9976,8020,6565,4713,5100,4686,13367,8507,7238,5680,3642,3451,4101,14242,12410,11961,9457]
            }, ]
        };

        var word_list = [{"text":"流畅","weight":3.3499204410799717},{"text":"精致","weight":0.7261628861226727},{"text":"良心","weight":0.3521526865099061},{"text":"不错","weight":0.17098807098534427},{"text":"诚意","weight":0.5962359302006521},{"text":"很棒","weight":0.7223856394310693},{"text":"精细","weight":0.9988466931380221},{"text":"拖沓","weight":0.6488170015038617},{"text":"有趣","weight":0.8403345751301086},{"text":"清晰","weight":1.0343979815189799},{"text":"灵动","weight":0.21737930342032558},{"text":"幼稚","weight":0.3322406864923586},{"text":"低俗","weight":0.013147510283590227},{"text":"优秀","weight":0.43823618206568166},{"text":"杰出","weight":1.0419998283269072},{"text":"细腻","weight":0.3826728445649438},{"text":"僵硬","weight":0.18076925803777766},{"text":"美好","weight":0.3937048238666437},{"text":"精良","weight":0.4105738126720374},{"text":"最心","weight":0.5813319114065243},{"text":"惊喜","weight":0.41339931064593904},{"text":"美艳","weight":0.4500388292352577},{"text":"不良","weight":0.5202199226201654},{"text":"唯美","weight":0.025333423075622002},{"text":"一大","weight":0.23049555129457797},{"text":"精湛","weight":0.43199397309582915},{"text":"炫酷","weight":0.25026646429480776},{"text":"完美","weight":0.505923101882278},{"text":"充满","weight":0.08772657762891223},{"text":"愚蠢","weight":0.12340911840191082},{"text":"有心","weight":0.09988159114442084},{"text":"险恶","weight":0.14760497365432504},{"text":"精美","weight":0.08849105563723367},{"text":"惊艳","weight":0.03230733812395384},{"text":"尴尬","weight":0.05853762900869746},{"text":"人物","weight":0.6929740186482986},{"text":"剧情","weight":0.3816442520985759},{"text":"动画","weight":0.49287280718146415},{"text":"动作","weight":0.4083913392356476},{"text":"国产","weight":0.5700355350753029},{"text":"国漫","weight":0.1363036111929239},{"text":"画面","weight":0.2616215396272915},{"text":"动漫","weight":0.3902035869339096},{"text":"细节","weight":0.3718736015461126},{"text":"配音","weight":0.4584875993023339},{"text":"用心","weight":0.06570005583310431},{"text":"衣服","weight":0.21723451999088983},{"text":"男主","weight":0.10349474989833704},{"text":"表情","weight":0.13727521946671936},{"text":"画风","weight":0.3029196741726968},{"text":"画质","weight":0.27152591735603465},{"text":"水准","weight":0.26414762231244693},{"text":"锦衣卫","weight":0.29887495470867126},{"text":"场景","weight":0.2780690191290926},{"text":"故事","weight":0.23179466135854734},{"text":"公主","weight":0.23593136887395208},{"text":"背景","weight":0.04205271845283825},{"text":"技术","weight":0.11528070010123712},{"text":"主角","weight":0.06481100477864506},{"text":"建模","weight":0.12734421763291764},{"text":"一流","weight":0.1663794285486307},{"text":"作品","weight":0.13933265645310602},{"text":"颜值","weight":0.012836934398143844},{"text":"服饰","weight":0.19821409392048464},{"text":"电影","weight":0.1351754962869595},{"text":"太短","weight":0.037401146793241545},{"text":"质感","weight":0.14605907840919746},{"text":"角色","weight":0.027329263229342628},{"text":"效果","weight":0.07476884494103968},{"text":"很漂亮","weight":0.009467594037269135},{"text":"","weight":null}];


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
        
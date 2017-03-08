
 var infor = {"content":[{"name":"name","value":"晓松奇谈"},{"name":"主演","value":"高晓松 "},{"name":"类型","value":"脱口秀"},{"name":"国家/地区","value":"中国大陆"},{"name":"开播日期","value":"2014"},{"name":"summary","value":"《晓松奇谈》为一档周播文化类脱口秀节目，互联网脱口秀第一人高晓松的网络脱口秀节目。每集节目30分钟左右。\n由主讲人高晓松开谈天文地理，海外见闻，中西野史，并在节目中设置幽默动画版块以及网友互动环节，高晓松将在每期节目的末尾，回答网友的犀利提问。\n头发长可不一定见识短，四十载中西练达，谈天说地，无门无类，不偏不邪，笑对千金裘马，亦侃雪月风花。"},{"name":"评分","value":9.2},{"name":"image","value":"https://img3.doubanio.com/view/movie_poster_cover/lpst/public/p2186531090.jpg"},{"name":"id","value":"25895929"}]}
 
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
                data: [9058,7009,6248,5613,5440,20,4818,3739,3982,4123,4314,4428,5090,5519,5622,5980,5454,5608,5522,5549,5903,6085,4790,4946,4694,4324,4559,4790,5086,5343,5425,4815,4903,4833,4671,4951,5876,5474,4759,4465,4800,4788,4872,5286,5773]
            }, ]
        };

        var word_list = [{"text":"矮大","weight":0.9088834661144631},{"text":"自由","weight":0.12291455242738497},{"text":"不错","weight":0.04124418153114089},{"text":"厉害","weight":0.5202155968526158},{"text":"睿智","weight":0.2744940631462439},{"text":"挺好","weight":0.18259652264079426},{"text":"幽默","weight":0.14102304394938076},{"text":"連體","weight":0.8951376282406523},{"text":"不烦","weight":0.9141742312876234},{"text":"漫漫","weight":0.1160874529680119},{"text":"流畅","weight":0.11022878139287642},{"text":"简洁","weight":0.820643518312136},{"text":"诚意","weight":0.27641750770430457},{"text":"羞涩","weight":0.6148542066849493},{"text":"乐观","weight":0.5462973756642494},{"text":"平等","weight":0.17871423789218663},{"text":"成功","weight":0.08827413585652506},{"text":"紧挺","weight":0.12967102442745926},{"text":"紧快","weight":0.05601172665172791},{"text":"紧闲","weight":0.39023668222425917},{"text":"荒废","weight":0.3598200551098352},{"text":"优酷","weight":0.019213886649200495},{"text":"太弱","weight":0.04857099400512924},{"text":"有趣","weight":0.1226516637397523},{"text":"很大","weight":0.03494410804653602},{"text":"很小","weight":0.10370848259751593},{"text":"很正","weight":0.09205436137338431},{"text":"完美","weight":0.10063773885256104},{"text":"意外","weight":0.08310979869014291},{"text":"有限","weight":0.09815747596786419},{"text":"遗憾","weight":0.04494120725786681},{"text":"辽阔","weight":0.0774297453941041},{"text":"固定","weight":0.05940720125110571},{"text":"肤浅","weight":0.06911184005021152},{"text":"興趣","weight":0.1315891807548285},{"text":"历史","weight":1.3037256958389714},{"text":"节目","weight":0.506061323078656},{"text":"世界","weight":0.40676668416064327},{"text":"故事","weight":0.15205816837177863},{"text":"老师","weight":0.16462145508607082},{"text":"观点","weight":0.02650721464012992},{"text":"时间","weight":0.24185067251410855},{"text":"人生","weight":0.33951781563626254},{"text":"胖子","weight":0.09870438657721402},{"text":"男神","weight":0.004899255747294535},{"text":"价值观","weight":0.2720767300238535},{"text":"内容","weight":0.12643040704359235},{"text":"文化","weight":0.08872984578313275},{"text":"姿势","weight":0.24166644205127055},{"text":"颜值","weight":0.22195203704315672},{"text":"时代","weight":0.1537905306368825},{"text":"视角","weight":0.07051508703715653},{"text":"水平","weight":0.1314835019538403},{"text":"情怀","weight":0.05148254138602655},{"text":"国家","weight":0.003449840165590681},{"text":"日本料理","weight":0.16448621411547237},{"text":"知识分子","weight":0.07621289997858549},{"text":"思维","weight":0.14714157578392298},{"text":"细节","weight":0.137783131009045},{"text":"魅力","weight":0.07822425949457554},{"text":"朋友","weight":0.006201847459813799},{"text":"客观","weight":0.08826382422374884},{"text":"事儿","weight":0.13673807391795814},{"text":"文艺","weight":0.0998021612114113},{"text":"野史","weight":0.05134618737351907},{"text":"八卦","weight":0.08814973558119145},{"text":"音频","weight":0.10768158791107352},{"text":"残粉","weight":0.0591416416580661},{"text":"陪伴","weight":0.07135800610640143},{"text":"黑框","weight":0.12412561738727336},{"text":"","weight":null}];


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
        
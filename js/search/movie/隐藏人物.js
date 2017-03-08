
 var infor = {"content":[{"name":"name","value":"隐藏人物"},{"name":"导演","value":"特奥多尔·梅尔菲,"},{"name":"编剧","value":"艾莉森·施罗德,特奥多尔·梅尔菲,玛戈特·李·谢特利,"},{"name":"主演","value":"塔拉吉·P·汉森,奥克塔维亚·斯宾瑟,加奈儿·梦奈,凯文·科斯特纳,克斯汀·邓斯特,吉姆·帕森斯,马赫沙拉·阿里,阿尔迪斯·霍吉,格伦·鲍威尔,金贝利·奎恩,奥莱克·克鲁帕,"},{"name":"类型","value":"剧情,传记,历史,"},{"name":"上映日期","value":"2016-12-25(美国),"},{"name":"summary","value":"影片讲述1962年，汉森饰演的非裔美国数学家与斯宾瑟和梦奈两位“同事”组成智囊团，为宇航员约翰·格伦成功绕地球轨道飞行做出贡献。"},{"name":"评分","value":8.6},{"name":"image","value":"https://img1.doubanio.com/view/movie_poster_cover/lpst/public/p2374067318.jpg"},{"name":"id","value":"26615208"}]}
 
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
                data: [0,0,0,0,1477,1748,1297,1016,1385,1446,1717,1622,1673,1865,1828,1621,1666,1556,1605,1425,1420,1830,1737,1721,1450,1341,1429,1341,1487,1509,1739,1435,1498,1819,2022,2056,3156,2961,4776,2268,1861,1760,1686,1809,1781]
            }, ]
        };

        var word_list = [{"text":"轻松","weight":0.7253346407771565},{"text":"幽默","weight":0.7342677565992194},{"text":"聪明","weight":0.14138008696852492},{"text":"成功","weight":0.4316334355978389},{"text":"尊重","weight":0.10962323831233724},{"text":"坚韧","weight":0.3349951079720528},{"text":"睿智","weight":0.4112491202956938},{"text":"有趣","weight":0.2551867214860372},{"text":"诙谐","weight":0.2205507333881615},{"text":"枯燥","weight":0.2760190975931533},{"text":"平静","weight":0.02356367861490167},{"text":"完整","weight":0.07486120707468422},{"text":"激昂","weight":0.28101475910881596},{"text":"沉重","weight":0.3913705993678059},{"text":"明快","weight":0.2818003426755941},{"text":"自由","weight":0.38864887631948447},{"text":"平等","weight":0.16424459454157284},{"text":"勇敢","weight":0.02416767551523679},{"text":"冷静","weight":0.3141268398564271},{"text":"乐观","weight":0.03729750482359012},{"text":"优秀","weight":0.1195198321759888},{"text":"尊严","weight":0.042021760257432},{"text":"不错","weight":0.0355048254120686},{"text":"平凡","weight":0.08540903491115502},{"text":"充满","weight":0.11612896702341718},{"text":"紧凑","weight":0.29737159271026553},{"text":"艰难","weight":0.3093508895937439},{"text":"順暢","weight":0.000902037432499012},{"text":"緊湊","weight":0.007114942286340025},{"text":"不懈","weight":0.172100719789803},{"text":"完美","weight":0.13323985447781306},{"text":"幼稚","weight":0.25199756758754954},{"text":"稳重","weight":0.19858908690877458},{"text":"清晰","weight":0.22135796969110466},{"text":"冲奥","weight":0.016659617402369084},{"text":"电影","weight":0.8631360334740164},{"text":"黑人","weight":0.7269845849162476},{"text":"女性","weight":0.04244586949879792},{"text":"故事","weight":0.08444555628621452},{"text":"励志","weight":0.20034485643958105},{"text":"主旋律","weight":0.2764318319333124},{"text":"平权","weight":0.30020147625689503},{"text":"历史","weight":0.32651678576830295},{"text":"白人","weight":0.06186825252177304},{"text":"种族","weight":0.20429083049744381},{"text":"人物","weight":0.21821997191124945},{"text":"厕所","weight":0.166053871275763},{"text":"政治","weight":0.21033150131508693},{"text":"影片","weight":0.0075237052236861715},{"text":"题材","weight":0.18447745814588426},{"text":"天才","weight":0.08127235515815215},{"text":"肤色","weight":0.14518533739581554},{"text":"女人","weight":0.1545954825746994},{"text":"女权","weight":0.0324106092297833},{"text":"女主","weight":0.13478113478522366},{"text":"节奏","weight":0.05419266055277142},{"text":"世界","weight":0.03837654173368959},{"text":"主题","weight":0.06372880491316207},{"text":"剧情","weight":0.14765748472442425},{"text":"本片","weight":0.16501568618879978},{"text":"数学","weight":0.1453239984449333},{"text":"性别","weight":0.12801556528698513},{"text":"智商","weight":0.041713206476553515},{"text":"权利","weight":0.09324756610863878},{"text":"演员","weight":0.08130771137008957},{"text":"时代","weight":0.03288440463691891},{"text":"能力","weight":0.01865696082054609},{"text":"社会","weight":0.06169304283575529},{"text":"人类","weight":0.09903736458045415},{"text":"耳朵","weight":0.04350073431042774},{"text":"","weight":null}];


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
        
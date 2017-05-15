
 var infor = {"content":[{"name":"name","value":"春娇救志明"},{"name":"导演","value":"彭浩翔,"},{"name":"编剧","value":"彭浩翔,尹志文,陆以心,"},{"name":"主演","value":"杨千嬅,余文乐,蒋梦婕,秦沛,郑伊健,许玮甯,谢依霖,盛朗熙,林辰唏,纳豆,"},{"name":"类型","value":"剧情,喜剧,爱情,"},{"name":"上映日期","value":"2017-04-28(中国大陆),2017-04-27(香港),2017-04-11(香港电影节),"},{"name":"summary","value":"导演彭浩翔宣布，将于年内开拍《志明与春娇》第三部，名为《春娇救志明》，计划明年上映。而两大主演杨千嬅、余文乐，将三度合体，原班人马回归。彭浩翔自曝，此番决定拍摄第三部，历经了四年酝酿期，之所以会拖这么久，是因为不想一直重复自己，最终在太太的启发下，想出了一个“绝妙”的故事。"},{"name":"评分","value":null},{"name":"image","value":"https://img3.doubanio.com/view/movie_poster_cover/lpst/public/p2428932324.jpg"},{"name":"id","value":"26639958"}]}
 
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

        var word_list = [{"text":"细腻","weight":0.7280963388417916},{"text":"平淡","weight":0.1165989020491999},{"text":"善良","weight":0.03160641477774822},{"text":"沉闷","weight":0.6216152898453378},{"text":"惊悚","weight":0.09678307436677286},{"text":"焦虑","weight":0.17512754970911382},{"text":"伤害","weight":0.5402243421875351},{"text":"很小","weight":0.36850930287256634},{"text":"落后","weight":0.3865321912075288},{"text":"幽默","weight":0.4022292307798549},{"text":"微妙","weight":0.06773149776048586},{"text":"不安","weight":0.42060068793423766},{"text":"尊严","weight":0.20452210866370996},{"text":"平凡","weight":0.27534140164321563},{"text":"悲伤","weight":0.41576484571034006},{"text":"尊重","weight":0.23652781517014948},{"text":"完美","weight":0.22145513826015817},{"text":"羞耻","weight":0.00794003337202082},{"text":"歡喜","weight":0.3021967252757588},{"text":"细微","weight":0.22147824907581246},{"text":"隐晦","weight":0.15344520411355736},{"text":"幸福","weight":0.19487636804931116},{"text":"犀利","weight":0.2656696667930629},{"text":"模糊","weight":0.3989854044423564},{"text":"揪心","weight":0.24530276872935133},{"text":"琐碎","weight":0.034166179518284795},{"text":"扎实","weight":0.20058561632908495},{"text":"巧妙","weight":0.1786874590572095},{"text":"尴尬","weight":0.07756318963085262},{"text":"无聊","weight":0.1458478825615805},{"text":"可悲","weight":0.406353420191385},{"text":"不急","weight":0.37963615395088923},{"text":"不慢","weight":0.007989101133320747},{"text":"有趣","weight":0.18451069429323022},{"text":"强大","weight":0.18500045277169874},{"text":"电影","weight":0.33237639566442967},{"text":"社会","weight":0.3568275498193831},{"text":"故事","weight":0.21308948147342194},{"text":"男主","weight":0.09753101475957218},{"text":"推销员","weight":0.024899239351893136},{"text":"困境","weight":0.18999390448057007},{"text":"妻子","weight":0.2713843725230059},{"text":"人性","weight":0.09055708042136124},{"text":"剧本","weight":0.14601045559339507},{"text":"剧情","weight":0.10081468964067421},{"text":"家庭","weight":0.09882150048989503},{"text":"戏中戏","weight":0.0170160441144869},{"text":"文化","weight":0.22101996777250263},{"text":"剧作","weight":0.15349568715322526},{"text":"关系","weight":0.17320755441667238},{"text":"现实","weight":0.2022969072740803},{"text":"女性","weight":0.11468253964405387},{"text":"宗教","weight":0.08050951638699684},{"text":"情感","weight":0.05805536833786636},{"text":"角色","weight":0.0713321174504336},{"text":"老头","weight":0.08372576162819678},{"text":"结尾","weight":0.19645483356677},{"text":"人物","weight":0.069863179923425},{"text":"互文","weight":0.022083937669522612},{"text":"戏剧","weight":0.11620488049457514},{"text":"细节","weight":0.11044613680111474},{"text":"影片","weight":0.02294619570074577},{"text":"观众","weight":0.0016329171425381594},{"text":"情绪","weight":0.1235299508526081},{"text":"事件","weight":0.04392629767000008},{"text":"演员","weight":0.16429307330804138},{"text":"镜头","weight":0.04318555643550106},{"text":"精彩","weight":0.14143725995546305},{"text":"情节","weight":0.043965630354740846},{"text":"丈夫","weight":0.15019971519577863},{"text":"","weight":null}];


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
        
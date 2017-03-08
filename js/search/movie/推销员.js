
 var infor = {"content":[{"name":"name","value":"推销员"},{"name":"导演","value":"阿斯哈·法哈蒂,"},{"name":"编剧","value":"阿斯哈·法哈蒂,"},{"name":"主演","value":"沙哈布·侯赛尼,塔兰涅·阿里多斯蒂,巴巴克·卡里米,法里德·萨贾蒂·侯赛尼,米娜·沙达蒂,"},{"name":"类型","value":"剧情,"},{"name":"上映日期","value":"2016-05-21(戛纳电影节),2016-08-17(法国),"},{"name":"summary","value":"尹麦德（沙哈布·侯赛尼 Shahab Hosseini 饰）是学校里教授文学的老师，同时，他和妻子蕾娜（塔兰涅·阿里多斯蒂 Taraneh Alidoosti 饰）一起在剧团里表演话剧，夫妻两人感情十分深厚。某日，两人所住的房子成为了危楼，随时都有倒塌的危险，无奈之下，尹麦德和蕾娜只得临时找了另一个住所，匆匆入住。某日，蕾娜提前回到家中，不想遭到了陌生男子的袭击晕倒在浴室之中，愤怒的尹麦德根据罪犯遗漏的车钥匙找到了一辆小货车，一路尾随至面包店。最终，尹麦德找到了罪魁祸首巴巴克（巴巴克·卡里米 Babak Karimi 饰），却发现他当时亦只是一念之差走错了路，并且对自己的所作所为充满了愧疚。尹麦德要求巴巴克在自己的妻子和儿子面前坦白罪行，没想到却酿成了所有人都无法承受的惨痛后果。"},{"name":"评分","value":7.7},{"name":"image","value":"https://img1.doubanio.com/view/movie_poster_cover/lpst/public/p2378401788.jpg"},{"name":"id","value":"26679552"}]}
 
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
                data: [201,191,167,184,235,266,241,224,182,653,567,815,374,312,280,310,320,290,277,319,309,297,273,312,295,286,271,341,737,1073,804,890,894,871,1147,1510,1340,1166,7299,3681,2383,1911,1798,1830,1793]
            }, ]
        };

        var word_list = [];


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
        
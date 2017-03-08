
 var infor = {"content":[{"name":"name","value":"西游伏妖篇"},{"name":"导演","value":"徐克,"},{"name":"编剧","value":"周星驰,李思臻,"},{"name":"主演","value":"吴亦凡,林更新,姚晨,林允,包贝尔,巴特尔,杨一威,大鹏,王丽坤,汪铎,张美娥,"},{"name":"类型","value":"喜剧,动作,奇幻,古装,"},{"name":"上映日期","value":"2017-01-28(中国大陆),"},{"name":"summary","value":"电影《西游伏妖篇》作为2013年周星驰导演电影《西游降魔篇》的后继故事，讲述了唐三藏（吴亦凡 饰）在上集感化了杀死段小姐的齐天大圣（林更新 饰），并收其为徒后，带着孙悟空、猪八戒（杨一威&汪铎 饰）及沙僧（巴特尔 饰），师徒一行四人踏上西天取经之旅。路途凶险，除魔伏妖，师徒四人也在取经的过程中有了各自的成长与改变。"},{"name":"评分","value":5.8},{"name":"image","value":"https://img3.doubanio.com/view/movie_poster_cover/lpst/public/p2411953504.jpg"},{"name":"id","value":"25801066"}]}
 
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
                data: [30025,37060,44540,37636,43744,41713,47068,65498,655781,622859,494228,415909,365263,325340,296933,260068,228392,193722,167253,153662,135654,126453,114443,102159,90712,84803,78242,67441,67525,77109,72400,54873,52401,50884,48227,48899,56124,52448,36036,32752,35184,34458,38903,50296,47399]
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
        
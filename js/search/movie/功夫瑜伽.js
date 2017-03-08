
 var infor = {"content":[{"name":"name","value":"功夫瑜伽"},{"name":"导演","value":"唐季礼,"},{"name":"编剧","value":"唐季礼,"},{"name":"主演","value":"成龙,李治廷,张艺兴,索努·苏德,母其弥雅,迪莎·帕塔尼,艾米拉·达斯特,尚语贤,姜雯,张国立,伊利亚娜·狄克鲁兹,"},{"name":"类型","value":"喜剧,动作,冒险,"},{"name":"上映日期","value":"2017-01-28(中国大陆),"},{"name":"summary","value":"考古学教授Jack（成龙 饰）多年没有踏出学校，校长和学生都对他添油加醋的历史半信半疑。一次授课后，一个印度女孩找到Jack，用一张千年地图吸引了Jack的目光。于是Jack和挚友的儿子李琼斯（李治廷 饰）、助教小光（张艺兴 饰）组成“寻宝小分队”，为“神秘宝石”展开冒险，在迪拜和土豪飙车，在冰岛潜入神秘冰穴，在印度大战土狼，和印度贵族斗舞，动作喜剧再升级，打笑全世界。"},{"name":"评分","value":5.3},{"name":"image","value":"https://img1.doubanio.com/view/movie_poster_cover/lpst/public/p2412371389.jpg"},{"name":"id","value":"26182910"}]}
 
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
                data: [28725,30533,33234,28681,25330,31222,33355,39250,218542,245344,240279,250591,252959,237556,229950,207606,198449,165924,143948,129518,108884,102718,98343,85312,63844,69032,60439,53769,53789,60287,57608,41806,40737,39375,37859,35937,43154,39899,26697,24283,25353,24544,27415,32856,33345]
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
        
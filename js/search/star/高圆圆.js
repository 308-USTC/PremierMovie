
 var infor = {"content":[{"name":"name","value":"高圆圆"},{"name":"别名","value":null},{"name":"性别","value":"女"},{"name":"星座","value":"天秤座"},{"name":"职业","value":"演员"},{"name":"出生日期","value":"1979-10-05"},{"name":"地区","value":"中国,北京"},{"name":"image","value":"https://img1.doubanio.com/img/celebrity/medium/59227.jpg"},{"name":"summary","value":"高圆圆是国内最具人气的年轻女艺人之一，她清纯的外表给观众们留下了极好的印象。高圆圆因为拍摄了“清嘴“广告而吸引了人们的视线，那个青春、俏皮的“清嘴”女孩使观众对高圆圆产生好感。但高圆圆真正被大家所熟悉是从电影《爱情麻辣烫》开始。高圆圆出演了很多叫好又叫座的影视剧，如《男才女貌》《宝贝计划》等。除此之外，高圆圆还是无数广告商的宠儿，她曾为海昌隐形眼镜 、达利园优先乳、mm巧克力等不少热门品牌代言。高圆圆还不断成为很多杂志的封面女郎，她频频出现在《看电影》、《MISS》、《时尚芭莎》等国内知名杂志封面及内页，一度成为焦点人物。2008四川地震中，高圆圆捐款20万，表现出了她的爱心。"},{"name":"id"}]}
 
        var bar_stack_option = {
            title: {
                //text: '',
                //subtext: '纯属虚构',
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
                data: ['2017-01-20','2017-01-21','2017-01-22','2017-01-23','2017-01-24','2017-01-25','2017-01-26','2017-01-27','2017-01-28','2017-01-29','2017-01-30','2017-01-31','2017-02-01','2017-02-02','2017-02-03','2017-02-04','2017-02-05','2017-02-06','2017-02-07','2017-02-08','2017-02-09','2017-02-10','2017-02-11','2017-02-12','2017-02-13','2017-02-14','2017-02-15','2017-02-16','2017-02-17','2017-02-18','2017-02-19','2017-02-20','2017-02-21','2017-02-22','2017-02-23','2017-02-24','2017-02-25','2017-02-26','2017-02-27','2017-02-28','2017-03-01','2017-03-02']
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
                data: [18861,21293,21964,19966,18985,29023,21925,17503,21426,22842,23926,29304,38334,32615,33961,34520,43711,69037,75925,93267,75728,74843,61,57641,54908,81380,77418,81313,85301,89726,100383,95396,96307,110434,126919,106368,101243,100441,88367,82222,100655,104994]
            }, ]
        };


        var pie2_option = {
            title: {
                text: '观众分析',
                x: 'center'
            },
            tooltip: {
                trigger: 'item',
                formatter: "{b} : {c}%"
            },
            legend: {
                orient: 'vertical',
                left: 'left',
                data: ['电影1']
            },
            series: [{
                name: '性别比例',
                type: 'pie',
                radius: '50%',
                center: ['20%', '60%'],
                data: [{
                    value: 63.5,
                    name: '男性'
                }, {
                    value: 36.5,
                    name: '女性'
                }],
                itemStyle: {
                    emphasis: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            }, {
                name: '年龄分布',
                type: 'pie',
                radius: ['35%', '50%'],
                center: ['70%', '60%'],
                data: [{
                    value: 5,
                    name: '70后'
                }, {
                    value: 14,
                    name: '80后'
                }, {
                    value: 26,
                    name: '90后'
                }, {
                    value: 25,
                    name: '00后'
                }, {
                    value: 18,
                    name: '60后'
                }, ],
                itemStyle: {
                    emphasis: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            }]
        };

        var word_list = [{
            text: "主旋律",
            weight: 5201,
        }, {
            text: "剧情",
            weight: 4993,
        }, {
            text: "演技",
            weight: 3008
        }, {
            text: "枪战",
            weight: 2445
        }, {
            text: "动作",
            weight: 4927
        }, {
            text: "场面",
            weight: 3135
        }, {
            text: "国产",
            weight: 5352
        }, {
            text: "节奏",
            weight: 3076
        }, {
            text: "精彩",
            weight: 2348
        }, {
            text: "情节",
            weight: 2458
        }, {
            text: "演员",
            weight: 2256
        }, {
            text: "故事",
            weight: 2824
        }, {
            text: "动作片",
            weight: 1131
        }, {
            text: "紧凑",
            weight: 3069
        }, {
            text: "良心",
            weight: 1567
        }, {
            text: "紧张",
            weight: 2083
        }, {
            text: "很棒",
            weight: 1022
        }, {
            text: "事件",
            weight: 2303
        }, {
            text: "大片",
            weight: 1805
        }, {
            text: "镜头",
            weight: 1516
        }, {
            text: "毒品",
            weight: 1164
        }, {
            text: "硬汉",
            weight: 1066
        }, {
            text: "血腥",
            weight: 877
        }, {
            text: "特效",
            weight: 595
        }, {
            text: "拖沓",
            weight: 500
        }, {
            text: "尴尬",
            weight: 683
        }, {
            text: "诚意",
            weight: 525
        }];


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


        ///////////////////////////////////////////////////////////////////////
        var pie2_dom = document.createElement('div');

        tab1.appendChild(pie2_dom);

        var pie2_Chart = echarts.init(pie2_dom);
        pie2_Chart.setOption(pie2_option, true);

        function randomData() {
            return Math.round(Math.random() * 1000);
        }
        
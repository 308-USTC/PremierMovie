
 var infor = {"content":[{"name":"name","value":"蒋劲夫"},{"name":"别名","value":"夫仔(绰号)"},{"name":"性别","value":"男"},{"name":"星座","value":"处女座"},{"name":"职业","value":"演员"},{"name":"出生日期","value":"1991-09-02"},{"name":"地区","value":"中国,湖南,长沙"},{"name":"image","value":"https://img3.doubanio.com/img/celebrity/medium/1411040099.93.jpg"},{"name":"summary","value":"2011年 《轩辕剑三外传之天之痕》 饰陈靖仇"},{"name":"id"}]}
 
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
                data: [218890,219230,217863,218258,215775,214639,213220,212169,211625,211980,214921,213399,214760,216577,213077,213250,200632,219132,218024,220208,216935,209459,235858,218843,225076,214022,202874,205856,216712,267433,228261,229564,202711,210455,211358,207842,209046,206396,207457,207133,181908,193795]
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
        
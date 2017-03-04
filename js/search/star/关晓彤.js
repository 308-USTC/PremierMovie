
 var infor = {"content":[{"name":"name","value":"关晓彤"},{"name":"别名","value":null},{"name":"性别","value":"女"},{"name":"星座","value":"处女座"},{"name":"职业","value":"演员"},{"name":"出生日期","value":"1997-09-17"},{"name":"地区","value":"中国,北京"},{"name":"image","value":"https://img3.doubanio.com/img/celebrity/medium/1393595042.05.jpg"},{"name":"summary","value":"关晓彤，艺名关双双，著名童星。现就读学校：初中--北京附师大中学现在初二，曾就读学校：小学--北京丰台区洋桥西罗园第一小学。电影《生命属于人民》饰“小燕子”《夏日物语》饰“彤彤”《情满山乡》饰“秦芳”《唯有承诺留我心》饰“小韩雪婷”电视剧20集电视连续剧《烟海沉浮》饰“平平” 导演：姜峰20集电视连续剧《不弃今生》饰“妞妞” 导演：安建20集电视连续剧《生死一线》饰“妞妞” 导演：尤勇28集台湾电视剧《真爱一世情》饰“爱丽”导演：罗灿燃30集台湾电视剧《梧桐相思雨》饰“巧妞”导演：罗灿燃20集电视剧《铁色高原》饰“小裙子”导演：张金标 张军钊20集电视剧《离婚进行时》饰“钱纤纤”导演：徐宗政20集电视剧《家有宝贝》饰“安妮”导演：陶玲玲30集电视剧《红衣坊》饰“赵雪茗”导演：金轲 苏舟20集电视剧《感动中国》饰“小扣子”导演：杨影30集电视剧《朱元章除恶下陈州》饰“聪儿”导演：陈燕民30集电视剧《大理公主》饰 “小阿细”导演：台湾20集电视剧《为爱结婚》饰“陆蓓蓓”导演：成浩40集电视剧《日月凌空》饰“花吉娜娜”导演：陆琦30集电视剧《爱在来时》饰“小素雅” 导演：30集电视剧《戈壁母亲》饰“小钟柳”导演：沈好放30集电视剧《旗袍》饰“小雨绸”导演：王子(台湾)20集电视剧《给婚姻放个假》饰“石小清”导演：熊早40集电视剧《生死桥》饰“小丹丹”导演：田沁鑫25集电视剧《突然心动》饰“肖娅”导演：刘娟30集电视剧《幸福还有多远》饰“大丫”导演：姚晓峰100集电视剧《家在小区》饰“唐乐乐”导演：丁霄汉100集电视剧《家有儿女新传》饰“唐娜”导演：綦小卉"},{"name":"id"}]}
 
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
                data: [72587,66144,65890,89321,75803,61105,58012,121917,158925,111007,82434,73168,69683,78350,78367,80103,80356,75024,75741,78500,75249,74042,67057,57229,48060,42521,48440,60471,80745,113528,78506,57752,59612,54471,50383,48301,56383,53660,38541,33339,45973,47915]
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
        
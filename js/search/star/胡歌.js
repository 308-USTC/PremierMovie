
 var infor = {"content":[{"name":"name","value":"胡歌"},{"name":"别名","value":"胡柯"},{"name":"性别","value":"男"},{"name":"星座","value":"处女座"},{"name":"职业","value":"演员 / 配音 / 作曲 / 制片"},{"name":"出生日期","value":"1982-09-20"},{"name":"地区","value":"中国, 上海"},{"name":"image","value":"https://img3.doubanio.com/img/celebrity/medium/1468487353.74.jpg"},{"name":"summary","value":"胡歌，中国内地当红小生，有“古装王子”的美称。14岁便成为电视台的小主持。因成功塑造了《仙剑奇侠传》中豪爽深情的李逍遥，年仅22岁的胡歌一炮而红。2005年离开上海戏剧学院的胡歌，有着俊朗的外貌和腼腆笑容，他参与演出的影视作品虽然并不多，但每一部都可圈可点、反响不小：《仙剑奇侠传》的少侠李逍遥、《天外飞仙》的深情董永、《少年杨家将》的少将军杨六郎、《蒲公英》的熟男程灏和《第601个电话》的坚强阿文。尤其是李逍遥、杨六郎等帅气形象更让他迅速晋升为“国内第一古装小生”。2006年，胡歌遭遇一场车祸停滞一年，后幸福拾荒的同时再度复出。他曾领衔多部广为人知或感人至深的影视剧，也在玄幻及武侠电视剧的领域内具有充足经验。2010年，他的作品《神话》在中央八套作为开年大戏播出，一举打破央视八套的收视记录。胡歌在学习表演前有个梦想就是“做导演”。当年他报考大学的时候第一志愿就是中戏导演系。为了使自己看上去更像一个“导演”，胡歌还特意留了胡子。但后来有人告诉他，懂表演的导演才能成为一个真正的导演。有了演员的经历后，素质更全面，改行做导演更容易。于是，现在我们知道了一个演《仙剑奇侠传》的演员叫胡歌。"},{"name":"id"}]}
 
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
                data: [41375,42383,41698,40786,42074,44526,60618,148499,152628,83359,72546,67698,61309,61440,57435,56907,50777,54678,56617,56058,53128,49521,47709,44273,41496,45566,47253,53394,51387,51717,45303,39901,39801,39256,38618,36736,39050,43559,51656,43169,41332,71384]
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
        
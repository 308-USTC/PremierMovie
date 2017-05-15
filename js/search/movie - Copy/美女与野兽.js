
 var infor = {"content":[{"name":"name","value":"美女与野兽"},{"name":"导演","value":"比尔·康顿,"},{"name":"编剧","value":"斯蒂芬·切波斯基,埃文·斯彼里奥托普洛斯,琳达·伍尔芙顿,珍妮-玛丽·勒普兰斯·德博蒙,"},{"name":"主演","value":"艾玛·沃森,丹·史蒂文斯,卢克·伊万斯,凯文·克莱恩,乔什·加德,伊万·麦克格雷格,伊恩·麦克莱恩,艾玛·汤普森,斯坦利·图齐,古古·姆巴塔-劳,奥德拉·麦克唐纳,内森·麦克,哈蒂·莫拉汉,迈克尔·吉普森,水野索诺娅,亨利·加勒特,戴尔·布兰斯顿,"},{"name":"类型","value":"爱情,歌舞,奇幻,"},{"name":"上映日期","value":"2017-03-17(中国大陆/美国),"},{"name":"summary","value":"《美女与野兽》根据迪士尼1991年经典动画片及闻名全球的经典童话改编，讲述了少女贝儿的奇幻旅程——为了解救触怒野兽的父亲，勇敢善良的她只身一人来到古堡，代替父亲被囚禁其中。贝儿克服了恐惧，和城堡里的魔法家具们成为了朋友，也渐渐发现野兽其实是受了诅咒的王子，他可怖的外表下藏着一颗善良温柔的内心；这个故事也带领观众明白——美不仅仅是外表，更重要的是内心。"},{"name":"评分","value":null},{"name":"image","value":"https://img3.doubanio.com/view/movie_poster_cover/lpst/public/p2417948644.jpg"},{"name":"id","value":"25900945"}]}
 
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
            data: ['2017-01-20','2017-01-21','2017-01-22','2017-01-23','2017-01-24','2017-01-25','2017-01-26','2017-01-27','2017-01-28','2017-01-29','2017-01-30','2017-01-31','2017-02-01','2017-02-02','2017-02-03','2017-02-04','2017-02-05','2017-02-06','2017-02-07','2017-02-08','2017-02-09','2017-02-10','2017-02-11','2017-02-12','2017-02-13','2017-02-14','2017-02-15','2017-02-16','2017-02-17','2017-02-18','2017-02-19','2017-02-20','2017-02-21','2017-02-22','2017-02-23','2017-02-24','2017-02-25','2017-02-26','2017-02-27','2017-02-28','2017-03-01']
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
            data: [3898.2, 5972.9, 6539.0, 7285.2, 7706.9, 8606.3, 9112.5, 7997.5, 5177.8, 5150.5, 3700.9, 3295.5, 3023.2, 2737.1, 3727.9, 6218.4, 4915.5, 1988.2, 1811.4, 1680.2, 1435.6, 1246.6, 2410.7, 2085.0, 822.0, 819.7, 737.0]
        }, {
            name: '评论数',
            type: 'line',
            yAxisIndex: 1,
            data: [2674, 4782, 5896, 6898, 7041, 7486, 7498, 7276, 6100, 4179, 3155, 2571, 2257, 1930, 2019, 3200, 3087, 1853, 1318, 1193, 985, 884, 1071, 1009, 878, 704, 213]
        }, {
            name: '百度指数',
            type: 'line',
            yAxisIndex: 2,
            data: [10882,10808,10613,10397,12375,14883,11028,7197,9929,9740,10176,14685,15289,13563,13380,14210,13215,13773,13469,14403,13213,13375,12528,12516,11138,421,15624,16162,16172,17053,16893,14172,15720,14855,15856,16323,22312,17335,18838,17748,18252]
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
    
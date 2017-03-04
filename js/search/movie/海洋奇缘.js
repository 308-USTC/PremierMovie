
 var infor = {"content":[{"name":"name","value":"海洋奇缘"},{"name":"导演","value":"罗恩·克莱蒙兹,约翰·马斯克,"},{"name":"编剧","value":"罗恩·克莱蒙兹,约翰·马斯克,塔伊加·维迪提,杰拉德·布什,"},{"name":"主演","value":"奥丽伊·卡瓦洛,道恩·强森,艾伦·图代克,杰梅奈·克莱门特,尼可·斯彻金格,特穆拉·莫里森,瑞切尔·豪斯,奥斯卡·凯特利,特洛伊·波拉马鲁,"},{"name":"类型","value":"喜剧,动画,歌舞,家庭,奇幻,冒险,"},{"name":"上映日期","value":"2016-11-25(中国大陆),2016-11-23(美国),"},{"name":"summary","value":"故事最早始于住在风和海的半神毛伊（道恩·强森 Dwayne Johnson 配音），他偷走了女神的特菲堤之心，导致岩浆魔鬼厄卡陷入疯狂的状态，南太平洋各小岛也面临着毁灭的威胁。一千多年后，某座小岛上的酋长女儿莫阿娜（奥丽依·卡拉瓦霍 Auli'i Cravalho 配音）在父母的呵护下渐渐长大，童年时她曾偶然捡到特菲堤之心，亦曾受到大海的召唤，然而父亲却严厉禁止莫阿娜出海，即使小岛正遭受着死亡的威胁。从奶奶那里，莫阿娜知晓了他们这一族人的历史，于是为了拯救小岛，她依然出海去寻找被困在某地的毛伊，好让他归还特菲堤之心。历经千辛万苦，莫阿娜终于见到了这个传说中的高傲自大的半神。而毛伊则担心特菲堤之心带来霉运拒绝前往。只不过在命运的指引下，毛伊还是随着莫阿娜踏上未知的征途……"},{"name":"评分","value":7.6},{"name":"image","value":"https://img1.doubanio.com/view/movie_poster_cover/lpst/public/p2397960879.jpg"},{"name":"id","value":"25793398"}]}
 
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
            data: [5581,5809,5672,5764,6170,6641,6961,6264,7712,6779,6450,6181,6526,6396,6039,6090,6412,5637,6258,5445,4744,4755,5060,4833,3617,3519,3693,3890,5861,10235,10805,22990,22442,20376,16054,16732,20328,17671,11344,8995,8480]
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
    

 var infor = {"content":[{"name":"name","value":"吴磊"},{"name":"别名","value":null},{"name":"性别","value":"男"},{"name":"星座","value":"摩羯座"},{"name":"职业","value":"演员"},{"name":"出生日期","value":"1999-12-26"},{"name":"地区","value":"中国,上海"},{"name":"image","value":"https://img3.doubanio.com/img/celebrity/medium/1455856429.34.jpg"},{"name":"summary","value":"性格活泼外向，爽朗大方，家境还算优渥，是家中的开心果。一次在上海太平洋百货的偶遇，一只广告公司邀约，就此改变了他的命运。当时3岁的吴磊获邀接演了第一个广告《黄金搭档》，由于表现出色，形象效果俱佳，很快便受到多家广告公司的青睐，在短短两年内,吴磊接连演出多达50余部广告，从而启发吴磊优秀的表演天份。吴磊5岁时在电视剧《封神榜之凤鸣岐山》“小哪吒” 角色公开海选中，经过漫长的评比过程，在数百个试镜小演员当中脱颖而出。值得一提的是：吴磊并非就读于专业艺术学校，以前他从未学过表演。但却能将小哪吒”的角色诠释的活灵活现，演技获得剧组肯定叫好，导演对吴磊的评价是：“未来一颗新星”，履获好评的“小哪吒”此从开启演艺之路。转眼间喜爱表演的小吴磊，邀约接踵而来，至今戏约不断。往后吴磊多次出演富家少爷的角色，在戏里精湛的演技传神的演出，如同大家想象中的富家少爷颇为相似，导演更是拍案叫绝,嘉许“磊少”称号，后来吴磊的朋友都管他叫“磊少”。2009年并获《武林外传》大导演尚敬赏识，提拔出演《家有》系列年度喜剧大作《家有外星人》主角角色，拍摄同时吴磊承导演尚敬指点，演技更加精进。《家有外星人》于2009年暑假期间首轮强势登陆多家卫视频道，吴磊也因该片的热播而大受追捧。2010年，风靡国内的吴磊，再次迎来他的殊荣，成为了由知名儿童文学作家杨红樱女士写的《淘气包马小跳》改编电视剧版《淘气包马小跳》的小主演，扮演马小跳这个重量级角色！《淘气包马小跳》拍摄完成后，吴磊又参演了中国首部大型动漫真人结合魔幻情景喜剧——《魔法乐天树》，该剧目前正在后期制作中。"},{"name":"id"}]}
 
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
                data: [61928,61004,62386,63974,64594,64382,63372,59671,62667,61784,63098,62669,63535,64414,72165,75750,69104,71593,70283,70911,67427,79363,77923,66810,61214,59319,59833,65480,69649,79140,68674,62277,58400,58725,57336,59856,66092,61428,54593,53323,54944,54724]
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
        
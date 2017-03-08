
 var infor = {"content":[{"name":"name","value":"中国诗词大会第二季"},{"name":"主演","value":"董卿 康震 王立群 蒙曼 "},{"name":"类型","value":"真人秀"},{"name":"国家/地区","value":"中国大陆"},{"name":"开播日期","value":"2017"},{"name":"summary","value":"《中国诗词大会》（第二季）是科教频道自主研发的一档大型演播室季播节目。本节目以“赏中华诗词、寻文化基因、品生活之美”为宗旨，邀请全国各个年龄段、各个领域的诗词爱好者共同参与诗词知识比拼。"},{"name":"评分","value":8.5},{"name":"image","value":"https://img3.doubanio.com/view/movie_poster_cover/lpst/public/p2418525053.jpg"},{"name":"id","value":"26963073"}]}
 
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
                data: [0,0,0,0,0,0,1578,1152,2160,10322,15897,19264,24844,27171,36529,46809,61849,64809,107380,166528,104377,79551,53273,36303,30551,25233,23093,20067,20122,21891,19880,13489,14125,12992,12363,12825,15265,12997,7797,7823,7542,7464,8357,10707,10180]
            }, ]
        };

        var word_list = [{"text":"简单","weight":1.1312712466313828},{"text":"善良","weight":0.4017055366761566},{"text":"有趣","weight":0.8705617462871089},{"text":"舒服","weight":0.22092640512617884},{"text":"尴尬","weight":0.7353742345176965},{"text":"一星","weight":0.26574191629522903},{"text":"干净","weight":0.41538771382224876},{"text":"清新","weight":0.4219333189380311},{"text":"懒懒","weight":0.5852038466790825},{"text":"不错","weight":0.48498937835696027},{"text":"幽默","weight":0.005378054270190496},{"text":"无聊","weight":0.024058775077785775},{"text":"辛苦","weight":0.5738727158379552},{"text":"轻松","weight":0.04651092086762608},{"text":"挺好","weight":0.1405559471317306},{"text":"平淡","weight":0.10416677728677702},{"text":"和谐","weight":0.0339387082013234},{"text":"幸福","weight":0.23500319816985363},{"text":"浮躁","weight":0.07053597046078783},{"text":"庸俗","weight":0.48964821209332815},{"text":"最气","weight":0.33278258515096926},{"text":"最恨","weight":0.18267408065881488},{"text":"真诚","weight":0.1551048649662344},{"text":"爱和","weight":0.19190359163962362},{"text":"乐趣","weight":0.09880174144914372},{"text":"很好","weight":0.0017450135729972015},{"text":"年轻","weight":0.10239406107991228},{"text":"诚恳","weight":0.09208292940001758},{"text":"艰辛","weight":0.10093194935296268},{"text":"活好","weight":0.09762646242005896},{"text":"快乐","weight":0.03826472800294252},{"text":"美好","weight":0.2090824475846524},{"text":"疯狂","weight":0.3153733650939792},{"text":"纯美","weight":0.21555912417960651},{"text":"精致","weight":0.25134691628790556},{"text":"节目","weight":0.3703696681085245},{"text":"老师","weight":1.2049657432060394},{"text":"综艺","weight":0.8146499370588357},{"text":"版权","weight":0.3628332575991055},{"text":"农村","weight":0.2111208417073471},{"text":"小厨","weight":0.026622575825484066},{"text":"做菜","weight":0.1902997469786522},{"text":"广告","weight":0.01993989915624481},{"text":"观众","weight":0.17265863423579972},{"text":"原创","weight":0.04099502544706015},{"text":"原版","weight":0.05225359504646444},{"text":"样子","weight":0.0020603300774169166},{"text":"爸爸","weight":0.135951983137494},{"text":"儿子","weight":0.029837398239911776},{"text":"姑娘","weight":0.06056318511697253},{"text":"评论","weight":0.11667362990997092},{"text":"房子","weight":0.006883207770179912},{"text":"评分","weight":0.010614527978752926},{"text":"人生","weight":0.05124322755462962},{"text":"学生","weight":0.01896931026000968},{"text":"动物","weight":0.07935577329026691},{"text":"国产","weight":0.0032831537936709385},{"text":"类型","weight":0.09500418894371022},{"text":"自带","weight":0.07055775065296845},{"text":"朋友","weight":0.011648489970419324},{"text":"塑料","weight":0.04139531336532482},{"text":"智商","weight":0.11503946473256146},{"text":"全程","weight":0.06187160334176726},{"text":"内容","weight":0.007238232284406129},{"text":"垃圾","weight":0.0021065262520680696},{"text":"芒果","weight":0.06642139480853043},{"text":"太重","weight":0.04597489022789419},{"text":"一星","weight":0.011487858854930241},{"text":"时代","weight":0.07661054353083761},{"text":"画面","weight":0.08282618569258555},{"text":"","weight":null}];


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
        

 var infor = {"content":[{"name":"name","value":"奇葩说 第三季"},{"name":"主演","value":"蔡康永 马东 "},{"name":"类型","value":"脱口秀"},{"name":"国家/地区","value":"中国大陆"},{"name":"开播日期","value":"2016"},{"name":"summary","value":"《奇葩说》是爱奇艺马东工作室打造的中国首档说话达人秀，由高晓松和蔡康永担任团长，旨在寻找华人华语世界中，观点独特、口才出众的 “最会说话的人”。"},{"name":"评分","value":8.6},{"name":"image","value":"https://img3.doubanio.com/view/movie_poster_cover/lpst/public/p2324832785.jpg"},{"name":"id","value":"26581134"}]}
 
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
                data: []
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
                data: []
            }, ]
        };

        var word_list = [{"text":"简单","weight":1.1884318589313907},{"text":"善良","weight":0.7699690393930624},{"text":"有趣","weight":0.45286016340283797},{"text":"舒服","weight":0.35679988692926007},{"text":"尴尬","weight":0.39324258799235656},{"text":"一星","weight":0.5971411351571525},{"text":"干净","weight":0.7423587500986427},{"text":"清新","weight":0.6645943618798367},{"text":"懒懒","weight":0.061145618678992625},{"text":"不错","weight":0.307706098515191},{"text":"幽默","weight":0.540786120940484},{"text":"无聊","weight":0.343139175934041},{"text":"辛苦","weight":0.4278426496684637},{"text":"轻松","weight":0.3576110651039119},{"text":"挺好","weight":0.4678247974883544},{"text":"平淡","weight":0.10819603914106442},{"text":"和谐","weight":0.5165883449603226},{"text":"幸福","weight":0.09262165765604237},{"text":"浮躁","weight":0.2336409638212549},{"text":"庸俗","weight":0.18259532318863544},{"text":"最气","weight":0.049503905338961804},{"text":"最恨","weight":0.5259295595984437},{"text":"真诚","weight":0.12275786621193734},{"text":"爱和","weight":0.21757550064738876},{"text":"乐趣","weight":0.18751524466727051},{"text":"很好","weight":0.15941628158120524},{"text":"年轻","weight":0.45345107951506197},{"text":"诚恳","weight":0.5017236369144898},{"text":"艰辛","weight":0.41510385284762347},{"text":"活好","weight":0.3000741979923049},{"text":"快乐","weight":0.17670658686363258},{"text":"美好","weight":0.16619462018190173},{"text":"疯狂","weight":0.09245271042655523},{"text":"纯美","weight":0.1504528368820378},{"text":"精致","weight":0.09100790669552301},{"text":"节目","weight":0.4408217424865641},{"text":"老师","weight":0.6096357507346166},{"text":"综艺","weight":0.26947192042374524},{"text":"版权","weight":0.17574682037733583},{"text":"农村","weight":0.15713496387088693},{"text":"小厨","weight":0.08604184682777866},{"text":"做菜","weight":0.023551648987886812},{"text":"广告","weight":0.1822773650083803},{"text":"观众","weight":0.06129950108124736},{"text":"原创","weight":0.025756304104453173},{"text":"原版","weight":0.13060996834949867},{"text":"样子","weight":0.1514421346241947},{"text":"爸爸","weight":0.08204553832120262},{"text":"儿子","weight":0.029013912749652204},{"text":"姑娘","weight":0.03469425531121764},{"text":"评论","weight":0.08435378612720082},{"text":"房子","weight":0.06465418799963195},{"text":"评分","weight":0.056574726990095234},{"text":"人生","weight":0.1256489496959415},{"text":"学生","weight":0.046636934741181066},{"text":"动物","weight":0.07322985853654758},{"text":"国产","weight":0.10003096153451402},{"text":"类型","weight":0.03492660637887003},{"text":"自带","weight":0.042400020981504576},{"text":"朋友","weight":0.003629881921549091},{"text":"塑料","weight":0.04524600676813963},{"text":"智商","weight":0.008202186870276348},{"text":"全程","weight":0.021527924144149592},{"text":"内容","weight":0.03870251624473553},{"text":"垃圾","weight":0.062372006837625664},{"text":"芒果","weight":0.06153623316557288},{"text":"太重","weight":0.02917812969458187},{"text":"一星","weight":0.010930260180804714},{"text":"时代","weight":0.10694584335902042},{"text":"画面","weight":0.10451784516880319},{"text":"","weight":null}];


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
        
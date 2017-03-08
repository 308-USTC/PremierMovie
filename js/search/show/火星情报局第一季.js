
 var infor = {"content":[{"name":"name","value":"火星情报局第一季"},{"name":"主演","value":"汪涵 宁静 周杰 薛之谦 "},{"name":"类型","value":"脱口秀"},{"name":"国家/地区","value":"中国大陆"},{"name":"开播日期","value":"2016"},{"name":"summary","value":"《火星情报局》旨在纵容一切新奇有趣的发现，以特工为单位，守护提案，舌战群儒。激活全民洞察潜能，用火星方式弄喜你。\n在节目氛围中，火星情报局被定义为某地外情报机构，由汪涵出任局长统领局内事务。明\n星作为火星特工代表，定期向局长汇报新奇有趣的新发现，并给出建设性提议，引发全民提案风潮。局内情报评估采用“火星元老院”的质询形式，对有价值的情报进行探讨、审议，并派遣火星特工对有价值的情报进行趣味验证。最终由局长对新发现提案进行裁决，通过的提案将被列入火星历法，被所有火星人遵守。\n节目讨论的话题都来自于优酷土豆大数据，这也意味着节目中的内容极易触发网友共鸣；节目还间接地为网友的“脑洞大开”提供了施展平台，节目形式和内容尺度都充分彰显了其网生综艺的特质，并通过颠覆性的玩法、革命性的形态，以及创新性的互动方式，让观众们在欢笑中探索新奇。"},{"name":"评分","value":7.1},{"name":"image","value":"https://img3.doubanio.com/view/movie_poster_cover/lpst/public/p2330803232.jpg"},{"name":"id","value":"26759650"}]}
 
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

        var word_list = [{"text":"简单","weight":0.8999840163785459},{"text":"善良","weight":1.2184881454418306},{"text":"有趣","weight":0.8538520342462211},{"text":"舒服","weight":0.5876049908213936},{"text":"尴尬","weight":0.31217464383194776},{"text":"一星","weight":0.36358597947239535},{"text":"干净","weight":0.5200992298528032},{"text":"清新","weight":0.19625062515219796},{"text":"懒懒","weight":0.4304343063085871},{"text":"不错","weight":0.056785428734992247},{"text":"幽默","weight":0.6654414374388802},{"text":"无聊","weight":0.29269355615834747},{"text":"辛苦","weight":0.24139031622587453},{"text":"轻松","weight":0.24144820340885154},{"text":"挺好","weight":0.009395629361708683},{"text":"平淡","weight":0.2648956504705742},{"text":"和谐","weight":0.4969641515903813},{"text":"幸福","weight":0.3713477477615588},{"text":"浮躁","weight":0.4283388933748387},{"text":"庸俗","weight":0.07153119266518611},{"text":"最气","weight":0.12413717485871717},{"text":"最恨","weight":0.008135934015137049},{"text":"真诚","weight":0.2748912110818264},{"text":"爱和","weight":0.18850942030560536},{"text":"乐趣","weight":0.40594128582705646},{"text":"很好","weight":0.1635672196804161},{"text":"年轻","weight":0.07817017322514863},{"text":"诚恳","weight":0.2229705123927139},{"text":"艰辛","weight":0.5046651416948343},{"text":"活好","weight":0.153591678130965},{"text":"快乐","weight":0.014584343128909095},{"text":"美好","weight":0.1053157779948371},{"text":"疯狂","weight":0.270811033434024},{"text":"纯美","weight":0.4042136949990031},{"text":"精致","weight":0.11728165430699164},{"text":"节目","weight":0.8176798436300368},{"text":"老师","weight":0.6493351820373913},{"text":"综艺","weight":1.0531578051630701},{"text":"版权","weight":0.03356832033265185},{"text":"农村","weight":0.29574657843936386},{"text":"小厨","weight":0.1897830011040083},{"text":"做菜","weight":0.1773341601476329},{"text":"广告","weight":0.11257190836380492},{"text":"观众","weight":0.10106113862389865},{"text":"原创","weight":0.12132568557156409},{"text":"原版","weight":0.1485788284392631},{"text":"样子","weight":0.11547990050709252},{"text":"爸爸","weight":0.11127209496372156},{"text":"儿子","weight":0.07255142107317618},{"text":"姑娘","weight":0.021073594782993928},{"text":"评论","weight":0.05396340071919216},{"text":"房子","weight":0.08273844527561951},{"text":"评分","weight":0.0587515865800982},{"text":"人生","weight":0.09989190205859828},{"text":"学生","weight":0.07202672712800642},{"text":"动物","weight":0.07338628793207802},{"text":"国产","weight":0.06602978577257193},{"text":"类型","weight":0.0911612687556489},{"text":"自带","weight":0.02663956247656964},{"text":"朋友","weight":0.027298154645789028},{"text":"塑料","weight":0.07997364138862423},{"text":"智商","weight":0.03886997976263841},{"text":"全程","weight":0.11453785843176521},{"text":"内容","weight":0.04016400157868338},{"text":"垃圾","weight":0.08350129645582886},{"text":"芒果","weight":0.016880068118438524},{"text":"太重","weight":0.06625246380937198},{"text":"一星","weight":0.0006877773636155721},{"text":"时代","weight":0.050974818687147656},{"text":"画面","weight":0.09565966319332751},{"text":"","weight":null}];


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
        
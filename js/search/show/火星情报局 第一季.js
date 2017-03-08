
 var infor = {"content":[{"name":"name","value":"火星情报局 第一季"},{"name":"主演","value":"汪涵 宁静 周杰 薛之谦 "},{"name":"类型","value":"脱口秀"},{"name":"国家/地区","value":"中国大陆"},{"name":"开播日期","value":"2016"},{"name":"summary","value":"《火星情报局》旨在纵容一切新奇有趣的发现，以特工为单位，守护提案，舌战群儒。激活全民洞察潜能，用火星方式弄喜你。\n在节目氛围中，火星情报局被定义为某地外情报机构，由汪涵出任局长统领局内事务。明\n星作为火星特工代表，定期向局长汇报新奇有趣的新发现，并给出建设性提议，引发全民提案风潮。局内情报评估采用“火星元老院”的质询形式，对有价值的情报进行探讨、审议，并派遣火星特工对有价值的情报进行趣味验证。最终由局长对新发现提案进行裁决，通过的提案将被列入火星历法，被所有火星人遵守。\n节目讨论的话题都来自于优酷土豆大数据，这也意味着节目中的内容极易触发网友共鸣；节目还间接地为网友的“脑洞大开”提供了施展平台，节目形式和内容尺度都充分彰显了其网生综艺的特质，并通过颠覆性的玩法、革命性的形态，以及创新性的互动方式，让观众们在欢笑中探索新奇。"},{"name":"评分","value":7.1},{"name":"image","value":"https://img3.doubanio.com/view/movie_poster_cover/lpst/public/p2330803232.jpg"},{"name":"id","value":"26759650"}]}
 
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

        var word_list = [{"text":"简单","weight":1.2984742087691092},{"text":"善良","weight":0.3326347838196429},{"text":"有趣","weight":0.8633153063015032},{"text":"舒服","weight":0.622314951280978},{"text":"尴尬","weight":0.5535156040137739},{"text":"一星","weight":0.15558162141551105},{"text":"干净","weight":0.2655604876071945},{"text":"清新","weight":0.4619816888402171},{"text":"懒懒","weight":0.5639282928415836},{"text":"不错","weight":0.4687142491483183},{"text":"幽默","weight":0.5804905397793259},{"text":"无聊","weight":0.14817992011041567},{"text":"辛苦","weight":0.29862133947334923},{"text":"轻松","weight":0.5159670988306595},{"text":"挺好","weight":0.4362677301463381},{"text":"平淡","weight":0.24868482676827777},{"text":"和谐","weight":0.31462733404279225},{"text":"幸福","weight":0.3807148258778602},{"text":"浮躁","weight":0.15158840154198208},{"text":"庸俗","weight":0.25357706498970817},{"text":"最气","weight":0.40012092935784727},{"text":"最恨","weight":0.06835533057903255},{"text":"真诚","weight":0.17069184629589665},{"text":"爱和","weight":0.23647937969093952},{"text":"乐趣","weight":0.4043490343689234},{"text":"很好","weight":0.2165614189089095},{"text":"年轻","weight":0.0009630436860117149},{"text":"诚恳","weight":0.5229140995560236},{"text":"艰辛","weight":0.37583561680490274},{"text":"活好","weight":0.3275827502813929},{"text":"快乐","weight":0.31337188855628056},{"text":"美好","weight":0.4473734223006461},{"text":"疯狂","weight":0.1685478051616794},{"text":"纯美","weight":0.039216976336538804},{"text":"精致","weight":0.05057451450373051},{"text":"节目","weight":1.2887947755503546},{"text":"老师","weight":0.6580887103696352},{"text":"综艺","weight":0.021735490438942188},{"text":"版权","weight":0.09574633103625974},{"text":"农村","weight":0.001779688229773821},{"text":"小厨","weight":0.10112941605722864},{"text":"做菜","weight":0.022752753288232903},{"text":"广告","weight":0.1508953270796843},{"text":"观众","weight":0.0027866310583549644},{"text":"原创","weight":0.10805071770609871},{"text":"原版","weight":0.028136146838844456},{"text":"样子","weight":0.11036171243700978},{"text":"爸爸","weight":0.15452936164198108},{"text":"儿子","weight":0.12850390852242755},{"text":"姑娘","weight":0.03883952303869537},{"text":"评论","weight":0.027945913646419504},{"text":"房子","weight":0.06530265853954928},{"text":"评分","weight":0.11732262081293965},{"text":"人生","weight":0.012830281703121789},{"text":"学生","weight":0.028628755868951423},{"text":"动物","weight":0.035512873830263206},{"text":"国产","weight":0.10598709240121577},{"text":"类型","weight":0.007447446208111528},{"text":"自带","weight":0.06803421875258592},{"text":"朋友","weight":0.08877854572974068},{"text":"塑料","weight":0.03936340768858457},{"text":"智商","weight":0.015217479832895441},{"text":"全程","weight":0.09032363882621668},{"text":"内容","weight":0.028258951596473257},{"text":"垃圾","weight":0.009115556071798552},{"text":"芒果","weight":0.0008082958254445497},{"text":"太重","weight":0.10237036235705961},{"text":"一星","weight":0.09105343288788792},{"text":"时代","weight":0.0727619686425251},{"text":"画面","weight":0.038137231241205286},{"text":"","weight":null}];


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
        
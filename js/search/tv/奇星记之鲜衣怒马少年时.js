
 var infor = {"content":[{"name":"name","value":"奇星记之鲜衣怒马少年时"},{"name":"导演","value":"黄祖权"},{"name":"主演","value":"吴磊 陈翔 郑合惠子 郝劭文 "},{"name":"类型","value":"剧情 奇幻 古装"},{"name":"制片国家/地区","value":"中国大陆"},{"name":"上映日期","value":"2017"},{"name":"summary","value":"百年难得一见的流星雨忽然降下，带来了奇石降临在塞外。皇帝派出少年白泽（陈翔 饰）前往塞外寻找奇石的下落，将平定内乱安康家国的愿望寄托在奇石的神秘力量之上。白泽虽然对皇帝和国家忠心耿耿，却因为身为罪臣之子而无法得到重用在朝中饱受排挤，他希望借由此次任务来展现自己的实力。\n一路上，白泽结识了拥有一半魔族血统的正直少年展雄飞（吴磊 饰）和憨厚老实的元帅（郝邵文 饰），三人一拍即合成为了旅伴，彼此之间结下了深厚的友谊。奇石的强大力量在江湖上越传越远，越来越多的人为了得到奇石而展开了较量，与此同时，朝中企图谋权篡位的奸臣惧怕奇石的力量，亦派出了杀手追杀白泽一行人。"},{"name":"评分","value":4.7},{"name":"image","value":"https://img3.doubanio.com/view/movie_poster_cover/lpst/public/p2407203635.jpg"},{"name":"id","value":"26615611"}]}
 
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

        var word_list = [{"text":"甜甜","weight":1.3838901140238484},{"text":"景甜","weight":0.6227250374462595},{"text":"舒畅","weight":1.0875906631132939},{"text":"特效","weight":0.4507522623249207},{"text":"不错","weight":0.5707017355243738},{"text":"拖沓","weight":0.18295769240228446},{"text":"意外","weight":0.006849434461031174},{"text":"温柔","weight":0.5265315150907564},{"text":"甜美","weight":0.33599637626744383},{"text":"无聊","weight":0.3864533692049607},{"text":"厉害","weight":0.30124247402770277},{"text":"精致","weight":0.0526357322063911},{"text":"年轻","weight":0.09970064885027072},{"text":"骄傲","weight":0.17204798193439283},{"text":"一星","weight":0.12197058338899859},{"text":"尴尬","weight":0.3628368324327658},{"text":"很美","weight":0.2758634066053268},{"text":"漂亮","weight":0.11437803576217617},{"text":"诚意","weight":0.04330577086936079},{"text":"聪明","weight":0.23379170477266656},{"text":"宽厚","weight":0.24934878387304343},{"text":"良心","weight":0.13168540560571337},{"text":"新颖","weight":0.2850546521681315},{"text":"有趣","weight":0.06240806765704181},{"text":"富贵","weight":0.0009041317719867615},{"text":"贫穷","weight":0.04426742600638194},{"text":"快乐","weight":0.11508734482648085},{"text":"鲜艳","weight":0.0007957028688925343},{"text":"落差","weight":0.12862557003288105},{"text":"很大","weight":0.2678277571591881},{"text":"善良","weight":0.0033147929244342488},{"text":"最爱","weight":0.08101501836013343},{"text":"完整","weight":0.2211535883357368},{"text":"美艳","weight":0.22413111676054795},{"text":"很俗","weight":0.26313651165013213},{"text":"演技","weight":0.24874783348771284},{"text":"剧情","weight":0.5704529513509443},{"text":"男主","weight":0.3724192353242063},{"text":"演员","weight":0.07883731866223681},{"text":"女主","weight":0.2946821188587612},{"text":"套路","weight":0.14658790014416748},{"text":"电视剧","weight":0.05167787822830589},{"text":"背景","weight":0.11475403621228394},{"text":"古装","weight":0.11568124371749865},{"text":"国产","weight":0.0062310820975176075},{"text":"历史","weight":0.18993772119572147},{"text":"故事","weight":0.05335713435199901},{"text":"狗血","weight":0.062372148255049636},{"text":"台词","weight":0.054231450058228055},{"text":"智商","weight":0.11907740715411644},{"text":"用心","weight":0.06749966460093017},{"text":"水军","weight":0.11154634750597421},{"text":"编剧","weight":0.0916675147889742},{"text":"眼神","weight":0.053582692142498944},{"text":"角色","weight":0.14377436882642478},{"text":"老套","weight":0.1581592441468735},{"text":"人物","weight":0.13697045929810986},{"text":"颜值","weight":0.05032624795785049},{"text":"主角","weight":0.15637626904840712},{"text":"配角","weight":0.12879337900928153},{"text":"主演","weight":0.08182214799166553},{"text":"观众","weight":0.08147699906181269},{"text":"场景","weight":0.07220821223601293},{"text":"男女","weight":0.08068472506673596},{"text":"造型","weight":0.110836315081597},{"text":"结局","weight":0.13498998821905298},{"text":"古装剧","weight":0.06182547653731025},{"text":"表情","weight":0.13075068670507597},{"text":"老戏骨","weight":0.036729606678773806},{"text":"珍珠","weight":0.09946432037960978},{"text":"","weight":null}];


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
        
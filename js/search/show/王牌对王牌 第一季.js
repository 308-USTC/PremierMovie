
 var infor = {"content":[{"name":"name","value":"王牌对王牌 第一季"},{"name":"主演","value":"王祖蓝 白百何 "},{"name":"类型","value":"真人秀"},{"name":"国家/地区","value":"中国大陆"},{"name":"开播日期","value":"2016"},{"name":"summary","value":"《王牌对王牌》是浙江卫视2016年第一季度全新打造的大型棚内明星艺能成长类节目。近日，浙江卫视首度正式曝光了明年的版面编排，四个季度累计的季播节目多达22档以上，当属卫视之冠。其中第一季度更是周末三天全部叠播编排，每周累计7档季播节目。而明年的第一季度将由《王牌对王牌》和《二十四小时》两档节目叠播填充，《王牌对王牌》节目模式为“中国最红王牌队员对决”。"},{"name":"评分","value":5},{"name":"image","value":"https://img5.doubanio.com/view/movie_poster_cover/lpst/public/p2311215416.jpg"},{"name":"id","value":"26694902"}]}
 
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

        var word_list = [{"text":"简单","weight":1.0889686540765664},{"text":"善良","weight":0.8740747553478682},{"text":"有趣","weight":0.5752495589966876},{"text":"舒服","weight":0.23499859887448257},{"text":"尴尬","weight":0.18651251206779174},{"text":"一星","weight":0.7023260149323921},{"text":"干净","weight":0.32170991880422595},{"text":"清新","weight":0.49535056977647635},{"text":"懒懒","weight":0.2713007452669458},{"text":"不错","weight":0.546571600104396},{"text":"幽默","weight":0.28880839344269715},{"text":"无聊","weight":0.3288673838933163},{"text":"辛苦","weight":0.6795999874578416},{"text":"轻松","weight":0.19664682288025706},{"text":"挺好","weight":0.16165635064847692},{"text":"平淡","weight":0.08612255370801203},{"text":"和谐","weight":0.0024995246206264317},{"text":"幸福","weight":0.38274644632683635},{"text":"浮躁","weight":0.058201707581117396},{"text":"庸俗","weight":0.4919309891763545},{"text":"最气","weight":0.2285082746364531},{"text":"最恨","weight":0.11179388525827587},{"text":"真诚","weight":0.09265454413666069},{"text":"爱和","weight":0.483820092980787},{"text":"乐趣","weight":0.3151535397001596},{"text":"很好","weight":0.2710240488874565},{"text":"年轻","weight":0.5072235241376674},{"text":"诚恳","weight":0.4749674913772815},{"text":"艰辛","weight":0.12686784839060314},{"text":"活好","weight":0.06748637650038568},{"text":"快乐","weight":0.2903909175500409},{"text":"美好","weight":0.1703873787210492},{"text":"疯狂","weight":0.01143194540671618},{"text":"纯美","weight":0.2513245456861702},{"text":"精致","weight":0.19217358631288703},{"text":"节目","weight":0.7250247601462225},{"text":"老师","weight":0.03115035883578529},{"text":"综艺","weight":0.3331614093058746},{"text":"版权","weight":0.22860748516007698},{"text":"农村","weight":0.1865495364047031},{"text":"小厨","weight":0.10133453169677423},{"text":"做菜","weight":0.17315627448656878},{"text":"广告","weight":0.02480218995846092},{"text":"观众","weight":0.023508942792096706},{"text":"原创","weight":0.04429608884010082},{"text":"原版","weight":0.00036142154764775517},{"text":"样子","weight":0.04624458115707985},{"text":"爸爸","weight":0.097457301046724},{"text":"儿子","weight":0.06431155696196635},{"text":"姑娘","weight":0.11420613069803631},{"text":"评论","weight":0.002204510563989906},{"text":"房子","weight":0.017569159319672043},{"text":"评分","weight":0.07734094430463596},{"text":"人生","weight":0.008221426913956121},{"text":"学生","weight":0.07341382131738808},{"text":"动物","weight":0.023639496609419535},{"text":"国产","weight":0.10474552117331762},{"text":"类型","weight":0.03297825392478046},{"text":"自带","weight":0.007658981117890384},{"text":"朋友","weight":0.02375994913459558},{"text":"塑料","weight":0.05778101490256214},{"text":"智商","weight":0.06727556662749634},{"text":"全程","weight":0.03520456943117585},{"text":"内容","weight":0.04049479335370876},{"text":"垃圾","weight":0.04233622070606082},{"text":"芒果","weight":0.0008014379855610094},{"text":"太重","weight":0.008322557543398801},{"text":"一星","weight":0.1078489853060251},{"text":"时代","weight":0.09325965886123312},{"text":"画面","weight":0.04893011500334269},{"text":"","weight":null}];


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
        
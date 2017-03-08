
 var infor = {"content":[{"name":"name","value":"见字如面 第一季"},{"name":"主演","value":"翟毓红 许子东 杨雨 林更新 "},{"name":"类型","value":"脱口秀"},{"name":"国家/地区","value":"中国大陆"},{"name":"开播日期","value":"2016"},{"name":"summary","value":"国内首档也是全屏唯一一档季播型书信朗读节目《见字如面》，由成功制作了“中国汉字听写大会“和中国成语大会”两档国民文化节目的国内顶尖视频创作团队实力文化制作。《见字如面》是一档以明星读信为主要形式的阅读推广季播节目，旨在用书信打开历史节点，带领观众走进那些依然鲜活的时代场 景、人生故事，去触碰那些依然可感的人物情状和社会风物，重新领会中国人的精神情怀与生活智慧。"},{"name":"评分","value":9},{"name":"image","value":"https://img1.doubanio.com/view/movie_poster_cover/lpst/public/p2407328337.jpg"},{"name":"id","value":"26936282"}]}
 
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

        var word_list = [{"text":"简单","weight":0.02963285472951196},{"text":"善良","weight":0.38563742946300866},{"text":"有趣","weight":0.3368634223092551},{"text":"舒服","weight":0.42569098480924056},{"text":"尴尬","weight":0.055477480770781094},{"text":"一星","weight":0.4449522345269149},{"text":"干净","weight":0.030151705175978507},{"text":"清新","weight":0.421965608364698},{"text":"懒懒","weight":0.029466519593715358},{"text":"不错","weight":0.5282372520926379},{"text":"幽默","weight":0.6574403042584893},{"text":"无聊","weight":0.09986114212298386},{"text":"辛苦","weight":0.01507871675604879},{"text":"轻松","weight":0.38854768177108817},{"text":"挺好","weight":0.44672760463477984},{"text":"平淡","weight":0.3990733823397812},{"text":"和谐","weight":0.2120426580958593},{"text":"幸福","weight":0.49044352099623406},{"text":"浮躁","weight":0.19150003393519313},{"text":"庸俗","weight":0.4509652137854537},{"text":"最气","weight":0.5140995019669885},{"text":"最恨","weight":0.24219650553965238},{"text":"真诚","weight":0.3132508419555952},{"text":"爱和","weight":0.1552362430679147},{"text":"乐趣","weight":0.4134657493619228},{"text":"很好","weight":0.013529293525927123},{"text":"年轻","weight":0.4443532465673079},{"text":"诚恳","weight":0.006600637798729831},{"text":"艰辛","weight":0.00919054292830064},{"text":"活好","weight":0.047034557933104605},{"text":"快乐","weight":0.45143852460787726},{"text":"美好","weight":0.0018925822690388752},{"text":"疯狂","weight":0.14367813409937866},{"text":"纯美","weight":0.26040113262818554},{"text":"精致","weight":0.07066110352089783},{"text":"节目","weight":1.044510020919068},{"text":"老师","weight":0.4781455506213804},{"text":"综艺","weight":0.8319773666986985},{"text":"版权","weight":0.17624767424010557},{"text":"农村","weight":0.03519022210768204},{"text":"小厨","weight":0.04167769166278993},{"text":"做菜","weight":0.1589574288678344},{"text":"广告","weight":0.056172914070742666},{"text":"观众","weight":0.08613981197134761},{"text":"原创","weight":0.12454487423375585},{"text":"原版","weight":0.1417649855827714},{"text":"样子","weight":0.08721868818793402},{"text":"爸爸","weight":0.09934652494712345},{"text":"儿子","weight":0.14063241730558604},{"text":"姑娘","weight":0.044723074725312596},{"text":"评论","weight":0.0651213474238828},{"text":"房子","weight":0.10416302453307366},{"text":"评分","weight":0.0780905071264325},{"text":"人生","weight":0.05856302720311071},{"text":"学生","weight":0.06808571463154545},{"text":"动物","weight":0.1150354944625155},{"text":"国产","weight":0.06287739346943506},{"text":"类型","weight":0.11565100796811001},{"text":"自带","weight":0.007371014889145994},{"text":"朋友","weight":0.10228696418468756},{"text":"塑料","weight":0.10084703964701475},{"text":"智商","weight":0.003660239629696759},{"text":"全程","weight":0.11102026789302943},{"text":"内容","weight":0.08190073549939855},{"text":"垃圾","weight":0.05611382976076892},{"text":"芒果","weight":0.054126527891727595},{"text":"太重","weight":0.0946596910518151},{"text":"一星","weight":0.07747945963906978},{"text":"时代","weight":0.10052374330903692},{"text":"画面","weight":0.035556328449747605},{"text":"","weight":null}];


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
        
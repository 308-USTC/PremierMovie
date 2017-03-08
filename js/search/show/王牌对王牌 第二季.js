
 var infor = {"content":[{"name":"name","value":"王牌对王牌 第二季"},{"name":"主演","value":"王源 王祖蓝 宋茜 沈涛 "},{"name":"类型","value":"真人秀"},{"name":"国家/地区","value":"中国大陆"},{"name":"开播日期","value":"2017"},{"name":"summary","value":"《王牌对王牌第二季》是浙江卫视推出的大型原创室内竞技真人秀节目，由浙江卫视节目中心制作。节目共12期。节目主持人为沈涛，宋茜担任固定王牌特工，王祖蓝、王源分任两队王牌队长。"},{"name":"评分","value":6.1},{"name":"image","value":"https://img3.doubanio.com/view/movie_poster_cover/lpst/public/p2415543880.jpg"},{"name":"id","value":"26956708"}]}
 
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

        var word_list = [{"text":"简单","weight":1.2078719241349676},{"text":"善良","weight":0.06855750583055302},{"text":"有趣","weight":0.015797606002554535},{"text":"舒服","weight":0.09012057453234742},{"text":"尴尬","weight":0.033866647465369916},{"text":"一星","weight":0.1169725679758698},{"text":"干净","weight":0.7415752172233643},{"text":"清新","weight":0.037825795275627294},{"text":"懒懒","weight":0.30845947701027976},{"text":"不错","weight":0.19901206943321917},{"text":"幽默","weight":0.34452883528059},{"text":"无聊","weight":0.36731145922266156},{"text":"辛苦","weight":0.6610446529831154},{"text":"轻松","weight":0.048405590843702266},{"text":"挺好","weight":0.17820644749264877},{"text":"平淡","weight":0.43359909120810386},{"text":"和谐","weight":0.09153470618803329},{"text":"幸福","weight":0.19586708975755027},{"text":"浮躁","weight":0.07702026302438136},{"text":"庸俗","weight":0.051010998517607105},{"text":"最气","weight":0.30572731653359164},{"text":"最恨","weight":0.4717751960842088},{"text":"真诚","weight":0.021264779536389004},{"text":"爱和","weight":0.024458791964663874},{"text":"乐趣","weight":0.31847321219690405},{"text":"很好","weight":0.27506556982000385},{"text":"年轻","weight":0.3336889298567678},{"text":"诚恳","weight":0.5247711011743814},{"text":"艰辛","weight":0.12597442154490088},{"text":"活好","weight":0.07837288445709553},{"text":"快乐","weight":0.2386289400507533},{"text":"美好","weight":0.32716737154682773},{"text":"疯狂","weight":0.1180022152059206},{"text":"纯美","weight":0.18011121475220904},{"text":"精致","weight":0.3743818701751776},{"text":"节目","weight":0.01305491896418437},{"text":"老师","weight":1.1650657584148758},{"text":"综艺","weight":0.07141067073378948},{"text":"版权","weight":0.3747569129102612},{"text":"农村","weight":0.20609264313902545},{"text":"小厨","weight":0.19673187709201145},{"text":"做菜","weight":0.10203790828611821},{"text":"广告","weight":0.017819863260959606},{"text":"观众","weight":0.07223046513684664},{"text":"原创","weight":0.07974607259394974},{"text":"原版","weight":0.013083814904333456},{"text":"样子","weight":0.15389289958216237},{"text":"爸爸","weight":0.00431689542596737},{"text":"儿子","weight":0.08395395874668918},{"text":"姑娘","weight":0.13442192146525686},{"text":"评论","weight":0.007539827701663239},{"text":"房子","weight":0.07487224966141592},{"text":"评分","weight":0.12751185272535925},{"text":"人生","weight":0.1295837335014788},{"text":"学生","weight":0.12117379385847425},{"text":"动物","weight":0.10076756348844529},{"text":"国产","weight":0.06269387082652027},{"text":"类型","weight":0.003929902158457122},{"text":"自带","weight":0.08904059706352677},{"text":"朋友","weight":0.0912478081461716},{"text":"塑料","weight":0.053920887819248774},{"text":"智商","weight":0.04353614956179239},{"text":"全程","weight":0.05136690241520422},{"text":"内容","weight":0.0633819297388945},{"text":"垃圾","weight":0.07635070781666621},{"text":"芒果","weight":0.0776459039993864},{"text":"太重","weight":0.030801101271750397},{"text":"一星","weight":0.06865945304493164},{"text":"时代","weight":0.10378582053942238},{"text":"画面","weight":0.018240854663993642},{"text":"","weight":null}];


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
        
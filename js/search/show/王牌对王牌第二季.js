
 var infor = {"content":[{"name":"name","value":"王牌对王牌第二季"},{"name":"主演","value":"王源 王祖蓝 宋茜 沈涛 "},{"name":"类型","value":"真人秀"},{"name":"国家/地区","value":"中国大陆"},{"name":"开播日期","value":"2017"},{"name":"summary","value":"《王牌对王牌第二季》是浙江卫视推出的大型原创室内竞技真人秀节目，由浙江卫视节目中心制作。节目共12期。节目主持人为沈涛，宋茜担任固定王牌特工，王祖蓝、王源分任两队王牌队长。"},{"name":"评分","value":6.1},{"name":"image","value":"https://img3.doubanio.com/view/movie_poster_cover/lpst/public/p2415543880.jpg"},{"name":"id","value":"26956708"}]}
 
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
                data: [44804,58422,30343,21303,14756,14080,15148,16707,42029,59335,74685,59894,41123,35752,48555,52446,42467,35711,34834,32693,31831,52860,62148,35842,20955,19080,19500,19305,32836,52288,34917,18,18918,18633,19997,35998,75040,43977,21838,17649,16964,17114,36703,61971,37708]
            }, ]
        };

        var word_list = [{"text":"简单","weight":0.3944004351007627},{"text":"善良","weight":0.19115736178239884},{"text":"有趣","weight":0.1479182280161255},{"text":"舒服","weight":0.33192581042902836},{"text":"尴尬","weight":0.46971023180226035},{"text":"一星","weight":0.22704617573030797},{"text":"干净","weight":0.0997284076522967},{"text":"清新","weight":0.7127273232818461},{"text":"懒懒","weight":0.7049509454998306},{"text":"不错","weight":0.4904360639041763},{"text":"幽默","weight":0.3762440842176008},{"text":"无聊","weight":0.1557668743514633},{"text":"辛苦","weight":0.028103038000053062},{"text":"轻松","weight":0.45147446363362725},{"text":"挺好","weight":0.4301063448862799},{"text":"平淡","weight":0.43661312749032755},{"text":"和谐","weight":0.17951336360565018},{"text":"幸福","weight":0.30555912344262104},{"text":"浮躁","weight":0.39050346345591813},{"text":"庸俗","weight":0.45548784246980223},{"text":"最气","weight":0.27837096123896005},{"text":"最恨","weight":0.3327212508757323},{"text":"真诚","weight":0.1074322325994249},{"text":"爱和","weight":0.3267413090593778},{"text":"乐趣","weight":0.17403202729738929},{"text":"很好","weight":0.5153236979666408},{"text":"年轻","weight":0.4974284294696907},{"text":"诚恳","weight":0.12137608179952193},{"text":"艰辛","weight":0.25760803006303035},{"text":"活好","weight":0.22460340871816634},{"text":"快乐","weight":0.4536491193542286},{"text":"美好","weight":0.37340891960525513},{"text":"疯狂","weight":0.16920012575752244},{"text":"纯美","weight":0.11524517059511102},{"text":"精致","weight":0.2749724984621429},{"text":"节目","weight":0.6866279780058869},{"text":"老师","weight":0.4303395944198699},{"text":"综艺","weight":1.0688392222010215},{"text":"版权","weight":0.14640082780094382},{"text":"农村","weight":0.12598182765249064},{"text":"小厨","weight":0.10094855941788489},{"text":"做菜","weight":0.134742248976919},{"text":"广告","weight":0.10571137974631713},{"text":"观众","weight":0.07150243420059003},{"text":"原创","weight":0.08890392554977947},{"text":"原版","weight":0.11154546404571218},{"text":"样子","weight":0.03234517052529345},{"text":"爸爸","weight":0.026628100679026358},{"text":"儿子","weight":0.04232553865513207},{"text":"姑娘","weight":0.0430969965359282},{"text":"评论","weight":0.06935383622142918},{"text":"房子","weight":0.00842280191244695},{"text":"评分","weight":0.037865320060760106},{"text":"人生","weight":0.12052235841823991},{"text":"学生","weight":0.06750861694823562},{"text":"动物","weight":0.10648035125159779},{"text":"国产","weight":0.05219811306742528},{"text":"类型","weight":0.07403409842141541},{"text":"自带","weight":0.03060710806534785},{"text":"朋友","weight":0.040950130606328225},{"text":"塑料","weight":0.07545366920270283},{"text":"智商","weight":0.04794252635342608},{"text":"全程","weight":0.07605674801139531},{"text":"内容","weight":0.04615972298000358},{"text":"垃圾","weight":0.0006124434109753135},{"text":"芒果","weight":0.07440815270110111},{"text":"太重","weight":0.09959164564483514},{"text":"一星","weight":0.058618999311136386},{"text":"时代","weight":0.03336924055315741},{"text":"画面","weight":0.01282982172155813},{"text":"","weight":null}];


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
        
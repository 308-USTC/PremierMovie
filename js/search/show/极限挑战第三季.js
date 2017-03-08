
 var infor = {"content":[{"name":"name","value":"极限挑战第三季"},{"name":"主演","value":"黄渤 孙红雷 黄磊 罗志祥 "},{"name":"类型","value":"真人秀"},{"name":"国家/地区","value":"中国大陆"},{"name":"开播日期","value":"2017"},{"name":"summary","value":"极限挑战第二季收官，并表示极限挑战第三季将于明年到来 。"},{"name":"评分","value":0},{"name":"image","value":"https://img5.doubanio.com/view/movie_poster_cover/lpst/public/p2425070196.jpg"},{"name":"id","value":"26830087"}]}
 
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

        var word_list = [{"text":"简单","weight":0.9127235545698196},{"text":"善良","weight":1.1831106857480451},{"text":"有趣","weight":0.2885270650301222},{"text":"舒服","weight":0.5215088105311688},{"text":"尴尬","weight":0.5847142544551756},{"text":"一星","weight":0.2442255120508274},{"text":"干净","weight":0.06694721515484266},{"text":"清新","weight":0.1662437173032641},{"text":"懒懒","weight":0.6181133111042516},{"text":"不错","weight":0.6741202018963334},{"text":"幽默","weight":0.1666842622251977},{"text":"无聊","weight":0.26074684193710934},{"text":"辛苦","weight":0.4717864334560385},{"text":"轻松","weight":0.16975986096936918},{"text":"挺好","weight":0.36365463657481734},{"text":"平淡","weight":0.1991223204183046},{"text":"和谐","weight":0.26419436001029056},{"text":"幸福","weight":0.0979141518529574},{"text":"浮躁","weight":0.2742732537105575},{"text":"庸俗","weight":0.33444503752768123},{"text":"最气","weight":0.427866974443786},{"text":"最恨","weight":0.0736649658788847},{"text":"真诚","weight":0.08549338324566168},{"text":"爱和","weight":0.32780553370922266},{"text":"乐趣","weight":0.2995431718946372},{"text":"很好","weight":0.0019759728180443396},{"text":"年轻","weight":0.0841505671218149},{"text":"诚恳","weight":0.05094106907276432},{"text":"艰辛","weight":0.3805646422962642},{"text":"活好","weight":0.5231542875255936},{"text":"快乐","weight":0.265113375977999},{"text":"美好","weight":0.11247138773525049},{"text":"疯狂","weight":0.2746043854994936},{"text":"纯美","weight":0.18971956192188627},{"text":"精致","weight":0.17539919771226906},{"text":"节目","weight":0.4356010527657809},{"text":"老师","weight":1.1537592843133684},{"text":"综艺","weight":0.6823026543601461},{"text":"版权","weight":0.30816771738371446},{"text":"农村","weight":0.31414849765883684},{"text":"小厨","weight":0.04228534721926253},{"text":"做菜","weight":0.05423582656402951},{"text":"广告","weight":0.018857818045946616},{"text":"观众","weight":0.09436652124768742},{"text":"原创","weight":0.03675939523860998},{"text":"原版","weight":0.053741401317264036},{"text":"样子","weight":0.02666398953827424},{"text":"爸爸","weight":0.11884432897075049},{"text":"儿子","weight":0.12139694962903472},{"text":"姑娘","weight":0.10239679531307262},{"text":"评论","weight":0.093483399419773},{"text":"房子","weight":0.04446120532904791},{"text":"评分","weight":0.030001236712047415},{"text":"人生","weight":0.005239026248764718},{"text":"学生","weight":0.004927487193174846},{"text":"动物","weight":0.04824112014676042},{"text":"国产","weight":0.06543195916815589},{"text":"类型","weight":0.1014008435407798},{"text":"自带","weight":0.046034822992922},{"text":"朋友","weight":0.03858900685155573},{"text":"塑料","weight":0.07863938888474016},{"text":"智商","weight":0.015024466524115525},{"text":"全程","weight":0.035473667733146225},{"text":"内容","weight":0.08654438830628343},{"text":"垃圾","weight":0.09544813216872385},{"text":"芒果","weight":0.03322222189460102},{"text":"太重","weight":0.06975442011025841},{"text":"一星","weight":0.06416072152014568},{"text":"时代","weight":0.016327184238096145},{"text":"画面","weight":0.0226232852992757},{"text":"","weight":null}];


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
        
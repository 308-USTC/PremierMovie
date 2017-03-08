
 var infor = {"content":[{"name":"name","value":"中国成语大会第二季"},{"name":"主演","value":"张腾岳 蒋方舟 余世存 郦波 "},{"name":"类型","value":"真人秀"},{"name":"国家/地区","value":"中国大陆"},{"name":"开播日期","value":"2015"},{"name":"summary","value":"《中国成语大会》是继《中国汉字听写大会》之后，又一档重大影响力大型电视文化节目，于2014年4月18日起登陆央视。每周五晚20:00CCTV-10科教频道播出。是中央电视台2014年的重点节目，是实力传媒推出的第二档原创形态的电视节目创新品种。"},{"name":"评分","value":9.4},{"name":"image","value":"https://img3.doubanio.com/view/movie_poster_cover/lpst/public/p2318834011.jpg"},{"name":"id","value":"26696653"}]}
 
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
                data: [535,533,493,464,466,498,528,339,393,715,805,891,875,804,882,1265,2314,2562,2997,3381,3323,3470,2415,1936,1775,1519,1588,1455,1473,1413,1405,1247,1189,1147,1132,1160,1160,1055,827,747,728,673,799,861,796]
            }, ]
        };

        var word_list = [{"text":"简单","weight":0.39326849205845077},{"text":"善良","weight":0.12535586213011343},{"text":"有趣","weight":0.6027848193653438},{"text":"舒服","weight":0.08578109381351516},{"text":"尴尬","weight":0.000638484872236734},{"text":"一星","weight":0.1814307613036904},{"text":"干净","weight":0.24992891167333303},{"text":"清新","weight":0.14665563115324148},{"text":"懒懒","weight":0.7026291153942666},{"text":"不错","weight":0.02656367062945513},{"text":"幽默","weight":0.42577160627360117},{"text":"无聊","weight":0.29489549603792775},{"text":"辛苦","weight":0.5313177850126131},{"text":"轻松","weight":0.39409816595895786},{"text":"挺好","weight":0.4844200583808315},{"text":"平淡","weight":0.30911691274363085},{"text":"和谐","weight":0.034460423921671535},{"text":"幸福","weight":0.010569570082953854},{"text":"浮躁","weight":0.14429127709170617},{"text":"庸俗","weight":0.1774626193498619},{"text":"最气","weight":0.2977049547489641},{"text":"最恨","weight":0.23185582363766666},{"text":"真诚","weight":0.25861238679757853},{"text":"爱和","weight":0.5158177781752057},{"text":"乐趣","weight":0.34253935377195716},{"text":"很好","weight":0.38605772073012523},{"text":"年轻","weight":0.2559834377431435},{"text":"诚恳","weight":0.22457893974453477},{"text":"艰辛","weight":0.5032432334669383},{"text":"活好","weight":0.04512023830708348},{"text":"快乐","weight":0.4989457166150818},{"text":"美好","weight":0.41871702073886746},{"text":"疯狂","weight":0.2040764934759751},{"text":"纯美","weight":0.07844532766365311},{"text":"精致","weight":0.2194581631222797},{"text":"节目","weight":0.1867882790236466},{"text":"老师","weight":0.057074822967392067},{"text":"综艺","weight":0.5690002199858148},{"text":"版权","weight":0.20311213166775943},{"text":"农村","weight":0.11198611719369699},{"text":"小厨","weight":0.19412908729347053},{"text":"做菜","weight":0.07984786435609323},{"text":"广告","weight":0.17948013231442492},{"text":"观众","weight":0.08682815169122975},{"text":"原创","weight":0.013117150973097489},{"text":"原版","weight":0.08304336325097972},{"text":"样子","weight":0.10053128619677246},{"text":"爸爸","weight":0.07276714874042439},{"text":"儿子","weight":0.022784268581241423},{"text":"姑娘","weight":0.08832087392948365},{"text":"评论","weight":0.11111624417619761},{"text":"房子","weight":0.05561126076988716},{"text":"评分","weight":0.12425954171394954},{"text":"人生","weight":0.12652483327587696},{"text":"学生","weight":0.054412966554730546},{"text":"动物","weight":0.047238945124110865},{"text":"国产","weight":0.09276298533913048},{"text":"类型","weight":0.036005122583391606},{"text":"自带","weight":0.0496801978099511},{"text":"朋友","weight":0.015860723394026863},{"text":"塑料","weight":0.08489279726091221},{"text":"智商","weight":0.04199524524075412},{"text":"全程","weight":0.05582297874514421},{"text":"内容","weight":0.09923144421278658},{"text":"垃圾","weight":0.08242592028316942},{"text":"芒果","weight":0.09160090700810639},{"text":"太重","weight":0.021571702659428264},{"text":"一星","weight":0.09462091097434285},{"text":"时代","weight":0.05954136796838543},{"text":"画面","weight":0.09364552521976595},{"text":"","weight":null}];


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
        
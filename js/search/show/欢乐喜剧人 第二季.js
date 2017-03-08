
 var infor = {"content":[{"name":"name","value":"欢乐喜剧人 第二季"},{"name":"主演","value":"郭德纲 岳云鹏 孙越 小沈阳 "},{"name":"类型","value":"真人秀"},{"name":"国家/地区","value":"中国大陆"},{"name":"开播日期","value":"2016"},{"name":"summary","value":"经过上一季的惨烈搏杀，沈腾所率领的欢乐麻花团队最终击败宋小宝、贾玲、乔杉、修睿等一众强劲对手，摘得喜剧之王的桂冠。携着第一季的良好口碑，欢乐喜剧人第二季隆重登场。此次王宁和艾伦代表麻花继续出战，辽宁军团则有小沈阳的东北F4和宋晓峰的MP3前仆后继，大潘、佳佳顶住尴尬冲锋陷阵，贱萌岳云鹏和孙越领军德云社杀入重围，港台一方则请到赵正平以及香港喜剧宗师詹瑞文。比赛期间，更有白凯南、秦昊甚至潘长江、苑琼丹乱入战局。而主持人方面，郭德纲代替吴秀波更令场面异常火爆。\n升级版的欢乐喜剧人，精彩继续！©豆瓣"},{"name":"评分","value":8},{"name":"image","value":"https://img1.doubanio.com/view/movie_poster_cover/lpst/public/p2310090539.jpg"},{"name":"id","value":"26705307"}]}
 
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

        var word_list = [{"text":"简单","weight":0.2899637672090802},{"text":"善良","weight":0.507027397524201},{"text":"有趣","weight":0.16243998729319797},{"text":"舒服","weight":0.6688620185074852},{"text":"尴尬","weight":0.7093833548800029},{"text":"一星","weight":0.5760964010730343},{"text":"干净","weight":0.28860025329723055},{"text":"清新","weight":0.7096234127992352},{"text":"懒懒","weight":0.1645438972183885},{"text":"不错","weight":0.1629527026236113},{"text":"幽默","weight":0.6618056157812204},{"text":"无聊","weight":0.4540137803634566},{"text":"辛苦","weight":0.3717298350257096},{"text":"轻松","weight":0.4935634430931141},{"text":"挺好","weight":0.06209393048730229},{"text":"平淡","weight":0.07055542380709888},{"text":"和谐","weight":0.29506005361061427},{"text":"幸福","weight":0.4976720381623558},{"text":"浮躁","weight":0.4241536609093239},{"text":"庸俗","weight":0.2057271673713414},{"text":"最气","weight":0.46385402490739136},{"text":"最恨","weight":0.4047280129807883},{"text":"真诚","weight":0.46680685165017494},{"text":"爱和","weight":0.32109126347079286},{"text":"乐趣","weight":0.15629101725269615},{"text":"很好","weight":0.22030935850606606},{"text":"年轻","weight":0.06164513542000263},{"text":"诚恳","weight":0.42380405627850454},{"text":"艰辛","weight":0.3979816692568916},{"text":"活好","weight":0.0949930694844591},{"text":"快乐","weight":0.44448577555320695},{"text":"美好","weight":0.4312507436085797},{"text":"疯狂","weight":0.22823756653769578},{"text":"纯美","weight":0.23424356848794337},{"text":"精致","weight":0.2885442019150058},{"text":"节目","weight":0.1720124435028967},{"text":"老师","weight":0.14516843815075964},{"text":"综艺","weight":0.8657824541039837},{"text":"版权","weight":0.13712965555158477},{"text":"农村","weight":0.2554301643674599},{"text":"小厨","weight":0.16245761688846902},{"text":"做菜","weight":0.036424980998082494},{"text":"广告","weight":0.09497409353094016},{"text":"观众","weight":0.03592792633157454},{"text":"原创","weight":0.11146626757431846},{"text":"原版","weight":0.12885666952232608},{"text":"样子","weight":0.031766636866330265},{"text":"爸爸","weight":0.08443855925047186},{"text":"儿子","weight":0.1277745872094286},{"text":"姑娘","weight":0.02439337317568547},{"text":"评论","weight":0.08596662999764167},{"text":"房子","weight":0.050944004738383494},{"text":"评分","weight":0.004996762172534797},{"text":"人生","weight":0.06906845541282113},{"text":"学生","weight":0.11899447926802112},{"text":"动物","weight":0.11938990533237698},{"text":"国产","weight":0.10772845442089009},{"text":"类型","weight":0.07725637823897884},{"text":"自带","weight":0.016381095946027845},{"text":"朋友","weight":0.00938037841695272},{"text":"塑料","weight":0.020648404252398517},{"text":"智商","weight":0.09969989783755175},{"text":"全程","weight":0.016239309680733293},{"text":"内容","weight":0.071739803417478},{"text":"垃圾","weight":0.1075123297593347},{"text":"芒果","weight":0.01663400371938754},{"text":"太重","weight":0.019611872569607017},{"text":"一星","weight":0.04488249979285505},{"text":"时代","weight":0.014639947551589864},{"text":"画面","weight":0.055484392756136605},{"text":"","weight":null}];


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
        
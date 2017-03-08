
 var infor = {"content":[{"name":"name","value":"最强大脑 第四季"},{"name":"主演","value":"蒋昌建 陶晶莹 刘国梁 章子怡 "},{"name":"类型","value":"真人秀"},{"name":"国家/地区","value":"中国大陆"},{"name":"开播日期","value":"2017"},{"name":"summary","value":"《最强大脑》是江苏卫视借鉴德国节目《Super Brain》推出的国内首档大型科学类真人秀节目，是专注于传播脑科学知识和脑力竞技的节目。\n2016年12月5日，《最强大脑》第四季节目组宣布，将引入“人机大战”模式，百度研发的人工智能机器人“小度”将作为特别选手参赛，与人类“最强大脑”现场对决。"},{"name":"评分","value":6.9},{"name":"image","value":"https://img1.doubanio.com/view/movie_poster_cover/lpst/public/p2410906719.jpg"},{"name":"id","value":"26950044"}]}
 
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

        var word_list = [{"text":"简单","weight":0.2355628698562268},{"text":"善良","weight":0.418411157280274},{"text":"有趣","weight":0.24221584111799577},{"text":"舒服","weight":0.5489951695738554},{"text":"尴尬","weight":0.6767898283367956},{"text":"一星","weight":0.25184864974302695},{"text":"干净","weight":0.7371353755169968},{"text":"清新","weight":0.4433809963533906},{"text":"懒懒","weight":0.051430403689950464},{"text":"不错","weight":0.28845714124217803},{"text":"幽默","weight":0.6596042255988976},{"text":"无聊","weight":0.43260936337569966},{"text":"辛苦","weight":0.32776091196301155},{"text":"轻松","weight":0.010014800295128625},{"text":"挺好","weight":0.06181111054099578},{"text":"平淡","weight":0.03409637116006658},{"text":"和谐","weight":0.3799324510888476},{"text":"幸福","weight":0.3904123542443359},{"text":"浮躁","weight":0.29340186268610535},{"text":"庸俗","weight":0.4772534552600109},{"text":"最气","weight":0.34550553034424475},{"text":"最恨","weight":0.1324747557884153},{"text":"真诚","weight":0.47956927647756936},{"text":"爱和","weight":0.4421904146978436},{"text":"乐趣","weight":0.21987614458468355},{"text":"很好","weight":0.10126520219752809},{"text":"年轻","weight":0.31262707965445996},{"text":"诚恳","weight":0.45458073931812876},{"text":"艰辛","weight":0.39259311614363773},{"text":"活好","weight":0.26255546240813116},{"text":"快乐","weight":0.38895371211684104},{"text":"美好","weight":0.24187110765283215},{"text":"疯狂","weight":0.02778977338498869},{"text":"纯美","weight":0.15858295038793524},{"text":"精致","weight":0.38969023958867427},{"text":"节目","weight":0.14996281823110758},{"text":"老师","weight":0.03049884026077349},{"text":"综艺","weight":0.283819914869141},{"text":"版权","weight":0.20572775854467087},{"text":"农村","weight":0.05455433413745144},{"text":"小厨","weight":0.026414648427020994},{"text":"做菜","weight":0.11362189390276933},{"text":"广告","weight":0.11089768803207682},{"text":"观众","weight":0.048444651061857455},{"text":"原创","weight":0.04321744902806225},{"text":"原版","weight":0.02500413848235665},{"text":"样子","weight":0.03736821621652651},{"text":"爸爸","weight":0.10080296381935304},{"text":"儿子","weight":0.036848475085254156},{"text":"姑娘","weight":0.08178684504476227},{"text":"评论","weight":0.024076525475847287},{"text":"房子","weight":0.09636952862835126},{"text":"评分","weight":0.014167792661821615},{"text":"人生","weight":0.04566954469262108},{"text":"学生","weight":0.03493839243880663},{"text":"动物","weight":0.11285567309018636},{"text":"国产","weight":0.1019005156482589},{"text":"类型","weight":0.03854850704783871},{"text":"自带","weight":0.11209468941253574},{"text":"朋友","weight":0.016213928892378236},{"text":"塑料","weight":0.06535026189555343},{"text":"智商","weight":0.0959030407008671},{"text":"全程","weight":0.0442873890553742},{"text":"内容","weight":0.09701921193023513},{"text":"垃圾","weight":0.06826887366807523},{"text":"芒果","weight":0.09792200894420049},{"text":"太重","weight":0.09953170827066128},{"text":"一星","weight":0.02281201663354519},{"text":"时代","weight":0.01714167726787398},{"text":"画面","weight":0.05818097108248159},{"text":"","weight":null}];


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
        
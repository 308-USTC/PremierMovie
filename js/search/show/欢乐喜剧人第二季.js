
 var infor = {"content":[{"name":"name","value":"欢乐喜剧人第二季"},{"name":"主演","value":"郭德纲 岳云鹏 孙越 小沈阳 "},{"name":"类型","value":"真人秀"},{"name":"国家/地区","value":"中国大陆"},{"name":"开播日期","value":"2016"},{"name":"summary","value":"经过上一季的惨烈搏杀，沈腾所率领的欢乐麻花团队最终击败宋小宝、贾玲、乔杉、修睿等一众强劲对手，摘得喜剧之王的桂冠。携着第一季的良好口碑，欢乐喜剧人第二季隆重登场。此次王宁和艾伦代表麻花继续出战，辽宁军团则有小沈阳的东北F4和宋晓峰的MP3前仆后继，大潘、佳佳顶住尴尬冲锋陷阵，贱萌岳云鹏和孙越领军德云社杀入重围，港台一方则请到赵正平以及香港喜剧宗师詹瑞文。比赛期间，更有白凯南、秦昊甚至潘长江、苑琼丹乱入战局。而主持人方面，郭德纲代替吴秀波更令场面异常火爆。\n升级版的欢乐喜剧人，精彩继续！©豆瓣"},{"name":"评分","value":8},{"name":"image","value":"https://img1.doubanio.com/view/movie_poster_cover/lpst/public/p2310090539.jpg"},{"name":"id","value":"26705307"}]}
 
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

        var word_list = [{"text":"简单","weight":0.3426882972777097},{"text":"善良","weight":0.3040906494622611},{"text":"有趣","weight":0.4382984518706406},{"text":"舒服","weight":0.5025556779210322},{"text":"尴尬","weight":0.32472192314153764},{"text":"一星","weight":0.3339854892106354},{"text":"干净","weight":0.4558516341301048},{"text":"清新","weight":0.37317337761407},{"text":"懒懒","weight":0.4313202897266277},{"text":"不错","weight":0.3320712982782049},{"text":"幽默","weight":0.31293742740816055},{"text":"无聊","weight":0.16276433243618854},{"text":"辛苦","weight":0.14524070591365876},{"text":"轻松","weight":0.07261145912436921},{"text":"挺好","weight":0.482042907367995},{"text":"平淡","weight":0.3346468836891465},{"text":"和谐","weight":0.05455141970585805},{"text":"幸福","weight":0.07253517357682733},{"text":"浮躁","weight":0.12864059985439746},{"text":"庸俗","weight":0.17045835425441586},{"text":"最气","weight":0.14990444130773264},{"text":"最恨","weight":0.3527701221263828},{"text":"真诚","weight":0.08880012444678974},{"text":"爱和","weight":0.2294102238179346},{"text":"乐趣","weight":0.5123409041641118},{"text":"很好","weight":0.3740798498297771},{"text":"年轻","weight":0.133765041738147},{"text":"诚恳","weight":0.44499833357732044},{"text":"艰辛","weight":0.26968389415868954},{"text":"活好","weight":0.11381527972785113},{"text":"快乐","weight":0.4075912652360626},{"text":"美好","weight":0.06244735623263708},{"text":"疯狂","weight":0.2523981656893209},{"text":"纯美","weight":0.23220599056517022},{"text":"精致","weight":0.045076732075218236},{"text":"节目","weight":0.5067198685237291},{"text":"老师","weight":0.6537374196946586},{"text":"综艺","weight":0.9238782055175501},{"text":"版权","weight":0.1514141583492869},{"text":"农村","weight":0.07089336230061762},{"text":"小厨","weight":0.09187390516708506},{"text":"做菜","weight":0.13293418666113688},{"text":"广告","weight":0.12903293901872898},{"text":"观众","weight":0.07833251521604732},{"text":"原创","weight":0.038141776946035925},{"text":"原版","weight":0.14243055627380022},{"text":"样子","weight":0.02859298468078605},{"text":"爸爸","weight":0.02753305764658978},{"text":"儿子","weight":0.0904708191892655},{"text":"姑娘","weight":0.12839021463619374},{"text":"评论","weight":0.04436904590188574},{"text":"房子","weight":0.07917412289565587},{"text":"评分","weight":0.11662964240309832},{"text":"人生","weight":0.11039733043288273},{"text":"学生","weight":0.05301462340162746},{"text":"动物","weight":0.05612446017144335},{"text":"国产","weight":0.09377378390799382},{"text":"类型","weight":0.021819409205918225},{"text":"自带","weight":0.026799876087926094},{"text":"朋友","weight":0.08475509778655953},{"text":"塑料","weight":0.07452890505320126},{"text":"智商","weight":0.07976683629638247},{"text":"全程","weight":0.038650790089973026},{"text":"内容","weight":0.08784358489153331},{"text":"垃圾","weight":0.015709401823504162},{"text":"芒果","weight":0.021558360751576074},{"text":"太重","weight":0.09702520083435186},{"text":"一星","weight":0.10440935553409735},{"text":"时代","weight":0.074698278088689},{"text":"画面","weight":0.09334103969653564},{"text":"","weight":null}];


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
        
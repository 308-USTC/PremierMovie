
 var infor = {"content":[{"name":"name","value":"大话西游之大圣娶亲"},{"name":"导演","value":"刘镇伟,"},{"name":"编剧","value":"刘镇伟,吴承恩,"},{"name":"主演","value":"周星驰,吴孟达,朱茵,蔡少芬,蓝洁瑛,莫文蔚,罗家英,刘镇伟,陆树铭,李健仁,"},{"name":"类型","value":"喜剧,动作,爱情,奇幻,冒险,"},{"name":"上映日期","value":"2014-10-24(中国大陆),1995-02-04(香港),"},{"name":"summary","value":"至尊宝（周星驰）被月光宝盒带回到五百年前，遇见紫霞仙子（朱茵），被对方打上烙印成为对方的人，并发觉自己已变成孙悟空。紫霞与青霞（朱茵）本是如来佛祖座前日月神灯的灯芯（白天是紫霞，晚上是青霞），二人虽然同一肉身却仇恨颇深，因此紫霞立下誓言，谁能拔出她手中的紫青宝剑，谁就是她的意中人。紫青宝剑被至尊宝于不经意间拔出，紫霞决定以身相许，却遭一心记挂白晶晶（莫文蔚）的至尊宝拒绝。后牛魔王救下迷失在沙漠中的紫霞，并逼紫霞与他成婚，关键时刻，至尊宝现身。"},{"name":"评分","value":9.1},{"name":"image","value":"https://img3.doubanio.com/view/movie_poster_cover/lpst/public/p648365452.jpg"},{"name":"id","value":"1292213"}]}
 
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

        var word_list = [{"text":"细腻","weight":0.5020383497444317},{"text":"平淡","weight":0.2749685686336597},{"text":"善良","weight":0.24589755688166542},{"text":"沉闷","weight":0.7057742263316021},{"text":"惊悚","weight":0.371428903955596},{"text":"焦虑","weight":0.022265427727725388},{"text":"伤害","weight":0.539500104794202},{"text":"很小","weight":0.33684146451260877},{"text":"落后","weight":0.29588770783492485},{"text":"幽默","weight":0.28136780304185005},{"text":"微妙","weight":0.017461959066371886},{"text":"不安","weight":0.45691664841030566},{"text":"尊严","weight":0.39086498918451723},{"text":"平凡","weight":0.04802389988904451},{"text":"悲伤","weight":0.19954732335207062},{"text":"尊重","weight":0.4104752770426801},{"text":"完美","weight":0.3845397263038663},{"text":"羞耻","weight":0.2629014455443187},{"text":"歡喜","weight":0.36240839119279145},{"text":"细微","weight":0.18757679159712315},{"text":"隐晦","weight":0.07972816674644759},{"text":"幸福","weight":0.4156312158646695},{"text":"犀利","weight":0.3813870012519544},{"text":"模糊","weight":0.03931839448342062},{"text":"揪心","weight":0.3412940499623777},{"text":"琐碎","weight":0.12345158516169687},{"text":"扎实","weight":0.2516888647411255},{"text":"巧妙","weight":0.01866115299509006},{"text":"尴尬","weight":0.3480138499782009},{"text":"无聊","weight":0.1831720435165804},{"text":"可悲","weight":0.08789618235261462},{"text":"不急","weight":0.24279658311540278},{"text":"不慢","weight":0.2640489666149746},{"text":"有趣","weight":0.39308755863948064},{"text":"强大","weight":0.007376781738236169},{"text":"电影","weight":0.5468148461245117},{"text":"社会","weight":0.0902032875477394},{"text":"故事","weight":0.23305174473943086},{"text":"男主","weight":0.39735967895173474},{"text":"推销员","weight":0.15943134945999568},{"text":"困境","weight":0.13227353281456425},{"text":"妻子","weight":0.1451119360732447},{"text":"人性","weight":0.09302681568138263},{"text":"剧本","weight":0.2564043738313387},{"text":"剧情","weight":0.20777171467482727},{"text":"家庭","weight":0.0697959159592784},{"text":"戏中戏","weight":0.09045013207421408},{"text":"文化","weight":0.2605101631616756},{"text":"剧作","weight":0.18218844648750007},{"text":"关系","weight":0.18624937186059834},{"text":"现实","weight":0.08117531530032303},{"text":"女性","weight":0.20433427033786322},{"text":"宗教","weight":0.09719426307204676},{"text":"情感","weight":0.01216167570918757},{"text":"角色","weight":0.11216331876935265},{"text":"老头","weight":0.036503851041460936},{"text":"结尾","weight":0.04912659576577788},{"text":"人物","weight":0.06553414659220583},{"text":"互文","weight":0.11005801109513245},{"text":"戏剧","weight":0.02147108433663216},{"text":"细节","weight":0.06720022551869459},{"text":"影片","weight":0.08388671502654561},{"text":"观众","weight":0.1832258456116832},{"text":"情绪","weight":0.0207503138474147},{"text":"事件","weight":0.0021244431618311216},{"text":"演员","weight":0.08759523540947427},{"text":"镜头","weight":0.10959686413943553},{"text":"精彩","weight":0.05948012608039798},{"text":"情节","weight":0.051045384068015086},{"text":"丈夫","weight":0.06914678413640273},{"text":"","weight":null}];


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
        

 var infor = {"content":[{"name":"name","value":"金刚：骷髅岛"},{"name":"导演","value":""},{"name":"编剧"},{"name":"主演","value":""},{"name":"类型","value":""},{"name":"上映日期"},{"name":"summary"},{"name":"评分","value":""},{"name":"image"},{"name":"id"}]}
 
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

        var word_list = [{"text":"细腻","weight":0.46926433818060215},{"text":"平淡","weight":0.40524537031458824},{"text":"善良","weight":0.0989450697824104},{"text":"沉闷","weight":0.11828833661337497},{"text":"惊悚","weight":0.6369520926690708},{"text":"焦虑","weight":0.5319219235083381},{"text":"伤害","weight":0.09209284908456791},{"text":"很小","weight":0.1485820245971492},{"text":"落后","weight":0.5558434858257344},{"text":"幽默","weight":0.3198113488150828},{"text":"微妙","weight":0.3057594673762236},{"text":"不安","weight":0.201293670894392},{"text":"尊严","weight":0.3635093658987082},{"text":"平凡","weight":0.12171736157546562},{"text":"悲伤","weight":0.2840953741979808},{"text":"尊重","weight":0.08143720648337242},{"text":"完美","weight":0.15265421999886905},{"text":"羞耻","weight":0.29234024433579847},{"text":"歡喜","weight":0.3138421201921108},{"text":"细微","weight":0.398550930143447},{"text":"隐晦","weight":0.04472531299469255},{"text":"幸福","weight":0.22804013212468421},{"text":"犀利","weight":0.16998944971956054},{"text":"模糊","weight":0.24307836927031629},{"text":"揪心","weight":0.17050134187756574},{"text":"琐碎","weight":0.23706007031776946},{"text":"扎实","weight":0.044827128052923416},{"text":"巧妙","weight":0.10366048075304052},{"text":"尴尬","weight":0.0705681780687266},{"text":"无聊","weight":0.21615247138636248},{"text":"可悲","weight":0.3353571539829212},{"text":"不急","weight":0.3439236561365708},{"text":"不慢","weight":0.19868490279065446},{"text":"有趣","weight":0.000025243876255104547},{"text":"强大","weight":0.12211342075392285},{"text":"电影","weight":0.3930160414731852},{"text":"社会","weight":0.0629448065288357},{"text":"故事","weight":0.33163824111342854},{"text":"男主","weight":0.0038432375964663514},{"text":"推销员","weight":0.13435042693153504},{"text":"困境","weight":0.25940464782787315},{"text":"妻子","weight":0.03490762591513852},{"text":"人性","weight":0.11711953902670971},{"text":"剧本","weight":0.27627111088196077},{"text":"剧情","weight":0.14712642214656765},{"text":"家庭","weight":0.1293927067513086},{"text":"戏中戏","weight":0.22323230386119924},{"text":"文化","weight":0.16254068327113416},{"text":"剧作","weight":0.1687500886337077},{"text":"关系","weight":0.1359153284334337},{"text":"现实","weight":0.04248352694662413},{"text":"女性","weight":0.07992563555102913},{"text":"宗教","weight":0.19793471772710292},{"text":"情感","weight":0.01613802176870144},{"text":"角色","weight":0.22081594201191104},{"text":"老头","weight":0.033704513817874156},{"text":"结尾","weight":0.1514955491251438},{"text":"人物","weight":0.19272450653321554},{"text":"互文","weight":0.06970276637064557},{"text":"戏剧","weight":0.03286483375432431},{"text":"细节","weight":0.19653519481513884},{"text":"影片","weight":0.06491567115275565},{"text":"观众","weight":0.045859655569668346},{"text":"情绪","weight":0.08775010211585926},{"text":"事件","weight":0.08078620105579264},{"text":"演员","weight":0.17387188410670723},{"text":"镜头","weight":0.15380192109241597},{"text":"精彩","weight":0.11145166108177922},{"text":"情节","weight":0.015012331078326321},{"text":"丈夫","weight":0.11523954356844056},{"text":"","weight":null}];


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
        
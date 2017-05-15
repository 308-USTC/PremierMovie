
 var infor = {"content":[{"name":"name","value":"她"},{"name":"导演","value":"保罗·范霍文,"},{"name":"编剧","value":"菲利普·迪昂,大卫·伯克,哈罗德·曼宁,"},{"name":"主演","value":"伊莎贝尔·于佩尔,罗兰·拉斐特,安妮·康斯金尼,查尔斯·贝尔林,维尔日妮·埃菲拉,朱迪思·马格里,克里斯汀·伯克,乔纳斯·布洛凯,爱丽丝·伊萨,维马拉·庞斯,阿蒂尔·马泽,卢卡斯·普莱瑟,"},{"name":"类型","value":"剧情,惊悚,"},{"name":"上映日期","value":"2016-05-21(戛纳电影节),2016-05-25(法国),"},{"name":"summary","value":"米歇尔（伊莎贝尔·于佩尔 Isabelle Huppert 饰）是一家游戏公司的老板，在同事和朋友们眼中，她为人冷淡疏离，行事雷厉风行，是一个无坚不摧的女人。可是，就在某一天晚上，米歇尔被闯入家中的蒙面暴徒强暴了。米歇尔没有报警，因为她的父亲曾是臭名昭著的连环杀人犯，而作为他的女儿，米歇尔再也不想和警方和媒体打交道了，她决定依靠自己的力量查出事件的真相。米歇尔要解决的麻烦还有很多，她的儿子娶了一个咄咄逼人的女人，她的母亲即将嫁给一个比她年纪还要小的男人，她的前夫有了新的约会对象，而她正在和她最好的朋友的丈夫偷情。某一日，暴徒再度潜入了米歇尔家中，这一次，米歇尔看清了他的面貌。"},{"name":"评分","value":7.6},{"name":"image","value":"https://img3.doubanio.com/view/movie_poster_cover/lpst/public/p2402012821.jpg"},{"name":"id","value":"26022182"}]}
 
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

        var word_list = [{"text":"强大","weight":0.026814780503570824},{"text":"荒诞","weight":0.024416510987731652},{"text":"冷静","weight":0.022451718353806955},{"text":"自由","weight":0.0163903067213157},{"text":"优雅","weight":0.01395709851372388},{"text":"冷酷","weight":0.013820342668580936},{"text":"刻薄","weight":0.01159215940048813},{"text":"脆弱","weight":0.011087311964954629},{"text":"勇敢","weight":0.010935553531283122},{"text":"模糊","weight":0.009165768616000228},{"text":"恐怖","weight":0.008810845671121195},{"text":"淡定","weight":0.008810845671121195},{"text":"混乱","weight":0.008045077446943664},{"text":"软弱","weight":0.007923046474174373},{"text":"平静","weight":0.007827811931660678},{"text":"幽默","weight":0.0075451017526601384},{"text":"简单","weight":0.006684857814874335},{"text":"乏味","weight":0.006606421763391365},{"text":"强悍","weight":0.00621610240649419},{"text":"不错","weight":0.0060295319417542565},{"text":"自私","weight":0.0060295319417542565},{"text":"羞耻","weight":0.0060295319417542565},{"text":"苦痛","weight":0.0060295319417542565},{"text":"细碎","weight":0.0060295319417542565},{"text":"平常","weight":0.0060295319417542565},{"text":"幼稚","weight":0.0060295319417542565},{"text":"真切","weight":0.0060295319417542565},{"text":"轻松","weight":0.0060295319417542565},{"text":"舒服","weight":0.0060295319417542565},{"text":"一大","weight":0.0060295319417542565},{"text":"伤痛","weight":0.0060295319417542565},{"text":"愚蠢","weight":0.0060295319417542565},{"text":"自大","weight":0.0060295319417542565},{"text":"奇观","weight":0.0060295319417542565},{"text":"微妙","weight":0.0060295319417542565},{"text":"女主","weight":0.01757310457584004},{"text":"电影","weight":0.014970422484318848},{"text":"女人","weight":0.010361933826715804},{"text":"女权","weight":0.010210158097423053},{"text":"儿子","weight":0.008829110722969817},{"text":"变态","weight":0.008671817982466976},{"text":"女性","weight":0.008433075316909719},{"text":"剧情","weight":0.008250448820382643},{"text":"角色","weight":0.007304660578569239},{"text":"病态","weight":0.006990005264019854},{"text":"人物","weight":0.006860298852473344},{"text":"故事","weight":0.006767112918112114},{"text":"关系","weight":0.0064739899690429625},{"text":"人性","weight":0.006151034972330006},{"text":"男人","weight":0.005521416342743531},{"text":"演技","weight":0.005059304014726086},{"text":"强奸","weight":0.004951466254869268},{"text":"内心","weight":0.004851882407062565},{"text":"闺蜜","weight":0.004166428390273587},{"text":"影片","weight":0.0037965241342256357},{"text":"父亲","weight":0.0037525001561613635},{"text":"女主角","weight":0.0037470251739228216},{"text":"世界","weight":0.0037226111745429025},{"text":"前夫","weight":0.0036332927124809594},{"text":"人生","weight":0.003613490797620992},{"text":"法国人","weight":0.003329848579639341},{"text":"母亲","weight":0.003272825147394921},{"text":"主演","weight":0.002807706458570333},{"text":"女权主义","weight":0.0027960443323625057},{"text":"强势","weight":0.0027383295174706985},{"text":"男性","weight":0.002733903695350742},{"text":"节奏","weight":0.0027088175044854617},{"text":"社会","weight":0.0026161038147620485},{"text":"心理","weight":0.002583051060511869},{"text":"法式","weight":0.0025182756256734253},{"text":"","weight":null}];


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
        

 var infor = {"content":[{"name":"name","value":"极限挑战 第二季"},{"name":"主演","value":"黄渤 孙红雷 黄磊 罗志祥 "},{"name":"类型","value":"真人秀"},{"name":"国家/地区","value":"中国大陆"},{"name":"开播日期","value":"2016"},{"name":"summary","value":"《极限挑战第二季》是上海东方卫视推出的大型励志体验真人秀节目，节目共12期，第二季节目六位固定成员是黄渤、孙红雷、黄磊、罗志祥、王迅、张艺兴。\n《极限挑战第二季》每一期节目都围绕一个社会热点或时代背景而展开，节目中“极限男人帮”体验过出租车司机、家政服务等最平凡普通的职业；常走在城市街头，与普通百姓“亲密接触”，而路人们不再仅仅只是围观，也可能为节目的进展起到关键作用。\n节目于2016年4月17日起每周日晚21:00接档《欢乐喜剧人第二季》在东方卫视首播，24点优酷土豆独播。"},{"name":"评分","value":9.1},{"name":"image","value":"https://img5.doubanio.com/view/movie_poster_cover/lpst/public/p2329745796.jpg"},{"name":"id","value":"26615572"}]}
 
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

        var word_list = [{"text":"简单","weight":0.8273850859350129},{"text":"善良","weight":0.48216579377222496},{"text":"有趣","weight":0.8415771734244831},{"text":"舒服","weight":0.12329712592097548},{"text":"尴尬","weight":0.20552341210412295},{"text":"一星","weight":0.12560956782116653},{"text":"干净","weight":0.6272335254844575},{"text":"清新","weight":0.30498478496147047},{"text":"懒懒","weight":0.057198630184978144},{"text":"不错","weight":0.40285022137656723},{"text":"幽默","weight":0.47523901093118226},{"text":"无聊","weight":0.6016881400052126},{"text":"辛苦","weight":0.3371232564067204},{"text":"轻松","weight":0.28739533015054963},{"text":"挺好","weight":0.5263702643253668},{"text":"平淡","weight":0.516875983288932},{"text":"和谐","weight":0.10931670884557625},{"text":"幸福","weight":0.5148954723681503},{"text":"浮躁","weight":0.3507904200980353},{"text":"庸俗","weight":0.12815224805600256},{"text":"最气","weight":0.3927882142979433},{"text":"最恨","weight":0.3848426604842399},{"text":"真诚","weight":0.44336525290494505},{"text":"爱和","weight":0.18184440112968772},{"text":"乐趣","weight":0.02288441725524033},{"text":"很好","weight":0.0927334786262357},{"text":"年轻","weight":0.43372331254322827},{"text":"诚恳","weight":0.06378620642988692},{"text":"艰辛","weight":0.05564568515254733},{"text":"活好","weight":0.13180572644381358},{"text":"快乐","weight":0.06286512958439616},{"text":"美好","weight":0.2718904231794628},{"text":"疯狂","weight":0.2622510052488728},{"text":"纯美","weight":0.21117135338282855},{"text":"精致","weight":0.1321768601546444},{"text":"节目","weight":1.0798315730156434},{"text":"老师","weight":0.46444119182803},{"text":"综艺","weight":0.37701855512416876},{"text":"版权","weight":0.027412384907464216},{"text":"农村","weight":0.13194098266687845},{"text":"小厨","weight":0.02597123970906273},{"text":"做菜","weight":0.12349819307289024},{"text":"广告","weight":0.17496893048986256},{"text":"观众","weight":0.1419648090598357},{"text":"原创","weight":0.09861976166867578},{"text":"原版","weight":0.06970089233355808},{"text":"样子","weight":0.12952654733037172},{"text":"爸爸","weight":0.07883456230530976},{"text":"儿子","weight":0.026122607531018974},{"text":"姑娘","weight":0.11607789640520454},{"text":"评论","weight":0.00006297016715731885},{"text":"房子","weight":0.12199446411727823},{"text":"评分","weight":0.04324535024801924},{"text":"人生","weight":0.06179974672215757},{"text":"学生","weight":0.10580184292038941},{"text":"动物","weight":0.01662221977428047},{"text":"国产","weight":0.011740178583403356},{"text":"类型","weight":0.01486342536243637},{"text":"自带","weight":0.008351216906717878},{"text":"朋友","weight":0.022227089905157454},{"text":"塑料","weight":0.025881419993680592},{"text":"智商","weight":0.012124100069380781},{"text":"全程","weight":0.00833340752718792},{"text":"内容","weight":0.0006412151040821069},{"text":"垃圾","weight":0.03715735185225338},{"text":"芒果","weight":0.055875382421510265},{"text":"太重","weight":0.027741854351061718},{"text":"一星","weight":0.024971239308611625},{"text":"时代","weight":0.09258357070646851},{"text":"画面","weight":0.05883959905095958},{"text":"","weight":null}];


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
        
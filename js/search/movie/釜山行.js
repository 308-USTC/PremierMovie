
 var infor = {"content":[{"name":"name","value":"釜山行"},{"name":"导演","value":""},{"name":"编剧"},{"name":"主演","value":""},{"name":"类型","value":""},{"name":"上映日期"},{"name":"summary"},{"name":"评分","value":""},{"name":"image"},{"name":"id"}]}
 
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
                data: [27202,27722,28330,28752,30091,30641,30883,24814,32354,33845,32950,32216,31131,27965,25721,24528,23862,22137,23358,22711,20315,20633,20898,17455,13039,12614,12436,12000,13794,16876,15946,11487,11898,12690,11810,14052,18876,16660,10457,9671,10470,10018,12112,17188,15286]
            }, ]
        };

        var word_list = [{"text":"自私","weight":0.8418567050643743},{"text":"紧张","weight":0.19876470650142689},{"text":"不错","weight":0.7950713935104499},{"text":"惊悚","weight":0.2671772361048885},{"text":"善良","weight":0.4540391649438372},{"text":"特效","weight":0.3861073368340373},{"text":"充满","weight":0.456696014314821},{"text":"厉害","weight":0.30449215312570826},{"text":"简单","weight":0.030506760492003123},{"text":"粗暴","weight":0.2014322998535568},{"text":"最爱","weight":0.13580520002891483},{"text":"拖沓","weight":0.00011549233217709272},{"text":"恐怖","weight":0.3979637509372293},{"text":"美好","weight":0.21656760474957845},{"text":"强大","weight":0.26313851601771376},{"text":"意外","weight":0.2471483830035314},{"text":"惊喜","weight":0.35144219937474214},{"text":"成熟","weight":0.1002765868597577},{"text":"完美","weight":0.22559929216812025},{"text":"单薄","weight":0.28550914130669824},{"text":"尴尬","weight":0.16777764414226595},{"text":"完整","weight":0.08361593997105919},{"text":"敏感","weight":0.03417813089049653},{"text":"善恶","weight":0.026413270593894464},{"text":"流畅","weight":0.05101426686770411},{"text":"很棒","weight":0.18712927521245717},{"text":"生硬","weight":0.050965532250900294},{"text":"费劲","weight":0.002552119042471577},{"text":"勇敢","weight":0.14141738400628404},{"text":"强壮","weight":0.1792591393687615},{"text":"极恶","weight":0.07171367542511388},{"text":"聪明","weight":0.04005755951816503},{"text":"平衡","weight":0.14370909842791857},{"text":"悲壮","weight":0.007234235449008876},{"text":"彪悍","weight":0.10404574449503519},{"text":"丧尸","weight":0.4531093444246883},{"text":"电影","weight":0.14733405558533755},{"text":"人性","weight":0.5948463151827201},{"text":"僵尸","weight":0.20851978735300175},{"text":"大叔","weight":0.19773388269679515},{"text":"套路","weight":0.14469100105438804},{"text":"孕妇","weight":0.12667665224867042},{"text":"人物","weight":0.18842605068496351},{"text":"商业片","weight":0.1232276123050147},{"text":"小女孩","weight":0.22588390586839763},{"text":"结尾","weight":0.16717344633136624},{"text":"剧情","weight":0.18862974174692917},{"text":"故事","weight":0.08219156227184317},{"text":"列车","weight":0.15890809585321217},{"text":"节奏","weight":0.028734095485853962},{"text":"情感","weight":0.0675129463120552},{"text":"主角","weight":0.0947074209810544},{"text":"结局","weight":0.03136324750347527},{"text":"角色","weight":0.07893423099024585},{"text":"商业","weight":0.016874639746211853},{"text":"题材","weight":0.08697858309637706},{"text":"刻画","weight":0.023346934538337985},{"text":"灾难","weight":0.10615582493378},{"text":"演技","weight":0.006418773985348689},{"text":"火车","weight":0.0010624352438025457},{"text":"棒子","weight":0.10458681276390115},{"text":"演员","weight":0.035678731574101195},{"text":"女儿","weight":0.03491227864448712},{"text":"群演","weight":0.0723100924557798},{"text":"观众","weight":0.07719517495164427},{"text":"情节","weight":0.024158146126340832},{"text":"大片","weight":0.032751260709643674},{"text":"男主","weight":0.110252647320916},{"text":"爸爸","weight":0.021534609135798913},{"text":"影片","weight":0.06717152101510977},{"text":"","weight":null}];


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
        
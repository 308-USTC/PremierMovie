
 var infor = {"content":[{"name":"name","value":"奇葩大会"},{"name":"主演","value":"马东 何炅 高晓松 蔡康永 "},{"name":"类型","value":"脱口秀"},{"name":"国家/地区","value":"中国大陆"},{"name":"开播日期","value":"2017"},{"name":"summary","value":"《奇葩大会》将于2017年1月20日晚8：00在爱奇艺独家上线！作为“奇葩”系列节目之一，《奇葩大会》将打造一个史无前例的先锋青年观点集会，华人世界最先行、最勇敢、最新锐的青年聚集在这里，放肆分享，自由表达，带来自己最真实的生命体验和人生观点。《奇葩大会》由何炅、马东、蔡康永、高晓松担任导师，集结一大波老奇葩马薇薇、范湉湉、肖骁、颜如晶、姜思达、艾力、邱晨、大王、黄执中、李林、陈咏开、陈铭、董婧、欧阳超坐镇现场，李开复、李银河、贾伟等各界领袖人物悉数登场，导师与老奇葩们将在现场向杰出的分享者发出直通《奇葩说4》的诚意邀请，而选择权，在分享者手中，他们有权拒绝！"},{"name":"评分","value":8.2},{"name":"image","value":"https://img1.doubanio.com/view/movie_poster_cover/lpst/public/p2408195869.jpg"},{"name":"id","value":"26912438"}]}
 
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
                data: [216557,172697,35071,24270,33386,54502,71204,219058,164845,24769,26404,24932,76162,77481,242545,178496,32873,25027,21499,72651,61871,218027,169362,30343,22466,17850,26598,44703,198966,86690,35370,24459,21983,33152,47853,210212,91208,32694,22240,19043,19623,55559,194309,91688,34063]
            }, ]
        };

        var word_list = [{"text":"有趣","weight":0.64106868813362},{"text":"惊喜","weight":0.7215183414748563},{"text":"幽默","weight":0.12057033998417481},{"text":"不错","weight":0.4376584223176876},{"text":"不安","weight":0.38475745757860985},{"text":"尴尬","weight":0.06842674330546956},{"text":"无聊","weight":0.2732897380746813},{"text":"尊重","weight":0.06823091395471813},{"text":"厉害","weight":0.2430048320933157},{"text":"犀利","weight":0.10909341479757377},{"text":"睿智","weight":0.4207620670249099},{"text":"完美","weight":0.13955219425591164},{"text":"充满","weight":0.0464534523955972},{"text":"活泼","weight":0.09432356185056022},{"text":"意外","weight":0.3312725142044882},{"text":"虚伪","weight":0.2839901113407336},{"text":"真诚","weight":0.047698040992919764},{"text":"晴朗","weight":0.29370648339427763},{"text":"胆小","weight":0.0703748801799765},{"text":"怯懦","weight":0.36061418037898607},{"text":"温柔","weight":0.038736850511680694},{"text":"宽容","weight":0.33112768997551306},{"text":"肤浅","weight":0.31551069141049554},{"text":"博大","weight":0.06742194898340463},{"text":"很好","weight":0.02317434283203889},{"text":"甜甜","weight":0.1924012708772324},{"text":"好烦","weight":0.29566312030190744},{"text":"琐碎","weight":0.23230480507534781},{"text":"烦恼","weight":0.0013700377648082959},{"text":"简单","weight":0.02994508368931669},{"text":"奇葩","weight":0.09148235424987605},{"text":"节目","weight":0.9103029479413101},{"text":"老师","weight":0.5947968346834376},{"text":"综艺","weight":0.31664963461586704},{"text":"辩论","weight":0.4150521964129804},{"text":"世界","weight":0.3016389540985604},{"text":"大会","weight":0.2609718073320721},{"text":"故事","weight":0.006186963977120748},{"text":"人生","weight":0.05126257396461447},{"text":"观点","weight":0.14176261900328727},{"text":"精彩","weight":0.22750955544289875},{"text":"内容","weight":0.1813120762518293},{"text":"广告","weight":0.0479570584215713},{"text":"如晶","weight":0.13255248352925558},{"text":"经历","weight":0.06671737747768365},{"text":"思维","weight":0.02292017023023708},{"text":"意义","weight":0.11607387582701914},{"text":"文化","weight":0.13471027999824223},{"text":"抱团","weight":0.07136736043064336},{"text":"思想","weight":0.03523045370000212},{"text":"社会","weight":0.11327979776580968},{"text":"主持人","weight":0.050345416050612816},{"text":"地方","weight":0.11440309375037772},{"text":"鸡汤","weight":0.09576222260770725},{"text":"时代","weight":0.08285674698536623},{"text":"方式","weight":0.1070138704683626},{"text":"态度","weight":0.11432185590109707},{"text":"老板","weight":0.015527710897343377},{"text":"妈妈","weight":0.056842852877890836},{"text":"声音","weight":0.07308892571653798},{"text":"","weight":null}];


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
        
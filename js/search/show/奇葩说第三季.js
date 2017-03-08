
 var infor = {"content":[{"name":"name","value":"奇葩说第三季"},{"name":"主演","value":"蔡康永 马东 "},{"name":"类型","value":"脱口秀"},{"name":"国家/地区","value":"中国大陆"},{"name":"开播日期","value":"2016"},{"name":"summary","value":"《奇葩说》是爱奇艺马东工作室打造的中国首档说话达人秀，由高晓松和蔡康永担任团长，旨在寻找华人华语世界中，观点独特、口才出众的 “最会说话的人”。"},{"name":"评分","value":8.6},{"name":"image","value":"https://img3.doubanio.com/view/movie_poster_cover/lpst/public/p2324832785.jpg"},{"name":"id","value":"26581134"}]}
 
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

        var word_list = [{"text":"简单","weight":1.077556716563246},{"text":"善良","weight":1.1987103271577475},{"text":"有趣","weight":0.318428714644479},{"text":"舒服","weight":0.3815474044922117},{"text":"尴尬","weight":0.06677651609595937},{"text":"一星","weight":0.26381390391351506},{"text":"干净","weight":0.58941631826053},{"text":"清新","weight":0.33706841848896973},{"text":"懒懒","weight":0.7275157931117705},{"text":"不错","weight":0.7095686535362831},{"text":"幽默","weight":0.6540456664566587},{"text":"无聊","weight":0.47338060993209335},{"text":"辛苦","weight":0.5273738403462053},{"text":"轻松","weight":0.31191868816203},{"text":"挺好","weight":0.400786969375747},{"text":"平淡","weight":0.5426372271816887},{"text":"和谐","weight":0.2854024529699598},{"text":"幸福","weight":0.3403528522134738},{"text":"浮躁","weight":0.12119270851539168},{"text":"庸俗","weight":0.18931810191951456},{"text":"最气","weight":0.15062163718915464},{"text":"最恨","weight":0.1884744398109819},{"text":"真诚","weight":0.06475935619003759},{"text":"爱和","weight":0.08033030195077977},{"text":"乐趣","weight":0.2914148653644248},{"text":"很好","weight":0.09881930109199563},{"text":"年轻","weight":0.14502746044912482},{"text":"诚恳","weight":0.23350192327731578},{"text":"艰辛","weight":0.017559028218264862},{"text":"活好","weight":0.13173836190569502},{"text":"快乐","weight":0.22557497666260143},{"text":"美好","weight":0.10876452331711749},{"text":"疯狂","weight":0.031960877509308525},{"text":"纯美","weight":0.055382010700139574},{"text":"精致","weight":0.056777015345900204},{"text":"节目","weight":0.23135876123289195},{"text":"老师","weight":0.0647827071388381},{"text":"综艺","weight":0.4189201900353774},{"text":"版权","weight":0.038084393902239055},{"text":"农村","weight":0.22317311336665022},{"text":"小厨","weight":0.18456385001262596},{"text":"做菜","weight":0.11050347399300192},{"text":"广告","weight":0.130479902340017},{"text":"观众","weight":0.11272832462328485},{"text":"原创","weight":0.09169734418555843},{"text":"原版","weight":0.027437952450106367},{"text":"样子","weight":0.1447906135397659},{"text":"爸爸","weight":0.06840715877679338},{"text":"儿子","weight":0.07852336613091807},{"text":"姑娘","weight":0.050235835371080534},{"text":"评论","weight":0.048878465237390145},{"text":"房子","weight":0.12959616602060775},{"text":"评分","weight":0.029878717664915098},{"text":"人生","weight":0.02468043899035797},{"text":"学生","weight":0.07176813954686197},{"text":"动物","weight":0.008377855440372924},{"text":"国产","weight":0.008054075466190002},{"text":"类型","weight":0.09607153422053821},{"text":"自带","weight":0.05881807038316214},{"text":"朋友","weight":0.09589771711384411},{"text":"塑料","weight":0.08857118786860098},{"text":"智商","weight":0.09162103663512579},{"text":"全程","weight":0.03585536983070183},{"text":"内容","weight":0.06818990927597468},{"text":"垃圾","weight":0.0537756515353554},{"text":"芒果","weight":0.03250190705719555},{"text":"太重","weight":0.045574313736258865},{"text":"一星","weight":0.040581432978223995},{"text":"时代","weight":0.02254736194324361},{"text":"画面","weight":0.045154574026437876},{"text":"","weight":null}];


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
        
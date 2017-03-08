
 var infor = {"content":[{"name":"name","value":"跨界歌王"},{"name":"导演","value":""},{"name":"编剧"},{"name":"主演","value":""},{"name":"类型","value":""},{"name":"上映日期"},{"name":"summary"},{"name":"评分","value":""},{"name":"image"},{"name":"id"}]}
 
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
                data: [1743,1890,2020,1821,1738,1668,1802,1534,2037,1884,1878,1603,1716,1646,1718,1822,1751,1751,1923,1787,1786,1694,1674,1849,1829,1731,1707,1778,1673,1833,1843,1623,1757,1703,1609,1697,1698,0,1472,1512,1551,1559,1525,1626,1557]
            }, ]
        };

        var word_list = [{"text":"快乐","weight":1.0044325691601128},{"text":"快本","weight":0.5215627418564615},{"text":"欢乐","weight":0.14648151824754396},{"text":"无聊","weight":0.12667334685684023},{"text":"尴尬","weight":0.1182167231394291},{"text":"不错","weight":0.21241126372536615},{"text":"孤独","weight":0.2508734951808921},{"text":"幽默","weight":0.45523710315307947},{"text":"幸福","weight":0.05206366731965343},{"text":"成熟","weight":0.7732827932752107},{"text":"简单","weight":0.8295902598527042},{"text":"活泼","weight":0.028658117071193458},{"text":"清醒","weight":0.8473531006446006},{"text":"稳重","weight":0.658687383260099},{"text":"灵活","weight":0.44210716078261414},{"text":"粗爆","weight":0.1102520324797122},{"text":"寂静","weight":0.17896583995515922},{"text":"悲伤","weight":0.3935596975230119},{"text":"短暂","weight":0.12257084308387668},{"text":"低极","weight":0.03173334721496286},{"text":"温和","weight":0.11417654593846978},{"text":"虚假","weight":0.3633864491713768},{"text":"抑郁","weight":0.4185772976959031},{"text":"独爱","weight":0.33023216313094833},{"text":"挺乱","weight":0.050303671414702586},{"text":"重看","weight":0.11412032279656105},{"text":"常鲜","weight":0.05240648361143936},{"text":"辉煌","weight":0.0215859506157931},{"text":"有趣","weight":0.12027508361844313},{"text":"必看","weight":0.009419553688569943},{"text":"幼稚","weight":0.012662794544750196},{"text":"最多","weight":0.027176480016603954},{"text":"很假","weight":0.01196538007995643},{"text":"健康","weight":0.09925236784888822},{"text":"興趣","weight":0.07511114683752738},{"text":"节目","weight":2.211057310400738},{"text":"综艺","weight":0.9264653389685081},{"text":"游戏","weight":0.6195281851116868},{"text":"大本营","weight":0.5892588064058688},{"text":"主持人","weight":0.3944738676646045},{"text":"观众","weight":0.21766055133949253},{"text":"老师","weight":0.22206807606270143},{"text":"陪伴","weight":0.056716068550073315},{"text":"时间","weight":0.22487820903093447},{"text":"情怀","weight":0.2844571478084234},{"text":"笑点","weight":0.02132282336012585},{"text":"电视","weight":0.12271975806988332},{"text":"小学","weight":0.006276768951114265},{"text":"小时候","weight":0.21675256902038914},{"text":"机智","weight":0.1396212631435895},{"text":"人员","weight":0.14580275151831867},{"text":"大学","weight":0.0676492186350681},{"text":"弱智","weight":0.13194415943981494},{"text":"习惯","weight":0.04170287198103998},{"text":"艺人","weight":0.0478827678420923},{"text":"唱片","weight":0.013440972607410794},{"text":"玩游戏","weight":0.008474525110594515},{"text":"智商","weight":0.02867598429494751},{"text":"电影","weight":0.1345399356480995},{"text":"世界","weight":0.11618140197749746},{"text":"老牌","weight":0.15004100953309135},{"text":"电视机","weight":0.08487513695403075},{"text":"理由","weight":0.08175135789466377},{"text":"粉丝","weight":0.061783504471018956},{"text":"机制","weight":0.11658215055850137},{"text":"距离","weight":0.14424731888146128},{"text":"无脑","weight":0.13921838577913687},{"text":"女朋友","weight":0.08458317609634404},{"text":"队友","weight":0.1540283312755482},{"text":"受众","weight":0.15281649060712335},{"text":"","weight":null}];


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
        
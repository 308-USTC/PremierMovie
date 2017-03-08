
 var infor = {"content":[{"name":"name","value":"火星情报局"},{"name":"导演","value":""},{"name":"编剧"},{"name":"主演","value":""},{"name":"类型","value":""},{"name":"上映日期"},{"name":"summary"},{"name":"评分","value":""},{"name":"image"},{"name":"id"}]}
 
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
                data: [749585,334585,196217,120345,34861,31904,29381,24488,27438,24501,23710,23334,23478,25683,26232,24902,22896,20793,19987,20664,18536,21925,21468,18192,14761,13735,13832,13712,15254,16547,16234,12429,12776,12805,12449,12681,2,13867,15752,18052,14417,12864,13822,16083,15835]
            }, ]
        };

        var word_list = [{"text":"快乐","weight":1.6077091960499057},{"text":"快本","weight":0.1841896490025644},{"text":"欢乐","weight":1.0604913266712555},{"text":"无聊","weight":0.398734799346605},{"text":"尴尬","weight":0.1300053110436187},{"text":"不错","weight":0.9406873743803839},{"text":"孤独","weight":0.8938712483702224},{"text":"幽默","weight":0.17007154511034814},{"text":"幸福","weight":0.3124677518886425},{"text":"成熟","weight":0.05265152449915676},{"text":"简单","weight":0.46662650496068553},{"text":"活泼","weight":0.7516685843800724},{"text":"清醒","weight":0.5555285920197873},{"text":"稳重","weight":0.2428432476078808},{"text":"灵活","weight":0.3987468555624401},{"text":"粗爆","weight":0.07747441044055924},{"text":"寂静","weight":0.09810058122076136},{"text":"悲伤","weight":0.2889763093046215},{"text":"短暂","weight":0.4444642061949088},{"text":"低极","weight":0.21328783383352348},{"text":"温和","weight":0.4152055190635938},{"text":"虚假","weight":0.2784423402382043},{"text":"抑郁","weight":0.2273546888495621},{"text":"独爱","weight":0.12254560355615013},{"text":"挺乱","weight":0.01638713958853886},{"text":"重看","weight":0.047708068422561964},{"text":"常鲜","weight":0.06470312856409251},{"text":"辉煌","weight":0.1105590507712298},{"text":"有趣","weight":0.01055654480832886},{"text":"必看","weight":0.12538434916114646},{"text":"幼稚","weight":0.12071917697851288},{"text":"最多","weight":0.011831347268004788},{"text":"很假","weight":0.004705018563684621},{"text":"健康","weight":0.09345617819067617},{"text":"興趣","weight":0.02509434200836098},{"text":"节目","weight":2.1324866636872524},{"text":"综艺","weight":1.1635197573474407},{"text":"游戏","weight":0.8648624153520131},{"text":"大本营","weight":0.16029333261226478},{"text":"主持人","weight":0.20293441936008694},{"text":"观众","weight":0.39264933386832773},{"text":"老师","weight":0.4322562756543199},{"text":"陪伴","weight":0.39915357105621035},{"text":"时间","weight":0.006079820893871092},{"text":"情怀","weight":0.02774790256410384},{"text":"笑点","weight":0.11831425857915993},{"text":"电视","weight":0.09146700829110567},{"text":"小学","weight":0.16445111778194682},{"text":"小时候","weight":0.148806563811982},{"text":"机智","weight":0.0333228466215526},{"text":"人员","weight":0.07986090673472815},{"text":"大学","weight":0.08381675301310088},{"text":"弱智","weight":0.10177531009449117},{"text":"习惯","weight":0.05624473644132111},{"text":"艺人","weight":0.04916390314816474},{"text":"唱片","weight":0.03602875955476357},{"text":"玩游戏","weight":0.16480435628802267},{"text":"智商","weight":0.05268146863134332},{"text":"电影","weight":0.1366607608408268},{"text":"世界","weight":0.018461052221495338},{"text":"老牌","weight":0.06579935489419671},{"text":"电视机","weight":0.07760050454285534},{"text":"理由","weight":0.13476872091636724},{"text":"粉丝","weight":0.0044474934900152795},{"text":"机制","weight":0.015170562808750027},{"text":"距离","weight":0.14102412193586722},{"text":"无脑","weight":0.021032173938778927},{"text":"女朋友","weight":0.1077396419086224},{"text":"队友","weight":0.0399112792653318},{"text":"受众","weight":0.14324464820978342},{"text":"","weight":null}];


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
        
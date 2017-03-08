
 var infor = {"content":[{"name":"name","value":"见字如面"},{"name":"导演","value":""},{"name":"编剧"},{"name":"主演","value":""},{"name":"类型","value":""},{"name":"上映日期"},{"name":"summary"},{"name":"评分","value":""},{"name":"image"},{"name":"id"}]}
 
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
                data: [18547,14864,13169,9134,6800,7667,6689,4075,4260,4250,5168,9065,6982,10007,11130,11780,12494,10225,9049,9074,10340,13781,15065,10253,14219,16070,12508,12103,24219,22124,14502,12952,15001,13339,18311,16644,19656,13043,9956,7720,7459,8964,9809,12049,11163]
            }, ]
        };

        var word_list = [{"text":"不错","weight":0.2357583576714342},{"text":"惊喜","weight":0.40150101325099685},{"text":"温柔","weight":0.20652951281910753},{"text":"舒服","weight":0.12051761896835975},{"text":"很棒","weight":0.10834525837604914},{"text":"简单","weight":0.19514273942065455},{"text":"有趣","weight":0.07004789276043788},{"text":"幽默","weight":0.1646397945895415},{"text":"风靡","weight":0.008304582973911847},{"text":"坚韧","weight":0.08346098750648297},{"text":"惊艳","weight":0.08618926931309025},{"text":"真挚","weight":0.2983215466107957},{"text":"淳厚","weight":0.20838981765234907},{"text":"激动","weight":0.12327654176783548},{"text":"欣喜","weight":0.19248673158214735},{"text":"一星","weight":0.13146842479634652},{"text":"平和","weight":0.06151415810638383},{"text":"真诚","weight":0.23586487774029874},{"text":"愉悦","weight":0.31135026155955825},{"text":"平实","weight":0.2903842453090641},{"text":"美好","weight":0.1727383949975255},{"text":"诙谐","weight":0.11520954629475565},{"text":"生硬","weight":0.2709277940340463},{"text":"一大","weight":0.23238401516089768},{"text":"平淡","weight":0.046499451075581705},{"text":"短暂","weight":0.1272129623690486},{"text":"很好","weight":0.15200266715802685},{"text":"精湛","weight":0.030178338426240674},{"text":"尴尬","weight":0.15817656045079476},{"text":"肤浅","weight":0.08571865400115425},{"text":"节目","weight":0.18308071522326028},{"text":"主持人","weight":0.07055698583261316},{"text":"书信","weight":0.30678288879075327},{"text":"读信","weight":0.381414342780872},{"text":"历史","weight":0.07858444315139401},{"text":"老师","weight":0.3505226927769352},{"text":"综艺","weight":0.1812186322068827},{"text":"演员","weight":0.22755518001489178},{"text":"文化","weight":0.0051681701947834495},{"text":"感情","weight":0.15382190498414416},{"text":"台词","weight":0.13735045694794162},{"text":"声音","weight":0.20434966754804967},{"text":"文字","weight":0.017234244601684948},{"text":"情感","weight":0.21368217160740718},{"text":"教授","weight":0.2466075333661503},{"text":"时代","weight":0.01970718225851014},{"text":"信件","weight":0.14786734943391688},{"text":"故事","weight":0.11858644888711117},{"text":"清流","weight":0.19233480043094442},{"text":"功底","weight":0.013315878205959114},{"text":"内容","weight":0.010354146639624728},{"text":"女主持","weight":0.1658753014213129},{"text":"水平","weight":0.028491742041211385},{"text":"观众","weight":0.011925063485653272},{"text":"时间","weight":0.1330374387592575},{"text":"形式","weight":0.16218187407696735},{"text":"观点","weight":0.02695742795163872},{"text":"文学","weight":0.08568652979689133},{"text":"节奏","weight":0.055108531043929314},{"text":"文艺","weight":0.08308838941163948},{"text":"","weight":null}];


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
        
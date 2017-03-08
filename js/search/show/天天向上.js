
 var infor = {"content":[{"name":"name","value":"天天向上"},{"name":"主演","value":"汪涵 欧弟 田源 钱枫 "},{"name":"类型","value":"脱口秀"},{"name":"国家/地区","value":"中国大陆"},{"name":"开播日期","value":"2008"},{"name":"summary","value":"大型礼仪公德脱口秀\n用各种形式来传播中国千年礼仪之邦的礼仪文化，让国民在娱乐嬉笑之余感受中华传统美德的精髓并借此发扬光大是节目定位的深度体现，也是节目创建的一种背景，随着节目题材范围的拓宽，节目的核心气质是青春励志，并将把“青春励志”和“传统礼仪”作为必守的原则。"},{"name":"评分","value":7.8},{"name":"image","value":"https://img1.doubanio.com/view/movie_poster_cover/lpst/public/p2352326769.jpg"},{"name":"id","value":"25909168"}]}
 
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
                data: [30136,54682,31931,25162,21603,19946,18015,14409,23554,20240,18177,18309,19309,20231,30861,45410,32431,25179,24306,26435,22763,30351,49502,32729,21919,18636,19186,19240,27679,71333,43631,25566,23201,21840,21272,27037,65147,40882,22616,20679,20574,19116,26418,60403,38901]
            }, ]
        };

        var word_list = [{"text":"快乐","weight":2.5949884976409687},{"text":"快本","weight":1.7945794934206543},{"text":"有趣","weight":1.065328396317901},{"text":"完整","weight":0.9221603976588151},{"text":"诙谐","weight":0.6695526441221893},{"text":"幽默","weight":1.3623498384077921},{"text":"不智","weight":0.7264234683595726},{"text":"睿智","weight":1.1711584428024955},{"text":"灵活","weight":1.306107759720781},{"text":"紧张","weight":1.0050204919259955},{"text":"严肃","weight":1.2647476806707116},{"text":"青涩","weight":1.1863326732439996},{"text":"成熟","weight":0.7828942643071979},{"text":"低俗","weight":0.8398360602194468},{"text":"美好","weight":0.5015830337798468},{"text":"无聊","weight":0.450978395389781},{"text":"稳定","weight":0.7433368744844412},{"text":"不错","weight":0.8971981986527409},{"text":"矫情","weight":0.7778894376150169},{"text":"良心","weight":0.020648127667707742},{"text":"必看","weight":0.04047162249811914},{"text":"尴尬","weight":0.07451138371995873},{"text":"混乱","weight":0.193120803932922},{"text":"蛮好","weight":0.07306282355721151},{"text":"厉害","weight":0.11300045641956936},{"text":"很好","weight":0.12040979192606326},{"text":"浮躁","weight":0.08882889541301658},{"text":"神烦","weight":0.19416414242244673},{"text":"挺好","weight":0.1463876801340591},{"text":"舒服","weight":0.15266238476115002},{"text":"平衡","weight":0.0482226965733394},{"text":"高大","weight":0.08053171798388767},{"text":"聒噪","weight":0.09798200601226548},{"text":"很爱","weight":0.02626161124393845},{"text":"辛苦","weight":0.11014388546867024},{"text":"节目","weight":2.5649384683677336},{"text":"主持人","weight":1.0701749162812597},{"text":"综艺","weight":0.07686177648212567},{"text":"欧弟","weight":0.22482106396224905},{"text":"美食","weight":0.10694723001638694},{"text":"文化","weight":0.13318163831334986},{"text":"涵哥","weight":0.4530999841830758},{"text":"精英","weight":0.03623523418844482},{"text":"内涵","weight":0.3891717524374083},{"text":"礼仪","weight":0.10928080770516975},{"text":"水准","weight":0.021617018624631834},{"text":"大陆","weight":0.31548158633715834},{"text":"娱乐性","weight":0.05422951597419996},{"text":"恶心","weight":0.28346244936257486},{"text":"同学录","weight":0.24581884084162506},{"text":"记忆","weight":0.2253418015661695},{"text":"电视","weight":0.020692928085443037},{"text":"字头","weight":0.26982540544383377},{"text":"粉丝","weight":0.07433992304966147},{"text":"教育性","weight":0.06176742591598787},{"text":"陌生化","weight":0.33730561580210383},{"text":"芒果","weight":0.24563414362322733},{"text":"广告","weight":0.28632345701772677},{"text":"当兵","weight":0.118198843051681},{"text":"档子","weight":0.23461140532204247},{"text":"意义","weight":0.2744821939428146},{"text":"经典","weight":0.1306564192705206},{"text":"风云","weight":0.22471717629926682},{"text":"语言","weight":0.15072932735673686},{"text":"差距","weight":0.049921198568021914},{"text":"兄弟","weight":0.027489350600792196},{"text":"名校","weight":0.056901617341908524},{"text":"吃货","weight":0.15898309632615695},{"text":"特辑","weight":0.005955478440818887},{"text":"五置","weight":0.10576585829266784},{"text":"","weight":null}];


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
        
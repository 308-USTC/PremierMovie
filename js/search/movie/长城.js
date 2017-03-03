       var bar_stack_dom = document.getElementById("bar_stack_container");
       var bar_stack_Chart = echarts.init(bar_stack_dom);
       var bar_stack_app = {};
       bar_stack_option = null;

       var infor = {
           "content": [{
               "name": "moviename",
               "value": "长城 The Great Wall"
           }, {
               "name": "导演",
               "value": " 张艺谋"
           }, {
               "name": "编剧",
               "value": " 马克斯·布鲁克斯 / 爱德华·兹威克 / 马歇尔·赫斯科维兹 / 托尼·吉尔罗伊 / 托马斯·图尔"
           }, {
               "name": "主演",
               "value": " 马特·达蒙 / 景甜 / 佩德罗·帕斯卡 / 刘德华 / 威廉·达福 / 张涵予 / 鹿晗 / 彭于晏 / 林更新 / 郑恺 / 黄轩 / 陈学冬 / 王俊凯 / 余心恬 / 刘冰 / 李亨"
           }, {
               "name": "类型",
               "value": " 剧情 / 动作 / 奇幻 / 冒险"
           }, {
               "name": "制片国家/地区",
               "value": " 美国 / 中国大陆"
           }, {
               "name": "语言",
               "value": " 英语 / 汉语普通话"
           }, {
               "name": "上映日期",
               "value": " 2016-12-16(中国大陆) / 2017-02-17(美国)"
           }, {
               "name": "片长",
               "value": " 104分钟"
           }, {
               "name": "又名",
               "value": " 万里长城"
           }, {
               "name": "IMDb链接",
               "value": " tt2034800"
           }, {
               "name": "summary",
               "value": "电影《长城》讲述了在古代，一支中国精英部队为保卫人类，在举世闻名的长城上与怪兽饕餮进行生死决战的故事。欧洲雇佣军威廉（马特·达蒙 Matt Damon 饰）与同伴佩罗·托瓦尔（佩德罗·帕斯卡 Pedro Pascal 饰）不远万里来到中国盗取火药配方，意外发现了长城是为抵御60年降临人间一次的饕餮所建。长城内部机关重重，宛如“陆上航母”，由无影禁军世代镇守。在这里，威廉见识了饕餮的凶残，也见证了无影禁军的精锐和勇敢，并被这群战士之间的信任和牺牲所感动，义无反顾地加入到了共同守护人类的战斗当中。"
           }]
       };


       for (var i = 0; i < infor.content.length; ++i) {
           if (infor.content[i].name === 'summary') {
               $('.intro').html(infor.content[i].value);
           } else if (infor.content[i].name === 'moviename') {
               $('.section-breadcrumbs h1').html(infor.content[i].value);
               $('title').html('冠影 · PREMIER MOVIE - ' + infor.content[i].value);
           } else {
               $('#tab2 table').append('<tr><td>' + infor.content[i].name + '</td><td>' + infor.content[i].value + '</td></tr>')
           }
       }

       var comment = {
           "content": [{
                   "date": "2016-12-19",
                   "number": "6253"
               }, {
                   "date": "2016-12-18",
                   "number": "8877"
               }, {
                   "date": "2016-12-13",
                   "number": "42"
               }, {
                   "date": "2016-12-12",
                   "number": "19"
               }, {
                   "date": "2016-12-11",
                   "number": "8"
               }, {
                   "date": "2016-12-10",
                   "number": "9"
               }, {
                   "date": "2016-12-17",
                   "number": "11058"
               }, {
                   "date": "2016-12-16",
                   "number": "11818"
               }, {
                   "date": "2016-12-15",
                   "number": "3269"
               }, {
                   "date": "2016-12-14",
                   "number": "186"
               }, {
                   "date": "2016-11-23",
                   "number": "5"
               }, {
                   "date": "2016-11-22",
                   "number": "3"
               }, {
                   "date": "2016-11-21",
                   "number": "3"
               }, {
                   "date": "2016-11-20",
                   "number": "2"
               }, {
                   "date": "2016-11-27",
                   "number": "5"
               }, {
                   "date": "2016-11-26",
                   "number": "72"
               }, {
                   "date": "2016-11-25",
                   "number": "10"
               }, {
                   "date": "2016-11-24",
                   "number": "2"
               }, {
                   "date": "2016-11-29",
                   "number": "4"
               }, {
                   "date": "2016-11-28",
                   "number": "4"
               }, {
                   "date": "2016-12-06",
                   "number": "18"
               }, {
                   "date": "2016-12-04",
                   "number": "6"
               }, {
                   "date": "2016-12-05",
                   "number": "7"
               },
               //{"date":"2016-12-20","number":"3423"},
               {
                   "date": "2016-12-07",
                   "number": "10"
               }, {
                   "date": "2016-12-01",
                   "number": "6"
               }, {
                   "date": "2016-12-02",
                   "number": "4"
               }, {
                   "date": "2016-12-03",
                   "number": "3"
               }, {
                   "date": "2016-11-30",
                   "number": "4"
               }, {
                   "date": "2016-12-08",
                   "number": "6"
               }, {
                   "date": "2016-12-09",
                   "number": "74"
               }, {
                   "date": "2016-11-18",
                   "number": "4"
               }, {
                   "date": "2016-11-19",
                   "number": "9"
               }, {
                   "date": "2016-11-16",
                   "number": "8"
               }, {
                   "date": "2016-11-17",
                   "number": "9"
               },
           ]
       };

       comment.content.sort(function(a, b) {
           return a.date < b.date ? -1 : 1;
       });
       //console.log(comment.content);

       var comment_date = []; //每日评论数
       for (var i = 0; i < comment.content.length; ++i) {
           comment_date.push(comment.content[i].number);
       }



       //百度指数
       var box_data = {
           "content": [
               /*{"date":"2016-11-1","data":"22837"}, //此部分日期评论数据没有
               {"date":"2016-11-2","data":"20777"},
               {"date":"2016-11-3","data":"20057"},
               {"date":"2016-11-4","data":"23601"},
               {"date":"2016-11-5","data":"23517"},
               {"date":"2016-11-6","data":"21832"},
               {"date":"2016-11-7","data":"24519"},
               {"date":"2016-11-8","data":"25846"},
               {"date":"2016-11-9","data":"24626"},
               {"date":"2016-11-10","data":"23199"},
               {"date":"2016-11-11","data":"30230"},
               {"date":"2016-11-12","data":"30749"},
               {"date":"2016-11-13","data":"27017"},
               {"date":"2016-11-14","data":"29239"},
               {"date":"2016-11-15","data":"111034"},*/
               {
                   "date": "2016-11-16",
                   "data": "32141"
               }, {
                   "date": "2016-11-17",
                   "data": "22137"
               }, {
                   "date": "2016-11-18",
                   "data": "21925"
               }, {
                   "date": "2016-11-19",
                   "data": "18658"
               }, {
                   "date": "2016-11-20",
                   "data": "13512"
               }, {
                   "date": "2016-11-21",
                   "data": "16338"
               }, {
                   "date": "2016-11-22",
                   "data": "17666"
               }, {
                   "date": "2016-11-23",
                   "data": "19014"
               }, {
                   "date": "2016-11-24",
                   "data": "19534"
               }, {
                   "date": "2016-11-25",
                   "data": "18903"
               }, {
                   "date": "2016-11-26",
                   "data": "16524"
               }, {
                   "date": "2016-11-27",
                   "data": "14929"
               }, {
                   "date": "2016-11-28",
                   "data": "16288"
               }, {
                   "date": "2016-11-29",
                   "data": "15784"
               }, {
                   "date": "2016-11-30",
                   "data": "16275"
               }, {
                   "date": "2016-12-1",
                   "data": "302029"
               }, {
                   "date": "2016-12-2",
                   "data": "448304"
               }, {
                   "date": "2016-12-3",
                   "data": "554282"
               }, {
                   "date": "2016-12-4",
                   "data": "473939"
               }, {
                   "date": "2016-12-5",
                   "data": "201891"
               }, {
                   "date": "2016-12-6",
                   "data": "90585"
               }, {
                   "date": "2016-12-7",
                   "data": "67457"
               }, {
                   "date": "2016-12-8",
                   "data": "51839"
               }, {
                   "date": "2016-12-9",
                   "data": "50725"
               }, {
                   "date": "2016-12-10",
                   "data": "52090"
               }, {
                   "date": "2016-12-11",
                   "data": "47297"
               }, {
                   "date": "2016-12-12",
                   "data": "86138"
               }, {
                   "date": "2016-12-13",
                   "data": "51194"
               }, {
                   "date": "2016-12-14",
                   "data": "42238"
               }, {
                   "date": "2016-12-15",
                   "data": "29459"
               }, {
                   "date": "2016-12-16",
                   "data": "31585"
               }, {
                   "date": "2016-12-17",
                   "data": "31202"
               }, {
                   "date": "2016-12-18",
                   "data": "28502"
               }, {
                   "date": "2016-12-19",
                   "data": "24881"
               },
           ]
       };

       var box_date = [],
           box_value = [];

       for (var i = 0; i < box_data.content.length; ++i) {
           box_date.push(box_data.content[i].date);
           box_value.push(box_data.content[i].data);
       }

       bar_stack_option = {
           title: {
               text: '票房数据',
               //subtext: '纯属虚构',
               x: 'left'
           },
           tooltip: {
               trigger: 'axis',
               axisPointer: { // 坐标轴指示器，坐标轴触发有效
                   type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
               }
           },
           legend: {
               data: ['日票房', '百度指数', '评论数']
           },
           grid: {
               left: '3%',
               right: '4%',
               bottom: '3%',
               containLabel: true
           },
           xAxis: [{
               type: 'category',
               data: box_date
           }],
           yAxis: [{
               name: '日票房(万元)',
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
               name: '日票房',
               type: 'line',
               data: []
           }, {
               name: '评论数',
               type: 'line',
               yAxisIndex: 1,
               data: comment_date
           }, {
               name: '百度指数',
               type: 'line',
               yAxisIndex: 2,
               data: box_value
           }, ]
       };

       bar_stack_Chart.setOption(bar_stack_option, true);

       /*************************************************/
       /******************* 地域信息 ***********************/
       /*************************************************/

       var cityBox = {
           "selectIndicatrixs": [{
               "id": 1,
               "key": "dayBox",
               "name": "当日票房"
           }, {
               "id": 2,
               "key": "boxRate",
               "name": "票房占比"
           }, {
               "id": 3,
               "key": "showRate",
               "name": "排片占比"
           }, {
               "id": 4,
               "key": "avgPeople",
               "name": "场均人次"
           }, {
               "id": 5,
               "key": "totalBox",
               "name": "累计票房"
           }, {
               "id": 6,
               "key": "seatRate",
               "name": "排座占比"
           }, {
               "id": 7,
               "key": "goldShowRate",
               "name": "黄金场占比"
           }, {
               "id": 8,
               "key": "viewerNum",
               "name": "人次"
           }, {
               "id": 9,
               "key": "showNum",
               "name": "场次"
           }],
           "indicatrixs": [{
               "id": 1,
               "key": "dayBox",
               "name": "当日票房"
           }, {
               "id": 2,
               "key": "boxRate",
               "name": "票房占比"
           }, {
               "id": 3,
               "key": "showRate",
               "name": "排片占比"
           }, {
               "id": 4,
               "key": "avgPeople",
               "name": "场均人次"
           }, {
               "id": 5,
               "key": "totalBox",
               "name": "累计票房"
           }, {
               "id": 6,
               "key": "seatRate",
               "name": "排座占比"
           }, {
               "id": 7,
               "key": "goldShowRate",
               "name": "黄金场占比"
           }, {
               "id": 8,
               "key": "viewerNum",
               "name": "人次"
           }, {
               "id": 9,
               "key": "showNum",
               "name": "场次"
           }],
           "data": [{
               "attendanceRate": "10.6",
               "avgPeople": "17",
               "boxRate": "61.5",
               "cityId": 0,
               "cityName": "全国",
               "dayBox": "5239.8万",
               "goldShowRate": "58.8",
               "seatRate": "55.0",
               "showNum": "9.4万",
               "showRate": "44.8",
               "totalBox": "5.2亿",
               "viewerNum": "151.6万",
               "selectData": ["5239.8万", "61.5%", "44.8%", "17", "5.2亿", "55.0%", "58.8%", "151.6万", "9.4万"]
           }, {
               "attendanceRate": "14.3",
               "avgPeople": "24",
               "boxRate": "49.3",
               "cityId": 0,
               "cityName": "一线",
               "dayBox": "966.1万",
               "goldShowRate": "44.9",
               "seatRate": "51.1",
               "showNum": "1万",
               "showRate": "41.7",
               "totalBox": "9717.4万",
               "viewerNum": "24.8万",
               "selectData": ["966.1万", "49.3%", "41.7%", "24", "9717.4万", "51.1%", "44.9%", "24.8万", "1万"]
           }, {
               "attendanceRate": "12.6",
               "avgPeople": "22",
               "boxRate": "63.7",
               "cityId": 0,
               "cityName": "二线",
               "dayBox": "2417.9万",
               "goldShowRate": "48.7",
               "seatRate": "55.9",
               "showNum": "3.8万",
               "showRate": "45.5",
               "totalBox": "2.4亿",
               "viewerNum": "81.6万",
               "selectData": ["2417.9万", "63.7%", "45.5%", "22", "2.4亿", "55.9%", "48.7%", "81.6万", "3.8万"]
           }, {
               "attendanceRate": "12.3",
               "avgPeople": "18",
               "boxRate": "68.1",
               "cityId": 0,
               "cityName": "三线",
               "dayBox": "1152.3万",
               "goldShowRate": "49.3",
               "seatRate": "55.6",
               "showNum": "2.6万",
               "showRate": "45.7",
               "totalBox": "1.1亿",
               "viewerNum": "46.9万",
               "selectData": ["1152.3万", "68.1%", "45.7%", "18", "1.1亿", "55.6%", "49.3%", "46.9万", "2.6万"]
           }, {
               "attendanceRate": "16.5",
               "avgPeople": "30",
               "boxRate": "42.0",
               "cityId": 1,
               "cityName": "北京",
               "dayBox": "325.9万",
               "goldShowRate": "41.9",
               "seatRate": "49.4",
               "showNum": "2536",
               "showRate": "39.3",
               "totalBox": "3150.4万",
               "viewerNum": "7.5万",
               "selectData": ["325.9万", "42.0%", "39.3%", "30", "3150.4万", "49.4%", "41.9%", "7.5万", "2536"]
           }, {
               "attendanceRate": "13.2",
               "avgPeople": "22",
               "boxRate": "47.1",
               "cityId": 10,
               "cityName": "上海",
               "dayBox": "256.3万",
               "goldShowRate": "44.5",
               "seatRate": "49.1",
               "showNum": "2972",
               "showRate": "41.4",
               "totalBox": "2753.4万",
               "viewerNum": "6.5万",
               "selectData": ["256.3万", "47.1%", "41.4%", "22", "2753.4万", "49.1%", "44.5%", "6.5万", "2972"]
           }, {
               "attendanceRate": "13.9",
               "avgPeople": "26",
               "boxRate": "60.8",
               "cityId": 20,
               "cityName": "广州",
               "dayBox": "203.2万",
               "goldShowRate": "47.0",
               "seatRate": "55.3",
               "showNum": "2159",
               "showRate": "43.6",
               "totalBox": "1906.4万",
               "viewerNum": "5.5万",
               "selectData": ["203.2万", "60.8%", "43.6%", "26", "1906.4万", "55.3%", "47.0%", "5.5万", "2159"]
           }, {
               "attendanceRate": "13.7",
               "avgPeople": "20",
               "boxRate": "58.8",
               "cityId": 30,
               "cityName": "深圳",
               "dayBox": "180.8万",
               "goldShowRate": "46.7",
               "seatRate": "51.7",
               "showNum": "2777",
               "showRate": "43.1",
               "totalBox": "1907.2万",
               "viewerNum": "5.3万",
               "selectData": ["180.8万", "58.8%", "43.1%", "20", "1907.2万", "51.7%", "46.7%", "5.3万", "2777"]
           }, {
               "attendanceRate": "10.0",
               "avgPeople": "20",
               "boxRate": "46.4",
               "cityId": 40,
               "cityName": "天津",
               "dayBox": "46.5万",
               "goldShowRate": "46.2",
               "seatRate": "53.3",
               "showNum": "1070",
               "showRate": "42.9",
               "totalBox": "576.5万",
               "viewerNum": "2.1万",
               "selectData": ["46.5万", "46.4%", "42.9%", "20", "576.5万", "53.3%", "46.2%", "2.1万", "1070"]
           }, {
               "attendanceRate": "16.3",
               "avgPeople": "31",
               "boxRate": "61.2",
               "cityId": 42,
               "cityName": "西安",
               "dayBox": "121.8万",
               "goldShowRate": "47.5",
               "seatRate": "55.8",
               "showNum": "1282",
               "showRate": "45.4",
               "totalBox": "1127.7万",
               "viewerNum": "3.9万",
               "selectData": ["121.8万", "61.2%", "45.4%", "31", "1127.7万", "55.8%", "47.5%", "3.9万", "1282"]
           }, {
               "attendanceRate": "27.7",
               "avgPeople": "51",
               "boxRate": "70.3",
               "cityId": 44,
               "cityName": "福州",
               "dayBox": "54.8万",
               "goldShowRate": "50.4",
               "seatRate": "56.0",
               "showNum": "758",
               "showRate": "45.7",
               "totalBox": "523.3万",
               "viewerNum": "3.9万",
               "selectData": ["54.8万", "70.3%", "45.7%", "51", "523.3万", "56.0%", "50.4%", "3.9万", "758"]
           }, {
               "attendanceRate": "10.0",
               "avgPeople": "16",
               "boxRate": "61.4",
               "cityId": 45,
               "cityName": "重庆",
               "dayBox": "145.9万",
               "goldShowRate": "50.0",
               "seatRate": "56.2",
               "showNum": "3158",
               "showRate": "45.2",
               "totalBox": "1523万",
               "viewerNum": "4.8万",
               "selectData": ["145.9万", "61.4%", "45.2%", "16", "1523万", "56.2%", "50.0%", "4.8万", "3158"]
           }, {
               "attendanceRate": "14.3",
               "avgPeople": "22",
               "boxRate": "64.3",
               "cityId": 50,
               "cityName": "杭州",
               "dayBox": "127.7万",
               "goldShowRate": "46.8",
               "seatRate": "52.5",
               "showNum": "2048",
               "showRate": "43.6",
               "totalBox": "1220.1万",
               "viewerNum": "4.4万",
               "selectData": ["127.7万", "64.3%", "43.6%", "22", "1220.1万", "52.5%", "46.8%", "4.4万", "2048"]
           }, {
               "attendanceRate": "12.7",
               "avgPeople": "23",
               "boxRate": "68.9",
               "cityId": 51,
               "cityName": "宁波",
               "dayBox": "66.1万",
               "goldShowRate": "48.9",
               "seatRate": "56.0",
               "showNum": "1115",
               "showRate": "46.0",
               "totalBox": "646.5万",
               "viewerNum": "2.5万",
               "selectData": ["66.1万", "68.9%", "46.0%", "23", "646.5万", "56.0%", "48.9%", "2.5万", "1115"]
           }, {
               "attendanceRate": "11.9",
               "avgPeople": "21",
               "boxRate": "73.6",
               "cityId": 52,
               "cityName": "无锡",
               "dayBox": "70.1万",
               "goldShowRate": "49.8",
               "seatRate": "57.0",
               "showNum": "1120",
               "showRate": "47.0",
               "totalBox": "727.3万",
               "viewerNum": "2.3万",
               "selectData": ["70.1万", "73.6%", "47.0%", "21", "727.3万", "57.0%", "49.8%", "2.3万", "1120"]
           }, {
               "attendanceRate": "13.4",
               "avgPeople": "23",
               "boxRate": "57.8",
               "cityId": 55,
               "cityName": "南京",
               "dayBox": "98.8万",
               "goldShowRate": "45.7",
               "seatRate": "52.7",
               "showNum": "1224",
               "showRate": "42.6",
               "totalBox": "1024万",
               "viewerNum": "2.8万",
               "selectData": ["98.8万", "57.8%", "42.6%", "23", "1024万", "52.7%", "45.7%", "2.8万", "1224"]
           }, {
               "attendanceRate": "11.6",
               "avgPeople": "23",
               "boxRate": "73.4",
               "cityId": 56,
               "cityName": "合肥",
               "dayBox": "66.6万",
               "goldShowRate": "50.4",
               "seatRate": "59.1",
               "showNum": "990",
               "showRate": "47.8",
               "totalBox": "667.1万",
               "viewerNum": "2.2万",
               "selectData": ["66.6万", "73.4%", "47.8%", "23", "667.1万", "59.1%", "50.4%", "2.2万", "990"]
           }, {
               "attendanceRate": "13.9",
               "avgPeople": "27",
               "boxRate": "62.7",
               "cityId": 57,
               "cityName": "武汉",
               "dayBox": "138.8万",
               "goldShowRate": "47.3",
               "seatRate": "53.8",
               "showNum": "1666",
               "showRate": "43.7",
               "totalBox": "1560.5万",
               "viewerNum": "4.5万",
               "selectData": ["138.8万", "62.7%", "43.7%", "27", "1560.5万", "53.8%", "47.3%", "4.5万", "1666"]
           }, {
               "attendanceRate": "13.0",
               "avgPeople": "23",
               "boxRate": "62.5",
               "cityId": 59,
               "cityName": "成都",
               "dayBox": "180.9万",
               "goldShowRate": "52.0",
               "seatRate": "59.2",
               "showNum": "2349",
               "showRate": "49.0",
               "totalBox": "1800.5万",
               "viewerNum": "5.2万",
               "selectData": ["180.9万", "62.5%", "49.0%", "23", "1800.5万", "59.2%", "52.0%", "5.2万", "2349"]
           }, {
               "attendanceRate": "9.9",
               "avgPeople": "19",
               "boxRate": "56.8",
               "cityId": 60,
               "cityName": "青岛",
               "dayBox": "47.1万",
               "goldShowRate": "46.3",
               "seatRate": "53.0",
               "showNum": "819",
               "showRate": "42.5",
               "totalBox": "504.8万",
               "viewerNum": "1.5万",
               "selectData": ["47.1万", "56.8%", "42.5%", "19", "504.8万", "53.0%", "46.3%", "1.5万", "819"]
           }, {
               "attendanceRate": "12.7",
               "avgPeople": "22",
               "boxRate": "70.8",
               "cityId": 62,
               "cityName": "厦门",
               "dayBox": "51.5万",
               "goldShowRate": "53.8",
               "seatRate": "61.0",
               "showNum": "645",
               "showRate": "50.0",
               "totalBox": "517.7万",
               "viewerNum": "1.4万",
               "selectData": ["51.5万", "70.8%", "50.0%", "22", "517.7万", "61.0%", "53.8%", "1.4万", "645"]
           }, {
               "attendanceRate": "12.3",
               "avgPeople": "22",
               "boxRate": "65.3",
               "cityId": 65,
               "cityName": "大连",
               "dayBox": "55.2万",
               "goldShowRate": "48.2",
               "seatRate": "57.8",
               "showNum": "733",
               "showRate": "47.4",
               "totalBox": "634万",
               "viewerNum": "1.6万",
               "selectData": ["55.2万", "65.3%", "47.4%", "22", "634万", "57.8%", "48.2%", "1.6万", "733"]
           }, {
               "attendanceRate": "11.2",
               "avgPeople": "22",
               "boxRate": "64.5",
               "cityId": 66,
               "cityName": "沈阳",
               "dayBox": "56.7万",
               "goldShowRate": "46.3",
               "seatRate": "54.5",
               "showNum": "899",
               "showRate": "43.8",
               "totalBox": "564.3万",
               "viewerNum": "1.9万",
               "selectData": ["56.7万", "64.5%", "43.8%", "22", "564.3万", "54.5%", "46.3%", "1.9万", "899"]
           }, {
               "attendanceRate": "15.0",
               "avgPeople": "27",
               "boxRate": "63.2",
               "cityId": 70,
               "cityName": "长沙",
               "dayBox": "66.3万",
               "goldShowRate": "46.1",
               "seatRate": "54.0",
               "showNum": "1136",
               "showRate": "44.6",
               "totalBox": "653.2万",
               "viewerNum": "3万",
               "selectData": ["66.3万", "63.2%", "44.6%", "27", "653.2万", "54.0%", "46.1%", "3万", "1136"]
           }, {
               "attendanceRate": "12.4",
               "avgPeople": "22",
               "boxRate": "55.0",
               "cityId": 73,
               "cityName": "郑州",
               "dayBox": "78.3万",
               "goldShowRate": "45.2",
               "seatRate": "56.3",
               "showNum": "1063",
               "showRate": "43.9",
               "totalBox": "859万",
               "viewerNum": "2.3万",
               "selectData": ["78.3万", "55.0%", "43.9%", "22", "859万", "56.3%", "45.2%", "2.3万", "1063"]
           }, {
               "attendanceRate": "11.3",
               "avgPeople": "18",
               "boxRate": "54.3",
               "cityId": 76,
               "cityName": "石家庄",
               "dayBox": "31.2万",
               "goldShowRate": "47.2",
               "seatRate": "54.6",
               "showNum": "686",
               "showRate": "44.1",
               "totalBox": "334.9万",
               "viewerNum": "1.2万",
               "selectData": ["31.2万", "54.3%", "44.1%", "18", "334.9万", "54.6%", "47.2%", "1.2万", "686"]
           }, {
               "attendanceRate": "12.1",
               "avgPeople": "23",
               "boxRate": "69.7",
               "cityId": 80,
               "cityName": "苏州",
               "dayBox": "107.9万",
               "goldShowRate": "49.5",
               "seatRate": "56.6",
               "showNum": "1703",
               "showRate": "45.7",
               "totalBox": "1064.5万",
               "viewerNum": "3.8万",
               "selectData": ["107.9万", "69.7%", "45.7%", "23", "1064.5万", "56.6%", "49.5%", "3.8万", "1703"]
           }, {
               "attendanceRate": "13.1",
               "avgPeople": "23",
               "boxRate": "68.1",
               "cityId": 82,
               "cityName": "南通",
               "dayBox": "35.7万",
               "goldShowRate": "51.3",
               "seatRate": "58.7",
               "showNum": "831",
               "showRate": "47.6",
               "totalBox": "366.1万",
               "viewerNum": "1.8万",
               "selectData": ["35.7万", "68.1%", "47.6%", "23", "366.1万", "58.7%", "51.3%", "1.8万", "831"]
           }, {
               "attendanceRate": "13.8",
               "avgPeople": "25",
               "boxRate": "70.4",
               "cityId": 83,
               "cityName": "南昌",
               "dayBox": "44.8万",
               "goldShowRate": "52.6",
               "seatRate": "60.3",
               "showNum": "762",
               "showRate": "49.6",
               "totalBox": "548.4万",
               "viewerNum": "1.8万",
               "selectData": ["44.8万", "70.4%", "49.6%", "25", "548.4万", "60.3%", "52.6%", "1.8万", "762"]
           }, {
               "attendanceRate": "10.2",
               "avgPeople": "20",
               "boxRate": "63.2",
               "cityId": 89,
               "cityName": "常州",
               "dayBox": "40.4万",
               "goldShowRate": "51.6",
               "seatRate": "58.2",
               "showNum": "690",
               "showRate": "47.1",
               "totalBox": "428.5万",
               "viewerNum": "1.4万",
               "selectData": ["40.4万", "63.2%", "47.1%", "20", "428.5万", "58.2%", "51.6%", "1.4万", "690"]
           }, {
               "attendanceRate": "10.0",
               "avgPeople": "16",
               "boxRate": "69.4",
               "cityId": 91,
               "cityName": "东莞",
               "dayBox": "82.4万",
               "goldShowRate": "49.6",
               "seatRate": "57.1",
               "showNum": "1383",
               "showRate": "47.4",
               "totalBox": "795.9万",
               "viewerNum": "2.2万",
               "selectData": ["82.4万", "69.4%", "47.4%", "16", "795.9万", "57.1%", "49.6%", "2.2万", "1383"]
           }, {
               "attendanceRate": "10.5",
               "avgPeople": "19",
               "boxRate": "62.9",
               "cityId": 92,
               "cityName": "佛山",
               "dayBox": "61.6万",
               "goldShowRate": "50.4",
               "seatRate": "58.1",
               "showNum": "1181",
               "showRate": "47.5",
               "totalBox": "548.1万",
               "viewerNum": "2.2万",
               "selectData": ["61.6万", "62.9%", "47.5%", "19", "548.1万", "58.1%", "50.4%", "2.2万", "1181"]
           }, {
               "attendanceRate": "19.4",
               "avgPeople": "31",
               "boxRate": "64.3",
               "cityId": 94,
               "cityName": "海口",
               "dayBox": "38万",
               "goldShowRate": "53.0",
               "seatRate": "58.4",
               "showNum": "389",
               "showRate": "48.2",
               "totalBox": "330.4万",
               "viewerNum": "1.2万",
               "selectData": ["38万", "64.3%", "48.2%", "31", "330.4万", "58.4%", "53.0%", "1.2万", "389"]
           }, {
               "attendanceRate": "12.0",
               "avgPeople": "20",
               "boxRate": "47.4",
               "cityId": 96,
               "cityName": "济南",
               "dayBox": "31.9万",
               "goldShowRate": "46.0",
               "seatRate": "54.0",
               "showNum": "627",
               "showRate": "43.2",
               "totalBox": "393.7万",
               "viewerNum": "1.2万",
               "selectData": ["31.9万", "47.4%", "43.2%", "20", "393.7万", "54.0%", "46.0%", "1.2万", "627"]
           }, {
               "attendanceRate": "16.0",
               "avgPeople": "30",
               "boxRate": "72.2",
               "cityId": 99,
               "cityName": "南宁",
               "dayBox": "58.5万",
               "goldShowRate": "49.7",
               "seatRate": "58.3",
               "showNum": "568",
               "showRate": "45.7",
               "totalBox": "518.3万",
               "viewerNum": "1.7万",
               "selectData": ["58.5万", "72.2%", "45.7%", "30", "518.3万", "58.3%", "49.7%", "1.7万", "568"]
           }, {
               "attendanceRate": "9.4",
               "avgPeople": "17",
               "boxRate": "67.2",
               "cityId": 101,
               "cityName": "太原",
               "dayBox": "33.6万",
               "goldShowRate": "47.0",
               "seatRate": "59.3",
               "showNum": "490",
               "showRate": "43.8",
               "totalBox": "323.4万",
               "viewerNum": "8026",
               "selectData": ["33.6万", "67.2%", "43.8%", "17", "323.4万", "59.3%", "47.0%", "8026", "490"]
           }, {
               "attendanceRate": "16.5",
               "avgPeople": "29",
               "boxRate": "68.2",
               "cityId": 105,
               "cityName": "哈尔滨",
               "dayBox": "61.2万",
               "goldShowRate": "50.7",
               "seatRate": "57.8",
               "showNum": "674",
               "showRate": "47.1",
               "totalBox": "571.4万",
               "viewerNum": "1.9万",
               "selectData": ["61.2万", "68.2%", "47.1%", "29", "571.4万", "57.8%", "50.7%", "1.9万", "674"]
           }, {
               "attendanceRate": "12.6",
               "avgPeople": "22",
               "boxRate": "61.4",
               "cityId": 107,
               "cityName": "贵阳",
               "dayBox": "29.4万",
               "goldShowRate": "46.4",
               "seatRate": "52.6",
               "showNum": "407",
               "showRate": "42.3",
               "totalBox": "289.7万",
               "viewerNum": "8584",
               "selectData": ["29.4万", "61.4%", "42.3%", "22", "289.7万", "52.6%", "46.4%", "8584", "407"]
           }, {
               "attendanceRate": "15.7",
               "avgPeople": "22",
               "boxRate": "62.3",
               "cityId": 108,
               "cityName": "珠海",
               "dayBox": "22.4万",
               "goldShowRate": "42.4",
               "seatRate": "53.6",
               "showNum": "333",
               "showRate": "39.3",
               "totalBox": "204.1万",
               "viewerNum": "7204",
               "selectData": ["22.4万", "62.3%", "39.3%", "22", "204.1万", "53.6%", "42.4%", "7204", "333"]
           }, {
               "attendanceRate": "11.7",
               "avgPeople": "20",
               "boxRate": "76.0",
               "cityId": 110,
               "cityName": "泉州",
               "dayBox": "41.3万",
               "goldShowRate": "52.4",
               "seatRate": "56.2",
               "showNum": "594",
               "showRate": "48.2",
               "totalBox": "366.8万",
               "viewerNum": "1.1万",
               "selectData": ["41.3万", "76.0%", "48.2%", "20", "366.8万", "56.2%", "52.4%", "1.1万", "594"]
           }, {
               "attendanceRate": "10.8",
               "avgPeople": "13",
               "boxRate": "70.5",
               "cityId": 112,
               "cityName": "温州",
               "dayBox": "42.8万",
               "goldShowRate": "43.2",
               "seatRate": "50.3",
               "showNum": "1080",
               "showRate": "40.5",
               "totalBox": "333.6万",
               "viewerNum": "1.3万",
               "selectData": ["42.8万", "70.5%", "40.5%", "13", "333.6万", "50.3%", "43.2%", "1.3万", "1080"]
           }, {
               "attendanceRate": "11.8",
               "avgPeople": "22",
               "boxRate": "60.5",
               "cityId": 113,
               "cityName": "中山",
               "dayBox": "28万",
               "goldShowRate": "50.9",
               "seatRate": "56.1",
               "showNum": "530",
               "showRate": "46.7",
               "totalBox": "233.4万",
               "viewerNum": "1.1万",
               "selectData": ["28万", "60.5%", "46.7%", "22", "233.4万", "56.1%", "50.9%", "1.1万", "530"]
           }, {
               "attendanceRate": "12.2",
               "avgPeople": "21",
               "boxRate": "57.5",
               "cityId": 114,
               "cityName": "昆明",
               "dayBox": "52.1万",
               "goldShowRate": "49.5",
               "seatRate": "53.6",
               "showNum": "797",
               "showRate": "44.2",
               "totalBox": "491.5万",
               "viewerNum": "1.6万",
               "selectData": ["52.1万", "57.5%", "44.2%", "21", "491.5万", "53.6%", "49.5%", "1.6万", "797"]
           }, {
               "attendanceRate": "14.0",
               "avgPeople": "27",
               "boxRate": "65.8",
               "cityId": 116,
               "cityName": "长春",
               "dayBox": "56.3万",
               "goldShowRate": "58.2",
               "seatRate": "65.0",
               "showNum": "616",
               "showRate": "51.8",
               "totalBox": "593.3万",
               "viewerNum": "1.7万",
               "selectData": ["56.3万", "65.8%", "51.8%", "27", "593.3万", "65.0%", "58.2%", "1.7万", "616"]
           }, {
               "attendanceRate": "10.2",
               "avgPeople": "18",
               "boxRate": "67.1",
               "cityId": 120,
               "cityName": "扬州",
               "dayBox": "20.8万",
               "goldShowRate": "53.0",
               "seatRate": "55.6",
               "showNum": "459",
               "showRate": "46.1",
               "totalBox": "223.2万",
               "viewerNum": "7991",
               "selectData": ["20.8万", "67.1%", "46.1%", "18", "223.2万", "55.6%", "53.0%", "7991", "459"]
           }, {
               "attendanceRate": "12.0",
               "avgPeople": "20",
               "boxRate": "62.6",
               "cityId": 139,
               "cityName": "呼和浩特",
               "dayBox": "21.5万",
               "goldShowRate": "50.6",
               "seatRate": "56.3",
               "showNum": "331",
               "showRate": "47.2",
               "totalBox": "206万",
               "viewerNum": "6497",
               "selectData": ["21.5万", "62.6%", "47.2%", "20", "206万", "56.3%", "50.6%", "6497", "331"]
           }, {
               "attendanceRate": "9.1",
               "avgPeople": "17",
               "boxRate": "69.7",
               "cityId": 181,
               "cityName": "盐城",
               "dayBox": "15.6万",
               "goldShowRate": "51.4",
               "seatRate": "59.8",
               "showNum": "453",
               "showRate": "47.1",
               "totalBox": "184.6万",
               "viewerNum": "7330",
               "selectData": ["15.6万", "69.7%", "47.1%", "17", "184.6万", "59.8%", "51.4%", "7330", "453"]
           }, {
               "attendanceRate": "16.9",
               "avgPeople": "25",
               "boxRate": "74.1",
               "cityId": 185,
               "cityName": "嘉兴",
               "dayBox": "32.7万",
               "goldShowRate": "46.0",
               "seatRate": "52.3",
               "showNum": "487",
               "showRate": "44.3",
               "totalBox": "278.4万",
               "viewerNum": "1.2万",
               "selectData": ["32.7万", "74.1%", "44.3%", "25", "278.4万", "52.3%", "46.0%", "1.2万", "487"]
           }, {
               "attendanceRate": "13.9",
               "avgPeople": "19",
               "boxRate": "65.9",
               "cityId": 187,
               "cityName": "绍兴",
               "dayBox": "30.1万",
               "goldShowRate": "48.7",
               "seatRate": "55.3",
               "showNum": "535",
               "showRate": "46.0",
               "totalBox": "295.2万",
               "viewerNum": "1万",
               "selectData": ["30.1万", "65.9%", "46.0%", "19", "295.2万", "55.3%", "48.7%", "1万", "535"]
           }, {
               "attendanceRate": "14.9",
               "avgPeople": "24",
               "boxRate": "74.0",
               "cityId": 188,
               "cityName": "金华",
               "dayBox": "45.2万",
               "goldShowRate": "49.5",
               "seatRate": "55.8",
               "showNum": "723",
               "showRate": "46.7",
               "totalBox": "394.8万",
               "viewerNum": "1.7万",
               "selectData": ["45.2万", "74.0%", "46.7%", "24", "394.8万", "55.8%", "49.5%", "1.7万", "723"]
           }, {
               "attendanceRate": "16.0",
               "avgPeople": "20",
               "boxRate": "72.0",
               "cityId": 191,
               "cityName": "台州",
               "dayBox": "30.5万",
               "goldShowRate": "51.4",
               "seatRate": "52.1",
               "showNum": "723",
               "showRate": "46.4",
               "totalBox": "275.6万",
               "viewerNum": "1.4万",
               "selectData": ["30.5万", "72.0%", "46.4%", "20", "275.6万", "52.1%", "51.4%", "1.4万", "723"]
           }, {
               "attendanceRate": "11.1",
               "avgPeople": "17",
               "boxRate": "70.4",
               "cityId": 281,
               "cityName": "惠州",
               "dayBox": "25.3万",
               "goldShowRate": "46.3",
               "seatRate": "54.0",
               "showNum": "547",
               "showRate": "45.0",
               "totalBox": "234.3万",
               "viewerNum": "9032",
               "selectData": ["25.3万", "70.4%", "45.0%", "17", "234.3万", "54.0%", "46.3%", "9032", "547"]
           }, {
               "attendanceRate": "14.4",
               "avgPeople": "20",
               "boxRate": "63.2",
               "cityId": 361,
               "cityName": "兰州",
               "dayBox": "30.7万",
               "goldShowRate": "51.0",
               "seatRate": "55.6",
               "showNum": "438",
               "showRate": "45.1",
               "totalBox": "295.4万",
               "viewerNum": "8571",
               "selectData": ["30.7万", "63.2%", "45.1%", "20", "295.4万", "55.6%", "51.0%", "8571", "438"]
           }, {
               "attendanceRate": "19.5",
               "avgPeople": "28",
               "boxRate": "64.9",
               "cityId": 387,
               "cityName": "乌鲁木齐",
               "dayBox": "23.7万",
               "goldShowRate": "38.3",
               "seatRate": "51.5",
               "showNum": "342",
               "showRate": "39.2",
               "totalBox": "224.8万",
               "viewerNum": "9422",
               "selectData": ["23.7万", "64.9%", "39.2%", "28", "224.8万", "51.5%", "38.3%", "9422", "342"]
           }]
       }


       //        console.log(cityBox);

       $('.price').html(cityBox.data[0].totalBox);

       var citydata = [],
           piedata = [],
           regionName = [];

       //获取一二三线以及全国的观影人数和票房统计
       for (var i = 0; i < 4; ++i) {
           regionName.push(cityBox.data[i].cityName);
           piedata.push({
               name: cityBox.data[i].cityName,
               radius: [100 - i * 10, 110 - i * 10],
               data: [{
                   value: parseFloat(cityBox.data[i].viewerNum),
                   name: '观影人次（万）'
               }, {
                   value: parseFloat(cityBox.data[0].viewerNum) - parseFloat(cityBox.data[i].viewerNum)
               }, ]
           });
       }

       var provinceNameFlag = []; //用于保存当前省的总票房
       //从4开始为城市票房
       for (var i = 4; i < cityBox.data.length; ++i) {
           var cityname = getProvince(cityBox.data[i].cityName) || cityBox.data[i].cityName;
           //var geoCoord = geoCoordMap[cityname];
           var cityvalue = parseFloat(cityBox.data[i].totalBox); //geoCoord.concat( parseFloat(cityBox.data[i].totalBox) );
           citydata.push({
               name: cityname,
               value: cityvalue
           }); //自动整合
       }

       console.log(citydata);

       var map_dom = document.getElementById("map_container");
       var map_Chart = echarts.init(map_dom);
       var map_option = null;

       function randomData() {
           return Math.round(Math.random() * 1000);
       }

       map_option = {
           title: {
               text: '截至2016年12月20日 各省市票房总计',
               x: 'center', //位置 也可为left
               y: '10%',
           },
           tooltip: {
               trigger: 'item',
               formatter: function(p) {
                   //    console.log(p);
                   //区域地图
                   var str = (p.value > 0) ? p.value.toFixed(2) + '万元' : '暂无数据';
                   p.color = (p.value > 0) ? p.color : '#ccc';
                   return '<span style="display:inline-block;margin-right:5px;border-radius:10px;width:9px;height:9px;background-color:' + p.color + ';"></span><span style="font-weight:bold; font-size:1.5em;">' + p.name + ' : ' + str + '</span>';
                   //散点图
                   //    var str = p.data.value[2].toFixed(2) + '万元' ;
                   //    return '<span style="display:inline-block;margin-right:5px;border-radius:10px;width:9px;height:9px;background-color:'+ p.color+';"></span><span style="font-weight:bold; font-size:1.5em;">' + p.name + ' : ' + str +'</span>';
               }
           },
           visualMap: {
               min: 0,
               max: 2500,
               left: 'left',
               top: 'center',
               text: ['高', '低'], // 文本，默认为数值文本
               calculable: true
           },
           toolbox: {
               show: true,
               orient: 'vertical',
               left: 'right',
               top: 'center',
               feature: {
                   dataView: {
                       readOnly: false
                   },
                   restore: {},
                   saveAsImage: {}
               }
           },
           // geo: {
           //// map: 'china',
           // label: {
           //     emphasis: {
           //         show: false
           //     }
           // },
           //roam: true,
           //itemStyle: {
           //    normal: {
           //        areaColor: '#323c48',
           //        borderColor: '#111'
           //    },
           //    emphasis: {
           //        areaColor: '#2a333d'
           //    }
           //}
           //},
           series: [{
               type: 'map',
               mapType: 'china',
               // type: 'scatter',
               //coordinateSystem: 'geo',
               roam: false,
               symbolSize: function(val) {
                   return val[2] / 50;
               },
               label: {
                   normal: {
                       formatter: '{b}',
                       position: 'right',
                       show: true
                   },
                   emphasis: {
                       show: true
                   }
               },
               itemStyle: {
                   normal: {
                       color: '#ddb926'
                   }
               },
               data: citydata
           }]
       };;


       map_Chart.setOption(map_option, true);



       ////////////////////////////////////////////////


       var pie2_dom = document.getElementById("pie2_container");
       var pie2_Chart = echarts.init(pie2_dom);
       var pie2_option = null

       pie2_option = {
           title: {
               text: '观众分析',
               x: 'center'
           },
           tooltip: {
               trigger: 'item',
               formatter: "{b} : {c}%"
           },
           legend: {
               orient: 'vertical',
               left: 'left',
               data: ['电影1']
           },
           series: [{
               name: '性别比例',
               type: 'pie',
               radius: '50%',
               center: ['20%', '60%'],
               data: [{
                   value: 63.5,
                   name: '男性'
               }, {
                   value: 36.5,
                   name: '女性'
               }],
               itemStyle: {
                   emphasis: {
                       shadowBlur: 10,
                       shadowOffsetX: 0,
                       shadowColor: 'rgba(0, 0, 0, 0.5)'
                   }
               }
           }, {
               name: '年龄分布',
               type: 'pie',
               radius: ['35%', '50%'],
               center: ['70%', '60%'],
               data: [{
                   value: 5,
                   name: '70后'
               }, {
                   value: 14,
                   name: '80后'
               }, {
                   value: 26,
                   name: '90后'
               }, {
                   value: 25,
                   name: '00后'
               }, {
                   value: 18,
                   name: '60后'
               }, ],
               itemStyle: {
                   emphasis: {
                       shadowBlur: 10,
                       shadowOffsetX: 0,
                       shadowColor: 'rgba(0, 0, 0, 0.5)'
                   }
               }
           }]
       };

       pie2_Chart.setOption(pie2_option, true);

       /////////////////////////////////////////////////

       var keywords = [{
           "text": "﻿中国电影",
           "weight": "14220"
       }, {
           "text": "中国元素",
           "weight": "6795"
       }, {
           "text": "好莱坞大片",
           "weight": "6481"
       }, {
           "text": "爆米花电影",
           "weight": "4460"
       }, {
           "text": "奥运会开幕式",
           "weight": "3596"
       }, {
           "text": "中国文化",
           "weight": "5188"
       }, {
           "text": "景甜演技不错 ",
           "weight": "3518"
       }, {
           "text": "商业大片",
           "weight": "2158"
       }, {
           "text": "张艺谋电影",
           "weight": "2120"
       }, {
           "text": "觉得好看",
           "weight": "2555"
       }, {
           "text": "中国导演",
           "weight": "1749"
       }, {
           "text": "印象深刻",
           "weight": "3667"
       }, {
           "text": "文化输出",
           "weight": "3116"
       }, {
           "text": "景甜背景",
           "weight": "1894"
       }, {
           "text": "豆瓣评分很棒",
           "weight": "2484"
       }, {
           "text": "剧情简单",
           "weight": "1147"
       }, {
           "text": "觉得不错",
           "weight": "3361"
       }, {
           "text": "密集恐惧症",
           "weight": "1706"
       }, {
           "text": "场面宏大",
           "weight": "1105"
       }, {
           "text": "像僵尸世界大战",
           "weight": "847"
       }, {
           "text": "无影禁军",
           "weight": "739"
       }, {
           "text": "中国大片",
           "weight": "852"
       }, {
           "text": "怪兽电影",
           "weight": "842"
       }, {
           "text": "有中国特色",
           "weight": "949"
       }, {
           "text": "个人英雄主义",
           "weight": "575"
       }, {
           "text": "小鲜肉",
           "weight": "420"
       }, {
           "text": "人物塑造完美",
           "weight": "603"
       }, {
           "text": "演员演技在线",
           "weight": "755"
       }, {
           "text": "张涵予彭于晏真的不错",
           "weight": "1007"
       }, {
           "text": "主角光环",
           "weight": "998"
       }, {
           "text": "长城饕餮",
           "weight": "779"
       }, {
           "text": "好莱坞制作",
           "weight": "1371"
       }, {
           "text": "非常好看",
           "weight": "805"
       }, {
           "text": "场面震撼",
           "weight": "1484"
       }, {
           "text": "个人觉得效果不错",
           "weight": "892"
       }, {
           "text": "饕餮盛宴",
           "weight": "1232"
       }, {
           "text": "喜欢景甜",
           "weight": "627"
       }, {
           "text": "掏粪男孩",
           "weight": "300"
       }, {
           "text": "好莱坞电影",
           "weight": "1305"
       }, {
           "text": "满城黄金甲",
           "weight": "705"
       }, {
           "text": "剧情紧凑",
           "weight": "785"
       }, {
           "text": "合格商业片",
           "weight": "744"
       }, {
           "text": "战斗场面",
           "weight": "682"
       }, {
           "text": "好莱坞流水线",
           "weight": "996"
       }, {
           "text": "景甜戏份多",
           "weight": "532"
       }, {
           "text": "场面震撼",
           "weight": "900"
       }, {
           "text": "美国大片",
           "weight": "850"
       }, {
           "text": "无力吐槽",
           "weight": "200"
       }, {
           "text": "好看电影",
           "weight": "456"
       }, {
           "text": "中国历史",
           "weight": "768"
       }, ];

       $(function() {
           $("#key_words").jQCloud(keywords);
       });
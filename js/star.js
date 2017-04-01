var ia = [
    [
        ["排行", "明星", "明星标签", "热度指数", "同比上期"],
        [1, "杨幂", "大幂幂，钻石心，努力，刘恺威", 32555, 2],
        [2, "张天爱", "漂亮，帅气，老公", 451944,  2],
        [3, "迪丽热巴", "颜值高，演技好", 902006,  -2],
        [4, "张子萱", "陈赫，蕾拉小姐，怀孕，女儿", 505654, 2],
        [5, "赵丽颖", "实力派，小骨，胭脂", 82891, 2],
        [6, "郑爽",  "放飞，招黑，小号，张翰", 223848,  -2],
        [7, "薛之谦", "薛老师，段子手，歌手，综艺", 991025,  2],
        [8, "鹿晗",  "俊美，娘，足球，手表", 358893,  2],
        [9, "王俊凯","TFBoys，高能少年团", 969103,  2],
        [10, "杨洋", "红楼梦，盗墓笔记，蒲公英", 250417,  -2]
    ],
    [
        ["排行", "明星", "明星标签", "商业价值", "同比上期"],
        [1, "胡歌", "高演技，才华横溢，宗主", 90.00, 0],
        [2, "杨颖", "综艺，整容，黄晓明，零演技", 76.35,  0],
        [3, "邓超", "娘娘，演技，情商", 70.66,  0],
        [4, "范冰冰", "花瓶，大黑牛，范爷", 69.01, 0],
        [5, "刘涛", "贤妻，全能，实力", 68.74, 0],
        [6, "周杰伦",  "小公主，歌手，偶像，实力", 64.85,  0],
        [7, "鹿晗", "俊美，娘，足球，手表", 62.89,  0],
        [8, "赵丽颖",  "实力派，小骨，胭脂", 62.78,  0],
        [9, "孙俪","甄嬛，娘娘，邓超", 62.53,  0],
        [10, "杨洋", "鲜肉，红楼梦，盗墓笔记，蒲公英", 61.39,  0]
    ],
    [
        ["排行", "明星", "明星标签", "媒体关注度","同比上期"],
        [1, "杨幂", "大幂幂，钻石心，努力，刘恺威", 32555, 2],
        [2, "范冰冰", "花瓶，大黑牛，范爷", 451944, 3],
        [3, "郑爽", "放飞，招黑，小号，张翰", 902006,-1],
        [4, "李易峰", "帅，流量，鲜肉，倒模", 505654, -5],
        [5, "鹿晗", "俊美，娘，足球，手表", 82891, 5],
        [6, "王俊凯",  "TFboys，高能少年团", 223848,3],
        [7, "胡歌", "高演技，才华横溢，宗主", 991025, 9],
        [8, "唐嫣",  "美瞳，罗晋，锦绣未央", 358893, -5],
        [9, "杨洋","鲜肉，红楼梦，盗墓笔记，蒲公英", 969103,-1],
        [10, "刘亦菲", "天仙，天仙攻，宋承宪", 250417, 5]
    ],
    [
        ["排行", "明星", "明星标签", "票房号召力", "最新作品"],
        [1, "周星驰", "星爷，无厘头，导演", 32555,"西游伏妖篇"],
        [2, "黄渤", "情商，演技，坏叔叔，搞笑", 451944,"极限挑战"],
        [3, "王宝强", "宝宝，离婚，草根，搞笑", 902006, "大闹天竺"],
        [4, "巩俐", "巩皇，演技，气场", 505654,"三打白骨精"],
        [5, "邓超", "娘娘，演技，情商", 82891, "乘风破浪"],
        [6, "成龙",  "大哥，功夫，搞笑", 223848, "功夫瑜伽"],
        [7, "徐克", "特技，新武侠", 991025,"西游伏妖篇"],
        [8, "徐峥",  "搞笑，囧途", 358893,"港冏"],
        [9, "周迅","精灵，周公子，演技", 969103, "如懿传"],
        [10, "白百何", "小妞，陈羽凡，王珞丹", 250417,"绑架者"]
    ]
]

var title = $('#sec-title');
var chart = $('#chart-data');
// 替换标题和时间
title.html('<span>明星</span>排行榜TOP10').parent().append('<p> 更新时间: 2017/03/15 </p>');
// 替换tab
chart.html('<div class="charts-kinds"><a href="javascript:;"class="j-tab selected">热度变化</a><a href="javascript:;"class="j-tab">商业价值</a><a href="javascript:;"class="j-tab">媒体关注度</a><a href="javascript:;"class="j-tab">票房号召力</a></div>');

Handlebars.registerHelper('selected', function(idx, opt){
    if(idx === 0) return 'selected';
});

Handlebars.registerHelper('rank', function(idx, opt){
    if(idx === '排行') return idx;
    if(idx <= 3) return '<i class="rank-T3">'+idx+'</i>';
    return '<i class="rank-other">'+idx+'</i>';
});

var lastIdx;
Handlebars.registerHelper('index', function(idx, opt){
    if( !parseInt(idx) ) {
        lastIdx = 100000;
        return idx;
    }

    lastIdx = lastIdx - Math.floor( Math.random()*lastIdx/2 ) ;
    return lastIdx;
});

Handlebars.registerHelper('status', function(val, opt){
    if(val === 0) return 0;

    if(!val) return;
    if(!parseInt(val)) return val;

    if(val > 0) return '<span class="up"> + '+ Math.floor(Math.random()*1000) +'</span>';
    return '<span class="down"> - '+  Math.floor(Math.random()*1000)  +'</span>'
});

var olstr ='<style>.t-2{width:80px}.t-3{width:300px}.chart-list:nth-of-type(4).t-5{width:100px}.t-6{width:120px}@media(max-width:767px){.chart-list.t-4{display:inline-block}}</style>{{#each this}}<ol class="chart-list j-for {{#selected @index}}{{/selected}}">{{#with this}}{{#each this}}<li><span class="t-1">{{#rank this.[0]}}{{/rank}}</span><span class="t-2"><a href="search.html?star/{{ this.[1] }}"title="点击查看：{{ this.[1] }}"target="_blank">{{this.[1]}}</a></span><span class="t-3">{{this.[2]}}</span><span class="t-4 text-center">{{#index this.[3]}}{{/index}}</span><span class="t-5 text-center">{{#status this.[4]}}{{/status}}</span></li>{{/each}} {{/with}}</ol>{{/each}}'

var template = Handlebars.compile(olstr);
var allstr = template(ia);
chart.append(allstr);
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

$('.j-tab').hover(function() {
    if ($(this).hasClass('selected')) {
        return false;
    }
    $(this).siblings().removeClass('selected').end().addClass('selected');
    $('.j-for').removeClass('selected').eq($(this).index()).addClass('selected');
});



////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// var str = [
//     '<li><span class="t-6">排行</span><span class="t-13">明星</span><span class="t-5">媒体关注度</span><span class="t-5">商业价值</span><span class="t-10">明星标签</span><span class="t-5">热度变化</span><span class="t-5">票房号召力</span><span class="t-6">走势</span></li>'
// ];
// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// var ian = ia.length;
// var chartdata = $('.chart-data');
// var tabs = ['综合排行榜', '更新时间: 2017/02/23'];

// $('.heading-inner').html('<h2 class="sec-title"> <span>明星</span>排行榜</h2><p>' + tabs.join(' , ') + '</p>');

// chartdata.find('.charts-kinds').find('a').html(tabs[0]);
// for (var i = 1; i < ian; ++i) {
//     chartdata.append('<ol class="chart-list j-for"></ol>').find('.charts-kinds').append('<a href="javascript:;"class="j-tab">' + tabs[i] + '<i class="ic i-selected"></i></a>');
// }

// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// for (var k = 0; k < ia.length; ++k) {
//     var listr = str[k];
//     for (var i = 0; i < ia[k].length; ++i) {
//         var lilen = ia[k][0].length;
//         if (i == 0) {
//             var li0 = $(listr);
//             for (var j = 0; j < lilen; ++j) {
//                 li0.find('span:nth-child(' + (j + 1) + ')').html(ia[k][0][j]);
//             }
//             $($('.chart-list')[k]).html(li0);
//         } else {
//             var li = $(listr);
//             li.find('span:first-child').html('<i class="rank-' + ((ia[k][i][0] > 3) ? 'other' : 'T3') + '">' + ia[k][i][0] + '</i>');
//             li.find('span:nth-child(2)').html('<a href="search.html?star/' + ia[k][i][1] + '" title="点击查看：' + ia[k][i][1] + '" target="_blank">' + ia[k][i][1] + '</a>');

//             for (var j = 2; j < lilen; ++j) {
//                 li.find('span:nth-child(' + (j + 1) + ')').html(ia[k][i][j]);
//             }
//             var last = li.find('span:last-child').text();
//             if (last == '↑' || last == '↓') {
//                 li.find('span:last-child').addClass((last == '↑') ? 'up' : 'down');
//             }
//             $($('.chart-list')[k]).append(li);
//         }
//     }
// }
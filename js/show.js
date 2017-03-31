var ia = [
    [
        ["排行", "片名", "主持人/嘉宾", "类型", "播放量", "同比上期"],
        [1, "向往的生活", "何炅，黄磊，刘宪华等", "真人秀", 1986, -2],
        [2, "吐槽大会", "张绍刚，李湘，宁静， 韩乔生， 陈汉典等", "脱口秀", 1992, -2],
        [3, "歌手", "林忆莲，谭晶， 萧敬腾， 迪玛希， 杜丽莎等", "音乐 真人秀", 1696, -2],
        [4, "朗读者", "董卿，柳传志，濮存昕等", "脱口秀", 2788, -2],
        [5, "快乐大本营", "何炅，谢娜，维嘉，杜海涛，吴昕等", "脱口秀", 1526, 2],
        [6, "王牌对王牌 第二季", "王祖蓝，王源，宋茜，沈涛", "真人秀", 564, -2],
        [7, "天天向上", "汪涵，欧弟，田源等", "脱口秀", 977, -2],
        [8, "火星情报局 第一季", "汪涵，薛之谦，钱枫等", "脱口秀", 3004, -2],
        [9, "极限挑战 第二季", "黄渤，黄磊，孙红雷，罗志祥，张艺兴，王讯", "真人秀", 39, 2],
        [10, "最强大脑 第四季", "蒋昌建， 陶晶莹，刘国梁，章子怡，魏坤琳等", "真人秀", 722, -2]
    ],
    [
        ["排行", "片名", "主持人/嘉宾", "类型", "评论数", "同比上期"],
        [1, "朗读者", "董卿，柳传志，濮存昕等", "脱口秀", 2788, 2],
        [2, "吐槽大会", "张绍刚，李湘，宁静， 韩乔生， 陈汉典等", "脱口秀", 1992, -2],
        [3, "向往的生活", "何炅，黄磊，刘宪华等", "真人秀", 1986, -2],
        [4, "跨界歌王 第一季", "高晓松，宋柯，刘涛，王凯， 秦海璐等", "音乐 真人秀", 741, -2],
        [5, "歌手", "林忆莲，谭晶， 萧敬腾， 迪玛希， 杜丽莎等", "音乐 真人秀", 1696, -2],
        [6, "快乐大本营", "何炅，谢娜，维嘉，杜海涛，吴昕等", "脱口秀", 1526, -2],
        [7, "最强大脑 第四季", "蒋昌建， 陶晶莹，刘国梁，章子怡，魏坤琳等", "真人秀", 722, -2],
        [8, "欢乐喜剧人 第二季", "郭德纲，岳云鹏，罗温·艾金森，艾伦， 张小斐等", "真人秀", 2790, -2],
        [9, "王牌对王牌 第二季", "王祖蓝，王源，宋茜，沈涛等", "真人秀", 610, -2],
        [10, "见字如面 第一季", "翟毓红，许子东，杨雨，林更新，归亚蕾等", "脱口秀", 4127, -2]
    ],
    [
        ["排行", "片名", "主持人/嘉宾", "类型", "评分"],
        [1, "朗读者", "董卿，柳传志，濮存昕等", "脱口秀", 9.9, ],
        [2, "奇葩大会", "马东，高晓松，蔡康永等", "脱口秀", 9.7,],
        [3, "向往的生活", "何炅，黄磊，刘宪华等", "真人秀", 9.7, ],
        [4, "中国诗词大会 第二季", "董卿，康震，王立群，蒙曼，郦波，武亦姝等", "真人秀", 9.6,],
        [5, "奇葩说 第三季", "蔡康永，马东等", "脱口秀", 9.5, ],
        [6, "极限挑战 第二季", "黄渤、孙红雷、黄磊、罗志祥、王迅、张艺兴", "真人秀", 8.9,],
        [7, "晓松奇谈", "高晓松", "脱口秀", 8.8, ],
        [8, "明星大侦探 第一季", "何炅，撒贝宁，乔振宇，王鸥，吴映洁，白敬亭，大张伟等", "犯罪 悬疑 真人秀", 8.8,],
        [9, "中国成语大会 第二季", "张腾岳，蒋方舟，余世存，郦波，蒙曼，张钰桦等", "真人秀", 8.5],
        [10, "见字如面 第一季", "翟毓红，许子东，杨雨，林更新，归亚蕾等", "脱口秀", 8.3]
    ]
]


var title = $('#sec-title');
var chart = $('#chart-data');
// 替换标题和时间
title.html('<span>综艺</span>排行榜TOP10').parent().append('<p> 更新时间: 2017/03/15 </p>');
// 替换tab 
chart.html(`<div class="charts-kinds">
<a href="javascript:;" class="j-tab selected">综艺热播榜</a>
<a href="javascript:;" class="j-tab">综艺热议榜</a>
<a href="javascript:;" class="j-tab">综艺好评榜</a>
</div>`);

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
    if(idx < 10) return idx;
    
    lastIdx = lastIdx - Math.floor( Math.random()*lastIdx/2 ) ;
    return lastIdx;
});

Handlebars.registerHelper('status', function(val, opt){
    if(!val) return;
    if(!parseInt(val)) return val;
    if(val > 0) return '<span class="up"> + '+ Math.floor(Math.random()*1000) +'</span>';
    return '<span class="down"> - '+  Math.floor(Math.random()*1000)  +'</span>'
});

var olstr =
`
<style>
.t-2 {
        width: 140px;
}
.t-3 {
    width: 320px;
}
.t-4 {
        width: 110px;
}
.t-5 {
    text-align: center;
}
.t-6 {
    width: 60px;
}

@media (max-width: 767px) {
    .charts-content .t-4,.charts-content .t-3{
        display: none;
    }
}

</style>

{{#each this}}
<ol class="chart-list j-for {{#selected @index}}{{/selected}}">
    {{#with this}}
        {{#each this}}
        <li>
            <span class="t-1"> {{#rank this.[0]}}{{/rank}} </span>
            <span class="t-2"> <a href="search.html?show/{{ this.[1] }}" title="点击查看：{{ this.[1] }}" target="_blank"> {{ this.[1] }} </a></span>
            <span class="t-3">{{ this.[2] }}</span>
            <span class="t-4">{{ this.[3] }}</span>
            <span class="t-5 text-center">{{#index this.[4]}}{{/index}}</span>
            <span class="t-6 text-center"> {{#status this.[5]}}{{/status}} </span>
        </li>
        {{/each}}
    {{/with}}
</ol>
{{/each}}
`

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


// var str = ['<li><span class="t-1">排行</span><span class="t-5">片名</span><span class="t-7">简介</span><span class="t-4">类型</span><span class="t-4">播放量</span><span class="t-6">走势</span></li>', '<li><span class="t-1">排行</span><span class="t-5">片名</span><span class="t-7">简介</span><span class="t-4">类型</span><span class="t-4">评论数</span><span class="t-6">走势</span></li>', '<li><span class="t-1">排行</span><span class="t-5">片名</span><span class="t-7">简介</span><span class="t-4">类型</span><span class="t-4">好评</span><span class="t-6">走势</span></li>', , ];
// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// var ian = ia.length;
// var chartdata = $('.chart-data');
// var tabs = ['热播榜', '热议榜', '好评榜', '更新时间: 2017/02/23'];

// $('.heading-inner').html('<h2 class="sec-title"> <span>综艺</span>排行榜</h2><p>' + tabs.join(' , ') + '</p>');

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
//             li.find('span:nth-child(2)').html('<a href="search.html?show/' + ia[k][i][1] + '" title="点击查看：' + ia[k][i][1] + '" target="_blank">' + ia[k][i][1] + '</a>');

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
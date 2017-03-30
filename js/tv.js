var ia = [
    [
        ["排行", "片名", "主演", "地区", "类型", "热播指数", "走势"],
        [1, "三生三世十里桃花", "杨幂 赵又廷 张智尧 迪丽热巴 ", "大陆", "爱情", 9461269, 5],
        [2, "大唐荣耀", "景甜 任嘉伦 万茜 舒畅 ", "大陆", "爱情 古装", 2637142, -3],
        [3, "大秦帝国之崛起", "宁静 张博 邢佳栋 杨志刚 ", "大陆", "历史", 6010985, -3],
        [4, "射雕英雄传", "杨旭文 李一桐 陈星旭 孟子义 ", "大陆", "武侠 古装", 5144461, -3],
        [5, "半妖倾城", "张哲瀚 许晓诺 李一桐 米热 ", "大陆", "爱情 奇幻", 1208432, -3],
        [6, "奇星记之鲜衣怒马少年时", "吴磊 陈翔 郑合惠子 郝劭文 ", "大陆", "奇幻 古装", 1235960, 5],
        [7, "择天记", "鹿晗 娜扎 吴倩 曾舜晞 ", "大陆", "奇幻 古装", 7378605, 5],
        [8, "周末父母", "刘恺威 王鸥 张萌 朱泳腾 ", "大陆", "家庭", 3997797, 5],
        [9, "云巅之上", "陈晓 袁姗姗 张哲瀚 米热 ", "大陆", "爱情", 4917966, -3],
        [10, "大明王朝1566", "陈宝国 黄志忠 倪大红 王庆祥 ", "大陆", "历史", 9316006, 5]
    ],
    [
        ["排行", "片名", "主演", "地区", "类型", "热评指数", "走势"],
        [1, "三生三世十里桃花", "杨幂 赵又廷 张智尧 迪丽热巴 ", "大陆", "爱情", 9461269, 5],
        [2, "大唐荣耀", "景甜 任嘉伦 万茜 舒畅 ", "大陆", "爱情 古装", 2637142, -3],
        [3, "大秦帝国之崛起", "宁静 张博 邢佳栋 杨志刚 ", "大陆", "历史", 6010985, -3],
        [4, "射雕英雄传", "杨旭文 李一桐 陈星旭 孟子义 ", "大陆", "武侠 古装", 5144461, -3],
        [5, "半妖倾城", "张哲瀚 许晓诺 李一桐 米热 ", "大陆", "爱情 奇幻", 1208432, -3],
        [6, "奇星记之鲜衣怒马少年时", "吴磊 陈翔 郑合惠子 郝劭文 ", "大陆", "奇幻 古装", 1235960, 5],
        [7, "择天记", "鹿晗 娜扎 吴倩 曾舜晞 ", "大陆", "奇幻 古装", 7378605, 5],
        [8, "周末父母", "刘恺威 王鸥 张萌 朱泳腾 ", "大陆", "家庭", 3997797, 5],
        [9, "云巅之上", "陈晓 袁姗姗 张哲瀚 米热 ", "大陆", "爱情", 4917966, -3],
        [10, "大明王朝1566", "陈宝国 黄志忠 倪大红 王庆祥 ", "大陆", "历史", 9316006, 5]
    ],
    [
        ["排行", "片名", "主演", "地区", "类型", "评分"],
        [1, "大明王朝", "陈宝国 黄志忠 倪大红 王庆祥 ", "大陆", "历史", 9.5],
        [2, "大明王朝1566", "陈宝国 黄志忠 倪大红 王庆祥 ", "大陆", "历史", 9.5],
        [3, "大秦帝国之崛起", "宁静 张博 邢佳栋 杨志刚 ", "大陆", "历史", 8.6],
        [4, "少年锦衣卫", "马正阳 丽阳 范哲琛 宝木中阳 ", "大陆", "动画 武侠", 8.7],
        [5, "鬼吹灯之精绝古城", "靳东 陈乔恩 赵达 岳旸 ", "大陆", "悬疑 惊悚", 8.2],
        [6, "射雕英雄传", "杨旭文 李一桐 陈星旭 孟子义 ", "大陆", "武侠 古装", 8.1],
        [7, "大唐荣耀", "景甜 任嘉伦 万茜 舒畅 ", "大陆", "爱情 古装", 7],
        [8, "三生三世十里桃花", "杨幂 赵又廷 张智尧 迪丽热巴 ", "大陆", "爱情", 6.3],
        [9, "云巅之上", "陈晓 袁姗姗 张哲瀚 米热 ", "大陆", "爱情", 6.3],
        [10, "热血长安", "徐海乔 鞠婧祎 程小蒙 刘冠麟 ", "大陆", "悬疑 古装", 6]
    ]


    // [
    //     ["排行", "片名", "上榜天数", "最高排名", "昨日新增", "走势"],
    //     [1, "三生三世十里桃花", "29天", "Top1", 4425377, 5],
    //     [2, "大唐荣耀", "1天", "Top1", 8360196, -3],
    //     [3, "大秦帝国之崛起", "38天", "Top2", 594601, 5],
    //     [4, "射雕英雄传", "16天", "Top3", 1816507, -3],
    //     [5, "半妖倾城", "29天", "Top2", 2872433, -3],
    //     [6, "奇星记之鲜衣怒马少年时", "76天", "Top3", 8855771, -3],
    //     [7, "奇星记之鲜衣怒马少年时", "10天", "Top5", 8354391, 5],
    //     [8, "择天记", "20天", "Top3", 4831369, 5],
    //     [9, "周末父母", "83天", "Top5", 5122611, 5],
    //     [10, "云巅之上", "29天", "Top2", 7247704, -3]
    // ],
]

var title = $('#sec-title');
var chart = $('#chart-data');

// 替换标题和时间
title.html('<span>电视剧</span>排行榜TOP20').parent().append('<p> 更新时间: 2017/02/23 </p>');
// 替换tab
chart.html(`<div class="charts-kinds">
<a href="javascript:;" class="j-tab selected">电视剧热播榜</a>
<a href="javascript:;" class="j-tab">电视剧热议榜</a>
<a href="javascript:;" class="j-tab">电视剧好评榜</a>
</div>`);

Handlebars.registerHelper('selected', function(idx, opt){
    if(idx === 0) return 'selected';
});

Handlebars.registerHelper('rank', function(idx, opt){
    if(idx <= 3) return 'T3';
    return 'other';
});

Handlebars.registerHelper('status', function(val, opt){
    if(val > 0) return 'up';
    return 'down';
});

var olstr =
`
{{#each this}}
<ol class="chart-list j-for {{#selected @index}}{{/selected}}">
    {{#with this}}
        {{#each this}}
        <li>
            <span class="t-1"> <i class="rank-{{#rank this.[0]}}{{/rank}}"> {{ this.[0] }} </i></span>
            <span class="t-2"> <a href="search.html?tv/{{ this.[1] }}" title="点击查看：{{ this.[1] }}" target="_blank"> {{ this.[1] }} </a></span>
            <span class="t-10">{{ this.[2] }}</span>
            <span class="t-4">{{ this.[3] }}</span>
            <span class="t-4">{{ this.[4] }}</span>
            <span class="t-5">{{ this.[5] }}</span>
            <span class="t-6 {{#status this.[6]}}{{/status}}">{{ this.[6] }}</span>
        </li>
        {{/each}}
    {{/with}}
</ol>
{{/each}}
`

var template = Handlebars.compile(olstr);
var allstr = template(ia);
// console.log(allstr);
chart.append(allstr);
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

$('.j-tab').hover(function() {
    if ($(this).hasClass('selected')) {
        return false;
    }
    $(this).siblings().removeClass('selected').end().addClass('selected');
    $('.j-for').removeClass('selected').eq($(this).index()).addClass('selected');
});

/*
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var str = ['<li><span class="t-1">排行</span><span class="t-2">片名</span><span class="t-10">主演</span><span class="t-4">地区</span><span class="t-4">类型</span><span class="t-5">昨日新增</span><span class="t-6">走势</span></li>', '<li><span class="t-1">排行</span><span class="t-2">片名</span><span class="t-3">上榜天数</span><span class="t-4">最高排名</span> <span class="t-5">昨日新增</span><span class="t-6">走势</span></li>', '<li><span class="t-1">排行</span><span class="t-2">片名</span><span class="t-3">主演</span><span class="t-4">地区</span><span class="t-5">类型</span><span class="t-6">评分</span></li>'];
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var ian = ia.length;
var chartdata = $('.chart-data');
var tabs = ['电视剧热播榜', '电视剧热议榜', '电视剧好评榜', '更新时间: 2017/02/23'];

$('.heading-inner').html('<h2 class="sec-title"> <span>电影</span>排行榜</h2><p>' + tabs.join(' , ') + '</p>');

chartdata.find('.charts-kinds').find('a').html(tabs[0]);
for (var i = 1; i < ian; ++i) {
    chartdata.append('<ol class="chart-list j-for"></ol>').find('.charts-kinds').append('<a href="javascript:;"class="j-tab">' + tabs[i] + '<i class="ic i-selected"></i></a>');
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
for (var k = 0; k < ia.length; ++k) {
    var listr = str[k];
    for (var i = 0; i < ia[k].length; ++i) {
        var lilen = ia[k][0].length;
        if (i == 0) {
            var li0 = $(listr);
            for (var j = 0; j < lilen; ++j) {
                li0.find('span:nth-child(' + (j + 1) + ')').html(ia[k][0][j]);
            }
            $($('.chart-list')[k]).html(li0);
        } else {
            var li = $(listr);
            li.find('span:first-child').html('<i class="rank-' + ((ia[k][i][0] > 3) ? 'other' : 'T3') + '">' + ia[k][i][0] + '</i>');
            li.find('span:nth-child(2)').html('<a href="search.html?tv/' + ia[k][i][1] + '" title="点击查看：' + ia[k][i][1] + '" target="_blank">' + ia[k][i][1] + '</a>');

            for (var j = 2; j < lilen; ++j) {
                li.find('span:nth-child(' + (j + 1) + ')').html(ia[k][i][j]);
            }
            var last = li.find('span:last-child').text();
            if (last == '↑' || last == '↓') {
                li.find('span:last-child').addClass((last == '↑') ? 'up' : 'down');
            }
            $($('.chart-list')[k]).append(li);
        }
    }
}
*/
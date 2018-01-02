var ia = [
    //热播
[['排行', '片名', '主演', '地区', '类型', '热播指数'], [1, '猎场', '胡歌、菅纫姿、陈龙', '大陆', '都市、商战', 3778595592.0], [2, '天泪传奇之凤凰无双', '王丽坤、郑元畅、丁子峻', '大陆', '古代、科幻', 3093895750.0], [3, '致我们单纯的小美好', '胡一天、沈月、王梓薇', '大陆', '青春、校园', 3057301741.0], [4, '将军在上', '马思纯、盛一伦', '大陆', '古装、传奇', 2711713995.0], [5, '九州海上牧云记', '黄轩、窦骁、周一围', '大陆', '古装、魔幻', 2505453487.0], [6, '急诊科医生', '张嘉译、王珞丹、江珊', '大陆', '都市、医疗', 2385613088.0], [7, '独步天下', '林峰、唐艺昕、张睿', '大陆', '古装、爱情', 2362965137.0], [8, '轩辕剑之汉之云', '张云龙、于朦胧、关晓彤', '大陆', '古装、玄幻', 2294310026.0], [9, '我的！体育老师', '张嘉译、王晓晨、王维维', '大陆', '都市、轻喜', 1977340900.0], [10, '维和步兵营', '杜淳、贾青、徐洪浩', '大陆', '战争、军旅', 1905423010.0]],
    
    //热议
    [['排名', '片名', '热议话题', '地区', '类型', '热议指数'], [1, '柒个我', '张一山挑战七重人格', '大陆', '爱情、悬疑', 398579.0], [2, '致我们单纯的小美好', '胡一天青春爱情故事', '大陆', '青春、校园', 390190.0], [3, '虎啸龙吟', '邓艾、钟会同性恋', '大陆', '古装', 242637.0], [4, '九州海上牧云记', '被退片的海上牧云记广受好评', '大陆', '古装、魔幻', 176033.0], [5, '琅琊榜之风起长林', '梅长苏死后，琅琊榜世界里的变与不变', '大陆', '古代、传奇', 171821.0], [6, '猎场', '胡歌演技', '大陆', '都市、商战', 156127.0], [7, '溏心风暴3', '溏心情怀', '大陆', '家庭、伦理', 142382.0], [8, '将军在上', '2017第一魔性神剧', '大陆', '传奇、历史', 128273.0], [9, '红蔷薇', '女性传奇谍战', '大陆', '年代、谍战', 113368.0], [10, '极光之恋', '常人愕然的桥段和台词', '大陆', '都市、校园', 110633.0]],
    
    //好评
    [['排名', '片名', '主演', '地区', '类型', '评分'], [1, '你好，旧时光', '李兰迪、张新成、周澄奥', '大陆', '青春、校园', 8.6], [2, '琅琊榜之风起长林', '黄晓明、刘昊然、佟丽娅', '大陆', '古代、传奇', 8.3], [3, '虎啸龙吟', '吴秀波、刘涛、李晨', '大陆', '古装', 8.2], [4, '风筝', '柳云龙、罗海琼', '大陆', '谍战', 7.7], [5, '致我们单纯的小美好', '胡一天、沈月、王梓薇', '大陆', '青春、校园', 7.4], [6, '红蔷薇', '杨子姗、陈晓、毛林林', '大陆', '年代、谍战', 7.1], [7, '溏心风暴3', '李司棋、夏雨、米雪', '大陆', '家庭、伦理', 6.7], [8, '花儿与远方', '蒋雯丽、王志飞', '大陆', '年代、情感', 6.5], [9, '开封奇谈', '李川、符龙飞、易柏辰', '大陆', '古装、搞笑', 6.4], [10, '生逢灿烂的日子', '张嘉译、果靖霖、刘佩琦', '大陆', '都市、生活', 6.3]]
]

var title = $('#sec-title');
var chart = $('#chart-data');
// 替换标题和时间
title.html('<span>电视剧</span>排行榜TOP10').parent().append('<p> 更新时间: 2018/01/02 </p>');
// 替换tab
chart.html('<div class="charts-kinds"><a href="javascript:;" class="j-tab selected">电视剧热播榜</a><a href="javascript:;" class="j-tab">电视剧热议榜</a><a href="javascript:;" class="j-tab">电视剧好评榜</a></div>');

Handlebars.registerHelper('selected', function(idx, opt) {
    if (idx === 0) return 'selected';
});

Handlebars.registerHelper('rank', function(idx, opt) {
    if (idx === '排行') return idx;
    if (idx <= 3) return '<i class="rank-T3">' + idx + '</i>';
    return '<i class="rank-other">' + idx + '</i>';
});


// var olstr ='{{#each this}}<ol class="chart-list j-for {{#selected @index}}{{/selected}}">{{#with this}}{{#each this}}<li><span class="t-1 text-center">{{#rank this.[0]}}{{/rank}} </span><span class="t-2"><a href="search.html?tv/{{ this.[1] }}"title="点击查看：{{ this.[1] }}"target="_blank">{{this.[1]}}</a></span><span class="t-3" style="width=">{{this.[2]}}</span><span class="t-4 text-center">{{this.[3]}}</span><span class="t-5">{{this.[4]}}</span><span class="t-6 text-center">{{#index this.[5]}}{{/index}}</span><span class="t-7 text-center">{{#status this.[6]}}{{/status}} </span></li>{{/each}}    {{/with}}</ol>{{/each}}'
var style = '<style>.t-6{width:100px}</style>';
var olstr = style + 
'{{#each this}}\
<ol class="chart-list j-for {{#selected @index}}{{/selected}}">\
{{#with this}}{{#each this}}\
<li><span class="t-1">{{#rank this.[0]}}{{/rank}} </span>\
<span class="t-2"><span title="{{ this.[1] }}">{{this.[1]}}</span></span>\
<span class="t-3">{{this.[2]}}</span>\
<span class="t-4">{{this.[3]}}</span>\
<span class="t-5 text-center">{{this.[4]}}</span>\
<span class="t-6 text-center">{{this.[5]}} </span>\
</li>{{/each}}{{/with}}</ol>{{/each}}'

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

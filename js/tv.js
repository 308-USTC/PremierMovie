var ia = [
    //热播
    [
    ['排行', '片名','主演','地区','类型','热播指数','同比上期'],
    [1, '那年花开月正圆', '丁黑、孙俪、陈晓', '大陆', '年代、爱情', 12518325711,0],
    [2, '楚乔传', '赵丽颖、林更新、窦骁、邓伦', '大陆', '剧情、古装', 12418097880,0],
    [3, '三生三世十里桃花', '杨幂、赵又廷、张智尧 、迪丽热巴', '大陆', '玄幻、爱情', 10358534688,0],
    [4, '欢乐颂2', '刘涛、蒋欣、王子文、杨紫', '大陆', '爱情、都市', 9780506377,0],
    [5, '锦绣未央', '唐嫣、罗晋、吴建豪、毛晓彤', '大陆', '剧情、古装', 7502513141,0],
    [6, '择天记', '鹿晗、古力娜扎、吴倩、曾舜晞', '大陆', '玄幻', 6626934078,0],
    [7, '我的前半生', '靳东、马伊琍、袁泉、雷佳音', '大陆', '都市、爱情', 6600592770,0],
    [8, '大唐荣耀', '景甜、任嘉伦、万茜、舒畅', '大陆', '年代', 5986816014,0],
    [9, '鬼吹灯之精绝古城', '靳东、陈乔恩、赵达、岳旸', '大陆', '玄幻、悬疑', 4498828263,0],
    [10, '双世宠妃', '邢昭林、梁洁、孙艺宁、辛瑞琪', '大陆', '古装', 4081505528,0]
    ],
    
    //热议
    [
    ['排行','片名','热议话题','地区','类型','热议指数','同比上期'],
    [1, '因为遇见你', '孙怡、邓伦、吴优、代超', '大陆', '爱情', 153530, 0],
    [2, '轩辕剑之汉之云', '张云龙、于朦胧、关晓彤、张佳宁', '大陆', '玄幻', 52156, 0],
    [3, '反黑', '陈小春、陈国坤、李灿森、王合喜', '大陆', '警匪', 40562, 0],
    [4, '白夜追凶', '潘粤明、王泷正、梁缘、吕晓霖、尹姝贻', '大陆', '悬疑', 35866, 0],
    [5, '那年花开月正圆', '丁黑、孙俪、陈晓', '大陆', '年代、爱情', 34439, 0],
    [6, '国民大生活', '郑恺、袁姗姗', '大陆', '都市', 29674, 0], 
    [7, '通天狄仁杰', '任嘉伦、阚清子、焦俊艳、缪俊杰', '大陆', '剧情、悬疑', 22075, 0],
    [8, '醉玲珑', '刘诗诗、陈伟霆、徐海乔、韩雪', '大陆', '玄幻、古装', 20474, 0], 
    [9, '我们的爱', '靳东、潘虹、童蕾', '大陆', '爱情', 19323, 0], 
    [10, '胭脂', '赵丽颖、陆毅、陶昕然、袁文康', '大陆', '谍战', 14775, 0]
    ],
    
    //好评
    [
    ['排行', '片名', '主演', '地区', '类型', '评分'],
    ['1', '白夜追凶', '潘粤明、王泷正、梁缘、吕晓霖 ', '大陆', '悬疑', '9'],
    ['2', '人民的名义', '陆毅、柯蓝、张丰毅、吴刚', '大陆', '剧情、都市', '8.3'],
    ['3', '河神', '田里、李现、张铭恩、王紫璇', '大陆', '悬疑、玄幻', '8.3'],
    ['4', '无证之罪', '秦昊、邓家佳、姚橹、代旭', '大陆', '悬疑、探案', '8.3'],
    ['5', '杀不死', '李洪绸、邢冬冬、杨羽、邵庄', '大陆', '剧情', '8.2'],
    ['6', '少年有点酷', '孙天宇、周梓琦、梁振锋、斌巴才仁', '大陆', '喜剧、歌舞', '8.1'],
    ['7', '绝密543', '宋海波、王功、王聪、陈维涵', '大陆', '剧情', '7.9'],
    ['8', '颤抖吧，阿部！', '赵小溪、赵小鸥、郑业成、安悦溪', '大陆', '古装、科幻', '7.6'],
    ['9', '外科风云', '勒东、白百合、李佳航', '大陆', '剧情、爱情', '7.5'],
    ['10', '那年花开月正圆', ' 孙俪、陈晓、何润东、任重', '大陆', '年代、爱情', '7.3']
    ]
]

var title = $('#sec-title');
var chart = $('#chart-data');
// 替换标题和时间
title.html('<span>电视剧</span>排行榜TOP10').parent().append('<p> 更新时间: 2017/11/05 </p>');
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

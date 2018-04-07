var ia = 
    [
        //热度变化

    [
        ['排名', '明星', '明星标签', '热度指数', '同比上期'], 
        ['1', '赵丽颖', '《想你》、晨晨', '2195896.0', '—'], 
        ['2', '鹿晗', '鹿晗愿望季、关晓彤', '1430860.0', '—'], 
        ['3', '黄子韬', '《神武3》、帽子', '1224198.0', '—'], 
        ['4', '迪丽热巴', '阿娜尔罕、克拉恋人、漂亮的李慧珍', '1014269.0', '—'], 
        ['5', '张艺兴', '老九门、好先生', '790604.0', '—'], 
        ['6', '薛之谦', '李雨桐、段子手、综艺大咖', '530464.0', '—'], 
        ['7', '吴亦凡', '犹豫、逗比', '491649.0', '—'], 
        ['8', '杨幂', '三生三世十里桃花、小时代', '481169.0', '—'], 
        ['9', '杨洋', '红楼梦、盗墓笔记', '435056.0', '—'], 
        ['10', '关晓彤', '鹿晗、学霸', '343663.0', '—']
    ],

// 媒体关注度
    [
        ['排行', '明星', '明星标签', '热度指数', '同比上期'], 
        ['1', '林俊杰', '伟大的渺小、圣所', '175003.0', '+13721'], 
        ['2', '李易峰', '《角色》、颜值', '141461.0', '+751'], 
        ['3', '韩东君', '演员、赛车手', '93763.0', '+60734'], 
        ['4', '杨洋', '俊美少年，微笑', '38356.0', '+5876'], 
        ['5', '陈伟霆', '正能量实力、亲和', '32130.0', '-58345'], 
        ['6', '迪丽热巴', '21克拉、努力', '25498.0', '-23518'], 
        ['7', '鹿晗', '萌、亲和', '24332.0', '-24612'], 
        ['8', '关晓彤', '鹿晗女友、国民闺女', '18865.0', '-24632'], 
        ['9', '张艺兴', '老九门、EXO', '15358.0', '-34571'], 
        ['10', '林允儿', '甜美，清纯可人', '14746.0', '+12002']
    ]
        
        ]

var title = $('#sec-title');
var chart = $('#chart-data');
// 替换标题和时间
title.html('<span>明星</span>排行榜TOP10').parent().append('<p> 更新时间: 2018/01/02 </p>');
// 替换tab
chart.html('<div class="charts-kinds"><a href="javascript:;"class="j-tab selected">热度变化</a><a href="javascript:;"class="j-tab">媒体关注度</a></div>');

Handlebars.registerHelper('selected', function(idx, opt){
    if(idx === 0) return 'selected';
});

Handlebars.registerHelper('rank', function(idx, opt){
    if(idx === '排行') return idx;
    if(idx <= 3) return '<i class="rank-T3">'+idx+'</i>';
    return '<i class="rank-other">'+idx+'</i>';
});


var style = '<style>.t-2{width:140px}.t-3{width:320px}.t-4{width:110px}.t-5{text-align:center}.t-6{width:75px}@media(max-width:767px){.charts-content.t-4,.charts-content.t-3{display:none}}</style>'
var olstr = style +
'{{#each this}}\
<ol class="chart-list j-for {{#selected @index}}{{/selected}}">\
{{#with this}}{{#each this}}\
<li><span class="t-1">{{#rank this.[0]}}{{/rank}} </span>\
<span class="t-2"><span title="{{ this.[1] }}">{{this.[1]}}</span></span>\
<span class="t-3">{{this.[2]}}</span>\
<span class="t-4">{{this.[3]}}</span>\
<span class="t-5 text-center">{{this.[4]}}</span>\
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

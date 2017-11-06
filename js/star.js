var ia = 
    [
        //热度变化
        [
        ['排行', '明星', '明星标签', '热度指数', '同比增长'],
        [1, '薛之谦', '李雨桐、段子手、综艺大咖', 1008593, 0],
        [2, '吴亦凡', '犹豫、逗比', 913293, 0],
        [3, 'angelababy', '跑男、黄晓明', 746829, 0],
        [4, '赵丽颖', '花小骨、努力', 622708, 0],
        [5, '刘亦菲', '仙子、电影', 321239, 0],
        [6, '关晓彤', '鹿晗、学霸', 235710, 0],
        [7, '陈学冬', '小时代', 233808, 0],
        [8, '胡歌', '仙剑、琅琊榜、热CP体质', 188287, 0],
        [9, '范冰冰', '冷艳、李晨', 161135, 0],
        [10, '张艺兴', '小鲜肉、跑男', 158009, 0]
        ],
        
        //媒体关注度
        [
        ['排行', '明星', '明星标签', '热度指数', '同比上期'],
        ['1', '鹿晗', '关晓彤、俊美、歌手', '57454', '0'],
        ['2', '薛之谦', '李雨桐、段子手、综艺大咖', '57201', '0'],
        ['3', '迪丽热巴', '克拉恋人、漂亮、鹿晗绯闻', '56500', '0'],
        ['4', '范冰冰', '冷艳、李晨', '53892', '0'],
        ['5', '关晓彤', '鹿晗、长腿', '45024', '0'],
        ['6', '赵丽颖', '花小骨、努力', '41456', '0'],
        ['7', '刘涛', '贤妻、实力派、努力', '35136', '0'],
        ['8', '周杰伦', '多歌迷、歌手，偶像，实力', '29935', '0'],
        ['9', '孙俪', '大当家、娘娘、邓超', '28291', '0'],
        ['10', '陈小春', '爸爸去哪儿、古惑仔、警察', '21011', '0']
        ]
        
        ]

var title = $('#sec-title');
var chart = $('#chart-data');
// 替换标题和时间
title.html('<span>明星</span>排行榜TOP10').parent().append('<p> 更新时间: 2017/11/05 </p>');
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
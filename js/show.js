var ia = [

//综艺热播榜：
[
    ['排名', '节目名', '主持人/嘉宾', '本期日期', '播放量', '', '平台'], 
    ['1', '王者出击', 'Angelababy、陈赫、林志玲、贾玲', '20171222.0', '160590971.0', '', 'TencentVideo'], 
    ['2', '吐槽大会 第2季', '张绍刚/郎朗/谭维维', '20171224.0', '95222338.0', '', 'TencentVideo'], 
    ['3', '演员的诞生', '刘烨/章子怡/宋丹丹/', '20171223.0', '56822339.0', '', 'TencentVideo'], 
    ['4', '亲爱的客栈', '刘涛/阚清子/纪凌尘', '20171223.0', '53198868.0', '', 'TencentVideo'], 
    ['5', '三个院子', '林更新/朱桢/陈小春', '20171217.0', '51656942.0', '', 'IQiYi'], 
    ['6', '萌宠小大人', '刘涛/曾舜晞', '20171216.0', '47519674.0', '', 'IQiYi'], 
    ['7', '锋味', '谢霆锋', '20171223.0', '46319795.0', '', 'YouKu'], 
    ['8', '喜剧总动员 第2季', '沈腾/宋小宝/贾玲', '20171223.0', '45086193.0', '', 'TencentVideo'], 
    ['9', '萌宠小大人', '刘涛/曾舜晞', '20171223.0', '42167448.0', '', 'IQiYi'], 
    ['10', '青春旅社', '王源/李小璐/景甜', '20171224.0', '28185827.0', '', 'TencentVideo']
],

// 综艺热议榜
[
    ['排名', '节目名', '支持人/嘉宾', '类型', '热议指数', '同比上期'], 
    ['1', '王者出击', 'Angelababy/陈赫/林志玲/贾玲', '', '976603.0', '—'], 
    ['2', '三个院子', '林更新/朱桢/陈小春', '内地/明星/真人秀', '521297.0', '—'], 
    ['3', '青春旅社', '王源/李小璐/景甜', '真人秀', '322784.0', '—'], 
    ['4', '天籁之战第2季', ' 张杰/华晨宇/费玉清', '内地/音乐/真人秀', '233706.0', '—'], 
    ['5', '漂亮的房子', '吴彦祖/唐艺昕/冯德伦', '内地/明星/真人秀', '231650.0', '—'], 
    ['6', '萌宠小大人', '刘涛/曾舜晞', '真人秀', '217522.0', '—'], 
    ['7', '梦想的声音第2季', '林俊杰/林忆莲/羽泉/张靓颖', '内地/音乐/真人秀', '178044.0', '—'], 
    ['8', '火星研究院第一季', '汪涵/钱枫/杨迪', '真人秀/娱乐', '169849.0', '—'], 
    ['9', '亲爱的客栈', '刘涛/阚清子/纪凌尘', '内地/明星/真人秀', '162454.0', '—'], 
    ['10', '演员的诞生', '刘烨/章子怡/宋丹丹/', '内地/素人/真人秀', '149511.0', '—']
],

// 综艺好评榜
[
    ['排名', '节目名', '主持人/嘉宾', '类型', '评分'], 
    ['1', '非正式会谈 第3.5季', '大左/杨迪/陈铭/贝乐泰', '脱口秀', '9.6'], 
    ['2', '见字如面 第二季', '周迅/姚晨/喻恩泰', '脱口秀', '9.4'], 
    ['3', '国家宝藏', '张国立/李晨/王凯', '历史/真人秀', '9.2'], 
    ['4', '中华好诗词', '杨雨/赵忠祥', '真人秀', '9.0'], 
    ['5', '咱们穿越吧', '张卫健/沈腾/张国立', '真人秀', '8.9'], 
    ['6', '坑王驾到', '郭德纲', '脱口秀', '8.8'], 
    ['7', '晓说2017', '高晓松/马未都/吴宇森', '脱口秀', '8.8'], 
    ['8', '透明人', '姜思达', '短片/脱口秀', '8.6'], 
    ['9', '我是演说家', '陈鲁豫/乐嘉/刘嘉玲', '真人秀', '8.3'], 
    ['10', '你会怎么做', '马志海', '真人秀', '8.1']
]
        ]


var title = $('#sec-title');
var chart = $('#chart-data');
// 替换标题和时间
title.html('<span>综艺</span>排行榜TOP10').parent().append('<p> 更新时间: 2018/01/02 </p>');
// 替换tab 
chart.html('<div class="charts-kinds"><a href="javascript:;" class="j-tab selected">综艺热播榜</a><a href="javascript:;" class="j-tab">综艺热议榜</a><a href="javascript:;" class="j-tab">综艺好评榜</a></div>');

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

var ia = [
        //热门小说排行榜：
    [
        ['排行', '作者', '收藏数'],
        ['1', '唐家三少', 39247199],
        ['2', '辰东', 37164599],
        [3, '我吃西红柿', 35095345],
        [4, '猫腻', 34899019],
        [5, '耳根', 25856600],
        [6, '骷髅精灵', 25673500],
        [7, '忘语', 25483400],
        [8, '血红', 25333065],
        [9, '月关', 20084083],
        [10, '林海听涛', 17456695]
    ],
    //本月点击排行榜：
    [
        ['排行', '小说名', '作者', '收藏数', '评论数', '月票'],
        [1, '修罗武神', '善良的蜜蜂', 2201082, 3988965700, 103494809.0],
        [2, '超级兵王', '步千帆', 363702, 325057345, 27865134.0],
        [3, '九星霸体诀', '平凡魔术师', 134069, 182944982, 21554205.0],
        [4, '武逆', '只是小虾米', 351418, 408241557, 15772552.0],
        [5, '龙符', '梦入神机', 483169, 226300822, 15724002.0],
        [6, '传奇再现', '伪戒', 242734, 424263161, 14707570.0],
        [7, '混沌剑神', '心星逍遥', 448526, 275722940, 13383075.0],
        [8, '大逆之门', '知白', 107925, 146303222, 12030996.0],
        [9, '妙医鸿途', '烟斗老哥', 66102, 164186830, 11759454.0],
        [10, '万域之王', '逆苍天', 220962, 168436532, 11235802.0]
    ],
    //历史点击排行版：
    [
        ['排行', '小说名', '作者', '收藏数', '评论数', '月票'],
        [1, '11处特工皇妃', '潇湘冬儿', 98000, 5500000000, 609476.0],
        [2, '修罗武神', '善良的蜜蜂', 2201082, 3988965700, 103494809.0],
        [3, '万古仙穹', '观棋', 577496, 1132361196, 4437562.0],
        [4, '斩龙', '失落叶', 3628704, 1063149101, 5456037.0],
        [5, '人皇纪', '皇甫奇', 272013, 927599865, 9185087.0],
        [6, '杀手房东俏房客', '老施', 997679, 706544907, 3714911.0],
        [7, '美女请留步', '老施', 2744057, 533009201, 5934897.0],
        [8, '龙血战神', '风青阳', 1031923, 518839023, 10733941.0],
        [9, '网游之天下无双', '失落叶', 3221959, 506158086, 3857583.0],
        [10, '我的美女老师', '黑夜de白羊', 846213, 469590101, 2120628.0]
    ],
//历史收藏排行榜：
    [
        ['排行', '小说名', '作者', '收藏数', '评论数', '月票'],
        [1,'择天记', '猫腻', 21374489, 26118589, 4764.0],
        [2,'圣墟', '辰东', 15228000, 6159299, 125308.0],
        [3,'一念永恒', '耳根', 14303500, 6552100, 84048.0],
        [4,'斗战狂潮', '骷髅精灵', 13828000, 9629300, 94212.0],
        [5,'青帝', '荆柯守', 13807289, 8702303, 2064.0],
        [6,'凡人修仙传', '忘语', 13803100, 101118600, 6596.0],
        [7,'从零开始', '雷云风暴', 13386900, 64911600, 764.0],
        [8,'天影', '萧鼎', 11429300, 10080500, 86288.0],
        [9,'罪恶之城', '烟雨江南', 10836094, 168832302, 2532328.0],
        [10,'我真是大明星', '尝谕', 9915500, 2935500, 34608.0]
    ]

]

var title = $('#sec-title');
var chart = $('#chart-data');
// 替换标题和时间
title.html('<span>IP</span>排行榜TOP10').parent().append('<p> 更新时间: 2017/11/05 </p>');
// 替换tab
var tab = '<div class="charts-kinds">\
            <a href="javascript:;"class="j-tab selected">历史收藏</a>\
            <a href="javascript:;"class="j-tab">本月点击</a>\
            <a href="javascript:;"class="j-tab">历史点击</a>\
            <a href="javascript:;"class="j-tab">热门小说作者</a>\
           </div>'

chart.html(tab);

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

var olstr ='<style>.t-2{width:80px}.t-3{width:300px}.chart-list:nth-of-type(4).t-5{width:100px}.t-6{width:120px}@media(max-width:767px){.chart-list.t-4{display:inline-block}}</style>\
{{#each this}}<ol class="chart-list j-for {{#selected @index}}{{/selected}}">\
    {{#with this}}{{#each this}}<li>\
        <span class="t-1">{{#rank this.[0]}}{{/rank}}</span>\
        <span class="t-3"><a href="search.html?ip/{{ this.[1] }}"title="点击查看：{{ this.[1] }}"target="_blank">{{this.[1]}}</a></span>\
        <span class="t-4">{{this.[2]}}</span>\
        <span class="t-5 text-center">{{this.[3]}}</span>\
        <span class="t-5 text-center">{{this.[4]}}</span>\
        <span class="t-5 text-center">{{this.[5]}}</span>\
    </li>{{/each}}\
{{/with}}</ol>{{/each}}';



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
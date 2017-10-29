var ia =   [
    [
        ["排行", "姓名", "平台", "类型", "粉丝数"],
        [1,"White55开解说","斗鱼","英雄联盟",12737581],
        [2,"太白","虎牙","王者荣耀",10445203],
        [3,"冯提莫","斗鱼","英雄联盟",10298381],
        [4,"芜湖大司马丶","斗鱼","英雄联盟",9103871],
        [5,"陈一发儿","斗鱼","主机游戏",7598198],
        [6,"老实敦厚的笑笑","斗鱼","英雄联盟",5988078],
        [7,"即将拥有人鱼线的PDD","熊猫","英雄联盟",5827775],
        [8,"指法芬芳张大仙","斗鱼","王者荣耀",5493289],
        [9,"Style丶楚河-90327","虎牙","主机游戏",4824323],
        [10,"主播油条","斗鱼","绝地求生",4107368],
        [11,"英雄联盟官方赛事","斗鱼","英雄联盟",4077072],
        [12,"董导丶董小飒","虎牙","绝地求生",4044115],
        [13,"Misaya若风lol","熊猫","英雄联盟",3942960],
        [14,"七哥张琪格","斗鱼","炉石传说",3707663],
        [15,"东北大鹌鹑","斗鱼","英雄联盟",3573229],
        [16,"小战","虎牙","英雄联盟",3542211],
        [17,"韦神","斗鱼","绝地求生",3497763],
        [18,"软妹小九九丶","斗鱼","颜值",3218767],
        [19,"小宇热游直播","虎牙","主机游戏",3120176],
        [20,"洞主丨歌神洞庭湖","斗鱼","英雄联盟",3011365],
    ]
]

var title = $('#sec-title');
var chart = $('#chart-data');
// 替换标题和时间
title.html('<span>主播</span>排行榜TOP10').parent().append('<p> 更新时间: 2017/11/27 </p>');
// 替换tab
var tab = '<div class="charts-kinds">\
            <a href="javascript:;"class="j-tab selected">粉丝数</a>\
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
var ia = [
//综艺热播榜：
[
["排行", "节目名", "主持人/嘉宾", "类型", "播放量", "平台"],
[1, "中国新歌声2之年度总决赛 五强唱将鸟巢争冠", "华少、周杰伦、那英、陈奕迅、刘欢", "选秀", 205506847, "IQiYi"],
[2, "我是演说家 第4季 第1期：王帆再爆金句！女兵讲辽宁舰的故事", "鲁豫、黄子佼", "语言竞技真人秀", 118314782, "TencentVideo"],
[3, "青春旅社 第2期：李小璐谈生甜馨痛到无法呼吸", "王源、景甜、李小璐、何穗等", "真人秀", 104221732, "TencentVideo"],
[4, "2017湖南卫视中秋晚会 李宇春萧敬腾热力开唱", "何炅", "晚会", "95374930", "TencentVideo"],
[5, "亲爱的客栈 第3期：刘涛易烊千玺做烤串", "陈歆宇、刘涛、王珂、阚清子、纪凌尘、陈翔", "大型经营体验类观察真人秀", 91174837, "TencentVideo"],
[6, "天籁之战 第2季 第1期：张杰唱“回娘家” 莫文蔚挑战高难说唱", "张杰、莫文蔚、杨坤、华晨宇、费玉清", "音乐/真人秀", 78381415, "TencentVideo"],
[7, "小手牵小狗 2017 萌娃毕业泪奔不舍小猪 20171017", "罗志祥、阿拉蕾、苏菲、叶梓凌、青克乐、王涵喆", "亲子/宠物", 70919303, "YouKu"],
[8, "中国新歌声2之中秋演唱会 陈颖恩献唱杰伦经典", "华少、周杰伦、陈奕迅、那英、刘欢", "励志专业音乐评论节目", 66471168, "IQiYi"],
[9, "爸爸去哪儿 第五季 Jasper告白春哥哭红眼 20171026", "陈小春、杜江、刘畊宏、吴尊、邓伦及其子女", "亲子/真人秀", 66360244, "YouKu"],
[10, "2017东方卫视中秋晚会 华晨宇费玉清改编经典", "华晨宇/费玉清/李荣浩/沙宝亮/张柏芝", "晚会", 61138385, 'TencentVideo']
],

//综艺热议榜：
[
["序号", "节目名", "日期", "主持人/嘉宾",   "类型", "热议指数"],
[1, "青春旅社", "20171007", "王源、景甜、李小璐、何穗等11人", "真人秀",  5592122],
[2, "青春旅社", 20171014,'王源、景甜、李小璐、何穗等12人',    '真人秀',5592122],
[3, "湖南卫视中秋晚会", "20171004","何炅","晚会",5592122], 
[4, "亲爱的客栈","20171021","陈歆宇、刘涛、王珂、阚清子、纪凌尘、陈翔","大型经营体验类观察真人秀",5592122],
[5, "天籁之战",20171015,"张杰、莫文蔚、杨坤、华晨宇、费玉清",'音乐/真人秀',5592122],
[6  "小手牵小狗",20171017,"罗志祥、阿拉蕾、苏菲、叶梓凌、青克乐、王涵喆","亲子/宠物",5592122],
[7, "爸爸去哪儿",20171026,"陈小春、杜江、刘畊宏、吴尊、邓伦及其子女","亲子/真人秀",5592122],
[8, "穿越吧厨房",20171011,"胡海泉、沙溢、刘宪华、苏醒、沈南、郑合惠子","大型明星美食类脱口秀",5592122],
[9, "我们来了",20171020,"汪涵、袁弘、吴秀波","大型明星女神生活体验秀",5592122],
[10, "青春旅社",20171001,"王源、景甜、李小璐、何穗等11人","真人秀",4235911]
],

//综艺好评榜：
[
['排行','节目名','主持人/嘉宾','类型''评分'],
[1,'梦想改造家 第四季','骆新、施琰','家装改造',8.9],
[2,'我是演说家 第一季','丁一玲、栗坤','语言竞技真人秀',8.3],
[3,'小手牵小狗','罗志祥、阿拉蕾、苏菲、叶梓凌、青克乐、王涵喆','亲子/宠物',8.3],
[4,'爸爸去哪儿 第五季','陈小春、杜江、刘畊宏、吴尊、邓伦及其子女','亲子/真人秀',8],
[5,'天籁之战 第一季','张杰、莫文蔚、杨坤、华晨宇、费玉清','音乐/真人秀',7.4],
[6,'不可思议的妈妈','新欣、王潇' '真人秀',6.4],
[7,'青春旅社','王源、景甜、李小璐、何穗等12人','真人秀',6.1],
[8,'男子甜点俱乐部','蔡康永、王嘉尔、张杰、吴昕等','明星创意类美食真人秀',6.1],
[9,'极速前进 第四季','张艺、吴振天','环球竞速真人秀',6],
[10,'天使之路','奚韩金玲、梦瑶、金大川、秦舒培','大型时尚真人秀',5.9]
]
]

var title = $('#sec-title');
var chart = $('#chart-data');
// 替换标题和时间
title.html('<span>电视剧</span>排行榜TOP10').parent().append('<p> 更新时间: 2017/03/15 </p>');
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

var lastIdx;
Handlebars.registerHelper('index', function(idx, opt) {
    if (!parseInt(idx)) {
        lastIdx = 100000;
        return idx;
    }
    if (idx < 10) return idx; // 针对评分

    lastIdx = lastIdx - Math.floor(Math.random() * lastIdx / 2);
    return lastIdx;
});

Handlebars.registerHelper('status', function(val, opt) {
    if (!val) return;
    if (!parseInt(val)) return val;
    if (val > 0) return '<span class="up"> + ' + Math.floor(Math.random() * 1000) + '</span>';
    return '<span class="down"> - ' + Math.floor(Math.random() * 1000) + '</span>'
});

var olstr ='{{#each this}}<ol class="chart-list j-for {{#selected @index}}{{/selected}}">{{#with this}}{{#each this}}<li><span class="t-1 text-center">{{#rank this.[0]}}{{/rank}} </span><span class="t-2"><a href="search.html?tv/{{ this.[1] }}"title="点击查看：{{ this.[1] }}"target="_blank">{{this.[1]}}</a></span><span class="t-3">{{this.[2]}}</span><span class="t-4 text-center">{{this.[3]}}</span><span class="t-5">{{this.[4]}}</span><span class="t-6 text-center">{{#index this.[5]}}{{/index}}</span><span class="t-7 text-center">{{#status this.[6]}}{{/status}} </span></li>{{/each}}    {{/with}}</ol>{{/each}}'

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

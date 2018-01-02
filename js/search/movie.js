var ia = [
// 电影影响力榜
[
    ['排行', '片名', '主演', '导演', '类型', '影响力指数', '同比上期'], 
    ['1', '寻梦环游记', '安东尼·冈萨雷斯,本杰明·布拉特', '李·昂克里奇', '动画,冒险,家庭', '154225.0', '—'], 
    ['2', '羞羞的铁拳', '艾伦,马丽,沈腾', '宋阳', '喜剧,爱情', '125424.5', '—'], 
    ['3', '银翼杀手2049', '瑞恩·高斯林,哈里森·福特', '丹尼斯·维伦纽瓦', '剧情,科幻,惊悚', '111953.0', '—'], 
    ['4', '芳华', '黄轩,苗苗,钟楚曦', '冯小刚', '剧情,爱情,战争', '100874.5', '—'], 
    ['5', '王牌特工2：黄金圈', '科林·费尔斯,塔伦·埃格顿', '马修·沃恩', '动作,冒险,喜剧', '76909.5', '—'], 
    ['6', '降魔传', '郑恺,张雨绮,谢依霖', '王晶', '喜剧,奇幻', '76102.0', '—'], 
    ['7', '追捕', '张涵予,福山雅治,戚薇', '吴宇森', '动作,犯罪', '63344.0', '—'], 
    ['8', '妖猫传', '黄轩,染谷将太,张雨绮', '陈凯歌', '爱情,奇幻', '61466.5', '—'], 
    ['9', '伊莎贝拉', '杜汶泽,梁洛施,黄秋生', '彭浩翔', '剧情', '59969.0', '—'], 
    ['10', '正义联盟', '本·阿弗莱克,亨利·卡维尔,盖尔·加朵', '扎克·施奈德', '动作,冒险,科幻', '56158.0', '—']
],

// 电影好评榜
[
    ['排名', '片名', '主演', '导演', '类型', '评分'], 
    ['1', '摔跤吧！爸爸', '阿米尔·汗,萨卡诗·泰瓦,法缇玛·萨那·纱卡', '尼特什·提瓦瑞', '喜剧,动作,家庭', 9.8], 
    ['2', '战狼2', '吴京,弗兰克·格里罗,吴刚', '吴京', '动作,战争', 9.7], 
    ['3', '看不见的客人', '马里奥·卡萨斯,Ana Wagener,何塞·卡罗纳多', '奥利奥尔·保罗', '犯罪,悬疑,惊悚', 9.4], 
    ['4', '寻梦环游记', '安东尼·冈萨雷斯,本杰明·布拉特,盖尔·加西亚·贝纳尔', '李·昂克里奇', '动画,冒险,家庭', 9.35], 
    ['5', '速度与激情8', '范·迪塞尔,杰森·斯坦森,道恩·强森', 'F·加里·格雷', '动作,惊悚,犯罪', 9.3], 
    ['6', '小戏骨：红楼梦之刘姥姥进大观园', '释小松,周漾玥,钟熠璠', '潘礼平,刘玉洁,胡昀皓,释金光', '剧情,儿童,古装', 9.2], 
    ['7', '二十二', '毛银梅,何玉珍,韦绍兰', '郭柯', '纪录片', 9.2], 
    ['8', '建军大业', '刘烨,朱亚文,黄志忠', '刘伟强', '剧情,历史', 9.1], 
    ['9', '生门', '夏锦菊,陈小凤,李双双', '陈为军', '纪录片', 9.1], 
    ['10', '银河护卫队2', '克里斯·帕拉特,佐伊·索尔达娜,戴夫·巴蒂斯塔', '詹姆斯·古恩', '动作,冒险,科幻', 9.0]
],

// 电影热议榜
[
    ['排行', '片名', '主演', '导演', '类型', '热议指数', '同比上期'], 
    ['1', '战狼2', '吴京,弗兰克·格里罗,吴刚', '吴京', '动作,战争', '121726.0', '—'], 
    ['2', '寻梦环游记', '安东尼·冈萨雷斯,本杰明·布拉特,盖尔·加西亚·贝纳尔', '李·昂克里奇', '动画,冒险,家庭', '85426.5', '—'], 
    ['3', '二十二', '毛银梅,何玉珍,韦绍兰', '郭柯', '纪录片', '72279.0', '—'], 
    ['4', '羞羞的铁拳', '艾伦,马丽,沈腾', '宋阳', '喜剧,爱情', '66398.0', '—'], 
    ['5', '芳华', '黄轩,苗苗,钟楚曦', '冯小刚', '剧情,爱情,战争', '56003.0', '—'], 
    ['6', '银翼杀手2049', '瑞恩·高斯林,哈里森·福特,安娜·德·阿玛斯', '丹尼斯·维伦纽瓦', '剧情,科幻,惊悚', '53983.0', '—'], 
    ['7', '摔跤吧！爸爸', '阿米尔·汗,萨卡诗·泰瓦,法缇玛·萨那·纱卡', '尼特什·提瓦瑞', '喜剧,动作,家庭', '43163.0', '—'], 
    ['8', '妖猫传', '黄轩,染谷将太,张雨绮', '陈凯歌', '爱情,奇幻', '41043.5', '—'], 
    ['9', '王牌特工2：黄金圈', '科林·费尔斯,塔伦·埃格顿,朱丽安·摩尔', '马修·沃恩', '动作,冒险,喜剧', '35090.0', '—'], 
    ['10', '缝纫机乐队', '大鹏,乔杉,古力娜扎', '大鹏', '剧情,喜剧,音乐', '32938.0', '—']
],

// 本月票房榜
[
    ['排行', '片名', '主演', '导演', '类型', '评分', '票房'],
    ['1', '芳华', '黄轩,苗苗,钟楚曦', '冯小刚', '剧情,爱情,战争', '9.1', '960130000'],
    ['2', '寻梦环游记', '安东尼·冈萨雷斯,本杰明·布拉特,盖尔·加西亚·贝纳尔', '李·昂克里奇', '动画,冒险,家庭', '9.6', '900585000'],
    ['3', '妖猫传', '黄轩,染谷将太,张雨绮', '陈凯歌', '爱情,奇幻', '7.4', '339260000'],
    ['4', '奇门遁甲', '大鹏,倪妮,李治廷', '袁和平', '喜剧,动作,奇幻', '7.6', '297346000'],
    ['5', '机器之血', '成龙,罗志祥,欧阳娜娜', '张立嘉', '动作,喜剧', '8.7', '262750000'],
    ['6', '心理罪之城市之光', '邓超,阮经天,刘诗诗', '徐纪周', '剧情,动作,犯罪', '8.8', '192464000'],
    ['7', '帕丁顿熊2', '本·威士肖,杜江,休·格兰特', '保罗·金', '喜剧,动画,冒险', '9.2', '191508000'],
    ['8', '正义联盟', '本·阿弗莱克,亨利·卡维尔,盖尔·加朵', '扎克·施奈德', '动作,冒险,科幻', '8.6', '91931000'],
    ['9', '烟花', '广濑铃,菅田将晖,松隆子', '新房昭之', '爱情,动画,奇幻', '5.5', '78167000'],
    ['10', '至爱梵高·星空之谜', '道格拉斯·布斯,赵天宇,罗伯特·古拉奇克', '多洛塔·科别拉', '剧情,动画,传记', '9.1', '64301000']
]


        ]
    var title = $('#sec-title');
    var chart = $('#chart-data');
    // 替换标题和时间
    title.html('<span>电影</span>排行榜TOP10').parent().append('<p> 更新时间: 2017/03/15 </p>');
    // 替换tab
    chart.html('<div class="charts-kinds"><a href="javascript:;" class="j-tab selected">电影影响力榜</a><a href="javascript:;" class="j-tab">电影好评榜</a><a href="javascript:;" class="j-tab">电影热议榜</a><a href="javascript:;" class="j-tab">本月票房排行</a></div>');

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

    var isBox = false;
    Handlebars.registerHelper('status', function(val, opt){
        if(!val) return;
        
        if(!parseInt(val)){
            if(val === '票房')  isBox=!isBox; // 针对票房
            return val;
        } 
        // 针对票房
        if(isBox){
            return val+' 亿';
        }


        if(val > 0) return '<span class="up"> + '+ Math.floor(Math.random()*1000) +'</span>';
        return '<span class="down"> - '+  Math.floor(Math.random()*1000)  +'</span>'
    });

    var olstr ='<style>.t-2,.t-5{width:130px}.t-4{width:90px}@media(max-width:767px){.chart-list.t-5{display:none}}</style>{{#each this}}<ol class="chart-list j-for {{#selected @index}}{{/selected}}">{{#with this}}{{#each this}}<li><span class="t-1">{{#rank this.[0]}}{{/rank}} </span><span class="t-2"><a href="search.html?movie/{{ this.[1] }}"title="点击查看：{{ this.[1] }}"target="_blank">{{this.[1]}}</a></span><span class="t-3">{{this.[2]}}</span><span class="t-4">{{this.[3]}}</span><span class="t-5">{{this.[4]}}</span><span class="t-6 text-center">{{#index this.[5]}}{{/index}}</span><span class="t-7 text-center">{{#status this.[6]}}{{/status}} </span></li>{{/each}}{{/with}}</ol>{{/each}}'
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
    
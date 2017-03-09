var infor = { "content": [{ "name": "name", "value": "熊出没之奇幻空间" }, { "name": "导演", "value": "丁亮" }, { "name": "编剧", "value": "丁亮" }, { "name": "主演", "value": "尚雯婕 / 鲍春来 / 孙建弘 / 曾舜晞" }, { "name": "类型", "value": "动画 / 儿童" }, { "name": "上映日期", "value": "丁亮" }, { "name": "summary", "value": "丁亮" }, { "name": "评分", "value": "6.5" }, { "name": "image" }, { "name": "id" }] }

var bar_stack_option = {
    title: {
        x: 'left'
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    legend: {
        data: ['热度变化', '百度指数', '评论数']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: [{
        type: 'category',
        data: ['2017-01-20', '2017-01-21', '2017-01-22', '2017-01-23', '2017-01-24', '2017-01-25', '2017-01-26', '2017-01-27', '2017-01-28', '2017-01-29', '2017-01-30', '2017-01-31', '2017-02-01', '2017-02-02', '2017-02-03', '2017-02-04', '2017-02-05', '2017-02-06', '2017-02-07', '2017-02-08', '2017-02-09', '2017-02-10', '2017-02-11', '2017-02-12', '2017-02-13', '2017-02-14', '2017-02-15', '2017-02-16', '2017-02-17', '2017-02-18', '2017-02-19', '2017-02-20', '2017-02-21', '2017-02-22', '2017-02-23', '2017-02-24', '2017-02-25', '2017-02-26', '2017-02-27', '2017-02-28', '2017-03-01', '2017-03-02', '2017-03-03', '2017-03-04', '2017-03-05']
    }],
    yAxis: [{
        name: '热度',
        type: 'value',
    }, {
        name: '评论数',
        type: 'value',
    }, {
        name: '百度指数',
        type: 'value',
        offset: 65
    }],
    series: [{
        name: '热度变化',
        type: 'line',
        data: []
    }, {
        name: '评论数',
        type: 'line',
        yAxisIndex: 1,
        data: []
    }, {
        name: '百度指数',
        type: 'line',
        yAxisIndex: 2,
        data: [26870, 31147, 29201, 32481, 35806, 37870, 41818, 54593, 122456, 108622, 100945, 98787, 96418, 93959, 91193, 85878, 84425, 79811, 77750, 75723, 70354, 68448, 70750, 60108, 37857, 33686, 31379, 30743, 38353, 57864, 51854, 27855, 374, 28035, 25095, 32888, 54470, 47022, 22223, 19889, 20020, 19028, 26085, 47647, 42218]
    }, ]
};

var word_list = [{ "text": "不错", "weight": 3.248311160676254 }, { "text": "简单", "weight": 0.2232557333111187 }, { "text": "特效", "weight": 0.5008932246617502 }, { "text": "美好", "weight": 0.5820315703550225 }, { "text": "流畅", "weight": 0.42561131352915366 }, { "text": "快乐", "weight": 0.5776832194725429 }, { "text": "幼稚", "weight": 0.5147096862103263 }, { "text": "有趣", "weight": 0.030475555852247656 }, { "text": "遗憾", "weight": 0.3987104173641896 }, { "text": "惊艳", "weight": 0.33451187211896743 }, { "text": "善良", "weight": 0.1703557659197767 }, { "text": "精良", "weight": 0.4193605929167694 }, { "text": "唯美", "weight": 0.2068663714336541 }, { "text": "很棒", "weight": 0.46215149264390326 }, { "text": "乐趣", "weight": 0.25833379333787365 }, { "text": "年轻", "weight": 0.18994518053120443 }, { "text": "惊险", "weight": 0.23340851014453226 }, { "text": "重重", "weight": 0.12022021044557275 }, { "text": "友爱", "weight": 0.2176683279876738 }, { "text": "很美", "weight": 0.11222381050978857 }, { "text": "好好看", "weight": 0.19123718350282834 }, { "text": "出奇", "weight": 0.09763303112432568 }, { "text": "鲜亮", "weight": 0.41416384375697574 }, { "text": "奇丽", "weight": 0.2111998584418793 }, { "text": "意外", "weight": 0.1787380520290269 }, { "text": "精致", "weight": 0.28556658048569344 }, { "text": "尴尬", "weight": 0.4774854639633266 }, { "text": "精美", "weight": 0.2419969633068482 }, { "text": "无聊", "weight": 0.286561020827345 }, { "text": "心疼", "weight": 0.054739781719604245 }, { "text": "真挺", "weight": 0.038184376350390715 }, { "text": "健康", "weight": 0.2190291568749617 }, { "text": "纯熟", "weight": 0.037346650985391916 }, { "text": "挺大", "weight": 0.1917699970256309 }, { "text": "自由", "weight": 0.15456606975374965 }, { "text": "电影", "weight": 0.7124297111975113 }, { "text": "孩子", "weight": 0.8884152967316652 }, { "text": "动画", "weight": 0.026503712334449116 }, { "text": "动画片", "weight": 0.4694603331358436 }, { "text": "画面", "weight": 0.13219015703447476 }, { "text": "剧情", "weight": 0.32321208550110175 }, { "text": "故事", "weight": 0.4216734895512837 }, { "text": "小朋友", "weight": 0.26217649373614 }, { "text": "小孩", "weight": 0.2369006248007481 }, { "text": "小孩子", "weight": 0.1749991018703517 }, { "text": "国产", "weight": 0.3037562741190895 }, { "text": "幽灵公主", "weight": 0.043324920796616546 }, { "text": "电影院", "weight": 0.13807524704930987 }, { "text": "大人", "weight": 0.08673530917100662 }, { "text": "效果", "weight": 0.11438472540106953 }, { "text": "机器人", "weight": 0.21351669719201893 }, { "text": "儿子", "weight": 0.04736165356542999 }, { "text": "情节", "weight": 0.1749606960635489 }, { "text": "瓦力", "weight": 0.15842577573957797 }, { "text": "儿童", "weight": 0.051412266415264925 }, { "text": "人物", "weight": 0.08938066538430536 }, { "text": "影子", "weight": 0.11457815900423453 }, { "text": "奇幻", "weight": 0.040512373389161076 }, { "text": "场景", "weight": 0.0362175496587592 }, { "text": "森林", "weight": 0.1315699908395266 }, { "text": "影院", "weight": 0.02301647971470836 }, { "text": "家长", "weight": 0.06810927267846954 }, { "text": "成人", "weight": 0.1725888014233428 }, { "text": "空间", "weight": 0.0906639113607693 }, { "text": "大熊", "weight": 0.12488345585442369 }, { "text": "光头", "weight": 0.00937379102158288 }, { "text": "世界", "weight": 0.1460166993736481 }, { "text": "动漫", "weight": 0.1017440451129627 }, { "text": "技术", "weight": 0.010749330885849492 }, { "text": "观影", "weight": 0.0926091936001108 }, { "text": "", "weight": null }];


///////////////////////////////////////////////////////////////////////

$('.product-details').html('<h5>简介：</h5><p class="intro"></p>');
for (var i = 0; i < infor.content.length; ++i) {
    if (infor.content[i].name === 'summary') {
        $('.intro').html(infor.content[i].value);
    } else if (infor.content[i].name === 'id') {
        continue;
    } else if (infor.content[i].name === 'image') {
        $('.product-image-large img').attr('src', infor.content[i].value);
    } else if (infor.content[i].name === 'name') {
        $('.section-breadcrumbs h1').html(infor.content[i].value);
        $('title').html('冠影 · PREMIER MOVIE - ' + infor.content[i].value);
    } else {
        if (infor.content[i].value != null)
            $('#tab2 table').append('<tr><td>' + infor.content[i].name + '</td><td>' + infor.content[i].value + '</td></tr>')
    }
}


var tab1 = document.getElementById('tab1');
var bar_dom = document.getElementById('bar_dom');

echarts.init(bar_dom).setOption(bar_stack_option, true);
$('#key_dom').jQCloud(word_list);

function randomData() {
    return Math.round(Math.random() * 1000);
}
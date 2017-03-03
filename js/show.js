var ia = [
    [
        ["排行", "片名", "类型", "播放量", "走势"],
        [1, "Running Man", "喜剧 运动 真人秀", 1618182, "↓"],
        [2, "勇士传奇", "动作 历史 冒险", 7264529, "↓"],
        [3, "王牌对王牌", "动作 犯罪 剧情", 6133040, "↑"],
        [4, "天网", "犯罪 剧情", 5237925, "↓"],
        [5, "恋爱的味道", "喜剧 爱情", 8192268, "↑"],
        [6, "无限挑战", "真人秀", 9153047, "↑"],
        [7, "快乐大本营", "脱口秀", 7560075, "↑"],
        [8, "天天向上", "脱口秀", 4188871, "↑"],
        [9, "爱情保卫战", "真人秀", 1274747, "↑"],
        [10, "金牌调解", "真人秀", 1894296, "↓"]
    ],
    [
        ["排行", "片名", "类型", "收视率", "走势"],
        [1, "百家讲坛", "脱口秀", "0.1449%", "↓"],
        [2, "老梁故事汇", "脱口秀", "0.514%", "↓"],
        [3, "锵锵三人行", "脱口秀", "0.5237%", "↓"],
        [4, "奇葩说 第一季", "脱口秀", "0.3609%", "↑"],
        [5, "等着我", "纪录片 真人秀", "0.3173%", "↑"],
        [6, "奔跑吧！兄弟", "喜剧", "0.6925%", "↑"],
        [7, "军情解码", "战争 真人秀", "0.8074%", "↑"],
        [8, "天下足球", "脱口秀", "0.9232%", "↑"],
        [9, "希特勒回来了", "喜剧", "0.1142%", "↑"],
        [10, "遇见大咖", "纪录片", "0.106%", "↑"]
    ],
    [
        ["排行", "片名", "类型", "播放量", "走势"],
        [1, "明星大侦探 第一季", "犯罪 悬疑 真人秀", 9911571, "↑"],
        [2, "火星情报局 第一季", "脱口秀", 8794350, "↑"],
        [3, "歌手", "音乐 真人秀", 502506, "↑"],
        [4, "崔神驾到", "真人秀", 1084244, "↑"],
        [5, "我们的挑战", "真人秀", 9915351, "↓"],
        [6, "朗读者", "脱口秀", 9951115, "↑"],
        [7, "极限挑战 第三季", "真人秀", 9411889, "↓"],
        [8, "吐槽大会", "脱口秀", 397087, "↑"],
        [9, "欢乐喜剧人", "喜剧", 9604026, "↓"],
        [10, "越野千里", "冒险 真人秀", 2511383, "↓"]
    ]
]

var str = ['<li><span class="t-1">排行</span><span class="t-7">片名</span><span class="t-5">类型</span><span class="t-5">播放量</span><span class="t-6">走势</span></li>', '<li><span class="t-1">排行</span><span class="t-7">片名</span><span class="t-5">类型</span><span class="t-5">收视率</span><span class="t-6">走势</span></li>', '<li><span class="t-1">排行</span><span class="t-7">片名</span><span class="t-5">类型</span><span class="t-5">播放量</span><span class="t-6">走势</span></li>', , ];

for (var k = 0; k < ia.length; ++k) {
    var listr = str[k];
    for (var i = 0; i < ia[k].length; ++i) {
        var lilen = ia[k][0].length;
        if (i == 0) {
            var li0 = $(listr);
            for (var j = 0; j < lilen; ++j) {
                li0.find('span:nth-child(' + (j + 1) + ')').html(ia[k][0][j]);
            }
            $($('.chart-list')[k]).html(li0);
        } else {
            var li = $(listr);
            li.find('span:first-child').html('<i class="rank-' + ((ia[k][i][0] > 3) ? 'other' : 'T3') + '">' + ia[k][i][0] + '</i>');
            li.find('span:nth-child(2)').html('<a href="searchshow.html?' + ia[k][i][1] + '" title="点击查看：' + ia[k][i][1] + '" target="_blank">' + ia[k][i][1] + '</a>');

            for (var j = 2; j < lilen; ++j) {
                li.find('span:nth-child(' + (j + 1) + ')').html(ia[k][i][j]);
            }
            var last = li.find('span:last-child').text();
            if (last == '↑' || last == '↓') {
                li.find('span:last-child').addClass((last == '↑') ? 'up' : 'down');
            }
            $($('.chart-list')[k]).append(li);
            if (k == 2) {
                li.find('span:first-child').html('<i class="rank-T3">' + ((i % 3) != 0 ? (i % 3) : 3) + '</i>');
            }
            if (k == 2 && i > 0 && i % 3 == 0) { //各类型top3的分割
                $($('.chart-list')[k]).append('<li class="chart-cut"><i></i></li>');
            }
        }
    }
}
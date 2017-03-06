
 var ia = [[["排行","片名","主演","导演","类型","指数","走势"],[1,"朗读者",null,"史蒂芬·戴德利","剧情,爱情,",5147,"↓"]],[["排行","片名","主演","导演","类型","评分"],["1","血战钢锯岭"," 迪丽热巴 盛一伦 李溪芮 张彬彬 "," 中国大陆 ","爱情 ","9.9"]],[["排行","片名","主演","导演","类型","评论数","走势"],["1","斗地主"," 钟汉良 Angelababy 甘婷婷 孙艺洲 于波 "," 中国大陆 "," 古装 ","265,503,948","↓"]],[["排行","片名","主演","导演","类型","比率"],["1","情圣"," 迪丽热巴 盛一伦 李溪芮 张彬彬 "," 中国大陆 ","爱情 ","9.9"]]]

    var str = [
        '<li><span class="t-1">排行</span><span class="t-2">片名</span><span class="t-10">主演</span><span class="t-4">导演</span><span class="t-4">类型</span><span class="t-5">昨日新增</span><span class="t-6">走势</span></li>',
        '<li><span class="t-1">排行</span><span class="t-2">片名</span><span class="t-10">主演</span><span class="t-4">导演</span><span class="t-4">类型</span><span class="t-6">评分</span></li>',
        '<li><span class="t-1">排行</span><span class="t-2">片名</span><span class="t-10">主演</span><span class="t-4">导演</span><span class="t-4">类型</span><span class="t-5">昨日新增</span><span class="t-6">走势</span></li>',
        '<li><span class="t-1">排行</span><span class="t-2">片名</span><span class="t-10">主演</span><span class="t-4">导演</span><span class="t-4">类型</span><span class="t-6">评分</span></li>'
    ];

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
                li.find('span:nth-child(2)').html('<a href="searchmovie.html?' + ia[k][i][1] + '" title="点击查看：' + ia[k][i][1] + '" target="_blank">' + ia[k][i][1] + '</a>');

                for (var j = 2; j < lilen; ++j) {
                    li.find('span:nth-child(' + (j + 1) + ')').html(ia[k][i][j]);
                }
                var last = li.find('span:last-child').text();
                if (last == '↑' || last == '↓') {
                    li.find('span:last-child').addClass((last == '↑') ? 'up' : 'down');
                }
                $($('.chart-list')[k]).append(li);
            }
        }
    }
    $('.j-tab').hover(function() {
        if ($(this).hasClass('selected'))
            return false;

        $(this).siblings().removeClass('selected').end().addClass('selected');
        $('.j-for').removeClass('selected').eq($(this).index()).addClass('selected');
    });
    
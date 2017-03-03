
 var ia = [[["排行","明星","媒体关注度","商业价值","明星标签","热度变化","票房号召力","走势"],[1,"林妙可",339168,534727,"美人心计 青春季 曹操 仙女湖 红楼梦 ",32555,128006,"↑"],[2,"高圆圆",82242,470487,"大秦帝国之裂变 地狱之旅：一个电影人的长征 欢乐喜剧人 第二季 实习生的故事 海洋天堂 ",451944,43750,"↑"],[3,"陈乔恩",499199,624510,"极限挑战 第一季 世界那么大 中国那么大 鬼吹灯之精绝古城 我的少女时代 ",902006,458698,"↓"],[4,"堀北真希",521325,910571,"SMAPxSMAP 小梅医生 永远的三丁目的夕阳 笃姬 我家的历史 ",505654,890097,"↑"],[5,"杨颖",641444,762283,"桃姐 寻龙诀 奔跑吧兄弟 第一季 破事儿 美女厨房 第2辑 ",82891,600710,"↑"],[6,"周杰伦",738136,334347,"最强大脑 第二季 十万个冷笑话 第一季 今晚80后脱口秀 Mr.J频道 最强大脑 第一季 ",223848,967097,"↓"],[7,"周星驰",192552,391088,"射雕英雄传 大话西游之大圣娶亲 大话西游之月光宝盒 喜剧之王 青年电影馆 第一季 ",991025,707065,"↑"],[8,"范冰冰",507136,489882,"最强大脑 第二季 还珠格格 X战警：逆转未来 尘埃落定 天一生水 ",358893,557429,"↑"],[9,"杨幂",863460,389745,"猴娃 功夫熊猫3 北京爱情故事 真正男子汉 第二季 美人心计 ",969103,502894,"↑"],[10,"刘恺威",44891,200189,"创世纪1：地产风云 创世纪2：天地有情 皆大欢喜古装版 鉴证实录2 我在1949，等你 ",250417,495896,"↓"]]]

    var str = [
        '<li><span class="t-6">排行</span><span class="t-13">明星</span><span class="t-5">媒体关注度</span><span class="t-5">商业价值</span><span class="t-10">明星标签</span><span class="t-5">热度变化</span><span class="t-5">票房号召力</span><span class="t-6">走势</span></li>'
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
                li.find('span:nth-child(2)').html('<a href="searchstar.html?' + ia[k][i][1] + '" title="点击查看：' + ia[k][i][1] + '" target="_blank">' + ia[k][i][1] + '</a>');

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
    
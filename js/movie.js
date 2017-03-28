var ia = [
    [
        ["排行", "片名", "主演", "导演", "类型", "指数", "走势"],
        [1, "爱乐之城", "瑞恩·高斯林,  &nbsp; 艾玛·斯通,  &nbsp; 约翰·传奇,  &nbsp; 罗丝玛丽·德薇特,  &nbsp; 芬·维特洛克", "达米恩·查泽雷", "剧情,  &nbsp;爱情,  &nbsp;歌舞,  &nbsp;", 8216, 3],
        [2, "月光男孩", "崔凡特·罗兹,  &nbsp;安德烈·霍兰,  &nbsp;马赫沙拉·阿里,  &nbsp;娜奥米·哈里斯,  &nbsp;加奈儿·梦奈,  &nbsp;艾什顿·桑德斯,  &nbsp;贾雷尔·杰罗姆,  &nbsp;艾利克斯·希伯特,  &nbsp;杰登·派纳,  &nbsp;段·桑德森,  &nbsp;艾德森·吉恩,  &nbsp;斯蒂芬·布隆,  &nbsp;", "巴里·詹金斯,  &nbsp;", "剧情,  &nbsp;同性,  &nbsp;", 9816, -5],
        [3, "海边的曼彻斯特", "卡西·阿弗莱克,  &nbsp;卢卡斯·赫奇斯,  &nbsp;米歇尔·威廉姆斯,  &nbsp;C·J·威尔逊,  &nbsp;凯尔·钱德勒,  &nbsp;卡拉·海沃德,  &nbsp;格瑞辰·摩尔,  &nbsp;泰特·多诺万,  &nbsp;埃里卡·麦克德莫特,  &nbsp;希瑟·伯恩斯,  &nbsp;蜜西·雅格,  &nbsp;斯蒂芬·亨德森,  &nbsp;约什·汉密尔顿,  &nbsp;卡洛琳·皮克曼,  &nbsp;肖恩·菲茨吉本,  &nbsp;肯尼思·洛纳根,  &nbsp;利亚姆·麦克尼尔,  &nbsp;马修·布罗德里克,  &nbsp;", "肯尼思·洛纳根,  &nbsp;", "剧情,  &nbsp;家庭,  &nbsp;", 8662, 3],
        [4, "八月", "孔维一,  &nbsp;张晨,  &nbsp;郭燕芸,  &nbsp;", "张大磊,  &nbsp;", "剧情,  &nbsp;", 6039, 3],
        [5, "我不是潘金莲", "范冰冰,  &nbsp;郭涛,  &nbsp;大鹏,  &nbsp;张嘉译,  &nbsp;于和伟,  &nbsp;张译,  &nbsp;李宗翰,  &nbsp;赵立新,  &nbsp;田小洁,  &nbsp;范伟,  &nbsp;高明,  &nbsp;刘桦,  &nbsp;黄建新,  &nbsp;李晨,  &nbsp;", "冯小刚,  &nbsp;", "剧情,  &nbsp;喜剧,  &nbsp;", 4938, 3],
        [6, "七月与安生", "周冬雨,  &nbsp;马思纯,  &nbsp;李程彬,  &nbsp;李萍,  &nbsp;蔡纲,  &nbsp;蒙亭宜,  &nbsp;沙全泽,  &nbsp;姚欣言,  &nbsp;李昊芳,  &nbsp;蒋亭轩,  &nbsp;", "曾国祥,  &nbsp;", "剧情,  &nbsp;爱情,  &nbsp;", 6789, -5],
        [7, "血战钢锯岭", "安德鲁·加菲尔德,  &nbsp;萨姆·沃辛顿,  &nbsp;文斯·沃恩,  &nbsp;雨果·维文,  &nbsp;卢克·布雷西,  &nbsp;泰莉莎·帕尔墨,  &nbsp;瑞切尔·格里菲斯,  &nbsp;纳撒尼尔·布佐尼克,  &nbsp;理查德·劳斯伯格,  &nbsp;马特·纳夫莱,  &nbsp;费拉斯·迪拉尼,  &nbsp;瑞安·柯尔,  &nbsp;卢克·佩格勒,  &nbsp;", "梅尔·吉布森,  &nbsp;", "剧情,  &nbsp;动作,  &nbsp;传记,  &nbsp;历史,  &nbsp;战争,  &nbsp;", 9312, -5],
        [8, "釜山行", " 孔侑,  &nbsp; 郑有美,  &nbsp; 马东锡,  &nbsp; 金秀安,  &nbsp; 金义城,  &nbsp; ", "延尚昊", "动作,  &nbsp; 惊悚,  &nbsp; 灾难", 8319, -5],
        [9, "推销员", "沙哈布·侯赛尼,  &nbsp;塔兰涅·阿里多斯蒂,  &nbsp;巴巴克·卡里米,  &nbsp;法里德·萨贾蒂·侯赛尼,  &nbsp;米娜·沙达蒂,  &nbsp;", "阿斯哈·法哈蒂,  &nbsp;", "剧情,  &nbsp;悬疑,  &nbsp;", 132, -5],
        [10, "疯狂动物城", "金妮弗·古德温,  &nbsp;杰森·贝特曼,  &nbsp;伊德里斯·艾尔巴,  &nbsp;珍妮·斯蕾特,  &nbsp;内特·托伦斯,  &nbsp;邦尼·亨特,  &nbsp;唐·雷克,  &nbsp;汤米·钟,  &nbsp;J·K·西蒙斯,  &nbsp;奥克塔维亚·斯宾瑟,  &nbsp;艾伦·图代克,  &nbsp;夏奇拉,  &nbsp;雷蒙德·S·佩尔西,  &nbsp;德拉·萨巴,  &nbsp;莫里斯·拉马奇,  &nbsp;菲尔·约翰斯顿,  &nbsp;约翰·迪·玛吉欧,  &nbsp;凯蒂·洛斯,  &nbsp;吉塔·雷迪,  &nbsp;杰西·科尔蒂,  &nbsp;汤米·利斯特,  &nbsp;乔希·达拉斯,  &nbsp;瑞奇·摩尔,  &nbsp;凯特·索西,  &nbsp;彼得·曼斯布里奇,  &nbsp;拜伦·霍华德,  &nbsp;杰拉德·布什,  &nbsp;马克·史密斯,  &nbsp;乔西·特立尼达,  &nbsp;约翰·拉维尔,  &nbsp;克里斯汀·贝尔,  &nbsp;吉尔·科德斯,  &nbsp;梅利莎·古德温,  &nbsp;", "拜伦·霍华德,  &nbsp;瑞奇·摩尔,  &nbsp;杰拉德·布什,  &nbsp;", "喜剧,  &nbsp;动作,  &nbsp;动画,  &nbsp;冒险,  &nbsp;", 757, 3]
    ],
    [
        ["排行", "片名", "主演", "导演", "类型", "评分"],
        [1, "疯狂动物城", "金妮弗·古德温,  &nbsp;杰森·贝特曼,  &nbsp;伊德里斯·艾尔巴,  &nbsp;珍妮·斯蕾特,  &nbsp;内特·托伦斯,  &nbsp;邦尼·亨特,  &nbsp;唐·雷克,  &nbsp;汤米·钟,  &nbsp;J·K·西蒙斯,  &nbsp;奥克塔维亚·斯宾瑟,  &nbsp;艾伦·图代克,  &nbsp;夏奇拉,  &nbsp;雷蒙德·S·佩尔西,  &nbsp;德拉·萨巴,  &nbsp;莫里斯·拉马奇,  &nbsp;菲尔·约翰斯顿,  &nbsp;约翰·迪·玛吉欧,  &nbsp;凯蒂·洛斯,  &nbsp;吉塔·雷迪,  &nbsp;杰西·科尔蒂,  &nbsp;汤米·利斯特,  &nbsp;乔希·达拉斯,  &nbsp;瑞奇·摩尔,  &nbsp;凯特·索西,  &nbsp;彼得·曼斯布里奇,  &nbsp;拜伦·霍华德,  &nbsp;杰拉德·布什,  &nbsp;马克·史密斯,  &nbsp;乔西·特立尼达,  &nbsp;约翰·拉维尔,  &nbsp;克里斯汀·贝尔,  &nbsp;吉尔·科德斯,  &nbsp;梅利莎·古德温,  &nbsp;", "拜伦·霍华德,  &nbsp;瑞奇·摩尔,  &nbsp;杰拉德·布什,  &nbsp;", "喜剧,  &nbsp;动作,  &nbsp;动画,  &nbsp;冒险,  &nbsp;", 9.2],
        [2, "血战钢锯岭", "安德鲁·加菲尔德,  &nbsp;萨姆·沃辛顿,  &nbsp;文斯·沃恩,  &nbsp;雨果·维文,  &nbsp;卢克·布雷西,  &nbsp;泰莉莎·帕尔墨,  &nbsp;瑞切尔·格里菲斯,  &nbsp;纳撒尼尔·布佐尼克,  &nbsp;理查德·劳斯伯格,  &nbsp;马特·纳夫莱,  &nbsp;费拉斯·迪拉尼,  &nbsp;瑞安·柯尔,  &nbsp;卢克·佩格勒,  &nbsp;", "梅尔·吉布森,  &nbsp;", "剧情,  &nbsp;动作,  &nbsp;传记,  &nbsp;历史,  &nbsp;战争,  &nbsp;", 8.7],
        [3, "海边的曼彻斯特", "卡西·阿弗莱克,  &nbsp;卢卡斯·赫奇斯,  &nbsp;米歇尔·威廉姆斯,  &nbsp;C·J·威尔逊,  &nbsp;凯尔·钱德勒,  &nbsp;卡拉·海沃德,  &nbsp;格瑞辰·摩尔,  &nbsp;泰特·多诺万,  &nbsp;埃里卡·麦克德莫特,  &nbsp;希瑟·伯恩斯,  &nbsp;蜜西·雅格,  &nbsp;斯蒂芬·亨德森,  &nbsp;约什·汉密尔顿,  &nbsp;卡洛琳·皮克曼,  &nbsp;肖恩·菲茨吉本,  &nbsp;肯尼思·洛纳根,  &nbsp;利亚姆·麦克尼尔,  &nbsp;马修·布罗德里克,  &nbsp;", "肯尼思·洛纳根,  &nbsp;", "剧情,  &nbsp;家庭,  &nbsp;", 8.6],
        [4, "你的名字", " 神木隆之介,  &nbsp; 上白石萌音,  &nbsp; 长泽雅美,  &nbsp; 市原悦子,  &nbsp; 成田凌,  &nbsp;", "新海诚", "剧情,  &nbsp; 爱情,  &nbsp; 动画", 8.5],
        [5, "驴得水", "任素汐,  &nbsp;大力,  &nbsp;刘帅良,  &nbsp;裴魁山,  &nbsp;阿如那,  &nbsp;韩彦博,  &nbsp;卜冠今,  &nbsp;王堃,  &nbsp;高阳,  &nbsp;苏千越,  &nbsp;查尔斯·亚瑟,  &nbsp;王峰,  &nbsp;", "周申,  &nbsp;刘露,  &nbsp;", "剧情,  &nbsp;喜剧,  &nbsp;", 8.3],
        [6, "隐藏人物", "塔拉吉·P·汉森,  &nbsp;奥克塔维亚·斯宾瑟,  &nbsp;加奈儿·梦奈,  &nbsp;凯文·科斯特纳,  &nbsp;克斯汀·邓斯特,  &nbsp;吉姆·帕森斯,  &nbsp;马赫沙拉·阿里,  &nbsp;阿尔迪斯·霍吉,  &nbsp;格伦·鲍威尔,  &nbsp;金贝利·奎恩,  &nbsp;奥莱克·克鲁帕,  &nbsp;", "特奥多尔·梅尔菲,  &nbsp;", "剧情,  &nbsp;传记,  &nbsp;历史,  &nbsp;", 8.6],
        [7, "萨利机长", "汤姆·汉克斯,  &nbsp;艾伦·艾克哈特,  &nbsp;劳拉·琳妮,  &nbsp;杰瑞·费拉拉,  &nbsp;安娜·冈,  &nbsp;奥图姆·瑞瑟,  &nbsp;霍特·麦克卡兰尼,  &nbsp;迈克·奥麦利,  &nbsp;杰米·谢尔丹,  &nbsp;安·库萨克,  &nbsp;莫莉·哈根,  &nbsp;马克斯·阿德勒,  &nbsp;萨姆·亨廷顿,  &nbsp;韦恩·巴斯楚普,  &nbsp;维勒莉·玛哈菲,  &nbsp;", "克林特·伊斯特伍德,  &nbsp;", "剧情,  &nbsp;传记,  &nbsp;灾难,  &nbsp;", 8.3],
        [8, "釜山行", " 孔侑,  &nbsp; 郑有美,  &nbsp; 马东锡,  &nbsp; 金秀安,  &nbsp; 金义城,  &nbsp; ", "延尚昊", "动作,  &nbsp; 惊悚,  &nbsp; 灾难", 8.2],
        [9, "湄公河行动", "张涵予,  &nbsp;彭于晏,  &nbsp;孙淳,  &nbsp;陈宝国,  &nbsp;冯文娟,  &nbsp;刘显达,  &nbsp;赵健,  &nbsp;吴旭东,  &nbsp;吴嘉龙,  &nbsp;卢惠光,  &nbsp;柏华力·莫高彼斯彻,  &nbsp;维他亚·潘斯林加姆,  &nbsp;", "林超贤,  &nbsp;", "动作,  &nbsp;犯罪,  &nbsp;", 8],
        [10, "罗曼蒂克消亡史", " 葛优,  &nbsp; 章子怡,  &nbsp; 浅野忠信,  &nbsp; 杜淳,  &nbsp; 钟欣潼,  &nbsp; ", "程耳", "剧情,  &nbsp;动作,  &nbsp;悬疑,  &nbsp;", 7.7]
    ],
    [
        ["排行", "片名", "主演", "导演", "类型", "评论数", "走势"],
        [1, "爱乐之城", "瑞恩·高斯林,  &nbsp; 艾玛·斯通,  &nbsp; 约翰·传奇,  &nbsp; 罗丝玛丽·德薇特,  &nbsp; 芬·维特洛克", "达米恩·查泽雷", "剧情,  &nbsp;爱情,  &nbsp;歌舞,  &nbsp;", 5532, 3],
        [2, "乐高蝙蝠侠大电影", "威尔·阿奈特,  &nbsp;罗莎里奥·道森,  &nbsp;拉尔夫·费因斯,  &nbsp;迈克尔·塞拉,  &nbsp;扎克·加利凡纳基斯,  &nbsp;珍妮·斯蕾特,  &nbsp;玛丽亚·凯莉,  &nbsp;查宁·塔图姆,  &nbsp;乔纳·希尔,  &nbsp;亚当·德维尼,  &nbsp;柯南·奥布莱恩,  &nbsp;杰森·曼兹沃克斯,  &nbsp;艾迪·伊扎德,  &nbsp;赛斯·格林,  &nbsp;佐伊·克罗维兹,  &nbsp;凯特 米库契,  &nbsp;瑞琪·琳德赫姆,  &nbsp;杰梅奈·克莱门特,  &nbsp;艾丽·坎伯尔,  &nbsp;", "克里斯·麦凯,  &nbsp;", "喜剧,  &nbsp;动作,  &nbsp;动画,  &nbsp;冒险,  &nbsp;", 5546, 3],
        [3, "一条狗的使命", "布丽特·罗伯森,  &nbsp;丹尼斯·奎德,  &nbsp;佩吉·利普顿,  &nbsp;乔什·加德,  &nbsp;K·J·阿帕,  &nbsp;布莱斯·吉扎尔,  &nbsp;朱丽叶·瑞兰斯,  &nbsp;卢克·科比 ,  &nbsp;加布里埃尔·罗斯,  &nbsp;迈克尔·博夫舍维尔,  &nbsp;洛根·米勒,  &nbsp;柯比·豪厄-尔巴普蒂斯特,  &nbsp;普奇·豪尔,  &nbsp;约翰·奥提兹,  &nbsp;妮科尔·勒普拉卡,  &nbsp;彼特·科拉米斯,  &nbsp;卡罗琳·凯芙,  &nbsp;简·迈克格雷格,  &nbsp;科维西·阿梅扬,  &nbsp;卡琳·博姆拜克,  &nbsp;娜奥米·弗伦内特,  &nbsp;", "拉斯·霍尔斯道姆,  &nbsp;", "剧情,  &nbsp;喜剧,  &nbsp;冒险,  &nbsp;", 1732, -5],
        [4, "欢乐好声音", "马修·麦康纳,  &nbsp;瑞茜·威瑟斯彭,  &nbsp;塞思·麦克法兰,  &nbsp;斯嘉丽·约翰逊,  &nbsp;塔伦·埃格顿,  &nbsp;托瑞·凯利,  &nbsp;约翰·C·赖利,  &nbsp;珍妮弗·桑德斯,  &nbsp;詹妮弗·哈德森,  &nbsp;加斯·詹宁斯,  &nbsp;彼得·塞拉菲诺威茨,  &nbsp;尼克·克罗尔,  &nbsp;贝克·班尼特,  &nbsp;杰·费罗尔,  &nbsp;尼克·奥弗曼,  &nbsp;", "加斯·詹宁斯,  &nbsp;克里斯托夫·卢尔德莱,  &nbsp;", "喜剧,  &nbsp;动画,  &nbsp;歌舞,  &nbsp;", 4624, -5],
        [5, "金刚狼3", " 休·杰克曼,  &nbsp; 帕特里克·斯图尔特,  &nbsp; 达芙妮·基恩,  &nbsp; 波伊德·霍布鲁克,  &nbsp; 斯戴芬·莫昌特", "詹姆斯·曼高德", "剧情,  &nbsp; 动作,  &nbsp; 科幻", 4074, -5],
        [6, "生化危机：终章", "米拉·乔沃维奇,  &nbsp;伊恩·格雷,  &nbsp;艾丽·拉特,  &nbsp;鲁比·罗丝,  &nbsp;李准基,  &nbsp;肖恩·罗伯茨,  &nbsp;威廉·莱维,  &nbsp;欧文·马肯,  &nbsp;罗拉,  &nbsp;艾尔·安德森,  &nbsp;密尔顿·施尔,  &nbsp;西沃恩·霍奇森,  &nbsp;凯文·奥托,  &nbsp;保罗·汉普赛尔,  &nbsp;", "保罗·安德森,  &nbsp;", "动作,  &nbsp;科幻,  &nbsp;惊悚,  &nbsp;恐怖,  &nbsp;", 5261, -5],
        [7, "极限特工3", "范·迪塞尔,  &nbsp; 甄子丹,  &nbsp; 迪皮卡·帕度柯妮,  &nbsp; 吴亦凡,  &nbsp; 鲁比·罗丝,  &nbsp;", "D·J·卡卢索", "动作,  &nbsp; 冒险", 5585, -5],
        [8, "乘风破浪", " 邓超,  &nbsp; 彭于晏,  &nbsp; 赵丽颖,  &nbsp; 董子健,  &nbsp; 金士杰,  &nbsp; ", "Philipp Comarella,  &nbsp;Simon Griesser,  &nbsp;", "动画,  &nbsp;短片,  &nbsp;冒险,  &nbsp;运动,  &nbsp;", 8912, -5],
        [9, "功夫瑜伽", "成龙,  &nbsp;李治廷,  &nbsp;张艺兴,  &nbsp;索努·苏德,  &nbsp;母其弥雅,  &nbsp;迪莎·帕塔尼,  &nbsp;艾米拉·达斯特,  &nbsp;尚语贤,  &nbsp;姜雯,  &nbsp;张国立,  &nbsp;伊利亚娜·狄克鲁兹,  &nbsp;", "唐季礼,  &nbsp;", "喜剧,  &nbsp;动作,  &nbsp;冒险,  &nbsp;", 793, 3],
        [10, "西游伏妖篇", "吴亦凡,  &nbsp;林更新,  &nbsp;姚晨,  &nbsp;林允,  &nbsp;包贝尔,  &nbsp;巴特尔,  &nbsp;杨一威,  &nbsp;大鹏,  &nbsp;王丽坤,  &nbsp;汪铎,  &nbsp;张美娥,  &nbsp;", "徐克,  &nbsp;", "喜剧,  &nbsp;动作,  &nbsp;奇幻,  &nbsp;古装,  &nbsp;", 8084, -5]
    ],
    [
        ["排行", "片名", "主演", "导演", "类型", "评分", "票房"],
        [1, "功夫瑜伽", "成龙,  &nbsp;李治廷,  &nbsp;张艺兴,  &nbsp;索努·苏德,  &nbsp;母其弥雅,  &nbsp;迪莎·帕塔尼,  &nbsp;艾米拉·达斯特,  &nbsp;尚语贤,  &nbsp;姜雯,  &nbsp;张国立,  &nbsp;伊利亚娜·狄克鲁兹,  &nbsp;", "唐季礼,  &nbsp;", "喜剧,  &nbsp;动作,  &nbsp;冒险,  &nbsp;", 5.3, 17.5],
        [2, "西游伏妖篇", "吴亦凡,  &nbsp;林更新,  &nbsp;姚晨,  &nbsp;林允,  &nbsp;包贝尔,  &nbsp;巴特尔,  &nbsp;杨一威,  &nbsp;大鹏,  &nbsp;王丽坤,  &nbsp;汪铎,  &nbsp;张美娥,  &nbsp;", "徐克,  &nbsp;", "喜剧,  &nbsp;动作,  &nbsp;奇幻,  &nbsp;古装,  &nbsp;", 5.8, 16.6],
        [3, "极限特工", "范·迪塞尔,  &nbsp;艾莎·阿基多,  &nbsp;马尔顿·索克斯,  &nbsp;塞缪尔·杰克逊,  &nbsp;Michael Roof,  &nbsp;里奇·穆勒,  &nbsp;维尔内尔·达赫,  &nbsp;Petr Jákl,  &nbsp;Jan Pavel Filipensky,  &nbsp;汤姆·埃沃雷特,  &nbsp;丹尼·特雷霍,  &nbsp;托马斯·伊安·格里菲斯,  &nbsp;伊芙,  &nbsp;莱拉·阿尔切里,  &nbsp;威廉·霍普,  &nbsp;", "罗伯·科恩,  &nbsp;", "动作,  &nbsp;犯罪,  &nbsp;冒险,  &nbsp;", 7.3, 11.3],
        [4, "乘风破浪", " 邓超,  &nbsp; 彭于晏,  &nbsp; 赵丽颖,  &nbsp; 董子健,  &nbsp; 金士杰,  &nbsp; ", "Philipp Comarella,  &nbsp;Simon Griesser,  &nbsp;", "动画,  &nbsp;短片,  &nbsp;冒险,  &nbsp;运动,  &nbsp;", 7.8, 10.4],
        [5, "生化危机6", " 米拉·乔沃维奇,  &nbsp; 伊恩·格雷,  &nbsp; 艾丽·拉特,  &nbsp; 鲁比·罗丝,  &nbsp; 李准基,  &nbsp;", "保罗·安德森", "动作,  &nbsp; 科幻,  &nbsp; 惊悚,  &nbsp; 恐怖", 6.8, 10.08],
        [6, "大闹天竺", "王宝强,  &nbsp;白客,  &nbsp;岳云鹏,  &nbsp;柳岩,  &nbsp;黄渤,  &nbsp;林永健,  &nbsp;马浴柯,  &nbsp;陈佩斯,  &nbsp;朱时茂,  &nbsp;王祖蓝,  &nbsp;刘昊然,  &nbsp;", "王宝强,  &nbsp;", "喜剧,  &nbsp;动作,  &nbsp;冒险,  &nbsp;", 3.9, 7.5],
        [7, "熊出没之奇幻空间", "尚雯婕,  &nbsp; 鲍春来,  &nbsp; 孙建弘,  &nbsp; 曾舜晞", "丁亮", "动画,  &nbsp; 儿童", 6.5, 1.11],
        [8, "金刚狼3", " 休·杰克曼,  &nbsp; 帕特里克·斯图尔特,  &nbsp; 达芙妮·基恩,  &nbsp; 波伊德·霍布鲁克,  &nbsp; 斯戴芬·莫昌特", "詹姆斯·曼高德", "剧情,  &nbsp; 动作,  &nbsp; 科幻", 8.4, 4.62],
        [9, "爱乐之城", "瑞恩·高斯林,  &nbsp; 艾玛·斯通,  &nbsp; 约翰·传奇,  &nbsp; 罗丝玛丽·德薇特,  &nbsp; 芬·维特洛克", "达米恩·查泽雷", "剧情,  &nbsp;爱情,  &nbsp;歌舞,  &nbsp;", 8.5, 2.4],
        [10, "欢乐好声音", "马修·麦康纳,  &nbsp;瑞茜·威瑟斯彭,  &nbsp;塞思·麦克法兰,  &nbsp;斯嘉丽·约翰逊,  &nbsp;塔伦·埃格顿,  &nbsp;托瑞·凯利,  &nbsp;约翰·C·赖利,  &nbsp;珍妮弗·桑德斯,  &nbsp;詹妮弗·哈德森,  &nbsp;加斯·詹宁斯,  &nbsp;彼得·塞拉菲诺威茨,  &nbsp;尼克·克罗尔,  &nbsp;贝克·班尼特,  &nbsp;杰·费罗尔,  &nbsp;尼克·奥弗曼,  &nbsp;", "加斯·詹宁斯,  &nbsp;克里斯托夫·卢尔德莱,  &nbsp;", "喜剧,  &nbsp;动画,  &nbsp;歌舞,  &nbsp;", 8.3, 1.9]
    ]
]

var str = [
    '<li><span class="t-1">排行</span><span class="t-2">片名</span><span class="t-10">主演</span><span class="t-4">导演</span><span class="t-4">类型</span><span class="t-5">昨日新增</span><span class="t-6">走势</span></li>',
    '<li><span class="t-1">排行</span><span class="t-2">片名</span><span class="t-10">主演</span><span class="t-4">导演</span><span class="t-4">类型</span><span class="t-6">评分</span></li>',
    '<li><span class="t-1">排行</span><span class="t-2">片名</span><span class="t-10">主演</span><span class="t-4">导演</span><span class="t-4">类型</span><span class="t-5">昨日新增</span><span class="t-6">走势</span></li>',
    '<li><span class="t-1">排行</span><span class="t-2">片名</span><span class="t-10">主演</span><span class="t-4">导演</span><span class="t-4">类型</span><span class="t-4">评分</span><span class="t-4">票房</span></li>'
];

var hbstr = `<li><span class="t-1">排行</span><span class="t-2">片名</span><span class="t-10">主演</span><span class="t-4">导演</span><span class="t-4">类型</span><span class="t-5">昨日新增</span><span class="t-6">走势</span></li>`



////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var ian = ia.length;
var chartdata = $('.chart-data');
var tabs = ['电影影响力榜', '电影热议榜', '电影好评榜', '本月票房排行', '更新时间: 2017/02/23'];

$('.heading-inner').html('<h2 class="sec-title"> <span>电影</span>排行榜</h2><p>' + tabs[tabs.length-1] + '</p>');

chartdata.find('.charts-kinds').find('a').html(tabs[0]);

for (var i = 1; i < ian; ++i) {
    chartdata.append('<ol class="chart-list j-for"></ol>').end().find('.charts-kinds').append('<a href="javascript:;"class="j-tab">' + tabs[i] + '</a>');
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

for (var k = 0; k < ian; ++k) {
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

            if (ia[k][i][1] == '湄公河行动')
                li.find('span:nth-child(2)').html('<a href="mghxd.html?' + ia[k][i][1] + '" title="点击查看：' + ia[k][i][1] + '" target="_blank">' + ia[k][i][1] + '</a>');
            else
                li.find('span:nth-child(2)').html('<a href="search.html?movie/' + ia[k][i][1] + '" title="点击查看：' + ia[k][i][1] + '" target="_blank">' + ia[k][i][1] + '</a>');

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
    if ($(this).hasClass('selected')) {
        return false;
    }
    $(this).siblings().removeClass('selected').end().addClass('selected');
    $('.j-for').removeClass('selected').eq($(this).index()).addClass('selected');
});
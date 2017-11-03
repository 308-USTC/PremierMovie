# PremierMovie


此项目运行流程(nodejs命令行下):

 1. 运行`git clone 本项目https/git地址`命令 将项目下载到本地某个文件夹下
 2. 运行`npm install`命令, 下载所有依赖的nodejs包
 3. 运行`cd others`命令, 到others目录下
 4. 编辑`*.json / *List.txt`中对应的电影/综艺/明星/电视剧/网剧名单以及豆瓣id,格式需要匹配
 5. 运行`node *_js.js`命令, 生成对应的`*.js`文件(用于加载排行榜)和`电影/综艺/明星/电视剧/网剧名.js`(用于具体该名字详细信息)

gulpfile.js中有一些自动化处理函数,需要nodejs运行, 暂时不需要使用

以下*表示movie/show/star/tv/nettv(暂无)中的一个分别对应:电影/综艺/明星/电视剧/网剧

## js/下保存所有的js文件,

js/search/ 中的文件为各个类别中用于对应search*.html?的js文件,其中保存某电影/明星/电视剧/综艺节目的详细信息

js/cityinfo为全国各省市的经纬度以及各区市

js/custom.js为网站首页用到的自定义脚步内容

js/*.js为

js/search/*/log.txt为从豆瓣api抓取数据时保存的原始响应json数据

js/search/*/*Null.txt为我们自己的mysql数据库没有对应数据的名单,需要从豆瓣再次爬取

## others/下为非客户端资源, 

xls-*为excel文件,

*.json为名字和豆瓣id的对应关系.(有误)

*List.txt为文字名单

*_js.js为生成对应页面和对应页面内详细(电影/明星/电视剧/综艺)js的nodejs代码,

其中idvsname.json为电影名和猫眼id对应名单
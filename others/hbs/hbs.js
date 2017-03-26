let hbs = require('handlebars');
let path = require('path');
let fs = require('fs');
let layout = require('./layout.hbs');


function makeHTML() {
    let dateStamp = (new Date()).getUTCMilliseconds();

    ////////////////////////////////////////////////////////////////////////////////////////
    // 生成index.html
    let data = {
        styles: `
    <link rel="stylesheet" href="css/style.css?` + dateStamp + `">
    <link rel="stylesheet" href="css/line-icons.min.css">
    <link rel="stylesheet" href="css/animate.css">
    <link rel="stylesheet" href="css/responsive.css">
    `,
        scripts: `
    <script src="http://cdn.bootcss.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
    <!-- Wow Animation -->
    <script src="js/wow.min.js"></script>
    <!-- Counter -->
    <script src="js/jquery.counterup.min.js"></script>
    <!-- Waypoints -->
    <script src="js/jquery.waypoints.min.js"></script>
    <!-- Custom js -->
    <script src="js/custom.js?` + dateStamp + `"></script>
    `,
        body: require('./index.hbs'),
        isIndex: true
    }

    fs.writeFile(path.join(__dirname, '../../index.html'), layout(data), (err) => {
        if (err) console.log('Err indexHTML: ', err);
        console.log('indexHTML done');
    })


    ////////////////////////////////////////////////////////////////////////////////////////
    // 生成type.html
    data = {
        styles: `
    <link rel="stylesheet" href="css/style.css?` + dateStamp + `">
    <link rel="stylesheet" href="css/top-charts.css?` + dateStamp + `">
    `,
        scripts: `
    <script>
        var hash = window.location.search;
        var oScript = document.createElement('script');
        oScript.src = 'js/' + decodeURI(hash).substr(1) + '.js';
        document.body.appendChild(oScript);
    </script>
    `,
        body: require('./type.hbs'),
        isIndex: false
    }

    fs.writeFile(path.join(__dirname, '../../type.html'), layout(data), (err) => {
        if (err) console.log('Err typeHTML: ', err);
        console.log('typeHTML done');
    })

    ////////////////////////////////////////////////////////////////////////////////////////
    // 生成search.html
    data = {
        styles: `
    <link rel="stylesheet" href="css/style.css?` + dateStamp + `">
    <link rel="stylesheet" href="css/jqcloud.css">
    <script src="js/modernizr-2.6.2-respond-1.1.0.min.js"></script>
    `,
        scripts: `
    <script src="http://cdn.bootcss.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
    <!--<script src="js/cityInfo.js"></script>-->
    <script src="http://cdn.bootcss.com/jqcloud/1.0.4/jqcloud-1.0.4.min.js"></script>
    <script src="http://cdn.bootcss.com/echarts/3.2.3/echarts.min.js"></script>
    <script src="http://echarts.baidu.com/gallery/vendors/echarts/map/js/china.js"></script>
    <script src="js/worldcloud.js"></script>
    <script>
        var hash = window.location.search;
        var oScript = document.createElement('script');
        oScript.src = 'js/search/' + decodeURI(hash).substr(1) + '.js';
        document.body.appendChild(oScript);
    </script>
    `,
        body: require('./search.hbs'),
        isIndex: false
    }

    fs.writeFile(path.join(__dirname, '../../search.html'), layout(data), (err) => {
        if (err) console.log('Err searchHTML: ', err);
        console.log('searchHTML done');
    })

    ////////////////////////////////////////////////////////////////////////////////////////
    // 生成topic.html
    data = {
        styles: `
    <link rel="stylesheet" href="css/style.css?` + dateStamp + `">
    `,
        scripts: ``,
        body: require('./topic.hbs'),
        isIndex: false
    }

    fs.writeFile(path.join(__dirname, '../../topic.html'), layout(data), (err) => {
        if (err) console.log('Err topicHTML: ', err);
        console.log('topicHTML done');
    })
}

module.exports = makeHTML;
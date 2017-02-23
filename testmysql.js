//连接数据库
var mysql = require('mysql');
var connection = mysql.createConnection({
    host: '219.219.220.203',
    user: 'ouyong',
    password: 'hello',
    database: 'douban_person'
});

connection.connect();
//查询
connection.query('select * from person_info', function(err, rows, fields) {
    if (err) throw err;
    console.log('The solution is: ', rows[0]);
    //console.log(rows[0].abstract);

});
//关闭连接
connection.end();
let fs = require('fs');
let mysql = require('mysql');
let path = require('path');

function queryByNameInMySql(name) {
    let connection = mysql.createConnection({
        host: '139.199.189.124',
        user: 'ouyong',
        password: 'hello',
        database: 'douban_movie'
    });
    //连接数据库
    connection.connect((err) => {
        if (err) console.log(err, 'connect :' + name);
    });

    connection.query('SELECT * FROM movie_info WHERE movie_name="' + name + '"', (err, rows, fields) => {
        if (err) {
            console.log(name, err);
        } else {
            let i = rows[0];
            console.log(i);
        }
    });
    connection.end(); //关闭连接
}
queryByNameInMySql("X战警");
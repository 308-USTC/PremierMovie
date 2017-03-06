var fs = require('fs');
var path = require('path');

let value = '见字如面';

let kws = fs.readFileSync(path.join(__dirname, 'keywords-movie/' + value + 'keywords.txt'), 'utf-8');

let list = kws.split('\n');
let a = [];
list.forEach((item, index) => {
    let kw = item.split(',');
    a.push({
        text: kw[0],
        weight: parseFloat(kw[1]) //Math.floor(parseFloat(kw[1]) * 1000 * 1000),
    });
});

console.log(a);
const { writeFile, readFileSync } = require('fs');


module.exports.createTemplate = (datas) => {
    const fileHello = readFileSync('base.txt').toString().split(' ');
    var tag = '';
    fileHello.forEach((tag) => {
        tag.replace('<h1>pasta</h1>', '<h1>HELLOOOO</h1>');
    })
    writeFile('index.html', fileHello, err => {
        if (err) throw err;

        console.log('FOI CRIADO O ARQUIVO: index.html')
    })
}
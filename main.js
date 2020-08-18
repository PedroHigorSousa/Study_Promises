const http = require('http');
const { readFile } = require('fs')
const { researchFile } = require('./research');
const { createTemplate } = require('./createTemplate');

const ip_address = '127.0.0.1';
const port_number = '3000';
const url_standart = `http://${ip_address}:${port_number}`
const pathFolder = process.argv[2]; // Recupera o caminho do diretório

var index = '';

async function main(path) {
    try {
        const result = await researchFile(path);
        index = createTemplate(result);
    } catch (error) {
        if (error) throw error;

        console.log(`ACONTECEU UM ERRO NA CHAMADA DA PROMISE research.js: ${error} `)
    }
}

main(pathFolder);

setTimeout(() => {

    readFile('index.html', (err, data) => {
        if (err) throw err;

        index = data;
    });

    const server = http.createServer((req, res) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        res.end(index);
    });

    server.listen(port_number, ip_address, () => {
        console.log(`Server as running : ${url_standart}`);
    })
}, 3000)


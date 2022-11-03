const http = require('http');
const port = 3000;
const hostname = '127.0.0.1';
const fs = require('fs');

const server = http.createServer((request, response) => {
    if (request.method === 'GET') {
        switch (request.url) {
            case "/": {
                fs.readFile('home.html', (err, data) => {
                    if (err) throw err;
                    const readableData = String(data);
                    response.writeHead(200, { 'Content-Type': 'text/html' });
                    response.write(readableData);
                    response.end();
                })
            }
            case "/home": {
                fs.readFile('home.html', (err, data) => {
                    if (err) throw err;
                    const readableData = String(data);
                    response.writeHead(200, { 'Content-Type': 'text/html' });
                    response.write(readableData);
                    response.end();
                })
            }
            case "/about": {
                fs.readFile('about.html', (err, data) => {
                    if (err) throw err;
                    const readableData = String(data);
                    response.writeHead(200, { 'Content-Type': 'text/html' });
                    response.write(readableData);
                    response.end();
                })
            }
            case "/contact": {
                fs.readFile('contact.html', (err, data) => {
                    if (err) throw err;
                    const readableData = String(data);
                    response.writeHead(200, { 'Content-Type': 'text/html' });
                    response.write(readableData);
                    response.end();
                })
            }
        }
    }
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
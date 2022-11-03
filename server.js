const http = require('http');
const port = 5000;
const hostname = '127.0.0.1';
const fs = require('fs');

const server = http.createServer((req, res) => {
    if (req.method === 'GET') {
        switch (req.url) {
            case "/": {
                fs.readFile('home.html', (err, data) => {
                    if (err) throw err;
                    const readableData = String(data);
                    res.writeHead(200, { 'Content-Type': 'text/html' });
                    res.write(readableData);
                    res.end();
                })
            }
            case "/home": {
                fs.readFile('home.html', (err, data) => {
                    if (err) throw err;
                    const readableData = String(data);
                    res.writeHead(200, { 'Content-Type': 'text/html' });
                    res.write(readableData);
                    res.end();
                })
            }
            case "/about": {
                fs.readFile('about.html', (err, data) => {
                    if (err) throw err;
                    const readableData = String(data);
                    res.writeHead(200, { 'Content-Type': 'text/html' });
                    res.write(readableData);
                    res.end();
                })
            }
            case "/contact": {
                fs.readFile('contact.html', (err, data) => {
                    if (err) throw err;
                    const readableData = String(data);
                    res.writeHead(200, { 'Content-Type': 'text/html' });
                    res.write(readableData);
                    res.end();
                })
            }
        }
    }
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
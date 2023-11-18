const http = require('http');

const server = http.createServer((request, response) => {
    const url = request.url;

    response.setHeader('Content-Type', 'text/html');

    if (url === '/') {
        response.write('<html>');
        response.write('<head><title>Node Js - Basics</title></head>');
        response.write('<body><h1>Seja bem-vindo!</h1></body>');
        response.write('</html>');
        response.end();
    }

    if (url === '/users') {
        response.write('<html>');
        response.write('<head><title>Node Js - Basics</title></head>');
        response.write(`
            <body>
                <h1>Usuarios:</h1>

                <ul>
                    <li>Igor</li>
                    <li>Sofia</li>
                    <li>Leonardo</li>
                    <li>Franciele</li>
                </ul>
            </body>`
        );
        response.write('</html>');
        response.end();
    }
});

server.listen(3000);
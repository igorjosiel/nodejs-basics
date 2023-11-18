const http = require('http');

const server = http.createServer((request, response) => {
    const url = request.url;
    const method = request.method;

    response.setHeader('Content-Type', 'text/html');

    if (url === '/') {
        response.write('<html>');
        response.write('<head><title>Node Js - Basics</title></head>');
        response.write(`
            <body>
                <h1>Seja bem-vindo!</h1>

                <form action="/create-user" method="POST">
                    <input type="text" placeholder="username" name="username">

                    <button type="submit">Criar Usuario</button>
                </form>
            </body>`
        );
        response.write('</html>');

        return response.end();
    }

    if (url === '/create-user' && method === 'POST') {
        const body = [];

        request.on('data', (chunck) => {
            body.push(chunck);
        });

        request.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const user = parsedBody.split('=')[1];

            console.log('User: ', user);
        });

        response.write('<html>');
        response.write('<head><title>Node Js - Basics</title></head>');
        response.write(`
            <body>
                <h1>Usuarios:</h1>
            </body>`
        );
        response.write('</html>');
    }

    if (url === '/users') {
        response.write('<html>');
        response.write('<head><title>Node Js - Basics</title></head>');
        response.write(`
            <body>
                <h1>Usuarios:</h1>

                <ul>
                    <li>Rick</li>
                    <li>Maggie</li>
                    <li>Daryl</li>
                    <li>Rosita</li>
                    <li>Carl</li>
                </ul>
            </body>`
        );
        response.write('</html>');

        return response.end();
    }
});

server.listen(3000);
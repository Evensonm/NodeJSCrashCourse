import http from 'http';
const PORT = process.env.PORT;

const server = http.createServer((req, res) => {
    // res.write('Hello World');
    // res.setHeader('Content-Type', 'text/html');
    // res.statusCode = 404;

    res.writeHead(200, { 'Content-Type': 'text/html'})

    res.end('<h1> Hello World</h1>');

    // res.end(JSON.stringify({message: 'Server Error'}));
});

server.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`)
});

// new line commented



// run "node server" to start server
// server viewable on browser at localhost:PORT

// "start": "node server"
// "dev": "node server.js"

// - D on npn install to make a DEV dependency and not for production

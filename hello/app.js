const http = require('http');
const fs = require('fs')
// fs is the file system and fs module is responsible for all the asynchronous or synchronous file I/O operations.
const PORT = 3000;


// localhost:3000/ -> index.html
// localhost:3000/ -> hello.html
// localhost:3000/* -> File not found

const server = http.createServer((req, res) => {
    
    switch(req.url){

        case '/':
            fs.readFile('./index.html', (error, data) => {
                res.statusCode = 200
                res.setHeader('Content-Type', 'text/html')
                res.end(data)
            })
            break

        case '/hello':
            fs.readFile('./hello.html', (error, data) => {
                res.statusCode = 200
                res.setHeader('Content-Type', 'text/html')
                res.end(data)
            })
            break
        
            default:
                res.statusCode = 400
                res.setHeader('Content-Type', 'text/html')
                res.end('404 Error: Page Not Found.')

    }
})

// changed lines below to the switch statement above
// const server = http.createServer((req, res) => {
//     res.statusCode = 200
//     res.setHeader('Content-type', 'text/plain')
//     res.end('Hello World!')
// })

server.listen(PORT, () => {
    console.log("PORT 3000: Server is running...")
})
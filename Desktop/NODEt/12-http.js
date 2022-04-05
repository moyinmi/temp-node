const http = require('http')

const server = http.createServer((req,res)=>{ // req represents incoming requests res is what is being sent back to the client
    if(req.url ==='/'){
        res.end('Welcome to our home page')
    }
    if (req.url === '/about'){
        res.end('Here is our short history')
    }
    res.end(`
    <h1>00ps!</h1>
 <p> We cant seem to find the page you are lookiing for </p>
<a href ="/"> back home</a>
 `)
})

server.listen(5000)
const http = require("http");
const fs = require("fs")
const url = require("url")
 
const myServer = http.createServer((req,res) => {
    const log = `${Date.now()} : ${req.method} ${req.url} New Req Received\n`;
    const myUrl = url.parse(req.url, true);
    console.log(myUrl);
 
    fs.appendFile('log.txt', log,  (err,data) => {
        switch(myUrl.pathname){
            case '/':  //homepage
                if(req.method === 'GET')
                    res.end("Home Page")
                break;
            case '/about':
                const username = myUrl.query.myname;
                console.log("Bye" + username);
                res.end(`hi, ${username}`)
                break;
 
            case '/search':
                const id = myUrl.query.id;
                console.log("Here your id is:" + id);
                res.end(`your id is , ${id}`)
                break;
            default:
                res.end("404 not found")
 
        }
    })
})
myServer.listen(8082,() => console.log('Server started '));

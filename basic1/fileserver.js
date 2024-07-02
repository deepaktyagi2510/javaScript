var http = require("http");
var fs = require("fs");
var url = require("url"); //parsing the url
 
http.createServer(function(req,res){
    var q = url.parse(req.url) //user req to the server
    console.log("Full path is: ",q)
 
    var filename = q.pathname.substring(1) //index.html
    console.log(filename); //index.html
 
     fs.readFile(filename, function(err,data){
        if(err){
            res.writeHead(200,{'Content-Type':'text/plain'});
            return res.end("404 not found");
        }
            res.writeHead(200,{'Content-Type':'text/html'});
            return res.end("Yes i got the file");
     })
 
}).listen(8087,function(){
    console.log('server started at http://localhost:8087');
})
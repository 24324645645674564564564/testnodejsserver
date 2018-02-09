var http =require('http');
var fs =require('fs');
var server = http.createServer(function (req,res) {
res.writeHead(200,{'Content-Type':"text/html,text/php,text/plain"});
console.log("URL is:"+req.url);
if (req.url ==='/index'||req.url ==='/'){

res.writeHead(200,{'Content-Type':'text/html'});
fs.createReadStream(__dirname +'/index.html' ).pipe(res);
}
if(req.url ==='/js'||req.url ==='/'){

res.writeHead(200,{'Content-Type':'text/html'});
fs.createReadStream(__dirname +'/js.html').pipe(res);


}
});
server.listen(3000,'192.168.0.106');
console.log("Listening on 192.168.0.106 port 3000")

var http= require('http');
var url= require('url');
http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type': 'text/plain'});
    var parse =url.parse(req.url).pathname;
    if(parse=="/")
    res.write('Welcome to VVDN');
    else if(parse=="/1")
    res.write('Welcome to B22 First floor');
    else if(parse=="/basement")
    res.write('Welcome to VVDN Corporate');
    else
    res.write('Reception');
    res.end();
}).listen(3008);
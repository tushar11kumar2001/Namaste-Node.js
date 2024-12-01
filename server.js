const http = require("node:http");

const server = http.createServer(function(req, res){
    console.log(req.url);
    
    if(req.url === "/getsecretdata") res.end("chla ja bhosdike aya bada secrete data..")
    res.end("Hello world") //(res.end() : means end of the response or close the connection)

}) //server created (it have function which handles all request and response from users)

server.listen(7777);
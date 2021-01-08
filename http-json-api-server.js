const http = require('http');
const url = require('url')
const portNum = Number(process.argv[2]);

function parsetime (time) {
    var timeObj = { 
        hour: time.getHours(),
        minute: time.getMinutes(),
        second: time.getSeconds()
    }
    return timeObj;
}

function unixtime (time) {
    var timeObj = { unixtime : time.getTime() };
    return timeObj;
}


server = http.createServer((req,res) => {
    if(req.method == "GET" && req.url.includes("/api/parsetime")){
        var parsedUrl = url.parse(req.url, true);
        var time = new Date(parsedUrl.query.iso);
        res.writeHead(200, { 'Content-Type': 'application/json' })
        res.end(JSON.stringify(parsetime(time)))
    }
    if(req.method == "GET" && req.url.includes("/api/unixtime")){
        var parsedUrl = url.parse(req.url, true);
        var time = new Date(parsedUrl.query.iso);
        res.writeHead(200, { 'Content-Type': 'application/json' })  
        res.end(JSON.stringify(unixtime(time)));
    }
})

server.listen(portNum);
const http = require('http');
const fs = require('fs');

const portNum = process.argv[2];
const filePath = process.argv[3];

server = http.createServer((req,res) => {
    if(req.method == "POST"){
        req.on("data", data => {
            var data_str = data.toString().toUpperCase();
            res.write(data_str)
        })
    }
})

server.listen(portNum);
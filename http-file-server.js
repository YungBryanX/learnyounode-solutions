const http = require('http');
const fs = require('fs');

portNum = process.argv[2]
filePath = process.argv[3]

const server = http.createServer((req,res) => {
    fs.readFile(filePath, (err,data) =>{
        if(err){
            console.error(err)
        }
        else{
            res.write(data)
        }
    })
})

// or like this
// const server = http.createServer((req,res) => {
//    fs.createReadStream(filePath).pipe(res);
// })


server.listen(portNum);
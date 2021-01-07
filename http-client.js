const http = require('http');

url = process.argv[2];
http.get(url,(res) => {
    res.on('error',(error) =>{
        console.error(error);
    })
    res.on('data',(data) => {
        console.log(data.toString())
    })
    res.on('end', () => console.log(""))
}).on('error', console.error);
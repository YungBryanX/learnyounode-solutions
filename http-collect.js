const http = require('http');
num_data_chars = 0;
data_string = "";

url = process.argv[2];
http.get(url,(res) => {
    res.on('error',(error) =>{
        console.error(error);
    })
    res.on('data',(data) => {
        num_data_chars += data.toString().length;
        data_string += data.toString();
    })
    res.on('end', () => {
        console.log(num_data_chars);
        console.log(data_string);
    })
}).on('error', console.error);
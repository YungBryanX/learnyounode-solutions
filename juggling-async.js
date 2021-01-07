const { SSL_OP_SSLEAY_080_CLIENT_DH_BUG } = require('constants');
const http = require('http');

data_string = "";

url1 = process.argv[2];
url2 = process.argv[3];
url3 = process.argv[4];

function my_get(url,url2){
    data_string = "";
    http.get(url,(res) => {
        res.on('error',(error) =>{
            console.error(error);
        })
        res.on('data',(data) => {
            data_string += data.toString();
        })
        res.on('end', () => {
            console.log(data_string);
            if(url == url3){
                //do nothing
            }
            else{
                my_get(url2,url3)
            }
        })
    }).on('error', console.error);
}

my_get(url1,url2)
const fs = require('fs');

module.exports = function (dirPath, fileExt, callback){
    fs.readdir(dirPath,(err,list) => {
        if(err){
            callback(err,null);
        }
        else{
            files = []
            for(const file of list){
                if(file.indexOf(`.${fileExt}`) > -1){
                    files.push(file)
                }
            }
            callback(null,files);
        }
    })
}


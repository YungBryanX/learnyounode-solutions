const fs = require('fs');

dirPath = process.argv[2];
fileExt = "." + process.argv[3];

fs.readdir(dirPath,(err,list) => {
    if(err){
        console.error(err);
    }
    else{
        for(const file of list){
            if(file.indexOf(fileExt) > -1){
                console.log(file);
            }
        }
    }
})
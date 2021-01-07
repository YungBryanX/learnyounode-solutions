const mymodule = require('./mymodule');

function printFiltered(err, filesArray){
    if(err){
        console.error(err);
    }
    else{
        for (const file of filesArray){
            console.log(file);
        }
    }
}

var dirPath = process.argv[2];
var fileExt = process.argv[3]

mymodule(dirPath,fileExt,printFiltered);
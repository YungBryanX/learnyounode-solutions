const fs = require('fs');

filePath = process.argv[2];
fs.readFile(filePath, (err, fileBuffer) => {
    fileContents = fileBuffer.toString();
    fileLinesArray = fileContents.split('\n');
    numNewLines = fileLinesArray.length - 1;
    console.log(numNewLines);
})
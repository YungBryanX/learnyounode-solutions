const net = require('net');  

function createDateString(){
    const date = new Date()
    var year = date.getFullYear();
    var monthNum = 1 + Number(date.getMonth());
    var month = monthNum < 10 ? '0' + String(monthNum) : String(monthNum);
    var dayNum = Number(date.getDate());
    var day = dayNum < 10 ? '0' + String(dayNum) : String(dayNum);
    var currentTime = `${date.getHours()}:${date.getMinutes()}`;
    var timeString = `${year}-${month}-${day} ${currentTime}`;
    return(timeString);
}

const server = net.createServer(function (socket) {  
    socket.write(createDateString());
    socket.write("\n");
    socket.end(); 
})  

const portNum = process.argv[2];

server.listen(portNum);  
   

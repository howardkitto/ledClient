var SerialPort = require("serialport").SerialPort
var serialPort = new SerialPort("/dev/tty.usbmodem1411", { baudrate: 115200 });

var socket = require('socket.io-client')('http://ledserver-dev.eu-west-1.elasticbeanstalk.com');
  socket.on('connect', function(){
    console.log('connected to server captain');

});

var turnedOn;

socket.on('message', function(msg){
      console.log(msg);
});

serialPort.on("open", function(){
              console.log('serial port');
            turnedOn = setInterval(transmitter, 100);
//            transmitter();
              });

var transmitter = function(){
    var buf = new Buffer(1);
    buf.writeUInt8(255, 0);
    serialPort.write(buf);
}



//console.log("here I am running")

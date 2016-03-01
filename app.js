var SerialPort = require("serialport").SerialPort
var sp = new SerialPort("/dev/tty.usbmodem1411", { baudrate: 9600 });


var socket = require('socket.io-client')('http://ledserver-dev.eu-west-1.elasticbeanstalk.com');
  socket.on('connect', function(){
    console.log('connected to server captain');

});


console.log("Starting up serial host...");

var message = "LED On";

function write() {
    sp.open(function(err) {
        console.log("Writing serial data: " + message);
        sp.write(message, function(err, res) {
                if (err) { console.log(err); }
                sp.close();
        });
    });
}

setTimeout(write, 1000); //wait 1s for everything to initialize correctly
setInterval(write, 5000); //write data every 5s

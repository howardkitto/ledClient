var SerialPort = require("serialport").SerialPort
var sp = new SerialPort("/dev/tty.usbmodem1411", { baudrate: 9600 });


var socket = require('socket.io-client')('http://ledserver-dev.eu-west-1.elasticbeanstalk.com');
  socket.on('connect', function(err){
      if (err) { console.log(err);}
    console.log('Socket Connected Captain!');

});

socket.on('message', function(msg){

        sp.open(function(err) {
        if (err) { console.log(err);}
        console.log("Writing serial data: " + msg);
        sp.write(msg, function(err, res) {
                if (err) { console.log(err); }
                sp.close();
        });
    });

});

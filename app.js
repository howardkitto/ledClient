var localConfig = require('./config/config.js');
var SerialPort = require("serialport").SerialPort
var sp = new SerialPort(localConfig.serialPort, { baudrate: 9600 });

//var socket = require('socket.io-client')('http://ledserver-dev.eu-west-1.elasticbeanstalk.com');

var socket = require('socket.io-client')('http://localhost:3000');

var arduinoAck = '';

socket.on('connect', socketConnected)
socket.on('connect_error', socketError)
socket.on('Light Control', buttonClicked)
sp.on('open', serialPortOpen)
sp.on('close', serialPortClosing)
sp.on('data', arduinoAckFunc)

function socketConnected(){
    console.log('Socket Connected');
}

function socketError(error){
    console.log('Socket: ' + error);
}

function serialPortOpen(){
    console.log('Serial Port Open');
}

function buttonClicked(data) {
  sp.write(data);
}

function serialPortClosing(){
    console.log('Serial Port Closing');
}

function arduinoAckFunc(buffer){
    arduinoAck += buffer.toString();
    if (arduinoAck.indexOf('\r') >= 0) {
      socket.emit('arduinoAck', arduinoAck.trim());
      arduinoAck = '';
    }
}

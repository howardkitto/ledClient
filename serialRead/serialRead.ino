const int greenLedPin = 5;
const int redLedPin = 13;
String incoming = "";

void setup() {
  pinMode(greenLedPin, OUTPUT);
    pinMode(redLedPin, OUTPUT);
  Serial.begin(9600);
}

void loop() {
  while (Serial.available()) {

    incoming = Serial.readString();
    Serial.println(incoming);

if (incoming == "On")
        {digitalWrite(greenLedPin, HIGH);}
else if (incoming == "Off")
        {digitalWrite(greenLedPin, LOW);}
}
}


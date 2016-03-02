const int ledPin = 3;
String incoming = "";

void setup() {
  pinMode(ledPin, OUTPUT);
  Serial.begin(9600);
}

void loop() {
  while (Serial.available()) {

    incoming = Serial.readString();
    Serial.println(incoming);
    if (incoming == "On")
    {digitalWrite(ledPin, HIGH);} //LED on while receiving
    if (incoming == "Off")
    {digitalWrite(ledPin, LOW);} //LED on while receiving

  }

//  digitalWrite(ledPin, LOW); //LED off while not receiving
}

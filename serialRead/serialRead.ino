const int ledPin = 3;
String incoming = "";

void setup() {
  pinMode(ledPin, OUTPUT);
  Serial.begin(9600);
}

void loop() {
  while (Serial.available()) {


      digitalWrite(ledPin, HIGH); //LED on while receiving

    incoming = Serial.readString();
    Serial.println(incoming);
  }

  digitalWrite(ledPin, LOW); //LED off while not receiving
}

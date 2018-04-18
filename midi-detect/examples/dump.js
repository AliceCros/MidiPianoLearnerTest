(function(MIDIKeyboad) {
  "use strict";

  var midiKey = new MIDIKeyboad("Keystation Mini 32");
  let audio = null;

  Promise.resolve().then(function() {
    return midiKey.open();
  }).then(function() {
    midiKey.on("message", function(e) {
        let noteNumber = JSON.stringify(e.noteNumber);
        let dataType = JSON.stringify(e.dataType);
        console.log(noteNumber);
        console.log(dataType);
        // C'est là que ça se passe
        
        if (audio) {
            if(dataType == "\"noteOff\""){
                audio.pause();
                audio = null;
            }
        }

        if(dataType == "\"noteOn\""){
            if(noteNumber == 0){
                audio = new Audio('./notes/C1-97-110.wav');
                audio.play();
            }
            else if(noteNumber == 1){
                audio = new Audio('./notes/Cs1-97-110.wav');
                audio.play();
            }
            else if(noteNumber == 2){
                audio = new Audio('./notes/D1-97-110.wav');
                audio.play();
            }
            else if(noteNumber == 3){
                audio = new Audio('./notes/Ds1-97-110.wav');
                audio.play();
            }
            else if(noteNumber == 4){
                audio = new Audio('./notes/E1-97-110.wav');
                audio.play();
            }
            else if(noteNumber == 5){
                audio = new Audio('./notes/F1-97-110.wav');
                audio.play();
            }
            else if(noteNumber == 6){
                audio = new Audio('./notes/Fs1-97-110.wav');
                audio.play();
            }
            else if(noteNumber == 7){
                audio = new Audio('./notes/G1-97-110.wav');
                audio.play();
            }
            else if(noteNumber == 8){
                audio = new Audio('./notes/Gs1-97-110.wav');
                audio.play();
            }
            else if(noteNumber == 9){
                audio = new Audio('./notes/A1-97-110.wav');
                audio.play();
            }
            else if(noteNumber == 10){
                audio = new Audio('./notes/As1-97-110.wav');
                audio.play();
            }
            else if(noteNumber == 11){
                audio = new Audio('./notes/B1-97-110.wav');
                audio.play();
            }
            else if(noteNumber == 12){
                audio = new Audio('./notes/C2-97-110.wav');
                audio.play();
            }
            else if(noteNumber == 13){
                audio = new Audio('./notes/Cs2-97-110.wav');
                audio.play();
            }
            else if(noteNumber == 14){
                audio = new Audio('./notes/D2-97-110.wav');
                audio.play();
            }
            else if(noteNumber == 15){
                audio = new Audio('./notes/Ds2-97-110.wav');
                audio.play();
            }
            else if(noteNumber == 16){
                audio = new Audio('./notes/E2-97-110.wav');
                audio.play();
            }
            else if(noteNumber == 17){
                audio = new Audio('./notes/F2-97-110.wav');
                audio.play();
            }
            else if(noteNumber == 18){
                audio = new Audio('./notes/Fs2-97-110.wav');
                audio.play();
            }
            else if(noteNumber == 19){
                audio = new Audio('./notes/G2-97-110.wav');
                audio.play();
            }
            else if(noteNumber == 20){
                audio = new Audio('./notes/Gs2-97-110.wav');
                audio.play();
            }
            else if(noteNumber == 21){
                audio = new Audio('./notes/A2-97-110.wav');
                audio.play();
            }
            else if(noteNumber == 22){
                audio = new Audio('./notes/As2-97-110.wav');
                audio.play();
            }
            else if(noteNumber == 23){
                audio = new Audio('./notes/B2-97-110.wav');
                audio.play();
            } 
            else if(noteNumber == 24){
                audio = new Audio('./notes/C3-97-110.wav');
                audio.play();
            }
            else if(noteNumber == 25){
                audio = new Audio('./notes/Cs3-97-110.wav');
                audio.play();
            }
            else if(noteNumber == 26){
                audio = new Audio('./notes/D3-97-110.wav');
                audio.play();
            }
            else if(noteNumber == 27){
                audio = new Audio('./notes/Ds3-97-110.wav');
                audio.play();
            }
            else if(noteNumber == 28){
                audio = new Audio('./notes/E3-97-110.wav');
                audio.play();
            }
            else if(noteNumber == 29){
                audio = new Audio('./notes/F3-97-110.wav');
                audio.play();
            }
            else if(noteNumber == 30){
                audio = new Audio('./notes/Fs3-97-110.wav');
                audio.play();
            }
            else if(noteNumber == 31){
                audio = new Audio('./notes/G3-97-110.wav');
                audio.play();
            }
            else if(noteNumber == 32){
                audio = new Audio('./notes/Gs3-97-110.wav');
                audio.play();
            }
            else if(noteNumber == 33){
                audio = new Audio('./notes/A3-97-110.wav');
                audio.play();
            }
            else if(noteNumber == 34){
                audio = new Audio('./notes/As3-97-110.wav');
                audio.play();
            }
            else if(noteNumber == 35){
                audio = new Audio('./notes/B3-97-110.wav');
                audio.play();
            }
            else if(noteNumber == 36){
                audio = new Audio('./notes/C4-97-110.wav');
                audio.play();
            }
            else if(noteNumber == 37){
                audio = new Audio('./notes/Cs4-97-110.wav');
                audio.play();
            }
            else if(noteNumber == 38){
                audio = new Audio('./notes/D4-97-110.wav');
                audio.play();
            }
            else if(noteNumber == 39){
                audio = new Audio('./notes/Ds4-97-110.wav');
                audio.play();
            }
            else if(noteNumber == 40){
                audio = new Audio('./notes/E4-97-110.wav');
                audio.play();
            }
            else if(noteNumber == 41){
                audio = new Audio('./notes/F4-97-110.wav');
                audio.play();
            }
            else if(noteNumber == 42){
                audio = new Audio('./notes/Fs4-97-110.wav');
                audio.play();
            }
            else if(noteNumber == 43){
                audio = new Audio('./notes/G4-97-110.wav');
                audio.play();
            }
            else if(noteNumber == 44){
                audio = new Audio('./notes/Gs4-97-110.wav');
                audio.play();
            }
            else if(noteNumber == 45){
                audio = new Audio('./notes/A4-97-110.wav');
                audio.play();
            }
            else if(noteNumber == 46){
                audio = new Audio('./notes/As4-97-110.wav');
                audio.play();
            }
            else if(noteNumber == 47){
                audio = new Audio('./notes/B4-97-110.wav');
                audio.play();
            }
            else if(noteNumber == 48){
                audio = new Audio('./notes/C5-97-110.wav');
                audio.play();
            }
            else if(noteNumber == 49){
                audio = new Audio('./notes/Cs5-97-110.wav');
                audio.play();
            }
            else if(noteNumber == 50){
                audio = new Audio('./notes/D5-97-110.wav');
                audio.play();
            }
            else if(noteNumber == 51){
                audio = new Audio('./notes/Ds5-97-110.wav');
                audio.play();
            }
            else if(noteNumber == 52){
                audio = new Audio('./notes/E5-97-110.wav');
                audio.play();
            }
            else if(noteNumber == 53){
                audio = new Audio('./notes/F5-97-110.wav');
                audio.play();
            }
            else if(noteNumber == 54){
                audio = new Audio('./notes/Fs5-97-110.wav');
                audio.play();
            }
            else if(noteNumber == 55){
                audio = new Audio('./notes/G5-97-110.wav');
                audio.play();
            }
            else if(noteNumber == 56){
                audio = new Audio('./notes/Gs5-97-110.wav');
                audio.play();
            }
            else if(noteNumber == 57){
                audio = new Audio('./notes/A5-97-110.wav');
                audio.play();
            }
            else if(noteNumber == 58){
                audio = new Audio('./notes/As5-97-110.wav');
                audio.play();
            }
            else if(noteNumber == 59){
                audio = new Audio('./notes/B5-97-110.wav');
                audio.play();
            }
            else if(noteNumber == 60){
                audio = new Audio('./notes/C6-97-110.wav');
                audio.play();
            }
            else if(noteNumber == 61){
                audio = new Audio('./notes/Cs6-97-110.wav');
                audio.play();
            }
            else if(noteNumber == 62){
                audio = new Audio('./notes/D6-97-110.wav');
                audio.play();
            }
            else if(noteNumber == 63){
                audio = new Audio('./notes/Ds6-97-110.wav');
                audio.play();
            }
            else if(noteNumber == 64){
                audio = new Audio('./notes/E6-97-110.wav');
                audio.play();
            }
            else if(noteNumber == 65){
                audio = new Audio('./notes/F6-97-110.wav');
                audio.play();
            }
            else if(noteNumber == 66){
                audio = new Audio('./notes/Fs6-97-110.wav');
                audio.play();
            }
            else if(noteNumber == 67){
                audio = new Audio('./notes/G6-97-110.wav');
                audio.play();
            }
            else if(noteNumber == 68){
                audio = new Audio('./notes/Gs6-97-110.wav');
                audio.play();
            }
            else if(noteNumber == 69){
                audio = new Audio('./notes/A6-97-110.wav');
                audio.play();
            }
            else if(noteNumber == 70){
                audio = new Audio('./notes/As6-97-110.wav');
                audio.play();
            }
            else if(noteNumber == 71){
                audio = new Audio('./notes/B6-97-110.wav');
                audio.play();
            }
            else if(noteNumber == 72){
                audio = new Audio('./notes/C7-97-110.wav');
                audio.play();
            }
            else if(noteNumber == 73){
                audio = new Audio('./notes/Cs7-97-110.wav');
                audio.play();
            }
            else if(noteNumber == 74){
                audio = new Audio('./notes/D7-97-110.wav');
                audio.play();
            }
            else if(noteNumber == 75){
                audio = new Audio('./notes/Ds7-97-110.wav');
                audio.play();
            }
            else if(noteNumber == 76){
                audio = new Audio('./notes/E7-97-110.wav');
                audio.play();
            }
            else if(noteNumber == 77){
                audio = new Audio('./notes/F7-97-110.wav');
                audio.play();
            }
            else if(noteNumber == 78){
                audio = new Audio('./notes/Fs7-97-110.wav');
                audio.play();
            }
            else if(noteNumber == 79){
                audio = new Audio('./notes/G7-97-110.wav');
                audio.play();
            }
            else if(noteNumber == 80){
                audio = new Audio('./notes/Gs7-97-110.wav');
                audio.play();
            }
            else if(noteNumber == 81){
                audio = new Audio('./notes/A7-97-110.wav');
                audio.play();
            }
            else if(noteNumber == 82){
                audio = new Audio('./notes/As7-97-110.wav');
                audio.play();
            }
            else if(noteNumber == 83){
                audio = new Audio('./notes/B7-97-110.wav');
                audio.play();
            }
            
        }
    });
  }).catch(function(e) {
    console.log("ERROR: " + e.toString());
  });

})((this.self || global).MIDIKeyboard || require("../"));

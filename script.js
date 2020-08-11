var letters = {
    "a": ".-", 
    "b": "-...",
    "c": "-.-.",
    "d": "-..",
    "e":".",
    "f":"..-.",
    "g":"--.",
    "h":"....",
    "i":"..",
    "j":".---",
    "k":"-.-",
    "l":".-..",
    "m":"--",
    "n":"-.",
    "o":"---",
    "p":".--.",
    "q":"--.-",
    "r":".-.",
    "s":"...",
    "t":"-",
    "u":"..-",
    "v":"...-",
    "w":".--",
    "x":"-..-",
    "y":"-.--",
    "z":"--..",
    "á":".--.-",
    "ä":".-.-",
    "é":"..-..",
    "ñ":"--.--",
    "ö":"---.",
    "ü":"..--",
    "1":".----",
    "2":"..---",
    "3":"...--",
    "4":"....-",
    "5":".....",
    "6":"-....",
    "7":"--...",
    "8":"---..",
    "9":"----.",
    "0":"-----",
    ",":"-----",
    ".":".-.-.-",
    "?":"..--..",
    '"':'.-..-.',
    ":":"---...",
    "'":".----.",
    "-":"-....-",
    "/":"-..-.",
    "(":"-.--.",
    ")":"-.--.-",
    "@":".--.-.",
    "\n":" ",
    " ":""
};
function morseLook(val){
    return letters[val];        
}
function getKeyByValue(object, value) {
    return Object.keys(object).find(key => object[key] === value);
}

function enterCheck(e) {
    if(e.key==="Enter"){
        e.preventDefault();
        translate();
    }
}
function enterChecker(e) {
    if(e.key==="Enter"){
        e.preventDefault();
        morseTranslate();
    }
}


function translate(){
    var textoNuevo = document.getElementById('newText').value.toLowerCase();
    var reg=/[^a-zA-Z0-9\,\.\/\'\"\?\-\(\)\@\á\ä\é\ñ\ö\ü\ ]+/;
    if(reg.test(textoNuevo)){
        alert("Algunos simbolos o letras no estan soportadas, utiliza a-z, 0-9 y simbolos basicos");
        return true;
    }else{      
        var morse = "";
        let spaceSepareted = textoNuevo.split(" ");
        let stoper = spaceSepareted.length -1;
        for (let i=0;i<spaceSepareted.length;i++){
            let separator = spaceSepareted[i].split("");
            for(let j=0;j<separator.length;j++){
                morse+=morseLook(separator[j]);
                morse+=" ";
            }
            //stops making a line break when no more letters.
            if (i!=stoper){
                morse+="\n";
            }
        }
        let morseView = morse.split("\n");
        let displayText = "";
    
        //we can posibly remove the last one by subtracting a number on the array that splits, due to the morse+="\n" line break
        for(let i=0;i<morseView.length;i++){
            displayText+=spaceSepareted[i]+"\t";
            displayText+=morseView[i];
            displayText+="<br>";
        }
        document.getElementById("traduccion").innerHTML = displayText;
        document.getElementById("newText").focus();
        return false;
    }
}

function morseTranslate(){
    var textoMorse = document.getElementById('MorseNuevo').value;
    var reg1=/[^\ \  \.\-]/;
    if(reg1.test(textoMorse)){
        alert("Utilizar utilizar solo puntos, espacios y guiones en la oracion o palabra");
        return true;
    }else{
        let spaceSepareted1 = textoMorse.split(" ");
        let latin ="";
        for(let i=0;i<spaceSepareted1.length;i++){
           latin+=getKeyByValue(letters, spaceSepareted1[i]);
        }
        document.getElementById("traduccionLetras").innerHTML=latin;
        document.getElementById("MorseNuevo").focus();
        return false;
    }
}
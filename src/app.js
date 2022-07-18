
 let theOffset;
function saludo (){
    var Name = document.getElementById("name").value;
    document.getElementById("dialogtext").innerHTML = "Hola " + Name + ". ¿Qué te gustaría hacer hoy?"
    const Opciones = document.getElementById("opciones")
    Opciones.style.display = "block"
}

function getthememo (){
var theTextMessage = document.getElementById("themessage").value;
window.location.href = "offset.html";
}

const root = document.documentElement;
function insertoffset () {
  theOffset = document.getElementById("offset").value
  root.style.setProperty('--turn', (theOffset * (1/26)) + "turn"); 
  document.getElementById('img-circuloexterno').style.animation="girarcipher 2s 1 forwards";
}



function codethememo () 
{  
    var codedTextMesagge;
    for (var i = 0; i < theTextMessage.length; i++) {
        codedTextMesagge[i] = (theTextMessage[i] - 65 + theOffset) % 26 + 65;  
      }
}

let theOffset;
let theTextMessage = "Fuck";
function saludo (){
    let Name = document.getElementById("name").value;
    document.getElementById("dialogtext").innerHTML = "Hola " + Name + ". ¿Qué te gustaría hacer hoy?"
    const Opciones = document.getElementById("opciones")
    Opciones.style.display = "block"
}

function getthememo (){
theTextMessage = document.getElementById("themessage").value;
console.log(theTextMessage);
window.location.href = "offset.html";
}

let circuloExterno;
const root = document.documentElement;
function insertoffset () {
  circuloExterno = document.getElementById('img-circuloexterno');
theOffset = document.getElementById("offset").value
root.style.setProperty('--turn', (theOffset * (1/26)) + "turn");
//No entiendo
circuloExterno.style.animation = 'none';
circuloExterno.offsetHeight; /* trigger reflow */
circuloExterno.style.animation = ""; 
circuloExterno.style.animation="girarcipher 2s 1 forwards";
console.log(theTextMessage);
}

function codethememo () 
{  
    let codedTextMesagge;
    for (var i = 0; i < theTextMessage.length; i++) {
        codedTextMesagge[i] = (theTextMessage[i] - 65 + theOffset) % 26 + 65;  
      }
      window.location.href = "result.html";
      console.log(codedTextMesagge);
}

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

function insertoffset () {
document.getElementById("img-circuloexterno").animate([
    // fotogramas clave
    { transform: "rotate(0turn)" },
    { transform: 'rotate((1turn))' }
  ], {
    // opciones de sincronizaciónd
    duration:   1000,
    iterations: 1
  });
}

function codethememo () 
{  
    var codedTextMesagge;
    for (var i = 0; i < theTextMessage.length; i++) {
        codedTextMesagge[i] = (theTextMessage[i] - 65 + theOffset) % 26 + 65;  
      }
}
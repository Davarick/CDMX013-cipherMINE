
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

function codethememo () 
{
    var theOffset = document.getElementById("offset").value;
    var codedTextMesagge;
    for (var i = 0; i < theTextMessage.length; i++) {
        codedTextMesagge[i] = (theTextMessage[i] - 65 + theOffset) % 26 + 65;  
      }
}
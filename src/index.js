import cipher from './cipher.js';
console.log(cipher);

//funcion que busca el primer boton de continuar y regresa tu nombre
const botonNombre = document.getElementById('thebutton');
botonNombre.addEventListener("click",  function () {
  let Name = document.getElementById("name").value;
    document.getElementById("dialogtext").innerHTML = "Hola " + Name + ". ¿Qué te gustaría hacer hoy?" 
    const Opciones = document.getElementById("opciones")
    Opciones.style.display = "block"
})

const theBeginning = document.getElementById("beginning");
const theButtoncipher = document.getElementById ('buttoncipher');
const theButtondecipher = document.getElementById ('buttondecipher');
const theCiphermessage = document.getElementById("ciphermessage");

//Seleccionas alguno de los dos botones y estos te llevan a escribor el mensaje o a pegar el cifrado
const botonCifrar  = document.getElementById('cifrar');
botonCifrar.addEventListener('click',  function () {
  theBeginning.style.display = "none"
  theButtoncipher.style.display = 'block'
  theCiphermessage.style.display = 'block'
})
const botonDecifrar = document.getElementById('decifrar');
botonDecifrar.addEventListener('click',  function (){
  theBeginning.style.display = "none"
  theCiphermessage.style.display = 'block'
  document.getElementById("title").innerHTML = "Puedes usar este pergamino para pegar tu código";
  document.getElementById("title").style.color = '#00cc66';
  theButtondecipher.style.display = 'block'
})


let theTextMessage;
const theCipherimage = document.getElementById("cipherimage");
const btnCifrar  = document.getElementById('botoncitofiufiu');
const btnDecifrar = document.getElementById('botoncitofuafua');
theButtoncipher.addEventListener('click', showcipherimagecifer);
theButtondecipher.addEventListener('click', showcipherimagedecifer);

//Funciones que muestra la imagen del Cipher con el boton cifrar o decifrar, dependiendo
function showcipherimagecifer (){
  theTextMessage = document.getElementById("themessage").value;  
  if(theTextMessage != '')
  {    
    theCiphermessage.style.display = 'none'
    console.log(theTextMessage);
    theCipherimage.style.display = 'block';
    btnCifrar.style.display = 'block'
  }
else { alert("Aún no has escrito tu mensaje") }
}

function showcipherimagedecifer (){
  theTextMessage = document.getElementById("themessage").value;  
  if(theTextMessage != '')
  {    
    theCiphermessage.style.display = 'none'
    console.log(theTextMessage);
    theCipherimage.style.display = 'block';
    document.getElementById ('whattodo').innerHTML = 'Escribe un número para revelar el mensaje'
    btnDecifrar.style.display = 'block'
  }
else { alert("Aún no has pegado tu código") }
}

let theOffset;
let circuloExterno = document.getElementById('img-circuloexterno');;
const root = document.documentElement;

btnCifrar.addEventListener('click', insertoffsetc )
btnDecifrar.addEventListener('click', insertoffsetd)

//Funciones que determinan cuando y hacia donde va a girar la rueda
function insertoffsetc () {
    circuloExterno = document.getElementById('img-circuloexterno');
    theOffset = document.getElementById("offset").value
    root.style.setProperty('--turn', (theOffset * (1/26)) + "turn");
    //No entiendo
    circuloExterno.style.animation = 'none';
    circuloExterno.offsetHeight; /* trigger reflow */
    circuloExterno.style.animation = ""; 
    circuloExterno.style.animation="girarcipher 2s 1 forwards";
    console.log("el maldito mensaje" + theTextMessage);
    setTimeout(function () {
      document.getElementById('img-return').style.display = 'block';
      document.getElementById('btn-ciphermessage').style.display = 'block';  
    }, 2000); 
}

function insertoffsetd () {
  circuloExterno = document.getElementById('img-circuloexterno');
  theOffset = document.getElementById("offset").value
  theOffset = parseInt(theOffset) * -1;
  root.style.setProperty('--turn', (theOffset * (1/26)) + "turn");
  //No entiendo
  circuloExterno.style.animation = 'none';
  circuloExterno.offsetHeight; /* trigger reflow */
  circuloExterno.style.animation = ""; 
  circuloExterno.style.animation="girarcipher 2s 1 forwards";
  console.log("el maldito mensaje" + theTextMessage);
  setTimeout(function () {
    document.getElementById('img-return').style.display = 'block';
    document.getElementById('btn-deciphermessage').style.display = 'block';
  }, 2000); 
}

const btnCipherMessage = document.getElementById('btn-ciphermessage');
const btnDecipherMessage = document.getElementById('btn-deciphermessage');
const theResult = document.getElementById("results");

//Botones que imprimen al final el resultado
btnCipherMessage.addEventListener('click', function(){
document.getElementById('resultingmessage').innerHTML = cipher.encode(theOffset, theTextMessage);
console.log(cipher.encode(theOffset, theTextMessage));
theCipherimage.style.display = 'none';
theResult.style.display = 'block';
});

btnDecipherMessage.addEventListener('click', function(){
document.getElementById('resultingmessage').innerHTML = cipher.decode(theOffset, theTextMessage);
console.log(cipher.decode(theOffset, theTextMessage));
theCipherimage.style.display = 'none';
theResult.style.display = 'block';
});




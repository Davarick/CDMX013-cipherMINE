



function greetings (){
    let Name = document.getElementById("name").value;
    document.getElementById("dialogtext").innerHTML = "Hola " + Name + ". ¿Qué te gustaría hacer hoy?"
    const Opciones = document.getElementById("opciones")
    Opciones.style.display = "block"
}

function showtextinput (isCipher)
{
  const theBeginning = document.getElementById("beginning");
  theBeginning.style.display = "none"
  if(!isCipher) {
    document.getElementById("title").innerHTML = "Puedes usar este pergamino para pegar tu código";
    document.getElementById("title").style.color = '#00cc66';
    const theButtondecipher = document.getElementById ('buttondecipher');
    theButtondecipher.style.display = 'block'
  }  
  else {
    const theButtoncipher = document.getElementById ('buttoncipher');
    theButtoncipher.style.display = 'block'
  }
  const theCiphermessage = document.getElementById("ciphermessage");
  theCiphermessage.style.display = 'block'
}
let theTextMessage;
function showcipherimage (isCipher){
  theTextMessage = document.getElementById("themessage").value;
  const theCiphermessage = document.getElementById("ciphermessage");
  if(!isCipher)
  {
    document.getElementById ('whattodo').innerHTML = 'Escribe un número para revelar el mensaje'
    const theButtondecipher =document.getElementById ('botoncitofuafua');
    theButtondecipher.style.display = 'block'
  }
  else 
  {
    const theButtoncipher =document.getElementById ('botoncitofiufiu');
    theButtoncipher.style.display = 'block'
  }
  if(document.getElementById("themessage").value != null)
  {    
    theCiphermessage.style.display = 'none'
    console.log(theTextMessage);
  }
else {
alert("Aún no has escrito tu mensaje")
}
const theCipherimage = document.getElementById("cipherimage");
theCipherimage.style.display = 'block';
}

let theOffset;
let circuloExterno;
const root = document.documentElement;
function insertoffset (isChipher) {
console.log(isChipher);
circuloExterno = document.getElementById('img-circuloexterno');
theOffset = document.getElementById("offset").value
if(!isChipher)
{
  theOffset = parseInt(theOffset) * -1;
}
root.style.setProperty('--turn', (theOffset * (1/26)) + "turn");
//No entiendo
circuloExterno.style.animation = 'none';
circuloExterno.offsetHeight; /* trigger reflow */
circuloExterno.style.animation = ""; 
circuloExterno.style.animation="girarcipher 2s 1 forwards";
console.log("el maldito mensaje" + theTextMessage);
setTimeout(function () {
  document.getElementById('img-return').style.display = 'block';
if(isChipher)
{
  document.getElementById('btn-ciphermessage').style.display = 'block';
}
else{
  document.getElementById('btn-deciphermessage').style.display = 'block';
}
}, 2000); 
}


function codethememo (isCipher) 
{   
  console.log(isCipher);   
let arrayTextMessage = [];
let codedTextMessage = '';
console.log("el maldito mensaje" + theTextMessage[1] + theTextMessage.length + theOffset);
if(!isCipher){
  theOffset = theOffset + 26;
}
for (let i = 0; i < theTextMessage.length; i++) {
  if(theTextMessage[i] != " ")
  {
    arrayTextMessage[i] = ((theTextMessage.charCodeAt(i) - 65 + parseInt(theOffset))%26 + 65);  
    console.log("el mensaje codeado " + arrayTextMessage);
  }
  else 
  {
    arrayTextMessage[i] = theTextMessage.charCodeAt(i);
  }

}

for(let i = 0; i < theTextMessage.length; i++) {
  codedTextMessage += String.fromCharCode(arrayTextMessage[i]);
}
const theCipherimage = document.getElementById("cipherimage");
theCipherimage.style.display = 'none';
const theResult = document.getElementById("results");
theResult.style.display = 'block';
const printResults = document.getElementById('resultingmessage');
printResults.innerHTML = codedTextMessage;
}


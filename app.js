
function saludo (){
    var Name = document.getElementById("name").value;
    document.getElementById("respuestauno").innerHTML = "Hola " + Name + ". ¿Qué te gustaría hacer hoy?"
    const NameImput = document.getElementById("NameInput")
    NameImput.style.display = "none"
}
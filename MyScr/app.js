
function saludo (){
    var Name = document.getElementById("name").value;
    document.getElementById("dialogtext").innerHTML = "Hola " + Name + ". ¿Qué te gustaría hacer hoy?"
    const Opciones = document.getElementById("opciones")
    Opciones.style.display = "block"
}


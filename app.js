let amigos = []

function agregarNombre() {
    let nombreInput = document.getElementById("nombre");
    let nombre = nombreInput.value.trim();

    if (nombre === "" || /\d/.test(nombre)) {
        alert("Por favor, ingrese un nombre válido (sin números).");
        return;
    }

    amigos.push(nombre);
    actualizarLista();
    nombreInput.value = "";
}

function actualizarLista(){
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement("li");
        li.textContent = amigos[i];
        lista.appendChild(li);
    }
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Debe agregar al menos un nombre para realizar el sorteo.");
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSecreto = amigos[indiceAleatorio];
    document.getElementById("resultado").textContent = "El amigo secreto es: " + amigoSecreto;

    document.getElementById("botonSortear").style.display = "none";
    document.getElementById("botonReiniciar").style.display = "inline-block";
}

function reiniciar() {
    amigos = [];
    actualizarLista();
    document.getElementById("resultado").textContent = "";
    
    document.getElementById("botonSortear").style.display = "flex";
    document.getElementById("botonReiniciar").style.display = "none";
  }

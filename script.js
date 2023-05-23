function encriptar(){
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let muñeco = document.getElementById("muñeco");

    let textoCifrado = texto 
        .replace(/e/gi, "enter")
        .replace(/i/gi, "imes")
        .replace(/a/gi, "ai")
        .replace(/o/gi, "ober")
        .replace(/u/gi, "ufat");
   
    if (texto.length !=0) {
        document.getElementById("texto").value = textoCifrado;
        tituloMensaje.textContent = "Texto Encriptado con Éxito";
        parrafo.textContent = "";
        muñeco.src = "./img/encriptado.png";
    } else {
        muñeco.src = "./img/desencriptado2.png";
        tituloMensaje.textContent = "Ningún Mensaje fue Encontrado";
        parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
        alert("Debes Ingresar Algún Texto");
    }
}

function desencriptar() {
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let muñeco = document.getElementById("muñeco");

    let textoCifrado = texto
        .replace(/enter/gi, "e")
        .replace(/imes/gi, "i")
        .replace(/ai/gi, "a")
        .replace(/ober/gi, "o")
        .replace(/ufat/gi, "u");

    if (texto.length !=0) { 
        document.getElementById("texto").value = textoCifrado;
        tituloMensaje.textContent = "Texto Desencriptado con Éxito";
        parrafo.textContent = "";
        muñeco.src = "./img/desencriptado.png";
    } else {
        muñeco.src = "./img/desencriptado2.png";
        tituloMensaje.textContent = "Ningún Mensaje fue Encontrado";
        parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
        alert("Debes Ingresar Algún Texto");
    }

}
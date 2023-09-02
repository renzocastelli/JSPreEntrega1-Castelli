// Placas de video iniciales
let placaVideo = 100;

// Función para verificar el stock de placas de video
function verificarStock() {
    // Solicitar al usuario la cantidad de placas de video a comprar
    const compraPlacaVideo = parseInt(prompt("Ingrese la cantidad de placas de video que desea comprar:"));

    // Calcular el total de placas de video después de la compra
    let placasActuales = placaVideo + compraPlacaVideo;

    // Verificar el stock y mostrar un mensaje apropiado
    if (placasActuales < 200) {
        alert("Comprar más placas de video!!");
    } else {
        alert("Hay suficiente stock de placas de video.");
    }

    console.log("Cantidad actual de placas de video:", placasActuales);
}

// Llamar a la función para verificar el stock
verificarStock();

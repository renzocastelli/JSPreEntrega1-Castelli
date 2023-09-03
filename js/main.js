// Placas de video iniciales
let placaVideo = 10;

// Función para verificar el stock de placas de video
function verificarStock(compraPlacaVideo) {
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

let opcion;

while (opcion !== "3") {
    opcion = prompt("Menú:\n1. Comprar placas de video\n2. Verificar stock\n3. Salir");

    switch (opcion) {
        case "1":
            const compraPlacaVideo = parseInt(prompt("Ingrese la cantidad de placas de video que desea comprar:"));
            verificarStock(compraPlacaVideo);
            break;
        case "2":
            verificarStock(0); // Mostrar el stock actual sin realizar una compra
            break;
        case "3":
            alert("Saliendo del programa.");
            break;
        default:
            alert("Opción no válida. Por favor, elija una opción válida.");
            break;
    }
}
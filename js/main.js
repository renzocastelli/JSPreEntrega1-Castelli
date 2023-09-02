// // Stock inicial de mis productos
// let stockProductoTarjeta = 50;
// let stockProductoMonitor = 30;
// let stockProductoProcesador = 20;

// // Todo lo que se vendio en una jornada
// const ventasProductoTarjeta = 10;
// const ventasProductoMonitor = 5;
// const ventasProductoProcesador = 15;

// // Actualizar el stock que hay según las ventas
// stockProductoTarjeta -= ventasProductoTarjeta;
// stockProductoMonitor -= ventasProductoMonitor;
// stockProductoProcesador -= ventasProductoProcesador;

// // Aca se muestra el stock actualizado del hardware
// console.log(`Stock actualizado:`);
// console.log(`Producto Tarjeta: ${stockProductoTarjeta} unidades`);
// console.log(`Producto Monitor: ${stockProductoMonitor} unidades`);
// console.log(`Producto Procesador: ${stockProductoProcesador} unidades`);

// // Función que solicita al usuario ingresar un texto y muestra un alert
// function ingresarTexto() {
//     let textoIngresado = prompt("Por favor, ingresa un texto:");

//     // Verificar si el usuario ingresó algo y no canceló
//     if (textoIngresado !== null) {
//         // Mostrar el texto ingresado en un alert
//         alert("Ingresaste el siguiente texto: " + textoIngresado);
//     }
// }

// Ciclo que solicita al usuario ingresar texto 3 veces
/*
for (let i = 0; i < 3; i++) {
    ingresarTexto();
}
*/

// // Placas de video iniciales
// let placaVideo = 100;
// // Placas de video que compre
// let compraPlacaVideo = 40;
// // Suma total de las placas de video
// let placasActuales = placaVideo + compraPlacaVideo;

// if (placasActuales < 200) {
//     const respuesta = alert("Comprar mas placas de video!!")
    
// }

// console.log (placasActuales)
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
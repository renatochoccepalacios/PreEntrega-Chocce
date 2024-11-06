alert("Productos Disponibles: yerba, azucar, arroz ¿Que deseas agregar?");
let carrito = prompt("que agregaste a tu carrito? Escribe ESC para salir");

while (carrito != "ESC") {
    switch (carrito.toLowerCase()) {
        case "yerba":
            console.log("La yerba es muy importante");
            break;

        case "azucar":
            console.log("el azucar nunca puede faltar");
            break;

        case "arroz":
            console.log("el arroz es esencial");
            break;
        default:
            console.log("Ese producto no esta disponible");
            break;
    }

    carrito = prompt("que deseas agregar a tu carrito? Escribe ESC para salir");
}

console.log("has salido del carrito");


alert("Productos Disponibles: yerba, azucar, arroz ¿Qué deseas agregar?");
let carrito = prompt("¿Qué agregaste a tu carrito? Escribe ESC para salir");

while (carrito !== "ESC") {
    switch (carrito.toLowerCase()) {
        case "yerba":
            console.log("La yerba es muy importante");
            break;
        case "azucar":
            console.log("El azúcar nunca puede faltar");
            break;
        case "arroz":
            console.log("El arroz es esencial");
            break;
        default:
            console.log("Ese producto no esta disponible");
            break;
    }

    carrito = prompt("¿Qué deseas agregar a tu carrito? Escribe ESC para salir");
}

console.log("Has salido del carrito");
// creamos el array carrito
// const carrito = [];

class producto {
    constructor(nombre = '', precio = 0, cantidad = 0, envioGratis,  precioEnvio = 0) {
        this.nombre = nombre;
        this.precio = parseFloat(precio);
        this.cantidad = parseInt(cantidad);
        this.envioGratis = Boolean(envioGratis);
        this.precioEnvio = parseFloat(precioEnvio);
    }

    total() {
        let calculoTotal;
        // si envio es gratis
        if (this.envioGratis) {
            // va a calcular el precio * la cantidad
            calculoTotal = (this.precio * this.cantidad);
            return `El total es ${calculoTotal}`;
        } else {
            // sino va a multiplicar el precio por la cantidad + el precio del envio
            calculoTotal = (this.precio * this.cantidad) + this.precioEnvio;
            return `El total + envio es ${calculoTotal}`;
        }
    }
}
// creamos los productos
/* const producto1 = new producto('Monitor 20 pulgadas', 200, 1, true, 0);
const producto2 = new producto('Zapatillas Nike', 500, 3, false, 100);
const producto3 = new producto('Zapatillas Jordan', 1000, 4, false, 400);
const producto4 = new producto('Camiseta de boca', 100, 1, true, 0); */

const productos = [
    new producto('Monitor 20 pulgadas', 200, 1, true, 0),
    new producto('Zapatillas Nike', 500, 3, false, 100),
    new producto('Zapatillas Jordan', 1000, 4, false, 400),
    new producto('Camiseta de boca', 100, 1, true, 0)
]



// llamamos a la funcion total
/* console.log(producto1.total())
console.log(producto2.total()) */

// agregamos los productos al array
/* carrito.push(producto1);
carrito.push(producto2);
carrito.push(producto3);
carrito.push(producto4); */

// vemos el carrito
// console.log(carrito);


// iteramos el carrito
productos.forEach(producto => {
    console.log(producto.nombre);
    console.log(producto.precio);
    console.log(producto.cantidad);
});


// buscamos un producto
const buscarProducto = productos.find(producto => producto.nombre === 'Zapatillas Nike');
console.log(buscarProducto);

// filtramos todos los productos menores 0  iguales a 500
const filtrarMenorPrecio = productos.filter( producto => producto.precio <= 500);

console.log('productos menores a 500: ', filtrarMenorPrecio);
class Producto {
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

const productos = [
    new Producto('Monitor 20 pulgadas', 200, 1, true, 0),
    new Producto('Zapatillas Nike', 500, 3, false, 100),
    new Producto('Zapatillas Jordan', 1000, 4, false, 400),
    new Producto('Camiseta de boca', 100, 1, true, 0)
]


// iteramos el carrito
productos.forEach(producto => {
    const mensajeFiltrar = `Nombre de producto ${producto.nombre}, precio: ${producto.precio}, cantidad: ${producto.cantidad}`;
    console.log(mensajeFiltrar);
});


// buscamos los productos le pasamos un parametro
const buscadorDeProductos = (productoEntrada) => {
    const buscarProducto = productos.find(producto => producto.nombre === productoEntrada);
    // console.log(buscarProducto);
    if(buscarProducto) {
        console.log('producto encontrado! ', buscarProducto);
    } else {
        console.log(`Producto no encontrado`);
    }
}

// filtramos por un precio de entrada
const filtrarPorUnPrecio = (precioEntrada) => {
    const filtrarPrecio = productos.filter(producto => producto.precio <= precioEntrada);
    console.log('Los productos menores o iguales a', precioEntrada, 'son ', filtrarPrecio);
}

filtrarPorUnPrecio(200);
buscadorDeProductos('Zapatillas Nike');
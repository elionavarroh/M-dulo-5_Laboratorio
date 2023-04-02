const carrito = [
    {
    id: 198752,
    name: "Tinta DJ27 Color",
    price: 52.95,
    count: 3,
    premium: true
    },
    {
    id: 75621,
    name: "Impresora ticketera PRO-201",
    price: 32.75,
    count: 2,
    premium: true
    },
    {
    id: 54657,
    name: "Caja de rollos de papel para ticketera",
    price: 5.95,
    count: 3,
    premium: false
    },
    {
    id: 3143,
    name: "Caja de folios DIN-A4 80gr",
    price: 9.95,
    count: 2,
    premium: false
    }
   ];

var productos = ["Tinta DJ27 Color", "Impresora ticketera PRO-201", "Caja de rollos de papel para ticketera", "Caja de folios DIN-A4 80gr"];

var productosEliminados = productos.splice(3, 3);
//productos: ["Tinta DJ27 Color", "Impresora ticketera PRO-201", "Caja de folios DIN-A4 80gr"]
//elementos eliminados: ["Caja de rollos de papel para ticketera"]
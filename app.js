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

//PRODUCTOS
var product = ["Tinta DJ27 Color", "Impresora ticketera PRO-201", "Caja de rollos de papel para ticketera", "Caja de folios DIN-A4 80gr"];

//CANTIDAD DE LA LISTA DE PRODUCTOS
for (i = 0; i < carrito.length; i++) {
    imprimir(carrito[i]);
};

function imprimir (product) {
    console.log("id:" + product.id);
    console.log("name" + product.name);
    console.log("price:" + product.price);
    console.log("count:" + product.count);
    console.log("premium:" + product.premium);
};

//PRODUCTO ELIMINADO -> 54657
var productDelete = product.splice(2, 1);
console.log(productDelete);

//POSICIONES DE LOS PRODUCTOS TRAS LA ELIMINACIÓN 
var pos = product.indexOf("Caja de rollos de papel para ticketera");
console.log(pos);

var pos = product.indexOf("Caja de folios DIN-A4 80gr");
console.log(pos);

//TOTAL DEL CARRITO DE LA COMPRA
var total = 0
for (var i= 0; i < product.length; i++) {
    total = (carrito[i].price * carrito[i].count) + total;
    console.log(total);
};
console.log("El total es" + total);

//FILTRAR POR LOS PRODUCTOS QUE SON PRIME
for (var i=0; i < product.length; i++) {
    if (carrito[i].premium == true) 
        imprimir(carrito[i]);
}

//PARTE EXTRA_SI TODOS LOS PRODUCTOS SON PRIME MOSTRAR UN MENSAJE
for (var i=0; i < product.length; i++) {
    if (product.length == product.premium) {
        alert("Su pedido será sin gastos de envío");
    } else {
        alert("Este pedido tiene gastos de envío");
    }
};

//PARTE EXTRA_APLICA UN DESCUENTO DEL 5% SI LA COMPRA ES MAYOR DE 100€
var totaldiscount = 0;
if (total > 50) {
    totaldiscount = total-(total*0.05);
};
console.log(totaldiscount);
const precioOriginal = 120;
const descuento = 18;

const porcentajePrecioConDescuento = 100 - descuento; //Descuento en Porcentaje
const precioConDescuento = (precioOriginal * porcentajePrecioConDescuento) / 100; //La fórmula ya vista. 


console.log({
    precioOriginal,
    descuento,
    porcentajePrecioConDescuento,
    precioConDescuento,
});


/*Forma sencilla
console.log("El precio original es " + precioOriginal);*/
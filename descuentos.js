// const precioOriginal = 120;
// const descuento = 18;

//Parte que calcula el descuento
function calcularPrecioConDescuento(precio, descuento) {
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;

    return precioConDescuento;
}

//Conectando a HTML

//Parte que obtiene los valores desde HTML de los usuarios 
function onClickButtonPriceDiscount() {
    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value;
  
    const inputDiscount = document.getElementById("InputDiscount");
    const discountValue = inputDiscount.value;

    const precioConDescuento = calcularPrecioConDescuento(priceValue, discountValue);

    const resultP = document.getElementById("ResultP");
    resultP.innerText = "El precio con descuento son: $" + precioConDescuento;
}



// console.log({
//     precioOriginal,
//     descuento,
//     porcentajePrecioConDescuento,
//     precioConDescuento,
// });


/*Forma sencilla
console.log("El precio original es " + precioOriginal);*/
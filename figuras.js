// Código del cuadaro
console.group("Cuadrados");
//const ladoCuadrado = 5;
//console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");
// Siempre haz tu código autodescriptivo
function perimetroCuadrado(lado) {
    return lado * 4;
}
//console.log("El perimetro del cuadrado es: " + perimetroCuadrado + "cm");

function areaCuadrado(lado) {
    return lado * lado;
}
//console.log("El área del cuadrado es: " + areaCuadrado + "cm^2"); 
console.groupEnd("");

// Código del triángulo 
console.group("Triángulos");

// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo3 = 4;
// console.log(
//     "Los lados del triángulo miden: " 
//     + ladoTriangulo1
//     + "cm, " 
//     + ladoTriangulo2 
//     + "cm, " 
//     + baseTriangulo3 
//     + "cm"
// ); 

// const alturaTriangulo =5.5;
// console.log("La altura del triángulo es de: " + alturaTriangulo + "cm");

function perimetroTriangulo(lado1, lado2, base){
    return lado1 + lado2 + base;
}
// console.log("El perímetro del triángulo es: "+ perimetroTriangulo + "cm");

function areaTriangulo(base, altura){
    return (base * altura) / 2;
}
//console.log("El área del Triángulo es: " + areaTriangulo + "cm^2");

console.groupEnd("");

// Código del círculo
console.group("Circulos");

// Radio
// const radioCirculo = 4;
// console.log("El radio del circulo es: " + radioCirculo + "cm");

// Diámetro
function diametroCirculo(radio){
    return radio * 2
}

// PI
const PI = Math.PI;
console.log("PI es: " + PI);

// Circunferencia
function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio);
    return diametro * PI
}

// Área
function areaCirculo(radio) {
    return (radio * radio) * PI
}

console.groupEnd("");


// Aquí interactuamos con el HTML
//Cuadrado
function calcularPerimetroCuadrado() {
    const input = document.getElementById("InputCuadrado")
    const value = input.value;  //Solo quiero el valor

    const perimetro = perimetroCuadrado(value); //Invocas una función y como parametro le pones el valor
    alert(perimetro);
}
function calcularAreaCuadrado() {
    const input = document.getElementById("InputCuadrado")
    const value = input.value;  //Solo quiero el valor

    const area = areaCuadrado(value);
    alert(area);
}
//Triángulo
function calcularPerimetroTriangulo() {
    const input = document.getElementById("InputTriangulo")
    const value = input.value;  //Solo quiero el valor

    const perimetro = perimetroTriangulo(value); //Invocas una función y como parametro le pones el valor
    alert(perimetro);
}
function calcularAreaTraingulo() {
    const input = document.getElementById("InputTriangulo")
    const value = input.value;  //Solo quiero el valor

    const area = areaTriangulo(value);
    alert(area);
}
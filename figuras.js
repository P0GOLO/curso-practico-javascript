// Código del cuadaro
console.group("Cuadrados");
const ladoCuadrado = 5;
console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");
// Siempre haz tu código autodescriptivo
const perimetroCuadrado = ladoCuadrado * 4
console.log("El perimetro del cuadrado es: " + perimetroCuadrado + "cm");

const areaCuadrado = ladoCuadrado * ladoCuadrado
console.log("El área del cuadrado es: " + areaCuadrado + "cm^2"); 
console.groupEnd("");

// Código del triángulo 
console.group("Triángulos");

const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo3 = 4;

console.log(
    "Los lados del triángulo miden: " 
    + ladoTriangulo1
    + "cm, " 
    + ladoTriangulo2 
    + "cm, " 
    + baseTriangulo3 
    + "cm"
); 
const alturaTriangulo =5.5;
console.log("La altura del triángulo es de: " + alturaTriangulo + "cm");

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo3
console.log("El perímetro del triángulo es: "+ perimetroTriangulo + "cm");

const areaTriangulo = (baseTriangulo3 * alturaTriangulo) / 2;
console.log("El área del Triángulo es: " + areaTriangulo + "cm^2");

console.groupEnd("");

// Código del círculo
console.group("Circulos");

// Radio
const radioCirculo = 4;
console.log("El radio del circulo es: " + radioCirculo + "cm");

// Diámetro
const diametroCirculo = radioCirculo * 2;
console.log("El diámetro del circulo es: " + diametroCirculo + "cm");

// PI
const PI = Math.PI;
console.log("PI es: " + PI);

// Circunferencia
const perimetroCirculo = diametroCirculo * PI;
console.log("El perímetro del circulo es: " + perimetroCirculo + "cm");

// Área
const areaCirculo = (radioCirculo * radioCirculo) * PI
console.log("El área del círculo es :" + areaCirculo + "cm^2");

console.groupEnd("");

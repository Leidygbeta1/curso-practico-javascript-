//Código del Cuadrado
console.group("Cuadrados")
//Lado del cuadrado
//const ladoCuadrado = 5;
//console.log("Los lados del cuadrado miden: " + ladoCuadrado + " cms");
//Perimetro del cuadrado

function perimetroCuadrado(lado) {

    return lado * 4;
} 
//console.log("El perimetro del cuadrado mide: " + perimetroCuadrado + " cms");

//Area del cuadrado
function areaCuadrado (lado) {
    return lado * lado;
}

//console.log("El área del cuadrado mide: " + areaCuadrado + " cms^2");
console.groupEnd();


//Código del Triangulo
console.group("Triangulo");
//Lados de triangulo
//const ladoTriangulo1 = 6;
//const ladoTriangulo2 = 6;
//const baseTriangulo = 4;
//const alturaTriangulo =5;
//console.log("Los lados del triángulo miden: " + ladoTriangulo1 + " cms, " + ladoTriangulo2 + " cms, " + baseTriangulo + "cms.");
//console.log("La altura del triangulo mide: " + alturaTriangulo + " cms");
//Perimetro del triangul
function perimetroTriangulo (lado1,lado2,base){
    return lado1 + lado2 + base;

} 
//console.log("El perimetro del triangulo mide: " + perimetroTriangulo + " cms");
//Area del triangulo
function areaTriangulo (base, altura) {
    return (base * altura)/2;
}
//console.log("El área del triangulo mide: " + areaTriangulo + " cms^2");
console.groupEnd();


//Código del Circulos
console.group("Circulos");
//Radio
//const radioCirculo = 4;
//console.log("El radio del circulo es " + radioCirculo + " cms.");
//Diametro
function diametroCirculo (radio){
    return radio * 2;
}
//console.log("El diametro del circulo es " + diametroCirculo + " cms.");
// PI
const PI = Math.PI;
//console.log("PI es " + PI + ".");
// Perimetro
function perimetroCirculo (radio){
    const diametro = diametroCirculo(radio);
    return diametro *PI;

} 

function alturaTrianguloIsosceles(trianguloGrandeLadoA, trianguloGrandeLadoB, trianguloGrandeLadoBase) {
    if (trianguloGrandeLadoA != trianguloGrandeLadoB) {
        console.error("Los lados a y b no son iguales");
    } else {
        let trianguloPequenoLadoA; // PENDIENTE
        const trianguloPequenoLadoB = trianguloGrandeLadoBase / 2;
        const trianguloPequenoLadoBase = trianguloGrandeLadoA;

        // ...

        const trianguloGrandeAltura = trianguloPequenoLadoA;
        return trianguloGrandeAltura;
    }
}
//console.log("El perimetro del circulo es " + perimetroCirculo + " cms.");
//Area
function areaCirculo (radio){
    return PI * (radio*radio);
}
//console.log("El area del circulo es " + areaCirculo + " cms.");
console.groupEnd();
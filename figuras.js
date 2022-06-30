//Codigo del cuadrado
//permite agrupar mensajes en la consola
console.group("Cuadrado")
const ladoCuadrado = 5;

console.log("Los lados del cuadrado miden: " + ladoCuadrado + " centimetros");


const perimetroCuadrado = ladoCuadrado*4;

console.log("El perimetro del cuadrado es: " + perimetroCuadrado + " centimetros");


const areaCuadrado = ladoCuadrado * ladoCuadrado;

console.log("El area del cuadrado es: " + areaCuadrado + " centimetros cuadrados");
//termina la agrupacion
console.groupEnd();
//Codigo del triangulo
console.group("Triangulo")
const ladoTriangulo = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;


console.log("Los lados del triangulo miden: " 
+ ladoTriangulo 
+ "cm, " 
+ ladoTriangulo2 
+ "cm, " 
+ baseTriangulo 
+ "cm"

);

const alturaTriangulo = 5.5;
console.log("La altura del triangulo es de: " + alturaTriangulo + " centimetros");


const perimetroTriangulo = ladoTriangulo + ladoTriangulo2 + baseTriangulo

console.log("El perimetro del triangulo es: " + perimetroTriangulo + " centimetros");

const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
console.log("El area del triangulo es: " + areaTriangulo + " centimetros cuadrados");

console.groupEnd();
//Código Circulo
console.group("Circulos");
//Radio
const radioCirculo = 4;
console.log("El radio del circulo mide: " + radioCirculo + " centimetros");
//Diametro

const diametroCirculo = radioCirculo * 2;
console.log("Los diametro del circulo mide: " + diametroCirculo + " centimetros");
//PI

const PI = Math.PI;
console.log("PI es: " + PI);
//Circunferencia
const perimetroCirculo = diametroCirculo * PI;
console.log("El perimetro del circulo mide: " + perimetroCirculo + " centimetros");
//Area
const areaCirculo = (radioCirculo * radioCirculo) * PI;
console.log("El area del circulo mide: " + areaCirculo + " centimetros cuadrados");

console.groupEnd();
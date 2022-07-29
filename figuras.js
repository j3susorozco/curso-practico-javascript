//Codigo del cuadrado
//permite agrupar mensajes en la consola
console.group("Cuadrado")
// const ladoCuadrado = 5;

// console.log("Los lados del cuadrado miden: " + ladoCuadrado + " centimetros");


function perimetroCuadrado(lado){
    return lado * 4;
}




//console.log("El perimetro del cuadrado es: " + perimetroCuadrado + " centimetros");



function areaCuadrado(lado){
    return lado * lado;
}



//console.log("El area del cuadrado es: " + areaCuadrado + " centimetros cuadrados");
//termina la agrupacion
console.groupEnd();
//Codigo del triangulo
console.group("Triangulo")
// const ladoTriangulo = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 4;


// console.log("Los lados del triangulo miden: " 
// + ladoTriangulo 
// + "cm, " 
// + ladoTriangulo2 
// + "cm, " 
// + baseTriangulo 
// + "cm"

// );

// const alturaTriangulo = 5.5;
// console.log("La altura del triangulo es de: " + alturaTriangulo + " centimetros");


function perimetroTriangulo(lado1,lado2,ladobase){
    return lado1 + lado2 + ladobase;
}





function areaTriangulo(base,altura){
    return (base * altura) / 2;
}





console.groupEnd();
//Código Circulo
console.group("Circulos");
//Radio
// const radioCirculo = 4;
// console.log("El radio del circulo mide: " + radioCirculo + " centimetros");
//Diametro

function diametroCirculo(radio){
    return radio* 2;
} 



//PI

const PI = Math.PI;
console.log("PI es: " + PI);

//Circunferencia
function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio);
    return diametro * PI;
} 

//Area
function areaCirculo(radio){
    return (radio * radio) * PI;
}

console.groupEnd();

//Aqui interactuamos con el html
function calcularPerimetroCuadrado(){
   const input = document.getElementById('InputCuadrado');
   const value = input.value;

   const perimetro = perimetroCuadrado(value);
   alert(perimetro);

};


function calcularAreaCuadrado(){
    const input = document.getElementById('InputCuadrado');
   const value = input.value;

   const area = areaCuadrado(value);
   alert(area);

    
};
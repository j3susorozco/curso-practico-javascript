
//Helpers
//calcula el promedio de la lista
function calcularMediaAritmetica(lista){
    const sumaLista = lista.reduce(
        function(valorAcumulado = 0, nuevoElemento){
            return valorAcumulado + nuevoElemento;
        }
    );

    const promedio = sumaLista / lista.length;
    return promedio;
}

//para calcular la mediana depende si el numero es par o impar
function esPar(numerito){
    return (numerito % 2 ===0);
      
}

//Calculadora de mediana
//calculamos la mediana de salarios
function medianaSalarios(lista){
    //accedemos a la posicion de la mitad del array - parseInt para quitar los decimales
    const mitad = parseInt(lista.length / 2);

    if(esPar(lista.length)){
        //si la lista es par necesitamos dos personitasMitad - para encontrar las dos necesitamos ir a la mitad y restarle 1
        const personitaMitad1 = lista[mitad - 1]
        const personitaMitad2 = lista[mitad]
        
        const mediana = calcularMediaAritmetica([personitaMitad1], [personitaMitad2])
        return mediana;
    }else{
        //si la lista es impar devuelve la posicion mitad
        const personitaMitad = lista[mitad];
        return personitaMitad;
    }
}



//Mediana General
//array con solo los salarios de las personas
const salariosCol = colombia.map(
    function(personita){
        return personita.salary;
    }
);

//ordena el array en orden ascendente -de menos a mayor
const salariosColSorted = salariosCol.sort(
    function(salaryA, salaryB){
        return salaryA - salaryB;
    }
);



const medianaGeneralCol = medianaSalarios(salariosColSorted);

//Mediana del top 10%
 


 const spliceStart = parseInt(salariosColSorted.length * 90) / 100;
 const spliceCount = salariosColSorted.length - spliceStart;




const salariosColTop10 = salariosColSorted.splice(
    spliceStart,
    spliceCount,
);


const medianaGeneralTop10 = medianaSalarios(salariosColTop10);


//llamamos la funcion con la lista de salarios ordendos
console.log({
    medianaGeneralCol,
    medianaGeneralTop10,
});
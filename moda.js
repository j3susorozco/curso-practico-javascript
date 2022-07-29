const lista1 = [

1,
2,
2,
2,
2,
2,
3,
4,
5,
7,
4,
3,
5,
];

//objeto vacio
const lista1Count = {}

//llena el objeto con el método map que recorre el array
lista1.map(
        
        function (elemento){
            //condicion que valida si el elemento que se recibe del array ya existe como un elemento en el objeto lista1Count
            if(lista1Count[elemento]){
                //suma 1 a cada una de las posiciones dentro de los objetos cuando se repite
                lista1Count[elemento] += 1;
            }else{
                //cuando no existe el elemento todavia se crea el elemento y por defecto ha aparecido una sola vez
            lista1Count[elemento] = 1;
            }
        }

    );

//objeto que se convierte en un array 
//cual es el elemento mas grande
const lista1Array = Object.entries(lista1Count).sort(

    function(elementoA, elementoB){
        //ordena el array con los elementos con menos repeticiones
        return elementoA[1] - elementoB[1];
    }
);

//busca el ultimo en la ultima posicion del array. si un array tiene 5 elementos la ultima posicion es 4 porque empieza desde 0, por eso se le resta -1
const moda = lista1Array[lista1Array.length - 1];
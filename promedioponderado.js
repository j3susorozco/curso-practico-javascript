
//Creamos array de objetos
const notes = [

    {
        course: "Educacion Fisica",
        note: 10,
        credit: 2,
    },
    {
        course: "Programacion",
        note: 8,
        credit: 5,
    },
    {
        course: "Finanzas Personales",
        note: 7,
        credit: 5,
    }

];
//multiplicamos la nota por el numero de creditos y nos devuelve un nuevo array modificado
const notesWithCredit = notes.map(
    function(noteObject){
        return noteObject.note * noteObject.credit;
    }
);

//sumamos todos los elementos del arreglo ya multiplicados

const sumOfNotesWithCredit = notesWithCredit.reduce(
    function(sum = 0, newVal){
        return sum + newVal;
    }
);

//se crea un nuevo array unicamente con los creditos de la materias
const credits = notes.map(
    function(nodeObject){
        return nodeObject.credit;
    }
);

//recorre el array y suma los creditos
const sumOfCredits = credits.reduce(
    function (sum = 0, newVal){
        return sum + newVal;
    }
);


//se hace la division de ambas sumas
const promedioPonderadoNotasconCreditos = sumOfNotesWithCredit / sumOfCredits;

// ----- AQUI SE CREAN LAS VARIABLES GLOBALES -----

var timer = 10;
var intervalId;


// ----- AQUI VAN LAS FUNCIONES ------



// --- Funcion del timer ---
function run (){
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
};

function decrement(){
    timer--;
    $("#timer").text(timer);
    //$("#prueba").text(timer)

};
 


// --- Funcion display de preguntas + respuestas
var lasPreguntas = [
    {
        pregunta : "¿Cómo me llamo?",
        respuesta : {
            a: "Claros",
            b: "Carlos",
            c : "Charlie Charlie",
        },
        correctAnswer: "c"
    },
    {
       pregunta : "How old am I?",
       respuesta: {
           a: "20",
           b: "30",
           c: "40",
       },
       correctAnswer: "a"

    },
];


function displayP(){

    for (var j = 0; j < lasPreguntas.length; j++) {
    
    


        $(".containerPregunta").append("<div class='pregunta col-md-12 col-12 align-self-center'>" + lasPreguntas[j].pregunta + "</div>");

            // -- Despliega las opciones, convirtiendo parte del objeto en array ---
            var opciones = Object.values(lasPreguntas[j].respuesta);
            console.log(opciones);

            for (var i = 0; i < opciones.length; i++) {
                $(".containerOpciones").append("<div class='opciones col-12'>"+ opciones[i] +"</div");
            };
    }       
};




$("#start").click(function(){
    $(this).hide();
    run();
    setTimeout(displayP, 1000);
});
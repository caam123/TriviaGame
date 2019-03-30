// ----- AQUI SE CREAN LAS VARIABLES GLOBALES -----

var timer = 10;
var intervalId;
var j = 0;


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
            a: ["Claros", false],
            b: ["Carlos", true],
            c : "Charlie Charlie",
        },
        imgURL: "",
    },
    {
       pregunta : "How old am I?",
       respuesta: {
           a: "20",
           b: "30",
           c: "40",
       },
       
    },
];


function displayP(){
    run();
    $(".containerPregunta").append("<div class='pregunta col-md-12 col-12 align-self-center'>" + lasPreguntas[j].pregunta + "</div>");

        // -- Despliega las opciones, convirtiendo parte del objeto en array ---
        var opciones = Object.values(lasPreguntas[j].respuesta);
        for (var i = 0; i < opciones.length; i++) {
            $(".containerOpciones").append("<div class='opciones col-12' data-correct=" + opciones[i][1]+ ">" + opciones[i][0] +"</div");
        };     
    
};

function check(){

    console.log($(this));


};


$("#start").click(function(){
    $(this).hide();
    displayP();
}); 

$(document).on("click", ".opciones", check);
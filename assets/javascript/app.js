// ----- AQUI SE CREAN LAS VARIABLES GLOBALES -----

var timer = 10;
var intervalId;
var j = 0;
var wins = 0;
var losses = 0;

// ----- AQUI VAN LAS FUNCIONES ------



// --- Funcion del timer ---
function run (){
    timer=10;
    $("#timer").text(timer);
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
};

function stop(){
    clearInterval(intervalId);
}

function decrement(){
    timer--;
    $("#timer").text(timer);
    //$("#prueba").text(timer)

};
 


// --- Funcion display de preguntas + respuestas
var lasPreguntas = [
    {
        pregunta : "What is the capital City of Nevada?",
        respuesta : {
            a: ["Las Vegas", false],
            b: ["Reno", false],
            c:["Carson City", true],
        },
        imgURL: "assets/img/nevada.png",
        correctAnswer: "Carson City",
    },
    {
       pregunta : "What is the Capital City of Texas?",
       respuesta: {
           a: ["Dallas", false],
           b: ["Austin", true],
           c: ["San Antonio", false],

       },
       imgURL: "assets/img/texas.png",
       correctAnswer: "Austin"
    },
];


function displayP(){
    $(".imgAnswer").empty();
    $(".containerPregunta").empty();
    $(".containerOpciones").empty();
    run();
    $("#timer").show();
    console.log("timer working");
 

    $(".containerPregunta").append("<div class='pregunta col-md-12 col-12 align-self-center'>" + lasPreguntas[j].pregunta + "</div>");

        // -- Despliega las opciones, convirtiendo parte del objeto en array ---
        var opciones = Object.values(lasPreguntas[j].respuesta);
        for (var i = 0; i < opciones.length; i++) {
            $(".containerOpciones").append("<div class='opciones col-12' data-correct=" + opciones[i][1]+ ">" + opciones[i][0] +"</div");
        };     

     setTimeout(score,2000);
};

function score(){
    if(j === lasPreguntas.length){
        $(".imgAnswer").empty();
        $(".containerPregunta").empty();
        $(".opciones").hide() 
        $("#timer").hide();
    
        $(".containerPregunta").append("<div class='respuesta score col-md-6 col-sm-6 align-self-center'>" + "Wins: "+ wins + "</div");
        $(".containerPregunta").append("<div class='respuesta score col-md-6 col-sm-12 align-self-center'>" + "Wins: "+ losses + "</div");
        $("#start").text("Try Again");
        $("#start").show();
        j=0;
    
    };
};

//Esta funcion solo esconde el timer antes de mostrar el total score porque no supe como resolver esto de forma mas decente
function hideTimer(){
    $("#timer").hide();
}


function check(){
var dataCorrect = ($(this).attr("data-correct"));

stop();

$(".containerPregunta").empty();
$(".opciones").hide() 
$("#timer").hide();
$(".imgAnswer").empty();


if (dataCorrect === "false") {
    $(".containerPregunta").append("<div class='respuesta col-md-12 col-12 align-self-center'>" + "Nope! The correct answer was " + lasPreguntas[j].correctAnswer + "</div");
    losses++;
}else{
    $(".containerPregunta").append("<div class='respuesta col-md-12 col-12 align-self-center'>" + "Yep! That's correct" + "</div");
    wins++;
}
$(".imgAnswer").append($("<img class='center'>").attr("src", lasPreguntas[j].imgURL));
j++;

setTimeout(displayP,1000);

};


$("#start").click(function(){
    $(this).hide();
    displayP();
}); 

$(document).on("click", ".opciones", check);

// ----- AQUI SE CREAN LAS VARIABLES GLOBALES -----

var timer = 10;
var intervalId;
var j = 0;
var wins = 0;
var losses = 0;

// ----- AQUI VAN LAS FUNCIONES ------



// --- Funcion del timer ---
function run (){

    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
    timer=10;
    $("#timer").text(timer);

};

function stop(){
    clearInterval(intervalId);
}

function decrement(){
    timer--;
    $("#timer").text(timer);
    if (timer === 0){
        stop();
        check();

    }
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

    if(j < lasPreguntas.length){

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
    }else{
    setTimeout(score,500);
    }


};

function score(){
        $(".imgAnswer").empty();
        $(".containerPregunta").empty();
        $(".opciones").empty() 
        $("#timer").hide();
        stop();
    
        $(".containerPregunta").append("<div class='respuesta score col-12 col-sm-6 align-self-center'>" + "Correct: "+ wins + "</div");
        $(".containerPregunta").append("<div class='respuesta score col-md-6 col-12 align-self-center'>" + "Wrong: "+ losses + "</div");


        $("#start").text("Try Again");
        $("#start").show();
        j=0;
        wins = 0;
        losses = 0;
    
};



function check(){
var dataCorrect = ($(this).attr("data-correct"));

stop();

$(".containerPregunta").empty();
$(".opciones").hide() 
$("#timer").hide();
$(".imgAnswer").empty();


if (dataCorrect === "false" || timer === 0) {
    $(".containerPregunta").append("<div class='respuesta col-md-12 col-12 align-self-center'>" + "Nope! The correct answer was " + lasPreguntas[j].correctAnswer + "</div");
    losses++;
}else{
    $(".containerPregunta").append("<div class='respuesta col-md-12 col-12 align-self-center'>" + "Yep! That's correct" + "</div");
    wins++;
}
$(".imgAnswer").append($("<img class='center'>").attr("src", lasPreguntas[j].imgURL));
j++;

setTimeout(displayP,1500);

};


$("#start").click(function(){
    $(this).hide();
    displayP();
}); 

$(document).on("click", ".opciones", check);

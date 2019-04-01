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
    timer=5;
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
        pregunta : "1. What is the capital City of Nevada?",
        respuesta : {
            a: ["Las Vegas", false],
            b: ["Reno", false],
            c:["Carson City", true],
        },
        imgURL: "assets/img/nevada.png",
        correctAnswer: "Carson City",
    },
    {
       pregunta : "2. What is the Capital City of California?",
       respuesta: {
           a: ["Beverly Hills 90210", false],
           b: ["Los Angeles", false],
           c: ["Sacramento", true],

       },
       imgURL: "assets/img/california.png",
       correctAnswer: "Sacramento"
    },
    {
        pregunta : "3. What is the Capital City of Illinois?",
        respuesta: {
            a: ["Chicago", false],
            b: ["Springfield", true],
            c: ["Rockford", false],
 
        },
        imgURL: "assets/img/illinois.png",
        correctAnswer: "Springfield"
     },
     {
        pregunta : "4. What is the Capital City of Utah?",
        respuesta: {
            a: ["Salt Lake City", true],
            b: ["West Jordan", false],
            c: ["Provo", false],
 
        },
        imgURL: "assets/img/utah.png",
        correctAnswer: "Salt Lake City"
     },
     {
        pregunta : "5. What is the Capital City of Nuevo Mexico?",
        respuesta: {
            a: ["Santa Fe", true],
            b: ["Albuquerque", false],
            c: ["Las Cruces", false],
 
        },
        imgURL: "assets/img/nuevomexico.png",
        correctAnswer: "Santa Fe"
     },
     {
        pregunta : "6. What is the Capital City of Arizona?",
        respuesta: {
            a: ["Tucson", false],
            b: ["Phoenix", true],
            c: ["Scottsdale", false],
 
        },
        imgURL: "assets/img/arizona.png",
        correctAnswer: "Phoenix"
     },
     {
        pregunta : "7. What is the Capital City of Massachusetts?",
        respuesta: {
            a: ["Bristol", false],
            b: ["Hampshire", false],
            c: ["Boston", true],
 
        },
        imgURL: "assets/img/massa.png",
        correctAnswer: "Boston"
     },
     {
        pregunta : "8. What is the Capital City of Washington?",
        respuesta: {
            a: ["Seattle", false],
            b: ["Olympia", true],
            c: ["Washington D.C.", false],
 
        },
        imgURL: "assets/img/washington.png",
        correctAnswer: "Olympia"
     },
     {
        pregunta : "9. What is the Capital City of Nueva York?",
        respuesta: {
            a: ["Manhattan", false],
            b: ["Nueva York", false],
            c: ["Albany", true],
 
        },
        imgURL: "assets/img/nuevayork.png",
        correctAnswer: "Albany"
     },
     {
        pregunta : "10. What is the Capital City of Florida?",
        respuesta: {
            a: ["Miami", false],
            b: ["Tallahassee", true],
            c: ["Orlando", false],
 
        },
        imgURL: "assets/img/florida.png",
        correctAnswer: "Tallahassee"
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
    
        $(".containerPregunta").append("<div class='pregunta col-md-8 col-12 align-self-center'>" + lasPreguntas[j].pregunta + "</div>");
    
            // -- Despliega las opciones, convirtiendo parte del objeto en array ---
            var opciones = Object.values(lasPreguntas[j].respuesta);
            for (var i = 0; i < opciones.length; i++) {
                $(".containerOpciones").append("<div class='opciones col-md-8 col-12' data-correct=" + opciones[i][1]+ ">" + opciones[i][0] +"</div");
            };     
    }else{
    setTimeout(score,2500);
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


if (dataCorrect === "false") {
    $(".containerPregunta").append("<div class='respuesta col-md-6 col-12 align-self-center incorrect'>" + "Nope! The correct answer was " + lasPreguntas[j].correctAnswer + "</div");
    losses++;
}else if (timer === 0){
    $(".containerPregunta").append("<div class='respuesta col-md-6 col-12 align-self-center incorrect'>" + "Time's up! The correct answer was " + lasPreguntas[j].correctAnswer + "</div");
    losses++;

}else {
    $(".containerPregunta").append("<div class='respuesta col-md-6 col-12 align-self-center correct'>" + "Yep! That's correct" + "</div");
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

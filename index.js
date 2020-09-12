var buttonColors = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var level = 0;
var count = 0;

function nextSequence() {
    var randomNum = Math.floor(Math.random() * 4);
    var randomColor = buttonColors[randomNum];
    gamePattern.push(randomColor);
    animation(randomColor);
    playSound(randomColor);
    console.log("once")
    level++;

}



$("body").keydown(function () {
    if (level === 0) {
        console.log("heyloo");
        $("#level-title").text("Level:"+level);
        count = 0;
        userClickedPattern = [];
        nextSequence();
    }
});




function playSound(x) {
    var audio = new Audio(x + ".mp3");
    audio.play();

}

function animation(y) {
    $("#" + y).addClass("pressed");
    setTimeout(function () {
        $("#" + y).removeClass("pressed");
    }, 100);

}

$(".btn").on("click", function () {
    var userChosenColour = this.id;
    userClickedPattern.push(userChosenColour);
    playSound(userChosenColour);
    animation(userChosenColour);
    count++;
    console.log(count);
    if (count === level){
        if (JSON.stringify(userClickedPattern)==JSON.stringify(gamePattern)){
            nextSequence();
            count = 0;
            $("#level-title").text("level:"+level);
            userClickedPattern = [];
        }
        else{
            console.log(userClickedPattern);
            console.log(gamePattern);
            var wromg = new Audio("sounds/wrong.mp3");
            wromg.play();
            level = 0;
            $("#level-title").text("press any key to restart");
            gamePattern=[];
            userClickedPattern=[];
            count = 0;

        }
        
    }
    else{
        console.log("Waiting for count to match");
    }
});






var buttonColors = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var level = 0;
var count = 0;

function nextSequence() {
    var randomNum = Math.floor(Math.random() * 4);
    var randomColor = buttonColors[randomNum];
    gamePattern.push(randomColor);
    autoAnime(randomColor);
    playSound(randomColor);
    console.log("once")
    level++;

}



$("body").keydown(function () {
    if (level === 0) {
        console.log("heyloo");
        $("#level-title").text("Level:" + level);
        count = 0;
        userClickedPattern = [];
        nextSequence();
    }
});




function playSound(x) {
    var audio = new Audio("sounds/" + x + ".mp3");
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
    gameCheck();
    console.log(count);
    if (count === level) {
        checkAnswer();
    } else {
        console.log("Waiting for count to match");
    }
});

function gameOver() {
    $("body").addClass("game-over");
    setTimeout(function () {
        $("body").removeClass("game-over");
    }, 200);
    var wromg = new Audio("sounds/wrong.mp3");
    wromg.play();

    $("#level-title").text("Press any key to start !!")


}



function checkAnswer() {
    if (JSON.stringify(userClickedPattern) == JSON.stringify(gamePattern)) {
        setTimeout(nextSequence,400);
        count = 0;
        $("#level-title").text("level:" + level);
        userClickedPattern = [];
    } else {
        console.log(userClickedPattern);
        console.log(gamePattern);
        gameOver();
        level = 0;
        $("#level-title").text("press any key to restart");
        gamePattern = [];
        userClickedPattern = [];
        count = 0;

    }
}

function gameCheck() {
    var lent = gamePattern.length;
    if (count > 0 && lent === 0) {
        gameOver();
    }
}

function autoAnime(z) {
    $("#" + z).fadeOut(100).fadeIn(100);
}

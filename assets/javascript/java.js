//VARIABLES
let gem1 = 0;
let gem2 = 0;
let gem3 = 0;
let gem4 = 0;
let goal = 0;
let guess = 0;
let victory = 0;
let losses = 0;
let gemArray = [];
let value = 0;
let value2 = 0;

// Image Variables
let birthstones = [
    "./assets/images/Garnet-January.png",
    "./assets/images/Amethyst-February.png",
    "./assets/images/Aquamarine-March.png",
    "./assets/images/Diamond-April.png",
    "./assets/images/Emerald-May.png",
    "./assets/images/Alexandrite-June.png",
    "./assets/images/Ruby-July.png",
    "./assets/images/Peridot-August.png",
    "./assets/images/Sapphire-September.png",
    "./assets/images/Opal-October.png",
    "./assets/images/Citrine-November.png",
    "./assets/images/Tanzanite-December.png"
];
let stoneArray = [];

//FUNCTIONS
$(document).ready(function () {
    jRandom();
    gRandom();

});

function jRandom() {
    //create goal value for game
    goal = Math.floor(Math.random() * 120 + 19);
    //create the random values for the gems
    for (let i = 0; i < 4; i++) {
        let value = 0;
        console.log(i);
        randomValue();
        function randomValue() {
            value = Math.floor(Math.random() * birthstones.length);
            console.log(value);
            if (gemArray.includes(value)) {
                randomValue();
            } else {
                console.log(value);
                gemArray.push(value);            
            }
        }
    }

    //setting the gem values from array
    gem1 = gemArray[0];
    console.log("Gem Values: " + gemArray);
    gem2 = gemArray[1];
    gem3 = gemArray[2];
    gem4 = gemArray[3];
    //logging the numbers
    logNumbers();
    $('#gem1').val(gem1);
    $('#gem2').attr("value", gem2);
    $('#gem3').attr("value", gem3);
    $('#gem4').attr("value", gem4);
    $('#goal').html(goal);
    console.log($('#gem1').val());
}
//Image Functions of Games
//generate images of the buttons 
function gRandom() {
    for (let g = 0; g < 4; g++) {
        let month = 0;
        console.log("g value= " +g);
        randomMonth();
        function randomMonth() {
            month = Math.floor(Math.random() * birthstones.length);
            console.log(month);
            if (stoneArray.includes(month)) {
                randomMonth();
            } else {
                console.log(month);
                stoneArray.push(month);
            }
        }
    }
    console.log("Stone Array: " + stoneArray);
    //setting gem images to buttons
    $('#gem1').css("background-image", "url(" + birthstones[stoneArray[0]] + ")");
    $("#gem2").css("background-image", "url(" + birthstones[stoneArray[1]] + ")");
    $("#gem3").css("background-image", "url(" + birthstones[stoneArray[2]] + ")");
    $("#gem4").css("background-image", "url(" + birthstones[stoneArray[3]] + ")");
}



//updating the guess array with new variable
$('.button').on('click', function () {
    let value2 = parseInt($(this).val());
    guess = parseInt(guess + value2);
    console.log(guess)
    console.log(typeof (value2));
    $('#guess').html(guess);
    runGame();
}
)

//function for random number generator of gem values
function randomNum() {
    value = Math.floor(Math.random() * 12 + 1);
    if (gemArray.includes(value)) {
        randomNum();
    }
}



//creates a console.log to know gem values and win condition
function logNumbers() {
    let note = [gem1, gem2, gem3, gem4, goal];
    console.log(note);
}


//Checking Win Conditions
function runGame() {
    if (guess > goal) {
        losses++;
        confirm('Loser!  Try Again')
        $('#losses').html("Losses: " + losses);
        reset();
    }
    else if (guess === goal) {
        victory++;
        alert('Congratulations You Have Won!')
        $('#victory').html("Wins: " + victory);
        reset();
    }
}

//Reset Game
function reset() {
    guess = 0;
    $('#guess').html(guess);
    gemArray=[];
    jRandom();
    gRandom();
}
//EXCESSIVE FIRST ATTEMPTS (JUST FOR LOG/REF)

//Test to see if any gem values [first attempt at coding this]
// function check() {
//     if (gem1 === gem2 || gem1 === gem3 || gem1 === gem4) {
//         randomNumberGenerator();
//     } else
//         if (gem2 === gem3 || gem2 === gem4) {
    //             randomNumberGenerator();
//         } else
//             if (gem3 === gem4) {
//                 randomNumberGenerator();
//             } else {
//                 start = true;
//             }
// }
// //Joey equation for filtering out array value
// let arr = ['cat','dog','fish'];
// let values=[];
// arr.filter(function(item)){
//     if(!values.includes(item)){
    //         values.push(item);
//         return true;
//     }
// }
    //Update Guess display
    // // function updateGuessValue() {
    //     for (let i = 0; i < guess.length; i++) {
    //         let total = 0;
    //         guess = total += i;
    //         console.log(guess)
    //         $('#guess').html(guess)
    //     }
    // }
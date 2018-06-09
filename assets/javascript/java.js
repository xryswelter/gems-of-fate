//VARIABLES
let gem1 = 0;
let gem2 = 0;
let gem3 = 0;
let gem4 = 0;
let goal = 0;
let guess = [];
let start = true;
let victory = 0;
let losses = 0;
let gemArray = [];
let value = 0;

// Image Variables
let birthstones = [
    "assets/images/Garnet-January.jpg",
    "assets/images/Amethyst-February.jpg",
    "assets/images/Aquamarine-March.jpg",
    "assets/images/Diamond-April.jpg",
    "assets/images/Emerald-May.jpg",
    "assets/images/Alexandrite-June.jpg",
    "assets/images/Ruby-July.jpg",
    "assets/images/Peridot-August.jpg",
    "assets/images/Sapphire-September.jpg",
    "assets/images/Opal-October.jpg",
    "assets/images/Citrine-November.jpg",
    "assets/images/Tanzantine-December.jpg"
];
let stoneArray = [];

//Image Functions
function gRandom() {
    for (let g = 0; g < 4; g++) {
        let month = Math.floor(Math.random() * birthstones.length);
        stoneArray.filter(function (month) {
            if (!stoneArray.includes(month)) {
                stoneArray.push(month);
                console.log(month);
            }
        })
        console.log(stoneArray);
        //setting gem images to buttons
        document.getElementById("gem1").style(background-image, stoneArray[0]);
        document.getElementById("gem2").src = stoneArray[1];
        document.getElementById("gem3").src = stoneArray[2];
        document.getElementById("gem4").src = stoneArray[3];
    }
}

//FUNCTIONS
function randomNum() {
    value = Math.floor(Math.random() * 12 + 1);
}

function check() {
    if (gemArray.includes(value)) {
        randomNum();
    }
}

function jRandom() {
    //create goal value for game
    goal = Math.floor(Math.random() * 120 + 19);
    //create the random values for the gems
    for (let i = 0; i < 4; i++) {
        randomNum();
        check();
        // console.log(value);
        if (gemArray.includes(value)) {
            let value = Math.floor(Math.random() * 12 + 1);
        } else {
            gemArray.push(value);
            // console.log(value);
            console.log(gemArray);
            console.log("yep")
        }
    }

    //setting the gem values from array
    gem1 = gemArray[0];
    gem2 = gemArray[1];
    gem3 = gemArray[2];
    gem4 = gemArray[3];
    //logging the numbers
    logNumbers();
    $('#gem1').attr("value", gem1);
    $('#gem2').attr("value", gem2);
    $('#gem3').attr("value", gem3);
    $('#gem4').attr("value", gem4);
    $('#goal').html(goal);
}

//creates a console.log to know gem values and win condition
function logNumbers() {
    let note = [gem1, gem2, gem3, gem4, goal];
    console.log(note);
}

//updating the guess array with new variable
$('#button').on('click', function () {
    let value = $(this).val();
    guess.push(value);
    updateGuessValue();
})

//Update Guess display
function updateGuessValue() {
    for (let i = 0; i < guess.length; i++) {
        let total = 0;
        guess = total += i;
        console.log(guess)
        $('#guess').html(guess)
    }
}

$(document).ready(function () {
    jRandom();
    gRandom();
    runGame();
});


//Checking Win Conditions
function runGame() {
    if (guess > goal) {
        losses++;
        confirm('Loser!  Try Again')
        $('#losses').html("Losses: " + losses);
    }
    else if (guess === goal) {
        victory++;
        alert('Congratulations You Have Won!')
        $('#victory').html("Wins: " + victory);
    }
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
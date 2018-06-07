//Variables
let gem1=0;
let gem2=0;
let gem3=0;
let gem4=0;
let goal=0;
let guess=[]];
let start=true;
// let total=0;
let victory=0;
let losses=0;

function randomNumberGenerator(){
gem1= Math.floor(Math.random()*13+1);
gem2= Math.floor(Math.random()*13+1);
gem3= Math.floor(Math.random()*13+1);
gem4= Math.floor(Math.random()*13+1);
goal=Math.floor(Math.random()*120+19)
logNumbers();
$('#gem1').attr("value", gem1);
$('#gem2').html("value", gem2);
$('#gem3').html("value", gem3);
$('#gem4').html("value", gem4);
$('#goal').html(goal);
}

//Test to see if any gem values 
function check(){
    if(gem1===gem2 || gem1===gem3 || gem1===gem4){
    randomNumberGenerator();
    } else 
    if(gem2===gem3 || gem2===gem4){
        randomNumberGenerator();
    } else 
    if(gem3===gem4){
        randomNumberGenerator();
    } else{
        start=true;
    }
}

//creates a console.log to know gem values and win condition
function logNumbers(){
    let note = [gem1,gem2,gem3,gem4,goal];
    console.log(note);
}

//updating the guess array with new variable
$('#button').on('click', function(){
    let value= $(this).val();
    guess.push(value);
    updateGuessValue();
})

//Update Guess display
function updateGuessValue(){
    for(let i=0; i<guess.length,i++){
        let total= 0;
        guess = total += i;
        console.log(guess)
        $('#guess').html(guess)
    }
}

document.onload(){
    if(start=false){
        randomNumberGenerator();
        check();
    } else{
        runGame();
    }
}
//Checking Win Conditions
function runGame(){
    if(guess>goal){
        losses++;
        confirm('Loser!  Try Again')
        $('#losses').html("Losses: " + losses);
    }
    else(guess===goal){
        victory++;
        alert('Congratulations You Have Won!')
        $('#victory').html("Wins: " + victory);
    } 
}
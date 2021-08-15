var input = require("readline-sync")

Math.random
function win(){
    console.log("win")
}
function lose(){
    console.log('You lose!')
}
// while (true){

function game(){
    player_choice = input.question('What do you pick? (rock, paper, scissors)')
    moves = ['rock', 'paper', 'scissors']
    computer_choice = moves[Math.floor(Math.random() * moves.length)]
    // computer_choice = math.random
    console.log (computer_choice)
    if (player_choice == computer_choice){
        console.log('Draw!')}
    if (player_choice == 'rock' && computer_choice == 'scissors'){
        win()}
    else if( player_choice == 'paper' && computer_choice == 'scissors'){
        lose()}
    else if (player_choice == 'scissors'&& computer_choice == 'paper'){
        win()}
    else if (player_choice == 'scissors' && computer_choice == 'rock'){
        lose()}
    else if (player_choice == 'paper' && computer_choice == 'rock'){
        win()}
    else if (player_choice =='rock'  && computer_choice == 'paper'){
        win()}
    }
game()
// var readline=require("readline-sync")
// var aGain=readline.question("enter the")

aGain = input.question('Do you want to play again? (y or n)')
if (aGain == 'y'){
        game()
    }
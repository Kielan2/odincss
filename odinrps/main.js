document.getElementById('shoot').addEventListener('click', rpsTwo)


function rps(){
    let random = Math.random()
    if (random < .33){
        return 'rock'
    } else if (random < .66){
        return 'paper'
    } else {
        return 'scissors'
    }
}

let computerWins = 0
document.getElementById('computer').innerText = computerWins
let playerWins = 0
document.getElementById('player').innerHTML = playerWins
let draws = 0
document.getElementById('draw').innerHTML = draws

function rpsTwo(){
    let playerChoice = document.querySelector('.playerChoice').value
    let botChoice = rps()
    if ( (playerChoice === 'rock' && botChoice === 'scissors') ||
    (playerChoice === 'paper' && botChoice === 'rock') || 
    (playerChoice === 'scissors' && botChoice === 'paper') ){
        document.querySelector('.winner').innerText ='You Win'
        playerWins += 1;
    } else if (playerChoice === botChoice){
        document.querySelector('.winner').innerText ='You Tied'
        draws++    
    } else {
        document.querySelector('.winner').innerText ='You Lose'
        computerWins++ 
    }
}


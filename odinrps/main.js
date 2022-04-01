document.getElementById('rock').addEventListener('click', computerPlay)
document.getElementById('paper').addEventListener('click', computerPlay)
document.getElementById('scissors').addEventListener('click', computerPlay)

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


function rpsTwo(playerChoice){
    let botChoice = rps()
    if ( (playerChoice === 'rock' && botChoice === 'scissors') ||
    (playerChoice === 'paper' && botChoice === 'rock') || 
    (playerChoice === 'scissors' && botChoice === 'paper') ){
        return 'You Win'
    } else if (playerChoice === botChoice){
        return 'You Tied'    
    } else {
        'You Lose'
    }
}

function rpsThree(arr){
    arr.forEach( choice => rpsTwo(choice) )
}

rpsThree(['rock', 'paper', 'scissors'])
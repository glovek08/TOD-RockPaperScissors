/* Store the user pick from amongst three options [DONE]*/
/* Create a variable to store a randomly generated number within 1-3 that corresponds to the computer's pick [DONE]*/
/* Create a function that takes both variables and compares them with the following logic: 
    Rock > Scissors, Scissors > Paper, Paper > Rock */
/* Reset the variables and radio inputs, and return the winning player */
/*While I didn't explicitly follow the project's assignment, I added options using radio buttons in order to reduce computing and limit what the user can do.*/
document.addEventListener('DOMContentLoaded', () => {
    const radioButtons = document.getElementsByName("user-pick");
    const submitButton = document.getElementById('submit');
    const resultDiv = document.getElementById('result');
    let roundCount = 0;
    let userScore = 0;

    submitButton.addEventListener('click', () => {
        submitButton.innerText = 'PLAY';
        let userPick = getUserPick();
        let computerPick = getComputerPick();
        console.log(`User Pick: ${userPick}`);
        console.log(`Computer Pick: ${computerPick}`);
        /* TODO: Control if player doens't check radio button */
        if (roundCount >= 4) {
            submitButton.innerText = 'PLAY AGAIN!';
            resultDiv.textContent = '';
            userScore = 0;
            roundCount = 0;
        } else {
            playSet(userPick, computerPick);
            roundCount++;
        }
        console.log(userScore);
        clearContent();
    })
    const getUserPick = () => {
        let userPick = '';
        for (let i = 0; i < radioButtons.length; i++) {
            if (radioButtons[i].checked) {
                userPick = radioButtons[i].value;
                break;
            }
        }
        return userPick;
    }
    const getComputerPick = () => {
        const randomNumber = Math.floor(Math.random() * 2) /* 0 = Rock, 1 = Paper, 2 = Scissor */;
        if (randomNumber === 0) {
            return 'ROCK';
        } else if (randomNumber === 1) {
            return 'PAPER';
        } else {
            return 'SCISSOR';
        }
    }
    const playSet = (userPick, computerPick) => {
        let roundResult = playRound(userPick, computerPick);
        if (roundResult === 1) {
            resultDiv.innerHTML += `VICTORY! USER: ${userPick}, COMPUTER: ${computerPick}<br>`;
            userScore++;
            return;
        } else if (roundResult === 0) {
            resultDiv.innerHTML += `TIE! USER: ${userPick}, COMPUTER: ${computerPick}<br>`;
            return;
        } else {
            resultDiv.innerHTML += `DEFEAT! USER: ${userPick}, COMPUTER: ${computerPick}<br>`;
            userScore--;
            return;
        }
    }
    const playRound = (userPick, computerPick) => { /* Returns 1 if user wins round, 0 if tie and -1 if computer wins.*/
        if (userPick === 'ROCK') {
            if (computerPick === 'ROCK') {
                return 0;
            } else if (computerPick === 'PAPER') {
                return -1;
            } else {
                return 1;
            }
        } else if (userPick === 'PAPER') {
            if (computerPick === 'ROCK') {
                return 1;
            } else if (computerPick === 'PAPER') {
                return 0;
            } else {
                return -1;
            }
        } else {
            if (computerPick === 'ROCK') {
                return -1;
            } else if (computerPick === 'PAPER') {
                return 1;
            } else {
                return 0;
            }
        }
    }
    const clearContent = () => {
        for (let i = 0; i < radioButtons.length; i++) {
            radioButtons[i].checked = false;
            console.log(`Radio button #${i} unchecked.`);
        }
    }
})

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

    submitButton.addEventListener('click', () => {
        console.log(`User Pick: ${getUserPick()}`);
        console.log(`Computer Pick: ${getComputerPick()}`);
        resultDiv.innerText = playRound(getUserPick(), getComputerPick());
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
    const playRound = (userPick, computerPick) => {
        if (userPick === 'ROCK') {
            if (computerPick === 'ROCK') {
                return `TIE! USER: ${userPick}, COMPUTER: ${computerPick}`;
            } else if (computerPick === 'PAPER') {
                return `DEFEAT! USER: ${userPick}, COMPUTER: ${computerPick}`;
            } else {
                return `VICTORY! USER: ${userPick}, COMPUTER: ${computerPick}`;
            }
        } else if (userPick === 'PAPER') {
            if (computerPick === 'ROCK') {
                return `VICTORY! USER: ${userPick}, COMPUTER: ${computerPick}`;
            } else if (computerPick === 'PAPER') {
                return `TIE! USER: ${userPick}, COMPUTER: ${computerPick}`;
            } else {
                return `DEFEAT! USER: ${userPick}, COMPUTER: ${computerPick}`;
            }
        } else {
            if (computerPick === 'ROCK') {
                return `DEFEAT! USER: ${userPick}, COMPUTER: ${computerPick}`;
            } else if (computerPick === 'PAPER') {
                return `VICTORY! USER: ${userPick}, COMPUTER: ${computerPick}`;
            } else {
                return `TIE! USER: ${userPick}, COMPUTER: ${computerPick}`;
            }
        }
    }
})

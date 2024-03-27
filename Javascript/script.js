
document.addEventListener('DOMContentLoaded', () => {
    const radioButtons = document.getElementsByName("user-pick");
    const submitButton = document.getElementById('submit');
    const resultDiv = document.getElementById('result');
    const userScoreEl = document.getElementById('user-score');
    const roundCountEl = document.getElementById('round-count');
    let roundCount = 0;
    let userScore = 0;

    submitButton.addEventListener('click', () => {
        submitButton.innerText = 'PLAY';
        let userPick = getUserPick();
        let computerPick = getComputerPick();
        console.log(`User Pick: ${userPick}`);
        console.log(`Computer Pick: ${computerPick}`);
        if (roundCount >= 5) {
            /* We should create another button to reset the match which becomes active when roundCount reaches 5
            also disable radio buttons and submitButton till the player clicks reset. */
            if (userScore > 0) {
                resultDiv.innerText = "YOU WIN!";
            } else if (userScore === 0) {
                resultDiv.innerText = "DRAW!";
            } else if (userScore < 0) {
                resultDiv.innerText = "YOU LOSE!";
            }
            submitButton.innerText = 'PLAY AGAIN';
            userScore = 0;
            roundCount = 0;
            clearContent();
            return;
        } else {
            playSet(userPick, computerPick);
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
        if (!userPick) {
            window.alert("PLEASE SELECT YOUR PICK!");
            return;
        }
        let roundResult = playRound(userPick, computerPick);
        roundCount++;
        roundCountEl.innerText = roundCount;
        if (roundResult === 1) {
            resultDiv.innerHTML = `<span class="victory">VICTORY! <span class="block">USER: ${userPick}</span><span class="block">COMPUTER: ${computerPick}</span></span>` + resultDiv.innerHTML;
            userScore++;
            userScoreEl.innerText = userScore;
            return;
        } else if (roundResult === 0) {
            resultDiv.innerHTML = `TIE! <span class="block">USER: ${userPick}</span><span class="block">COMPUTER: ${computerPick}</span>` + resultDiv.innerHTML;
            return;
        } else {
            resultDiv.innerHTML = `<span class="defeat">DEFEAT! <span class="block">USER: ${userPick}</span><span class="block">COMPUTER: ${computerPick}</span></span>` + resultDiv.innerHTML;
            userScore--;
            userScoreEl.innerText = userScore;
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
        }
    }
})

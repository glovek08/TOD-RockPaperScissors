/* Create a variable to store the user pick from amongst three options */
/* Create a variable to store a randomly generated number within 1-3 that corresponds to the computer's pick */
/* Create a function that takes both variables and compares them with the following logic: 
    Rock > Scissors, Scissors > Paper, Paper > Rock */
/* Reset the variables and radio inputs, and return the winning player */
/*From here down, only the solution specified in the project.*/
document.addEventListener('DOMContentLoaded', () => {
    const radioButtons = document.getElementsByName("user-pick");
    const submitButton = document.getElementById('submit');
    submitButton.addEventListener('click', () => {
        console.log(getUserPick());
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
})
const getComputerChoice = () => {
    let randomNumber = Math.floor(Math.random() * 2) /* 0 = Rock, 1 = Paper, 2 = Scissor */;
    if (randomNumber === 0) {
        return 'Rock';
    } else if (randomNumber === 1) {
        return 'Paper';
    }
}

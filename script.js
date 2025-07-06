function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function getComputerChoice() {
    choices = ['Rock', 'Paper', 'Scissors']
    return choices[getRandomInt(3)]
}


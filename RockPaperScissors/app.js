//select element
let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.getElementById("scrore-board");
const result_div = document.querySelector('.result');
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

const rockIconUser = document.getElementById("r-icon-user");
const paperIconUser = document.getElementById("p-icon-user");
const scissorsIconUser = document.getElementById("s-icon-user");
const rockIconComp = document.getElementById("r-icon-comp");
const paperIconComp = document.getElementById("p-icon-comp");
const scissorsIconComp = document.getElementById("s-icon-comp");
const icons = document.querySelectorAll('.icon')
console.log(icons)

//ecoute choix du joueur
function main(){
    rock_div.addEventListener('click', () => {
        icons.forEach(icon => {
            icon.classList.remove("active");
        });
        result_div.innerHTML = '';
        rockIconUser.classList.add("active");
        game("r");
    });
    paper_div.addEventListener('click', () => {
        icons.forEach(icon => {
            icon.classList.remove("active");
        });
        result_div.innerHTML = '';
        paperIconUser.classList.add("active");
        game("p");
    });
    scissors_div.addEventListener('click', () => {
        icons.forEach(icon => {
            icon.classList.remove("active");
        });
        result_div.innerHTML = '';
        scissorsIconUser.classList.add("active");
        game("s");
    });
}
main();

//genere choix ordinateur
function getComputerChoice(){
    const choices = ['r','p','s'];
    let randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
    
}
getComputerChoice();

// on genere le resultat du jeu
function game(userChoice){
    const computerChoice = getComputerChoice();
    let element = document.getElementById(computerChoice);
    let compIcon = document.getElementById(`${computerChoice}-icon-comp`);
    setTimeout(() => {compIcon.classList.add("active")}, 800);
    setTimeout(()=> {element.classList.add('choice-selected')}, 800);
    setTimeout(()=> {element.classList.remove('choice-selected')}, 1800);
    switch(userChoice + computerChoice) {
        case 'rs':
        case 'sp':
        case 'pr':
            setTimeout(() => win(userChoice, computerChoice), 2500) ; 
            break;
        case 'rp':
        case 'sr':
        case 'ps':
            setTimeout(() => lose(userChoice, computerChoice), 2500) ;
            break;
        case 'rr':
        case 'pp':
        case 'ss':
            setTimeout(() => draw(), 2500) ;
            break;
    }
}

function win(user, computer){
userScore++
userScore_span.innerHTML = userScore;
computerScore_span.innerHTML = computerScore;
result_div.innerHTML = `${convertToWorld(user)} beat ${convertToWorld(computer)}. You win ! 🔥🔥🔥`;
}

function lose(user,computer){
    computerScore++
    computerScore_span.innerHTML = computerScore;
    userScore_span.innerHTML = userScore;
    result_div.innerHTML = `${convertToWorld(computer)} beat ${convertToWorld(user)}. You loose... 💩💩💩`;
}

function draw(){
    computerScore_span.innerHTML = computerScore;
    userScore_span.innerHTML = userScore;
    result_div.innerHTML = `Equality ! 🌺`;
}

function convertToWorld(letter){
    if(letter === "r") return "Rock";
    if(letter === "p") return "Paper";
    return "Scissors";
}
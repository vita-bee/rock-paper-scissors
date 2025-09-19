


console.log("Hello World: this is rock paper scissors!")

function getComputerChoice() {

    let randomNum = Math.floor(Math.random() * 100);
	// console.log("random number:", randomNum);
    if (randomNum < 34) 
        return "Rock"
    else if ((randomNum >= 34) && (randomNum < 67)) 
        return "Paper"
    else 
        return "Scissors"
}

function getHumanChoice() {
    return prompt("Please enter you choice of rock, paper, or scissors", defaultValue="");
}

function capitalize(word){
		let first = word.slice(0,1)
		let rest = word.slice(1)
		return first.toUpperCase() + rest.toLowerCase()
}


function playGame(){
    let humanScore = 0
    let computerScore = 0

    function playRound (humanChoice, computerChoice) {
        humanChoice = capitalize(humanChoice)
        console.log("Computer chose:", computerChoice, "You chose:", humanChoice)
        if (humanChoice === computerChoice) {
            console.log("%cIT'S A TIE. NOBODY WINS.", "color: yellow; font-weight: bold;")
        } else if (humanChoice === "Rock"){
            switch (computerChoice){
                case "Paper": {
                    computerScore++
                    console.log("%cSORRY YOU LOSE, PAPER BEATS ROCK", "color: red; font-weight: bold;")
                    break 
                }
                case "Scissors": {
                    humanScore++
                    console.log("%cYOU WIN! SCISSORS BEAT ROCK", "color: green; font-weight: bold;")
                    break
                }
            }
        } else if (humanChoice === "Paper"){
            switch (computerChoice){
                case "Scissors": {
                    computerScore++
                    console.log("%cSORRY YOU LOSE, SCISSORS BEATS PAPER", "color: red; font-weight: bold;")
                    break 
                }
                case "Rock": {
                    humanScore++
                    console.log("%cYOU WIN! PAPER BEATS ROCK", "color: green; font-weight: bold;")
                    break
                }
            }
        } else if (humanChoice === "Scissors"){
            switch (computerChoice){
                case "Rock": {
                    computerScore++
                    console.log("%cSORRY YOU LOSE, ROCK BEATS SCISSORS", "color: red; font-weight: bold;")
                    break 
                }
                case "Paper": {
                    humanScore++
                    console.log("%cYOU WIN! SCISSORS BEAT PAPER", "color: green; font-weight: bold;")
                    break
                }
            }
        }
        console.log("Scores so far - Computer Score:", computerScore, "Your Score:", humanScore)
        return
    }

    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice()
        const computerSelection = getComputerChoice()
        console.log("****ROUND#:", `${i+1}`, "****")
        playRound(humanSelection, computerSelection)
    }
    console.log("--------------------------------------------------")
    console.log("%cGAME OVER", "color: pink; font-weight: bold;")
    console.log("%cFINAL SCORES - Computer Score:", "color: pink; font-weight: bold;", computerScore)
    console.log("%cYour Score:", "color: pink; font-weight: bold;", humanScore)
    if (computerScore === humanScore){
        console.log("%cIT'S A TIE, NOBODY WINS", "color: yellow; font-weight: bold;")
    } else if (computerScore > humanScore){
        console.log("%cSORRY YOU LOST", "color: red; font-weight: bold;")
    } else {
        console.log("%cYOU WIN!", "color: green; font-weight: bold;")
    }
}

playGame()
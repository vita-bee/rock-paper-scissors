


// console.log("Hello World: this is rock paper scissors!")
function capitalize(word){
		let first = word.slice(0,1)
		let rest = word.slice(1)
		return first.toUpperCase() + rest.toLowerCase()
}

function getComputerChoice() {

    let randomNum = Math.floor(Math.random() * 100);
    
	// console.log("random number:", randomNum);
    if (randomNum < 34){ 
        rockBtn.style.border = "blue solid 3px";
        return "Rock"
    } else if ((randomNum >= 34) && (randomNum < 67)) {
        paperBtn.style.border = "blue solid 3px";
        return "Paper"
    } else {
        scissorsBtn.style.border = "blue solid 3px";
        return "Scissors"
    }
}

// function getHumanChoice() {
    // return prompt("Please enter you choice of rock, paper, or scissors", defaultValue="");
//}

function playGame(){
    let humanScore = 0
    let computerScore = 0

    function playRound (humanChoice, computerChoice) {
        humanChoice = capitalize(humanChoice)
        //console.log("Computer chose:", computerChoice, "You chose:", humanChoice)
        roundResultMsg.textContent =  "computer:" + computerSelection + " humanSelection:" + humanSelection;
        roundResultMsg.style.backgroundColor = 'lightblue';
        //runningScoreBox.style.backgroundColor = 'orange';
        if (humanChoice === computerChoice) {
            //console.log("%cIT'S A TIE. NOBODY WINS.", "color: yellow; font-weight: bold;")
            roundResultMsg.textContent = "IT'S A TIE. NOBODY WINS.";
        } else if (humanChoice === "Rock"){
            switch (computerChoice){
                case "Paper": {
                    computerScore++
                    //console.log("%cSORRY YOU LOSE, PAPER BEATS ROCK", "color: red; font-weight: bold;")
                    roundResultMsg.textContent = "SORRY YOU LOSE, PAPER BEATS ROCK.";
                    break 
                }
                case "Scissors": {
                    humanScore++
                    //console.log("%cYOU WIN! SCISSORS BEAT ROCK", "color: green; font-weight: bold;")
                    roundResultMsg.textContent = "YOU WIN! ROCK BEATS SCISSORS.";
                    break
                }
            }
        } else if (humanChoice === "Paper"){
            switch (computerChoice){
                case "Scissors": {
                    computerScore++
                    //console.log("%cSORRY YOU LOSE, SCISSORS BEATS PAPER", "color: red; font-weight: bold;")
                    roundResultMsg.textContent = "SORRY YOU LOSE, SCISSORS BEATS PAPER.";
                    break 
                }
                case "Rock": {
                    humanScore++
                    //console.log("%cYOU WIN! PAPER BEATS ROCK", "color: green; font-weight: bold;")
                    roundResultMsg.textContent = "YOU WIN! PAPER BEATS ROCK.";
                    break
                }
            }
        } else if (humanChoice === "Scissors"){
            switch (computerChoice){
                case "Rock": {
                    computerScore++
                    //console.log("%cSORRY YOU LOSE, ROCK BEATS SCISSORS", "color: red; font-weight: bold;")
                    roundResultMsg.textContent = "SORRY YOU LOSE, ROCK BEATS SCISSORS.";
                    break 
                }
                case "Paper": {
                    humanScore++
                    //console.log("%cYOU WIN! SCISSORS BEAT PAPER", "color: green; font-weight: bold;")
                    roundResultMsg.textContent = "YOU WIN! SCISSORS BEAT PAPER.";
                    break
                }
            }
        }
        // console.log("Scores so far - Computer Score:", computerScore, "Your Score:", humanScore)
        compScore.textContent = computerScore;
        humScore.textContent = humanScore;
        return
    }
        
function fadeOutDiv(elementId, delayTime, fadeDuration) {
  const div = document.querySelector(elementId);

  if (!div) {
    console.error(`Element with ID '${elementId}' not found.`);
    return;
  }

  // Delay before starting the fade-out
  setTimeout(() => {
    let opacity = 1;
    const fadeInterval = 50; // Milliseconds between opacity changes
    const opacityStep = fadeInterval / fadeDuration; // How much to decrease opacity each interval

    const fadeEffect = setInterval(() => {
      if (opacity > .4) {
        opacity -= opacityStep;
        div.style.opacity = opacity;
      } else {
        clearInterval(fadeEffect); // Stop the interval when opacity reaches 0
        //div.style.display = 'none'; // Hide the element completely
      }
    }, fadeInterval);
  }, delayTime);
}

function reloadPage() {
  window.location.reload();
}

// Example usage: Fade out a div with ID 'myDiv' after 3 seconds (3000ms) over a duration of 1 second (1000ms)
// fadeOutDiv('myDiv', 3000, 1000);

        // const humanSelection = getHumanChoice();
        const roundMsg = document.querySelector("#roundMsg");
        const roundResultMsg = document.querySelector("#roundResultMsg");
        const gameButtons = document.querySelectorAll(".gameButton");
        const runningScoreBox = document.querySelector(".runningScoreBox");
        const compScore = document.querySelector("#computerScore");
        const humScore = document.querySelector("#humanScore");
        const para = document.createElement("p");
        const newGameBtn = document.createElement("button");
        let humanSelection = "";
        let computerSelection = "";


            gameButtons.forEach((gameButton) => {
                gameButton.addEventListener("click", (e) => {
                    gameButtons.forEach(btn => {btn.disabled = true;});
                    if ((humanScore < 5) && (computerScore < 5)) {
                        e.target.style.border = "red solid 3px";
                        humanSelection = capitalize(e.target.textContent);
                        computerSelection = getComputerChoice();
                        roundMsg.textContent = "Computer chose: " + computerSelection + " | You chose: " + humanSelection;
                        playRound(humanSelection, computerSelection);
                        gameButtons.forEach(btn => { btn.disabled = false; btn.style.border = "none";});
                    } 
                    if ((humanScore === 5) || (computerScore === 5)) {
                            gameButtons.forEach(btn => { btn.disabled = true; btn.style.border = "none";});
                            fadeOutDiv(".gameButtons", 200, 800);
                            roundResultMsg.remove();
                            if (humanScore === 5) {
                                para.textContent = "Game Over: YOU WIN !!!";
                            } else {
                                para.textContent = "Game Over: SORRY YOU LOST !!!";
                            }
                            runningScoreBox.appendChild(para);
                            newGameBtn.textContent = "NEW GAME";
                            newGameBtn.id = "newGameBtn";
                            runningScoreBox.appendChild(newGameBtn);
                            newGameBtn.addEventListener('click', reloadPage());
                            
                    }
                    
                });
            });    
        

        // console.log("****ROUND#:", `${i+1}`, "****")
        // console.log("--------------------------------------------------")
        // console.log("%cGAME OVER", "color: pink; font-weight: bold;")
        // console.log("%cFINAL SCORES - Computer Score:", "color: pink; font-weight: bold;", computerScore)
        // console.log("%cYour Score:", "color: pink; font-weight: bold;", humanScore)
        //if (computerScore === humanScore){
        //   console.log("%cIT'S A TIE, NOBODY WINS", "color: yellow; font-weight: bold;")
        //} else if (computerScore > humanScore){
        //   console.log("%cSORRY YOU LOST", "color: red; font-weight: bold;")
        //} else {
        //  console.log("%cYOU WIN!", "color: green; font-weight: bold;")
        //}
}

 playGame();
 








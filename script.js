// function computerPlay() {
// 	let options = [ 'rock', 'paper', 'scissors' ];

// 	let randomOption = options[Math.floor(Math.random() * options.length)];
// 	return randomOption;
// }

// function playRound(player, computerSelection) {
// 	console.log(player);
// 	console.log(computerSelection);

// 	if (player === 'rock' && computerSelection === 'paper') {
// 		computerScore++;
// 		return 'You Lose! Paper beats Rock';
// 	} else if (player === computerSelection) {
// 		return 'Even!';
// 	} else if (player === 'rock' && computerSelection === 'scissors') {
// 		playerScore++;
// 		return 'You Won! Rock beats Scissors';
// 	} else if (player === 'paper' && computerSelection === 'rock') {
// 		playerScore++;
// 		return 'You Won! Paper beats Rock';
// 	} else if (player === 'paper' && computerSelection === 'scissors') {
// 		computerScore++;
// 		return 'You Lose! Scissors beats Paper';
// 	} else if (player === 'scissors' && computerSelection === 'rock') {
// 		computerScore++;
// 		('You Lose! Rock beats Scissors');
// 	} else if (player === 'scissors' && computerSelection === 'paper') {
// 		playerScore++;
// 		return 'You Won! Scissors beats Paper';
// 	}
// }

// function game() {
// 	let i = 1;
// 	while (i <= 5) {
// 		const playerSelection = prompt('Choose rock, paper or scissors');
// 		const player = playerSelection.toLowerCase();
// 		const computerSelection = computerPlay();
// 		switch (player) {
// 			case 'rock':
// 			case 'paper':
// 			case 'scissors':
// 				console.log(playRound(player, computerSelection));
// 				i++;
// 				break;
// 			default:
// 				alert('Choose valid option');
// 		}
// 	}
// 	console.log(`player -> ${playerScore}:${computerScore} <-computer`);
// }
// let playerScore = 0;
// let computerScore = 0;

// game();

const playerSelectionRock = document.querySelector(`input[name="rock"]`);
const playerSelectionPaper = document.querySelector(`input[name="paper"]`);
const playerSelectionScissors = document.querySelector(`input[name="scissors"]`);
const playerSelectionRefresh = document.querySelector(`input[name="refresh"]`);
const computerChoice = document.getElementById('cat-choice');
const resultSign = document.getElementById('result-paragraph');
const playerScoreTable = document.getElementById('user-score');
const computerScoreTable = document.getElementById('cat-score');
const again = document.getElementById('again');
const button = document.getElementById('refresh-button');
const catHead = document.getElementById('cat-head-image');
const ul = document.getElementById('track');

let playerScore = 0;
let computerScore = 0;

playerSelectionRock.addEventListener('click', () => playRound('ROCK'));
playerSelectionPaper.addEventListener('click', () => playRound('PAPER'));
playerSelectionScissors.addEventListener('click', () => playRound('SCISSORS'));
playerSelectionRefresh.addEventListener('click', () => playRound('refresh'));

function computerPlay() {
	let options = [ 'ROCK', 'PAPER', 'SCISSORS' ];

	let randomOption = options[Math.floor(Math.random() * options.length)];
	return randomOption;
}

function changeComputerChoice() {
	computerChoice.classList.add('changed');
	catHead.src = './Cat2.svg';
	catHead.classList.add('changed-head');

	setTimeout(() => {
		computerChoice.classList.remove('changed');
		catHead.src = './Cat.svg';
		catHead.classList.remove('changed-head');
	}, 500);
}

function changeScore(result) {
	playerScoreTable.textContent = +playerScore;
	computerScoreTable.textContent = +computerScore;

	switch (result) {
		case 'player':
			playerScoreTable.classList.add('changed');
			setTimeout(() => {
				playerScoreTable.classList.remove('changed');
			}, 500);
			break;
		case 'computer':
			computerScoreTable.classList.add('changed');
			setTimeout(() => {
				computerScoreTable.classList.remove('changed');
			}, 500);
			break;
	}
}

function changeResult() {
	catHead.classList.add('changed-head');
	resultSign.classList.add('changed-glow');
	again.classList.add('changed-glow-again');
	button.classList.add('changed-glow-button');
	setTimeout(() => {
		catHead.classList.remove('changed-head');
		resultSign.classList.remove('changed-glow');
		again.classList.remove('changed-glow-again');
		button.classList.remove('changed-glow-button');
	}, 500);
}

function changeResultLose() {
	catHead.src = './Cat3.svg';
	catHead.classList.add('changed-head');
	resultSign.classList.add('changed-glow');
	resultSign.classList.add('result-background');
	again.classList.add('changed-glow-again');
	button.classList.add('changed-glow-button');
	setTimeout(() => {
		catHead.src = './Cat3.svg';
		catHead.classList.remove('changed-head');
		resultSign.classList.remove('changed-glow');
		again.classList.remove('changed-glow-again');
		button.classList.remove('changed-glow-button');
	}, 500);
}

function changeResultWin() {
	catHead.src = './Cat4.svg';
	catHead.classList.add('changed-head');
	resultSign.classList.add('changed-glow');
	resultSign.classList.add('result-background');
	again.classList.add('changed-glow-again');
	button.classList.add('changed-glow-button');
	setTimeout(() => {
		catHead.src = './Cat4.svg';
		catHead.classList.remove('changed-head');
		resultSign.classList.remove('changed-glow');
		again.classList.remove('changed-glow-again');
		button.classList.remove('changed-glow-button');
	}, 500);
}

function playRound(playerChoice) {
	const computerSelection = computerPlay();
	console.log(playerChoice);
	console.log(computerSelection);
	let result;

	if (playerChoice === 'refresh') {
		playerScore = 0;
		computerScore = 0;
		computerChoice.textContent = 'hmmm...';
		again.textContent = ' ';
		changeComputerChoice();
		ul.innerHTML = '';
		resultSign.classList.remove('result-background');
		resultSign.textContent = ' ';
		playerScoreTable.textContent = +playerScore;
		computerScoreTable.textContent = +computerScore;
		return;
	}

	if (playerChoice === 'ROCK' && playerScore + computerScore < 5) {
		if (computerSelection === 'PAPER') {
			computerChoice.textContent = 'PAPER';
			changeComputerChoice();
			const li = document.createElement('li');
			ul.appendChild(li);
			li.textContent = `${playerChoice}-${computerPlay()}`;
			ul.scrollTop = ul.scrollHeight;
			computerScore++;
			result = 'computer';
		} else if (computerSelection === 'SCISSORS') {
			computerChoice.textContent = 'SCISSORS';
			changeComputerChoice();
			const li = document.createElement('li');
			ul.appendChild(li);
			li.textContent = `${playerChoice}-${computerPlay()}`;
			ul.scrollTop = ul.scrollHeight;
			playerScore++;
			result = 'player';
		} else if (computerSelection === 'ROCK') {
			computerChoice.textContent = 'ROCK';
			changeComputerChoice();
			const li = document.createElement('li');
			ul.appendChild(li);
			li.textContent = `${playerChoice}-${computerPlay()}`;
			ul.scrollTop = ul.scrollHeight;
			return;
		}
	}

	if (playerChoice === 'PAPER' && playerScore + computerScore < 5) {
		if (computerSelection === 'ROCK') {
			computerChoice.textContent = 'ROCK';
			changeComputerChoice();
			const li = document.createElement('li');
			ul.appendChild(li);
			li.textContent = `${playerChoice}-${computerPlay()}`;
			ul.scrollTop = ul.scrollHeight;
			playerScore++;
			result = 'player';
		} else if (computerSelection === 'SCISSORS') {
			computerChoice.textContent = 'SCISSORS';
			changeComputerChoice();
			const li = document.createElement('li');
			ul.appendChild(li);
			li.textContent = `${playerChoice}-${computerPlay()}`;
			ul.scrollTop = ul.scrollHeight;
			computerScore++;
			result = 'computer';
		} else if (computerSelection === 'PAPER') {
			computerChoice.textContent = 'PAPER';
			changeComputerChoice();
			const li = document.createElement('li');
			ul.appendChild(li);
			li.textContent = `${playerChoice}-${computerPlay()}`;
			ul.scrollTop = ul.scrollHeight;
			return;
		}
	}

	if (playerChoice === 'SCISSORS' && playerScore + computerScore < 5) {
		if (computerSelection === 'ROCK') {
			computerChoice.textContent = 'ROCK';
			changeComputerChoice();
			const li = document.createElement('li');
			ul.appendChild(li);
			li.textContent = `${playerChoice}-${computerPlay()}`;
			ul.scrollTop = ul.scrollHeight;
			computerScore++;
			result = 'computer';
		} else if (computerSelection === 'PAPER') {
			computerChoice.textContent = 'PAPER';
			changeComputerChoice();
			const li = document.createElement('li');
			ul.appendChild(li);
			li.textContent = `${playerChoice}-${computerPlay()}`;
			ul.scrollTop = ul.scrollHeight;
			playerScore++;
			result = 'player';
		} else if (computerSelection === 'SCISSORS') {
			computerChoice.textContent = 'SCISSORS';
			changeComputerChoice();
			const li = document.createElement('li');
			ul.appendChild(li);
			li.textContent = `${playerChoice}-${computerPlay()}`;
			ul.scrollTop = ul.scrollHeight;
			return;
		}
	}

	if (playerScore + computerScore === 5) {
		if (computerScore > playerScore) {
			resultSign.textContent = 'YOU LOSE';
			again.textContent = 'START AGAIN';
			catHead.src = './Cat3.svg';
			changeResultLose();
		} else if (playerScore > computerScore) {
			resultSign.textContent = 'YOU WIN';
			again.textContent = 'START AGAIN';
			catHead.src = './Cat4.svg';
			changeResultWin();
		}
	}

	changeScore(result);
}

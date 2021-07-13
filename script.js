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
	let result;
	const li = document.createElement('li');

	if (playerScore + computerScore < 5) {
		ul.appendChild(li);
		li.textContent = `${computerSelection}-${playerChoice}`;
		ul.scrollTop = ul.scrollHeight;
	}

	if (ul.childElementCount === 6) {
		ul.removeChild(ul.childNodes[0]);
	}

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
			computerScore++;
			result = 'computer';
		} else if (computerSelection === 'SCISSORS') {
			computerChoice.textContent = 'SCISSORS';
			changeComputerChoice();
			playerScore++;
			result = 'player';
		} else if (computerSelection === 'ROCK') {
			computerChoice.textContent = 'ROCK';
			changeComputerChoice();
			return;
		}
	}

	if (playerChoice === 'PAPER' && playerScore + computerScore < 5) {
		if (computerSelection === 'ROCK') {
			computerChoice.textContent = 'ROCK';
			changeComputerChoice();
			playerScore++;
			result = 'player';
		} else if (computerSelection === 'SCISSORS') {
			computerChoice.textContent = 'SCISSORS';
			changeComputerChoice();
			computerScore++;
			result = 'computer';
		} else if (computerSelection === 'PAPER') {
			computerChoice.textContent = 'PAPER';
			changeComputerChoice();
			return;
		}
	}

	if (playerChoice === 'SCISSORS' && playerScore + computerScore < 5) {
		if (computerSelection === 'ROCK') {
			computerChoice.textContent = 'ROCK';
			changeComputerChoice();
			computerScore++;
			result = 'computer';
		} else if (computerSelection === 'PAPER') {
			computerChoice.textContent = 'PAPER';
			changeComputerChoice();
			playerScore++;
			result = 'player';
		} else if (computerSelection === 'SCISSORS') {
			computerChoice.textContent = 'SCISSORS';
			changeComputerChoice();
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

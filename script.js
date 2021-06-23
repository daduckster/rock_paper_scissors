function computerPlay() {
	let options = [ 'rock', 'paper', 'scissors' ];

	let randomOption = options[Math.floor(Math.random() * options.length)];
	return randomOption;
}

function playRound(player, computerSelection) {
	console.log(player);
	console.log(computerSelection);

	if (player === 'rock' && computerSelection === 'paper') {
		computerScore++;
		return 'You Lose! Paper beats Rock';
	} else if (player === computerSelection) {
		return 'Even!';
	} else if (player === 'rock' && computerSelection === 'scissors') {
		playerScore++;
		return 'You Won! Rock beats Scissors';
	} else if (player === 'paper' && computerSelection === 'rock') {
		playerScore++;
		return 'You Won! Paper beats Rock';
	} else if (player === 'paper' && computerSelection === 'scissors') {
		computerScore++;
		return 'You Lose! Scissors beats Paper';
	} else if (player === 'scissors' && computerSelection === 'rock') {
		computerScore++;
		('You Lose! Rock beats Scissors');
	} else if (player === 'scissors' && computerSelection === 'paper') {
		playerScore++;
		return 'You Won! Scissors beats Paper';
	}
}

function game() {
	let i = 1;
	while (i <= 5) {
		const playerSelection = prompt('Choose rock, paper or scissors');
		const player = playerSelection.toLowerCase();
		const computerSelection = computerPlay();
		switch (player) {
			case 'rock':
			case 'paper':
			case 'scissors':
				console.log(playRound(player, computerSelection));
				i++;
				break;
			default:
				alert('Choose valid option');
		}
	}
	console.log(`player -> ${playerScore}:${computerScore} <-computer`);
}
let playerScore = 0;
let computerScore = 0;

game();

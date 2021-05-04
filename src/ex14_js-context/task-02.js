function Hangman(word) {
	// new variables
	let resultWord = word.toLowerCase().split('');
	let wrongSymbols = [];
	let guessString = [];
	let maxErrors = 6;
	let lengthResult = resultWord.length;
	for (let i = 0; i < lengthResult; i++) {
		guessString[i] = '_';
	}
	// return constructor object
	return {
		// 	guess
		guess: function (symbol) {
			if (maxErrors > 0) {
				if (resultWord.some((i) => i === symbol.toLowerCase())) {
					for (let i = 0; i < lengthResult; i++) {
						if (resultWord[i] === symbol.toLowerCase()) {
							guessString[i] = symbol.toLowerCase();
						}
					}
					if (resultWord.join('') === guessString.join('')) {
						console.log(`${this.getGuessedString()} | You won!`);
						this.startAgain('webpurple');
						return this;
					}
					console.log(`${this.getGuessedString()}`);
				} else {
					wrongSymbols.push(symbol.toLowerCase());
					maxErrors--;
					console.log(
						`Wrong letter, errors left ${maxErrors} | ${this.getWrongSymbols().join(
							','
						)}`
					);
					return this;
				}
			} else {
				console.log('You lose :( Try again! -> .startAgain("webpurple")');
				return this;
			}
			return this;
		},
		// getGuessedString
		getGuessedString: function () {
			return guessString.join('');
		},
		// getErrorsLeftgetErrorsLeft
		getErrorsLeft: function () {
			return maxErrors;
		},
		// getWrongSymbols
		getWrongSymbols: function () {
			return wrongSymbols;
		},
		// getStatus
		getStatus: function () {
			return `${this.getGuessedString()} | errors left ${this.getErrorsLeft()}`;
		},
		// startAgain
		startAgain: function (newWord) {
			resultWord = newWord.toLowerCase().split('');
			maxErrors = 6;
			lengthResult = resultWord.length;
			wrongSymbols = [];
			guessString = [];
			for (let i = 0; i < lengthResult; i++) {
				guessString[i] = '_';
			}
			return this;
		},
	};
}

const hangman = new Hangman('webpurple');
module.exports = hangman;

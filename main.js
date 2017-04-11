var inquirer = require('inquirer');
var basicCard = require('./basic');
var clozeCard = require('./cloze');

//Counter
var count = 0;
var correctCount = 0;

// Create in instance of function basic(){} from card.js and assign it to basic quest
var firstPresident = new basicCard('Who was the first president of the U.S', 'George Washington');
var secondPresident = new basicCard('Who was the second president of the U.S', 'John Adams');

var basicQuestion = [firstPresident.front , secondPresident.front];
var basicAnswer = [firstPresident.back , secondPresident.back];
// Ask user if they want to play game with BASIC or CLOZE flashcards
inquirer.prompt([

		{
			type: 'list',
			name: 'choice',
			message: 'Do you want to play with basic or cloze flashcards ?',
			choices:['Basic', 'Cloze']
		}
	
	]).then(function(answer){
		//If the users choice is basic....
		if(answer.choice === 'Basic'){
			basic();
		}
		// If users answer is cloze.......
		else if(answer.choice === 'Cloze'){
			console.log('cloze');
		}
})
// Ask questions for basic flashCards. Using recursion to repeat
function basic() {
	if(count < 2){
		
		inquirer.prompt([
			{
				type:'input',
				name: 'input',
				message: basicQuestion[count]
			},
		])
		.then(function(answer){
			console.log(1);
			//Checks if users answer was correct
			if(answer.input === basicAnswer[count]){
				correctCount++;
				console.log(true);
			}
			else{
				console.log(false);
			}
			count++;
			basic();
		})
	}
	else{
		console.log('You got' ,correctCount, 'Right');
	}

}


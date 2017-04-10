var inquirer = require('inquirer');
var card = require('./card');
var basicData  = require('./basic');

var count = 0;


//Ask user if they want to play game with BASIC or CLOZE flashcards
inquirer.prompt([

		{
			type: 'list',
			name: 'choice',
			message: 'Do you want to play with basic or cloze flashcards ?',
			choices:['Basic', 'Cloze']
		}
	
	]).then(function(answer){

		if(answer.choice === 'Basic'){
			console.log("=================================");
			basic();
		}
		else if(answer.choice === 'Cloze'){
			console.log('cloze');
		}
})

//Ask questions for basic flashCards
function basic(){
	//Goes through 2 questions
	if(count < 2) {
		// Create in instance of function basic(){} from card.js and assign it to basic quest
		var basicQuest = new card(basicData[count].front, basicData[count].back);
		inquirer.prompt([
			{
				type:'input',
				name: 'question',
				message: basicQuest.front
			}
		])
		.then(function(answer){
			console.log(count);
			//Adds 1 to counter so it goes to next question
			count++;
			//Calls basic again to go to the next question
			basic();
		})
	}
	else{
		//Do something
	}
}
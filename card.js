//Gets JSON for basic game
var basQuest = require('./basic');

//Constructor
var basic = function(front, back) {
		this.front = front;
		this.back = back;
	}	

//exports function basic()
module.exports = basic;
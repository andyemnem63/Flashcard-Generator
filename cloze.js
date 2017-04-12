var cloze = function(text , cloze) {
		this.text = text;
		this.cloze = cloze;
		this.partial = this.text.replace(this.cloze, '...........');
}


// var thirdPresident = new cloze("George Washington was the third president of the U.S" , 'Thomas Jefferson');

// console.log('partial:' , thirdPresident.partial);

// console.log('cloze:' , thirdPresident.cloze);

// console.log('full_text:' , thirdPresident.text);

module.exports = cloze;
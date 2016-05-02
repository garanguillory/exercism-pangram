
var Pangram = function(input){

	var alphabet = 'abcdefghijklmnopqrstuvwxyz';
	var alphArray = alphabet.split('');

	this.isPangram = function(){
		var array = input.toLowerCase().split('');
		if(!input){
			return false
		} else {
			var count = 0;
				for(var i=0; i<alphArray.length; i++){
					if(array.includes(alphArray[i]) === true){
						count += 1;
					}
				}
			return count === 26 ? true : false;
		}

	}

};


module.exports = Pangram;


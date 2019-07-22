


let numberOne = 10,
	numberTwo = 20,
	deck = [1,2,3,4,5,6,7,8,9,10];


//Dom Variables
 let swapNumber = document.getElementById('swap_number'),
	randomNumber = document.getElementById('random_number'),
	randomPrint = document.getElementById('random'),
	textArea = document.getElementById('text_area');


	textArea.style.display='none';
	

//Swap 2 members
	swapNumber.addEventListener('click',function(){
		console.log('Befor swap:==='+"NumberOne="+numberOne
			+" and "+"NumberTwo="+numberTwo)
		swapData(numberOne,numberTwo);

	});

	function swapData(numberOne,numberTwo){
		numberOne = numberOne + numberTwo;
		numberTwo = numberOne - numberTwo;
		numberOne = numberOne - numberTwo;
		console.log('After swap:==='+"NumberOne="+numberOne
			+" and "+"NumberTwo="+numberTwo)

	}

	randomNumber.addEventListener('click',function(){
		console.log("yes print===="+"yesss");
		textArea.style.display='inline';
		textArea.innerText = 'My Random Number is:'+Math.floor(Math.random() * 100);

	});

	randomPrint.addEventListener('click',function(){
		console.log("yes print===="+Math.trunc(Math.random() * deck.length));

	});
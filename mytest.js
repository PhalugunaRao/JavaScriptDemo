

//Dom Variable

let textArea = document.getElementById('text_area'),
	dateTime = document.getElementById('date_time'),
	myImage = document.getElementById('myImage'),
	alertButton = document.getElementById('alert_button'),
	textAreaDocument = document.getElementById('text_area_document'),
	changeImage = document.getElementById('change_image');




//Date click Action
	dateTime.addEventListener('click',function(){
    textArea.innerText = Date();
    textAreaDocument = document.write('Hi Phalguna');
	});

	changeImage.addEventListener('click',function(){
    myImage.src='pic_bulboff.gif';
    
	});

	alertButton.addEventListener('click',function(){
		window.alert(5 + 6);
	})

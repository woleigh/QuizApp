$(document).ready(function(){

// Array for all elements and Objects	
var allObjects = [
{questionNu: 1,
 answers:["Germany","Algeria","Australia","Paraguay","China"],
 correctAnswer: 2,
 replyRight: "YOU ARE RIGHT",
 replyWrong: "YOU ARE WRONG",
 buttonCheck:["#button0","#button1","#button2","#button3","#button4"],
 flagInfo: "The flag of Australia is a defaced Blue Ensign: a blue field with the Union Jack in the canton (upper hoist quarter), and a large white seven-pointed star known as the Commonwealth Star in the lower hoist quarter."
},
{questionNu: 2,
 answers:["Turkey","Togo","Canada","Grenada","Brazil"],
 correctAnswer: 4,
 replyRight: "YOU ARE RIGHT",
 replyWrong: "YOU ARE WRONG",
 buttonCheck:["#button0","#button1","#button2","#button3","#button4"],
 flagInfo: "The national flag of Brazil ( is a blue disc depicting a starry sky spanned by a curved band inscribed with the national motto, within a yellow rhombus, on a green field. "
},
{questionNu: 3,
 answers:["Ghana","France","Scotland","Sweden","Argentina"],
 correctAnswer: 1,
 replyRight: "YOU ARE RIGHT",
 replyWrong: "YOU ARE WRONG",
 buttonCheck:["#button0","#button1","#button2","#button3","#button4"],
 flagInfo: "The national flag of France is a tricolour flag featuring three vertical bands coloured blue (hoist side), white, and red.Blue and red are the traditional colours of Paris, used on the city's coat of arms."
},
{questionNu: 4,
 answers:["Germany", "Portugal", "Mexico", "Thailand","Kenya"],
 correctAnswer: 0,
 replyRight: "YOU ARE RIGHT",
 replyWrong: "YOU ARE WRONG",
 buttonCheck:["#button0","#button1","#button2","#button3","#button4"],
 flagInfo: "The flag of Germany is a tricolour consisting of three equal horizontal bands displaying the national colours of Germany: black, red, and gold representing German Unity and Freedom"
},
{questionNu: 5,
 answers:["Peru", "Croatia", "Vietnam", "Poland","Nigeria"],
 correctAnswer: 4,
 replyRight: "YOU ARE RIGHT",
 replyWrong: "YOU ARE WRONG",
 buttonCheck:["#button0","#button1","#button2","#button3","#button4"],
 flagInfo: "The two unique sea-green bands represent the forests and abundant natural wealth of Nigeria while the white band represents peace."
}
];

// Global declaration of Variables
var indexCheck = 0;
var totalCorrectAnswers = 0;
var totalNumberQuestions = allObjects.length;


// Highlight Buttons when Clicked

$('.choicebutton').on('click', function(){
		$('.choicebutton').removeClass('clickbutton');
		$(this).addClass('clickbutton');
	});


// Actions to take when the Game Loads
$('.gamebutton').hide();
$('.genbutton').hide();
$('.scorebutton').hide();
questionGenerate();
	
	//Submit Answers

	$('.submitbutton').on('click', function(){
		checkAnswer();		 
	});
	//Generate New Question

	$('.genbutton').on('click', function(){
		$('.genbutton').hide();
		$('.submitbutton').show();
		questionGenerate();
	});

	//Start New Game
	$('.gamebutton').on('click', function(){
		newGame();
		questionGenerate();

	}); 

	//Show Final Score
	$('.scorebutton').on('click', function(){
		checkAnswer();	
	}); 

// New Game function

	function newGame(){
		indexCheck = 0;
		totalCorrectAnswers = 0;
		$('.feedback').text("READY");
		$('.choicebutton').removeClass('clickbutton');
		$('.gamebutton').hide();
		$('.submitbutton').show();
		$('.info').empty();


	} 

// Sound Functions
	function playOvation(){
	 	$('#ovation-sound')[0].play();
	 }

	
// Generate Questions

	function questionGenerate(){
			if(allObjects[indexCheck].questionNu === 1) {
			$('.flagshow').css('background','url("../QuizApp/images/australia.png" )');
			optionGenerator();
			
		}
		else if(allObjects[indexCheck].questionNu === 2) {
			$('.info').empty();
			$('.feedback').text("READY");
			$('.choicebutton').removeClass('clickbutton');
			$('.flagshow').css('background','url("../QuizApp/images/brazil.png")');
			optionGenerator();
			
		}
		else if(allObjects[indexCheck].questionNu === 3) {
			$('.info').empty();
			$('.feedback').text("READY");
			$('.choicebutton').removeClass('clickbutton');
			$('.flagshow').css('background','url("../QuizApp/images/france.jpg")');
			optionGenerator();
			
		}
		else if(allObjects[indexCheck].questionNu === 4) {
			$('.info').empty();
			$('.feedback').text("READY");
			$('.choicebutton').removeClass('clickbutton');
			$('.flagshow').css('background','url("../QuizApp/images/germany.png")');
			optionGenerator();
			
		}
		else if(allObjects[indexCheck].questionNu === 5) {
			$('.info').empty();
			$('.feedback').text("READY");
			$('.choicebutton').removeClass('clickbutton');
			$('.flagshow').css('background','url("../QuizApp/images/nigeria.gif")');
			optionGenerator();
			
		}
// Counter Action
		$('span').text(allObjects[indexCheck].questionNu);
	}
// Generate Answer Options

	function optionGenerator (){
		$('#button0').text(allObjects[indexCheck].answers[0]);
		$('#button1').text(allObjects[indexCheck].answers[1]);
		$('#button2').text(allObjects[indexCheck].answers[2]);
		$('#button3').text(allObjects[indexCheck].answers[3]);
		$('#button4').text(allObjects[indexCheck].answers[4]);
	}


// Check Answers

	function checkAnswer(){

		if(indexCheck == 5) {
		
			$('.feedback').text("CONGRATULATIONS, YOU GOT " + totalCorrectAnswers + " OF 5 QUESTIONS CORRECT!");
			$('.scorebutton').hide();
			$('.genbutton').hide();
			$('.gamebutton').show();
			playOvation();
			return;
			
		}

		var chosenAnswer = false;
		for (var i= 0 ; i < allObjects[indexCheck].buttonCheck.length ; i++){
			if ($(allObjects[indexCheck].buttonCheck[i]).hasClass('clickbutton')){
					chosenAnswer= i;
		  	}
    	}
   
	    if (chosenAnswer === false){
			alert ("Choose an Option");
			return;
	     }


    	if(indexCheck == 0) {
			
			if(chosenAnswer == allObjects[0].correctAnswer) {
				$('.feedback').text(allObjects[indexCheck].replyRight);
				$('.info').text(allObjects[indexCheck].flagInfo);
				totalCorrectAnswers++;

			}
			else {
				$('.feedback').text(allObjects[indexCheck].replyWrong);
			}
			$('.submitbutton').hide();
			$('.genbutton').show();
			
		}
		if(indexCheck == 1) {
			
			if(chosenAnswer == allObjects[1].correctAnswer) {
				$('.feedback').text(allObjects[indexCheck].replyRight);
				$('.info').text(allObjects[indexCheck].flagInfo);
				totalCorrectAnswers++;
			}
			else {
				$('.feedback').text(allObjects[indexCheck].replyWrong);
			}
			$('.submitbutton').hide();
			$('.genbutton').show();
			 
		}
		if(indexCheck == 2) {
			
			if(chosenAnswer == allObjects[2].correctAnswer) {
				$('.feedback').text(allObjects[indexCheck].replyRight);
				$('.info').text(allObjects[indexCheck].flagInfo);
				totalCorrectAnswers++;
			}
			else {
				$('.feedback').text(allObjects[indexCheck].replyWrong);
			}
			$('.submitbutton').hide();
			$('.genbutton').show();
			
		}
		if(indexCheck == 3) {
			
			if(chosenAnswer == allObjects[3].correctAnswer) {
				$('.feedback').text(allObjects[indexCheck].replyRight);
				$('.info').text(allObjects[indexCheck].flagInfo);
				totalCorrectAnswers++;
			}
			else {
				$('.feedback').text(allObjects[indexCheck].replyWrong);
			}
			$('.submitbutton').hide();
			$('.genbutton').show();
			
		}
		if(indexCheck == 4) {
			
			if(chosenAnswer == allObjects[4].correctAnswer) {
				$('.feedback').text(allObjects[indexCheck].replyRight);
				$('.info').text(allObjects[indexCheck].flagInfo);
				totalCorrectAnswers++;
			}
			else {
				$('.feedback').text(allObjects[indexCheck].replyWrong);
			}
			$('.submitbutton').hide();
			$('.scorebutton').show();
		}

		
			
		indexCheck++;
		
  	}

});
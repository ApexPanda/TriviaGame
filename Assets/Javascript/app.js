	$(document).ready(function(){
	});
		
		var correctGuesses = 0;
   
		var incorrectGuesses = 0;

		var questionCounter = 0;

		var currentQuestion = 0;
		
		var wins = 0;

		var losses = 0;

		var timer = 120;

		var answered = "";

		var unanswered = "";

    // questions array
    var questions = [
    {
	    question: "What is the primary food source for coral reefs?",
	    choices: ["Sunlight", "Plankton", "Crustaceans", "Small Fish"],
	    correctAnswer: "Plankton"
	  }, 
	  {
	    question: "Rope put aboard a sailboat is called a what?",
	    choices: ["Line", "Whipping", "Knot", "Wrap"],
	    correctAnswer: "Line"
	  }, 
	  {
	    question: "What year did the Titanic sink?",
	    choices: ["1951", "1899", "1854", "1912"],
	    correctAnswer: "1912"
	  }, 
	  {
	    question: "The oceans cover ______ of the Earth's surface.",
	    choices: ["50 Percent", "70 Percent", "30 Percent", "60 Percent"],
	    correctAnswer: "70 Percent"
	  }, 
	  {
	    question: "What type of water is more dense?",
	    choices: ["Hot Water - Equator", "Cold Water - Polar", "Near the Shore", "Tidal Wave"],
	    correctAnswer: "Cold Water - Polar"
	  },
	  {
	    question: "What does flotsam mean?",
	    choices: ["Sailboat", "Wreckage of a Ship", "Pirate", "JetSki"],
	    correctAnswer: "Wreckage of a Ship"
	  },
	  {
	    question: "What is a Jolly Roger",
	    choices: ["Candy", "A Person Who Is Abnormally Happy", "Skull and Crossbones on a Flag", "A Type of Bear"],
	    correctAnswer: "Skull and Crossbones on a Flag"
	  },
	  {
	    question: "How much of the oxygen we breathe is produced by the oceans?",
	    choices: ["70 Percent", "30 Percent", "40 Percent", "50 Percent"],
	    correctAnswer: "70 Percent"
	  },
	  {
	    question: "How long is the Great Barrier Reef?",
	    choices: ["900 Miles", "2500 Miles", "500 Miles", "1,400 Miles"],
	    correctAnswer: "1,400 Miles"
	  },
	  {
	    question: "About how much of the ocean has been discovered?",
	    choices: ["60 Percent", "5 Percent", "15 Percent", "25 Percent"],
	    correctAnswer: "5 Percent",
	  },
	  {
	    question: "What percentage of all life forms on Earth are aquatic?",
	    choices: ["28 Percent", "48 Percent", "94 Percent", "76 Percent"],
	    correctAnswer: "94 Percent"
	  },
	  {
	    question: "The deepest recorded point on the ocean floor is the Mariana Trench, is how deep?",
	    choices: ["36,000 Feet", "42,000 Feet", "28,000 Feet", "12,000 Feet"],
	    correctAnswer: "36,000 Feet",
	  },
	  {
	    question: "How many oceans are there on Earth? ",
	    choices: ["2", "6", "8", "5"],
	    correctAnswer: "5"
	  },
	  {
	    question: "The Pesse Canoe is believed to be the world's oldest boat from the early Mesolithic Period, is from around what year?",
	    choices: ["5000 Years B.C.", "8000 Years B.C.", "10 Years A.C.", "1234 A.C."],
	    correctAnswer: "8000 Years B.C."
	  },
	  {
	    question: "What is the oceans largest mountain?",
	    choices: ["Mauna Kea", "Argo", "Lokin", "Everest"],
	    correctAnswer: "Mauna Kea",
			}
		];
			

// Starts the timer when start is clicked
var startGame = $("#start").on("click", function(){
	startButton();
	timerFunc();
 });

$("#test").click(function(event){
	event.preventDefault();
	var val = $(this).val();
	// checkAnswer();
	console.log(val);
});


// // Loops through question array and places text on the field
function startButton (){
	for (var i = 0; i < questions.length; i++) {
		const questionPopulate = questions[i].question;
		const q1Populate= questions[i].choices[0];
		const q2Populate= questions[i].choices[1];
		const q3Populate= questions[i].choices[2];
		const q4Populate= questions[i].choices[3];
		$("#question").text("Question: " + questionPopulate);
		$("#q1").text(q1Populate);
		$("#q2").text(q2Populate);
		$("#q3").text(q3Populate);
		$("#q4").text(q4Populate);
		console.log(questions[i].correctAnswer);
	}
};

function checkAnswer() {
	var correctAnswer = questions[14].correctAnswer;
	console.log(correctAnswer);
}


function nextQuestion() {
		if(answered === true);

			$("#question").text(currentQuestion+1);
};

function userTimeout() {
	if(timer === 0) {
		alert("time is up!");
	}
};



// function to get the timer to run
function timerFunc() {
	clock = setInterval(countDown, 1000);
	function countDown() {
		if (timer < 1) {
			clearInterval(clock);
			userTimeout();
		}
		if (timer > 0) {
			timer--;
		}
		$("#timer").html("Timer: " + timer);
	}
};

function addToWin(){
// add math part to figure out if number of right answer equal a win 
// If it equals a win, add one to wins variable
// Update wins class on HTML with the wins amount
};

function addToLosses(){
	// add math part to figure out if number of incorrect equal a loss
	// If it equals a los, add one to losses variable
	// Update losses class on HTML with the losses amount
	};









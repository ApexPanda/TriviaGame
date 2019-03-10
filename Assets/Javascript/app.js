$(document).ready(function() {
  

    // track which question we are on
    var questionCounter = 0;
    // initial time of 15 seconds for each question
    var timer = 20;
    // will keep tally of right guesses for end game
    var correctGuesses = 0;
    //will keep tally of wrong guesses for end game
    var incorrectGuesses = 0;

    // question & answer array
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
	    image: "<img src='assets/images/halfLife.jpg' class='img-circle shadow'>"
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
	    image: "<img src='assets/images/bioshock.jpg' class='img-circle shadow'>"
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
	  }];
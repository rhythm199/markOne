var readlineSync = require("readline-sync");

var username = readlineSync.question("Enter username: ");
console.log("Hey",username,"do you know my likes?");
var score =0;
// array of objects
var questions = [{
  question: "Which cricketer i like the most? ",
  answer: "MSDhoni"
}, {
  question: "What genre movies i prefer watching? ",
  answer: "comedy"
},
{
  question: "Listening music leisurely or while working? ",
  answer: "working"
},
{
  question: "Alec banjamin or taylor swift? ",
  answer: "Both"
},
{
  question: "Cloudy or sunny day? ",
  answer: "sunny"
}];

function play(question, answer){
  var userAnswer = readlineSync.question(question);
  if(userAnswer.toUpperCase() === answer.toUpperCase()){
    console.log("right!");
    score = score + 1;
  }
  else {
    console.log("wrong");
  }
  console.log("current score: ", score);
  console.log("-------------")
}

function game(question, answer){
  for(let i=0;i<questions.length;i++){
     var currentQuestion = questions[i];
     play(currentQuestion.question, currentQuestion.answer)
  }
}

function showScores() {
  console.log("YAY! You SCORED: ", score);
}


game();
showScores();
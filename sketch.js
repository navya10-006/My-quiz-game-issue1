var canvas;
var gameState, contestantCount, database, quiz, question, contestant;
var allContestants;

function setup(){
  canvas = createCanvas(850,400);
  database = firebase.database();
  quiz = new Quiz;
  quiz.getState();
  quiz.start();
  question = new Question();
}


function draw(){
  background("pink");
  gameState=0;
  if(contestantCount === 4){
    gameState = 1;
    quiz.update(1);
  }
  if(gameState === 1){
    quiz.play();
  }
  question.display();
}

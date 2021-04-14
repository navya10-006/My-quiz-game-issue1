class Quiz{
    constructor(){}

    getState(){
        var gameStateRef = database.ref('gameState');
        gameStateRef.on("value",(data)=>{
            gameState=data.val();
        })
    }

    update(state){
        database.ref('/').update({
            gameState:state
        });
    }

    async start(){
        if(gameState === 0){
            contestant = new Countestant();
            var contestantCountRef = await database.ref('contestantCount').once("value");
            if(contestantCountRef.exists()){
                contestantCount = contestantCountRef.val();
                quiz.getState();
                contestant.update();
                contestant.updateCount(contestantCount);
            }
            question = new Question();
            question.display();
        }
    }
  
    play(){
        background("yellow");
        question.title2.html("Results");
        question.title2.position(350,0);
        Question.getContestantInfo();
        for(var plr in allContestants){
            var corectAns = "2";
            if(correctAns === allContestants[plr].answer){
                fill("green");
            }
            else{
                fill("red");
            }
        }
    }
}
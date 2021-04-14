class Question{
    constructor(){
        this.title = createElement('h1');
        this.question = createElement('h2');
        this.option1 = createElement('h3');
        this.option2 = createElement('h3');
        this.option3 = createElement('h3');
        this.option4 = createElement('h3');
        this.inputName = createInput("Your Name");
        this.inputAnswer = createInput("Correct Option Number");
        this.button = createButton('Submit');
        this.answerLabel = createElement('h1');
        this.title2 = createElement('h1');
    }

    hide(){
        this.title.hide();
        this.question.hide();
        this.option1.hide();
        this.option2.hide();
        this.option3.hide();
        this.option4.hide();
        this.inputName.hide();
        this.inputAnswer.hide();
        this.button.hide();
        this.answerLabel.hide();
        this.title2.hide();
    }

    display(){
        this.title.html("My Quiz Game");
        this.title.position(350,0);
        this.question.html("First comes the one who relies on lies \n and lives in disguise. \nThen comes what can be found when parked \nbut not in a park. \nAnd lastly comes the word used \nwhen words are lost. \nCombine them all \nto form a guest unwanted \nsometimes unknown.");
        this.question.position(10,80);
        this.option1.html("1. Spider");
        this.option1.position(150,200);
        this.option2.html("2. Theif");
        this.option2.position(150,220);
        this.option3.html("3. Lizard");
        this.option3.position(150,240);
        this.option4.html("4. Burglar");
        this.option4.position(150,260);
        this.inputName.position(150,340);
        this.inputAnswer.position(500,340);
        this.button.position(300,390);
        this.button.mousePressed(()=>{
            contestant.name = this.input.value();
            contestant.answer = this.input.value();
            contestantCount+=1;
            contestant.update();
            contestant.updateCount(contestantCount);
            contestant.index = contestantCount;
            this.answerLabel.html("A SPY relies on lies and lives in disguisse. \nThe sound of etter 'D' can be found in the word parked and cannot be found in the word park. \n'ER' is the sound which is used when one is lost in words and doesn't know what to speak. \nCombine them SPY + D + ER = SPIDER");
            this.answerLabel.position(330,200);
            //this.title.hide();
            //this.inputName.hide();
            //this.inputAnswer.hide();
            //this.button.hide();
          });
      
    }
}
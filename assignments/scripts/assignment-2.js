
var InterviewQues = function(question,options,correctAns,eliminated){
    this.question= question;
    this.options = options;
    this.correctAns = correctAns;
    this.eliminated= eliminated;

}

InterviewQues.prototype.displayQuestion = function(){
    console.log(this.question)
    console.log(this.options)
}

InterviewQues.prototype.checkCorrectAnswer = function(ansSelected, callback){
    var sc = 0;
    if(this.correctAns==ansSelected){
        console.log('Correct Answer');
        sc = callback(true);
        
    }else{
        console.log('Wrong Answer');
        sc = callback(false);
    }
    this.displayScore(sc);
}

InterviewQues.prototype.displayScore = function(score){
    console.log('----------------');
    console.log('You Score is:'+score);
    console.log('----------------');
}



function score(){
    var sc =0;
    return function(correct){
        if(correct){
            sc++;
            
        }
        return sc;
    }
}

var keepScore = score();
var _1Ques = new InterviewQues('What is my name',['John','Jimmy','Navdeep'],2,false);
var _2Ques = new InterviewQues('What is my age',[21,22,28],2,false);
var _3Ques = new InterviewQues('What is my game',['boxing','TT'],1,false);
var _4Ques = new InterviewQues('Who is my best friend',['John','Raj','Navdeep'],1,false);

var _5Ques = new InterviewQues('Where is my house',['geeta colony','panipat','bihar'],1,false);
var _6Ques = new InterviewQues('What is my wife age',[21,31,32],2,false);
var _7Ques = new InterviewQues('What is my cycle name',['Cyclone','boxing','basket'],0,false);
var _8Ques = new InterviewQues('How are you',['John','Jimmy','Navdeep','fine'],3,false);

const questions = [_1Ques,_2Ques,_3Ques,_4Ques,_5Ques,_6Ques,_7Ques,_8Ques];

//var keepScore = score();

function askQuestion( ){
    
    const n = Math.floor(Math.random()*7 +1)
   
    questions[n].displayQuestion();
    const ansSelected = prompt('Please enter your answer');
    
    if(ansSelected!== 'exit'){
        questions[n].checkCorrectAnswer(ansSelected,keepScore);
        askQuestion();
    }
}

askQuestion( );

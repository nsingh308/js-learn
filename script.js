
//function constructor
/*
var Person = function(name, age, height, weight, isMarried){
    this.name = name;
    this.age =  age;
    this.height = height;
    this.weight = weight;
    this.isMarried = isMarried;
}

Person.prototype.calculateRetireAge = function(){
    return 65 - this.age;
}


var navdeep = new Person('Navdeep', 29, 172,72,true);
var james = new Person('James', 29, 172,72,true);


console.log(navdeep.name,navdeep.age,'Retires in ', navdeep.calculateRetireAge());

*/


//function callback

/*
var birthYear = [1990, 1960, 1950, 1999, 1960, 2000];

var calculate = function (arr, fn){
    var result = [];
    for(var i =0;i<arr.length;i++){
        result[i]=fn(arr[i]);
    }
    return result
}

var calculateAge = function(el){
    return 2019-el;
}
var calculateHeartRisk = function(age){
    if(age>=65){
        return true;
    }
    return false;
}

var age = calculate(birthYear,calculateAge);
//console.log(calculate(birthYear,calculateAge));
console.log(calculate(age,calculateHeartRisk));

*/

//function returns function
/*
var interviewQuestions = function (job){

    switch (job) {
        case 'teacher':
            return function(name){ console.log(name + ' what do you do in your job '+job)}
            
    
        case 'plumber':
            return function(name){ console.log(name + ' what do you do in your job '+job)}
            
        default:
            return function(name){ console.log(name + ' what do you learn ');}
    }
}
//closure function.. inner function.
function interviewQues(job){
    var additionVal='Additional Perk Given.'
    return function(name){
        switch (job) {
            case 'teacher':
                console.log(name + ' what do you do in your job '+job+' '+ additionVal)
                break;
        
            case 'plumber':
                console.log(name + ' what do you do in your job '+job+' '+ additionVal)
                break;
            default:
                console.log(name + ' what do you learn '+' '+ additionVal)
        }   
    }
}
interviewQues('plumber')('John');
//interviewQuestions('teacher')('navdeep')

*/


//bind call apply

var john = {
    name:'John',
    age : 25,
    presentation:function(skill,timeOfDay){
        console.log('Hi '+this.name+
        '. My age is '+this.age+'. '+
        ' I am a '+skill+'. '+' Have a good '+timeOfDay);
    },
    jogging:function(arr){
        for(var i =0;i<arr.length;i++){
            console.log(' moving '+arr[i]+' steps further')
        }
    }
}

//john.presentation('Software Engineer','Morning')

var emily ={
    name:'Emily',
    age: 23
}

//john.presentation.call(emily,'teacher','evening');
john.presentation.apply(emily,['Plumber','Night']);
var johnSkill = john.presentation.bind(john,'teacher')

johnSkill('morning')
johnSkill('afternoon')
johnSkill('evening')

var emilySkill = john.presentation.bind(emily,'Software Engineer')
emilySkill('evening')
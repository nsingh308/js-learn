var mark_mass = 25;
var john_mass = 24;

var mark_height=5.7;
var john_height=5.9;

var mark_bmi= mark_mass / ( mark_height * mark_height)
var john_bmi= john_mass / ( john_height * john_height)

var markHasHigherBMI = mark_bmi>john_bmi;

console.log('Mark BMI is: '+mark_bmi);
console.log('John BMI is: '+john_bmi);

console.log('Is Mark\'s BMI higher than John\'s : '+markHasHigherBMI);


// попытка выполнения задания №1

	var letter = ['приглашение',' акт',' штраф'];

function addToArray(letter, newElem) {
    return  letter + newElem;
    
       }

console.log(addToArray(letter, ', пеня'));
console.log(addToArray(addToArray(letter, ', протокол'), ', пеня'));

 var showNewElem = function (letter, newElem) {
 	return  letter + newElem;
 }
console.log(addToArray(addToArray(showNewElem(letter, ', постанова'), ', протокол'), ', пеня'));

// попытка выполнения задания №2

var user = [' Ilona', 26, ' woman']
function showUser(user){
	return typeof user + user;
}
console.log(showUser(user));
console.log(showUser(user[0]));
console.log(showUser(user[1]));

// попытка выполнения задания №3



function calc(a){
	if (a % 15 == 0) {
		console.log('FizzBuzz');
	} else if (a % 5 == 0) {
	console.log('Buzz');
}
else if (a % 3 == 0) {
	console.log('Fizz');
}
else console.log(a);
}
 var a = prompt('Введите число', 0);
 calc(a);


/*
1. Переместите 0 в конец массива, остальные числа должны остаться неизменными
 .сoncat();
example:
 [1,false,2,0,3,null,0,4,0,25] => [1, false, 2, 3, null, 4, 25, 0, 0, 0]
 [ 'a', 0, 0, 'b', null, 'c', 'd', 0, 1, false, 0, 1, 0, 3, [], 0, 1, 9, 0, 0, {}, 0, 0, 9 ] => ["a","b",null,"c","d",1,false,1,3,[],1,9,{},9,0,0,0,0,0,0,0,0,0,0]
 [ 0, 1, null, 2, false, 1, 0 ] => [1,null,2,false,1,0,0]
*/


 var arr = [1,false,2,0,3,null,0,4,0,25];
var arr = [ 'a', 0, 0, 'b', null, 'c', 'd', 0, 1, false, 0, 1, 0, 3, [], 0, 1, 9, 0, 0, {}, 0, 0, 9 ]; //var arr = [ 0, 1, null, 2, false, 1, 0 ];

var newArr = [];
for (let i = arr.length; i--; ){
	if (arr[i] === 0){
		arr.splice(i, 1) ;
		   newArr.push(0) ;
        	}
}
var newArr = arr.concat(newArr);
console.log(newArr);



//2. Верните сумму двух найменьших чисел в массиве
  // [10,20,30,1,31,11,10] => 11
  // [-1,0,25] => -1
  // [-4,-10,25,10] => -14
  // [0,200,10,25,15] => 10

  let arr = [0,200,10,25,15];

  function calcMin () {
  for (let i = 0; i < arr.length; i++) {
  	if (arr[i] == Math.min.apply(Math, arr)) {
  	 return i // возвращает индекс наименьшего числа
  	}
  }
}

let num1 = arr[calcMin()];
   
  	arr.splice(calcMin(),1);
  	function calcMin2 () {
  for (let i = 0; i < arr.length; i++) {
  	if (arr[i] == Math.min.apply(Math, arr)) {
  	 return i 
  	}
  }
}
  	
  let num2 = arr[calcMin2()];

  console.log(num1 + num2);

  	/*
3. Напишите функцию которая меняет местами имя и фамилию
 nameShuffler('john McClane'); => "McClane john"
 nameShuffler('Arnold Schwarzenegger'); => "Schwarzenegger Arnold"
 nameShuffler('James Bond'); => "Bond James"
 */

function  nameShuffler(Name) {
	 console.log(Name.split(' ').reverse().join(' '));
		
}
  
nameShuffler('john McClane');
nameShuffler('Arnold Schwarzenegger');
nameShuffler('James Bond'); 

/*4. Напишите функцию которая принимает массив с именами и возвращает массив
   в котором каждая буква становится заглавной
 capMe(['jo', 'nelson', 'jurie'])     // returns ['Jo', 'Nelson', 'Jurie']
 capMe(['KARLY', 'DANIEL', 'KELSEY']) // returns ['Karly', 'Daniel', 'Kelsey']
*/


function capMe(arr){
	for (let i = 0; i < arr.length; i++) {
		arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1).toLowerCase();
	} return arr
}
console.log(capMe(['jo', 'nelson', 'jurie']));
console.log(capMe(['KARLY', 'DANIEL', 'KELSEY']));

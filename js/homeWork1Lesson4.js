/*
 1. Напишите функцию которая принимает 2 числа 
 и возвращает массив содержащий числа между первым числом и вторым числом;
*/


function numbersBetween(a, b) {
	var arr = [];{
for (let i = a + 1; i < b ; i++) {
	var newArr = arr.push(i);
			} 
			return arr;
		}
}

console.log(numbersBetween(1, 5)); // 2,3,4
console.log(numbersBetween(3, 6)); // 4,5
console.log(numbersBetween(12, 15));// 13,14

/*
 2. Перепешите задачу FizzBuzz, но с использованием цикла. 
     Расчет чисел должен идти до 100
*/

 for (let i = 1; i <= 100; i++) {
 let str = '';
{
	if (i % 3 == 0 && i % 5 == 0) {
	str = str + 'Fizz';
 }  
	 if (i % 5 == 0) {
	str = str + 'Buzz';
	 } 
	 else if (i % 3 == 0) {
	str = str + 'Fizz';
	 } 
	 else str = i;

 console.log(str);
 }
}

/*
3. Напишите функцию которая принимает 1 аргумент - массив 
   И возвращает новый массив содержащий типы значений переменных
*/
function showNewArr(arr) {
	{
		var x = [];
		var arr = [15, null, 'apple', 2016, 'food', 0, x, y, 'lesson'];
		var y = [];
		var newArr =[];
	for (let i = 0; i < arr.length; i++) {
	 newArr[i] = typeof arr[i];
	} 
}console.log (newArr);
}
showNewArr();
 
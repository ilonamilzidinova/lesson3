/* TASK 3
 * Посчитайте сколько одинаковых слов в предложении.
 * Функция должна возвращать объект у которого свойста это повторяющиеся слово,
 * а значение это количество повторений
 * */
function wordCounter(string) { 
string = string.split(' '), 
arr = {}; 
for(var i = 0; i < string.length; i++){ 
if(arr[string[i]]){ 
arr[string[i]] = arr[string[i]] + 1; 
}
else{ 
arr[string[i]] = 1; 
}}; 
return arr; 
};


console.log(wordCounter('Both Java and Java Script is programming and programming OOPBased Language'));
/*
 {
   Both:1,
   Java:2,
   and:2,
   Script: 1,
   is: 1
   programming: 2
   OOPBased:1,
   Language:1
 }
 */

console.log(wordCounter('asd qwe asd'));
/*
 {
  asd:2
  qwe:1
 }
* */

console.log(wordCounter('url http url www url http'));

/*
 {
 http:2,
 url:3,
 www:1
 }
 * */

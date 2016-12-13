//*
// TASK 1
//  Посчитайте количество букв а, в передаваемом параметре


let randomString = 'aaa b a w c ';

let user = {
  name: 'Albina'
};

let javaScript = {
  html: 'JavaScript'
};

function countLetterA(str) {
  var value = 0;
  var pos = str.indexOf('a');
  while (pos !== -1){
    value++;
    pos = str.indexOf('a', pos +1);
  }
 return value
}


console.log(countLetterA(randomString)); // 4
console.log(countLetterA(user.name + javaScript.html)); // 3


/*
TASK 2
  Вам дано предложение, вам необходимо перевернуть каждое слово
 в предложении в обратном порядке
 
 */


function reverseEachWord(string) {
var sentence = [].map.call(string, function(x){
  return x;
}).reverse().join('');{
  } return sentence.split(' ').reverse().join(' ');
}

console.log(reverseEachWord('You don\'t have to do anything special to begin using the DOM. Different browsers have different implementations of the DOM'));
// uoY t'nod evah ot od gnihtyna laiceps ot nigeb gnisu eht .MOD tnereffiD sresworb evah tnereffid snoitatnemelpmi fo eht MOD


console.log(reverseEachWord('The Document Object Model (DOM) is a programming interface for HTML and XML documents'));
// ehT tnemucoD tcejbO ledoM )MOD( si a gnimmargorp ecafretni rof LMTH dna LMX stnemucod


/* TASK 3
* Добавьте в функцию reverseEachWord второй параметр,
* данный параметр булево, если true - тогда слова так же переворачиваются в обратном порядке
* */

function reverseEachWord(string, boolean) {
  
var sentence = [].map.call(string, function(x){
  return x;
}).reverse().join('');{
  }
  if (boolean == true){
   return sentence;
  }
    else {
    return sentence.split(' ').reverse().join(' ');
  } 
}

console.log(reverseEachWord('You don\'t have to do anything special to begin using the DOM. Different browsers have different implementations of the DOM', true));
//MOD eht fo snoitatnemelpmi tnereffid evah sresworb tnereffiD .MOD eht gnisu nigeb ot laiceps gnihtyna od ot evah t'nod uoY
console.log(reverseEachWord('The Document Object Model (DOM) is a programming interface for HTML and XML documents', true));
// stnemucod LMX dna LMTH rof ecafretni gnimmargorp a si )MOD( ledoM tcejbO tnemucoD ehT

console.log(reverseEachWord('Hi my Name is', false));
// iH ym emaN si


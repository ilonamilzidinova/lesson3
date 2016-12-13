// @ SUPER

/*
 *
 * TASK 1
 * Выведите уникальные значения
 *
 * */

function uniqueElements(arr) {
	var result =[];
	for (var i = 0; i < arr.length; i++) {
	
		if (result.indexOf(arr[i]) == -1) {
		result.push(arr[i]);
	}
	}
	return result
}



let notUniqArray = [1, 1, 2, 2, 2, 5, 10, 25, 30, 5, 1, 0, 22, 3, 10, 3];

console.log(uniqueElements(notUniqArray)); //1,2,5,10,25,30,0,22,3,
console.log(uniqueElements([1,1,2,3])); // 1,2,3

/*
* TASK 2
 * Отсортируйте массив с такой же последовательностью как идут цифры
 *
 *
 */

function solution(arr) {
	var result =[];
	for (var i = 0; i < arr.length; i++) {
		if (result.indexOf(arr[i]) !== -1) {
		result.splice(result.indexOf(arr[i]) + 1, 0, arr[i]);
	}
	
		else  {
		result.push(arr[i]);
	}
	}
	return result
  
}

console.log(solution([2,3,2,2,1,5,10,25,5,10,17,1])); // 2,2,2,3,1,1,5,5,10,10,25,17
console.log(solution([5,3,5,3,1,7,5,3,7,2,5])); // 5,5,5,5,3,3,3,1,7,7,2

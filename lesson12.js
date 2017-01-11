# lesson12
/*
создайте 3 объекта
первый со свойством name
второй с методом showName => this.name
третий со свойством lastName: string, name:string
*/
var userAuth = {
	name: 'logged'
};

var isLogged = {
	showName(){
		return this.name;
	}
};

var realUser = {
	name: 'Santa',
	lastName: 'Claus'
};

userAuth.__proto__ = realUser;
realUser.__proto__ = isLogged;

console.log(userAuth.lastName); //Claus
console.log(userAuth.showName()); // logged
console.log(realUser.showName()); //Santa

console.log(realUser.showName.call(userAuth)); // logged

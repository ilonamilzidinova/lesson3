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


function MagicCreatures(type){
 this.type = type;
}

MagicCreatures.prototype.doMagic = function() {
	if ( this.castSpell) {
		this.castSpell()
	} else  {
	console.log('Hello Human!');
 }
};

function Moroz(type) {
	this.type = type;
	this.castSpell = () => {
		console.log('YO HO HO');
	}
}
Moroz.prototype = Object.create(MagicCreatures.prototype);
//Moroz.prototype = new MagicCreatures();

function Human(type, name) {
	this.type = type;
	this.name = name;
}

Human.prototype = new MagicCreatures();

var SantaClaus = new Moroz('Moroz');
var dedMoroz = new Moroz('Moroz');
var Jessica = new Human('Human');
var Jack = new Human('Human');



dedMoroz.doMagic()
Jessica.doMagic()
*/
/*
* Создать функцию конструктор Human

type: string
name: string

Дочерние классы (Экземпляры) - должны уметь вызывать функцию doMagic





/*функцию конструктор Computer

*/
function Computer(){
	this.start = function start(fn){
		fn()
		return this
	};
	this.stop = stop;
}

var myPC = new Computer().start(function(){
//в момент срaбатывания метода stop, вызвать эту функцию



	console.log('Start')
	
}).stop();

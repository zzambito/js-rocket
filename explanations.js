// Explanations



//Variables

// Text
var favColor = 'green';

// List or Array
var myFavColors = ['blue', 'red', 'green'];

// Value
var numbOfFavColors = 3;

// Boolean (True/False or Yes/No Value)
var hasGotFavColors = true;

//Object
var zacObject = {
	firstName: 'Zac',
	lastName: 'Zambito',
	favColors: ['blue', 'red', 'green'],
	yearsAlive: 26,
	isMale: true
};



//Functions

var fullname = function (firstname, secondname) {
	return firstname + ' ' + secondname;
}

var area = function (width, height) {
	return width * height;
}

var whatIsMyFavColor = function () {
	return 'green';
}

var doSomething = function () {
	console.log("do Something!!!");
}



//If-Else Statements

if ('male' == 'male') {
	alert('male');
};


var number1 = 10;
var number2 = 100;

if (number1 < number2) {
	alert('true!!!');
} else {
	alert('false!!!');
}


var name1 = 'Rich';
var name2 = 'Bob';

if (name1 == 'Rich') {
	alert('true 1');
} else if (name2 == 'Rich') {
	alert('true 2');
} else {
	alert('false!!!');
}

// = > set value
// == > 'equals'
// && > 'and'
// || > 'or'
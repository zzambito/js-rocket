var doCoolStuff = function () {
	var currentClassName = document.getElementById('cool').className;

	if (currentClassName == 'cool'){
		document.getElementById('cool').className = 'cool red';
	} else {
		document.getElementById('cool').className = 'cool';
	}
}

var sayMyName = function (name) {
	alert('My name is: '+name);
}

var car = {
			make: 'VW',
			type: 'Bus',
			color: 'teal',
			isTurnedOn: false,
			numberOfWheels: 4,
			seats: [
			'seat 1',
			'seat 2',
			'seat 3',
			'seat 4'
			],
			turnOn: function () {
				this.isTurnedOn = true;
				alert('Vroom Vroom');
			},
			fly: function () {
				alert('fly');
			},
			switchCar: function (isOn) {
				console.log('turn car '+isOn)
				if (isOn == true) {
					this.isTurnedOn = true;
					alert('Vroom! Vroom!');
				} else {
					this.isTurnedOn = false;
					alert('The Engine Quiets...');
				}
			}
		};

console.log('hello there friends!');
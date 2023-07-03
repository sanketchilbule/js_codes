function cloneTicks() {
	for (var i = 1; i <= 12; i++) {
	var el = document.querySelector(".fiveminutes");
	var clone = el.cloneNode(true);
	clone.setAttribute('class', `fiveminutes f${i}`);
	var app = document.getElementById("clockface").appendChild(clone)
	var el2 = document.querySelector(`.f${i}`);
	el2.style.transform = `rotate(${30 * i}deg)`;
	}
	
		for (var i = 1; i <= 60; i++) {
	var el = document.querySelector(".minutes");
	var clone = el.cloneNode(true);
	clone.setAttribute('class', `minutes m${i}`);
	var app = document.getElementById("clockface").appendChild(clone)
	var el2 = document.querySelector(`.m${i}`);
	el2.style.transform = `rotate(${6 * i}deg)`;
	}
}

var synth = window.speechSynthesis;

const sechand = document.querySelector('.sec')
const minhand = document.querySelector('.min')
const hourhand = document.querySelector('.hour')

const speaker = document.getElementById('speaker');

var sec, min, hour;

function setTime() {
	const now = new Date();
	
	sec = now.getSeconds();
	const secdeg = ((sec / 60) * 360);
	sechand.style.transform = `rotate(${secdeg}deg)`;
	
	min = now.getMinutes();
	const mindeg = ((min / 60) * 360);
	minhand.style.transform = `rotate(${mindeg}deg)`;
	
	hour = now.getHours();
	const hourdeg = ((hour + min/60) / 12 * 360);
	hourhand.style.transform = `rotate(${hourdeg}deg)`;
}

cloneTicks();	
setInterval(setTime, 1000);

speaker.onclick = function(e) {
	e.preventDefault;

	if (min === 0) {
	min = hour;
	hour = 'Even';
	}
	if (min < 10 && min > 1) {
	min = 'o' + min;
	}

	var utterThis = new SpeechSynthesisUtterance(`The time is ${hour} ${min}`);
	synth.speak(utterThis);
};


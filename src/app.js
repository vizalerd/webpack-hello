import 'bootstrap';
import './scss/app.scss';

const mainTemplate = require("./main.hbs");

document.addEventListener("DOMContentLoaded", function() {
	const div = document.createElement('div');
	div.innerHTML = mainTemplate();
	document.body.appendChild(div);
});
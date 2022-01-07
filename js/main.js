
document.addEventListener('keydown', function (event) {
	let coords = ball.getBoundingClientRect();

	if (event.code == 'ArrowRight' || event.code == 'KeyD') {
		ball.style.left = coords.left + 35 + 'px';

		if (coords.left >= document.documentElement.offsetWidth - ball.clientWidth) {
			ball.style.left = document.documentElement.offsetWidth - ball.clientWidth + 'px';
		};

	} else if (event.code == 'ArrowLeft' || event.code == 'KeyA') {

		ball.style.left = coords.left - 35 + 'px';

		if (coords.left <= 0) {
			ball.style.left = 0;
		};

	} else if (event.code == 'ArrowUp' || event.code == 'KeyW') {

		ball.style.top = coords.top - 35 + 'px';

		if (coords.top <= 0) {
			ball.style.top = 0;
		};

	} else if (event.code == 'ArrowDown' || event.code == 'KeyS') {

		ball.style.top = coords.top + 35 + 'px';

		if (coords.top + ball.offsetHeight >= document.documentElement.clientHeight) {
			ball.style.top = document.documentElement.clientHeight - ball.offsetHeight + 'px';
		}

	} else return;

})

document.addEventListener('keyup', function () {

	let newCoords = ball.getBoundingClientRect();
	const fieldElementCoords = field.getBoundingClientRect();

	if (((newCoords.right >= fieldElementCoords.left) && (newCoords.right - ball.offsetWidth <= fieldElementCoords.right)) && (newCoords.top + ball.offsetHeight >= fieldElementCoords.top) && (newCoords.top <= fieldElementCoords.bottom)) {
		field.style.background = 'pink';
	} else {
		field.style.background = '';
	}
})










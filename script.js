function calculat(x) {
    form.display.value = form.display.value + x;
}

function percentage() {
	let per = form.display.value;
	form.display.value=(per/100);
}

let sound = new Audio;
sound.src='sound.wav'
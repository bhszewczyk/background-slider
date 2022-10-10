const body = document.body;
const slides = document.querySelectorAll('.slide');
const leftBtn = document.getElementById('left');
const rightBtn = document.getElementById('right');

let activeSlide = 0;

setBackgroundImg();

function setBackgroundImg() {
	body.style.backgroundImage = slides[activeSlide].style.backgroundImage;
}

function setActiveSlide() {
	slides.forEach((slide) => {
		slide.classList.remove('active');
	});

	slides[activeSlide].classList.add('active');
}

rightBtn.addEventListener('click', () => {
	activeSlide++;

	if (activeSlide >= slides.length) {
		activeSlide = 0;
	}

	setBackgroundImg();
	setActiveSlide();
});

leftBtn.addEventListener('click', () => {
	activeSlide--;

	if (activeSlide < 0) {
		activeSlide = slides.length - 1;
	}

	setBackgroundImg();
	setActiveSlide();
});

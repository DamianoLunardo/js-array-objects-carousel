const images = [
	{
		image: 'img/01.webp',
		title: "Marvel's Spiderman Miles Morale",
		text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
	},
	{
		image: 'img/02.webp',
		title: 'Ratchet & Clank: Rift Apart',
		text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
	},
	{
		image: 'img/03.webp',
		title: 'Fortnite',
		text: 'Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.',
	},
	{
		image: 'img/04.webp',
		title: 'Stray',
		text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
	},
	{
		image: 'img/05.webp',
		title: "Marvel's Avengers",
		text: "Marvel's Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.",
	},
]

const carousel = document.getElementById('carousel');
let currentSlide = 0;

function createSlide(index) {
	const slide = document.createElement('div');
	slide.classList.add('carousel-slide');

	const image = document.createElement('img');
	image.src = images[index].image;

	const textContainer = document.createElement('div');
	textContainer.classList.add('carousel-text-container');

	const title = document.createElement('h2');
	title.textContent = images[index].title;

	const text = document.createElement('p');
	text.textContent = images[index].text;

	textContainer.appendChild(title);
	textContainer.appendChild(text);

	slide.appendChild(image);
	slide.appendChild(textContainer);

	return slide;
}

function showSlide(index) {
	carousel.innerHTML = '';
	carousel.appendChild(createSlide(index));
}

function changeSlide(direction) {
	currentSlide += direction;

	if (currentSlide < 0) {
		currentSlide = images.length - 1;
	} else if (currentSlide >= images.length) {
		currentSlide = 0;
	}

	showSlide(currentSlide);
}

showSlide(currentSlide);
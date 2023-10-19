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

// logica per carosello, da inserimento in html a slide
const carousel = document.getElementById('carousel');
let currentSlide = 0;
const thumbsContainer = document.querySelector('.thumbs');


document.querySelector('.btn.btn-primary').addEventListener('click', autoplay);
document.querySelector('.btn.btn-danger').addEventListener('click', stopAutoplay);
let autoplayInterval;



// funzione per gestire l'autoplay
function autoplay() {
  autoplayInterval = setInterval(function() {
    changeSlide(1);
  }, 3000);
}

function stopAutoplay() {
  clearInterval(autoplayInterval);
}

// tasto reverse play
document.querySelector('.btn.btn-warning').addEventListener('click', reverseAutoplay);

// variabile per tenere traccia della direzione dell'autoplay
let autoplayDirection = 1;

// funzione per invertire l'autoplay
function reverseAutoplay() {
  autoplayDirection *= -1;
  autoplay();
}

// funzione per cambiare slide ogni 3 secondi all'indietro
function autoplay() {
  setInterval(function() {
	changeSlide(autoplayDirection);
  }, 3000);
}

// funzione per creare slide
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

	// slide creata :)
	return slide;
};

// per slide carosello, mostro la slide, la svuoto e aggiungo la prossima
function showSlide(index) {
	carousel.innerHTML = '';
	carousel.appendChild(createSlide(index));
};

// navigazione tra le slide
function changeSlide(direction) {
	currentSlide += direction;

	// questo ciclo for serve a far scorrere tutte le slide, se l'indece esce dall'array ritorno al primo o all'ultimo elemento
	if (currentSlide < 0) {
		currentSlide = images.length - 1;
	} else if (currentSlide >= images.length) {
		currentSlide = 0;
	}

	// mostro la slide
	showSlide(currentSlide);
};

// slide di partenza
showSlide(currentSlide);

// autoplay ogni 3 secondi cambio slide
//function autoplay() {
//changeSlide(1);
//};
//let autoplayInterval = setInterval(autoplay, 3000);

// creo miniature
images.forEach((image, index) => {
	const thumbContainer = document.createElement('div');
	thumbContainer.classList.add('thumb');
	thumbContainer.onclick = () => showSlide(index);

	const thumbImage = document.createElement('img');
	thumbImage.src = image.image;

	thumbContainer.appendChild(thumbImage);
	thumbsContainer.appendChild(thumbContainer);
});
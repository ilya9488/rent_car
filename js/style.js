// let btn = document.querySelector('.btn')
// let content = document.querySelector('.content')

// btn.onclick = () => {
// 	console.log('btn');
// 	content.classList.toggle("disabled")
// 	btn.classList.toggle("class")
// 	btn.innerText = 'Машина занята'
// 	// btn.setAttribute(disabled)
// }

// slider 

// const images = document.querySelectorAll('.slider .slider_line img');
// const sliderLine = document.querySelector('.slider_line');
// const slider = document.querySelector('.slider');
// let next = document.querySelector('.next-slide')
// let prev = document.querySelector('.prev-slide')
// let count = 0;
// let width;

// function init() {
// 	console.log('resize');
// 	width = slider.offsetWidth;
// 	sliderLine.style.width = width * images.length + 'px';
// 	images.forEach(item => {
// 		item.style.width = width + 'px';
// 		item.style.height = 'auto';
// 	});
// 	rollSlider()
// }

// window.addEventListener('resize', init)
// init();

// next.addEventListener('click', function () {
// 	count++;
// 	if (count >= images.length) {
// 			count = 0;
// 	}
// 	rollSlider();
// });

// prev.addEventListener('click', function () {
// 	count--;
// 	if (count < 0) {
// 			count = images.length - 1;
// 	}
// 	rollSlider();
// });

// function rollSlider() {
// 	sliderLine.style.transform = 'translate(-' + count * width + 'px)';
// }


// --------- slider efect---------

let img = document.querySelectorAll('.slide_img')
let sliderLine = document.querySelector('.slider_line')
let current = 0;
let next = document.querySelector('.next-slide')
let prev = document.querySelector('.prev-slide')

function slider(e) {
	for (let i = 0; i < img.length; i++) {
		img[i].classList.add('opasiti0');
	}
	img[current].classList.remove('opasiti0');
	

	// if (current - 1 == -1) {
	// 	current = img.length - 1;
	// } else {
	// 	current--;
	// }
	// slider();
	if (current+1 == img.length) {
		current = 0;
	} else {
		current++
	}
	// slider();
}

// setInterval(slider, 3000);
sliderLine.onclick = slider;

// next.onclick = function () {
// 	if (current - 1 == -1) {
// 		current = img.length - 1;
// 	} else {
// 		current--;
// 	}
// 	slider();
// };

// prev.onclick = () => {
// 	if (current + 1 == img.length) {
// 		current = 0;
// 	} else {
// 		current++;
// 	}
// 	slider();
// };

// setInterval(next, 1000)
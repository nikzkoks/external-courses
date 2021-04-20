let arrayImage = new Array();

const image = document.querySelector(".image");
const nextButton = document.querySelector(".next-button");
const previousButton = document.querySelector(".previous-button");

arrayImage = [
	"../ex12_js_dom/assets/1.jpg",
	"../ex12_js_dom/assets/2.jpg",
	"../ex12_js_dom/assets/3.jpg",
	"../ex12_js_dom/assets/4.jpg",
	"../ex12_js_dom/assets/5.jpg",
	"../ex12_js_dom/assets/6.jpg",
];

let el = 0;

nextImage = () => {
	if (el === arrayImage.length - 1) {
		el = 0;
		image.style.background = `url("${arrayImage[el]}")`;
		image.style.backgroundPosition = "center center";
		image.style.backgroundRepeat = "no-repeat";
		image.style.backgroundSize = "cover";
		image.style.transition = "0.5s";
	} else {
		el += el < arrayImage.length - 1;
		image.style.background = `url("${arrayImage[el]}")`;
		image.style.backgroundPosition = "center center";
		image.style.backgroundRepeat = "no-repeat";
		image.style.backgroundSize = "cover";
		image.style.transition = "0.5s";
	}
};

previousImage = () => {
	if (el === 0) {
		el = arrayImage.length - 1;
		image.style.background = `url("${arrayImage[el]}")`;
		image.style.backgroundPosition = "center center";
		image.style.backgroundRepeat = "no-repeat";
		image.style.backgroundSize = "cover";
		image.style.transition = "0.5s";
	} else {
		el -= el > 0;
		image.style.background = `url("${arrayImage[el]}")`;
		image.style.backgroundPosition = "center center";
		image.style.backgroundRepeat = "no-repeat";
		image.style.backgroundSize = "cover";
		image.style.transition = "0.5s";
	}
};

nextButton.addEventListener("click", nextImage);
previousButton.addEventListener("click", previousImage);

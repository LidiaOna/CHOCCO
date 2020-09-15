const compositionLink = document.querySelector(".slider__composition-link");
const sliderDropdown = document.querySelector(".slider__dropdown");

compositionLink.onclick = function() {
	sliderDropdown.style.display = sliderDropdown.style.display == "block" ? "none" : "block";
}


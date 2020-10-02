const compositionLink = document.querySelectorAll(".slider__composition-link");
const sliderDropdown = document.querySelectorAll(".slider__dropdown");

compositionLink.onclick = function() {
	sliderDropdown.style.display = sliderDropdown.style.display == "block" ? "none" : "block";
}

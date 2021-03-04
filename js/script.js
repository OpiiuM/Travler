(function () {
	const burger = document.querySelector(".burger")
	const menu = document.querySelector(".header__nav")

	// slider toggles
	const toggles = document.querySelectorAll(".slider__toggle")


	burger.addEventListener("click", function () {
		console.log(menu);
	})

	// slider
	toggles.forEach((toggle, index) => {
		toggle.onclick = () => showSlides(index + 1, "slider__slide", "slider__toggle")
	})

	function showSlides(n, slideName, toggleName) {
		let slides = document.querySelectorAll(`.${slideName}`)
		let spans = document.querySelectorAll(`.${toggleName}`)

		if (n > slides.length) n = 1
		if (n < 1) n = slides.length

		for (let i = 0; i < slides.length; i++) {
			slides[i].style.display = "none"
			spans[i].className = spans[i].className.replace(`${toggleName}--active`, "")
		}

		slides[n - 1].style.display = "flex"
		spans[n - 1].className += ` ${toggleName}--active`
	}

	showSlides(1, "slider__slide", "slider__toggle")
}())
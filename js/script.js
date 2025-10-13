"use sctict";
document.addEventListener("DOMContentLoaded", () => {
	const buttons = document.querySelectorAll(".scroll");

	buttons.forEach((btn) => {
		btn.addEventListener("click", () => {
			const target = document.getElementById("price");
			if (target) {
				target.scrollIntoView({
					behavior: "smooth",
					block: "start",
				});
			}
		});
	});

	if (window.innerWidth > 1024) {
		AOS.init({
			duration: 2000,
			once: true,
			offset: 100,
		});
	}

	const burger = document.querySelector(".hamburger");
	const menu = document.querySelector(".menu_nav");
	const social = document.querySelector(".header_social");

	burger.addEventListener("click", () => {
		burger.classList.toggle("active");
		menu.classList.toggle("active");
		social.classList.toggle("active");
		document.body.classList.toggle("lock");
	});
});

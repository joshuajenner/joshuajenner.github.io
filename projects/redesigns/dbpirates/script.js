const navButton = document.getElementById("nav-menu");
const nav = document.getElementById("top-nav");
navButton.addEventListener("click", navToggle);

function navToggle() {
	nav.classList.toggle("open");
}

function navClose() {
	if (window.innerWidth >= 1000) {
		nav.classList.remove("open");
	}
}

function navDarken() {
	if (window.pageYOffset >= 20) {
		nav.classList.add("darken");
	} else {
		nav.classList.remove("darken");
	}
}

window.onscroll = navDarken;

window.onresize = navClose;

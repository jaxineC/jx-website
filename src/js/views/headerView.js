import View from "./View.js";
import icons from "../../img/icons.svg";
import { TEMP_SEC, MOBILE_THREAD } from "../config.js";

class HeaderView extends View {
	constructor(parentClass) {
		super();
		this.parentClass = parentClass;
	}

	// PUBLIC METHODS
	addHandler(func1, func2, func3) {
		document
			.querySelector(".header__menu")
			.addEventListener("click", this.handleToggleMenu);
		this._addHandlerLogo(func1);
		this._addHandlerNavPageTo(func2);
		this._addHandlerExternalLinks(func3);
	}

	handleToggleMenu() {
		const menu = document.querySelector(".header");
		menu.classList.toggle("header__nav--mobileOpenMenu");
	}
	test() {
		alert(`it works!`);
	}

	// PRIVATE METHODS
	_addHandlerLogo(func) {
		const logo = document.querySelector(".header__logo");
		logo.addEventListener("click", func);
	}
	_addHandlerNavPageTo(func) {
		const page = document.querySelector(".nav__pages");
		page.addEventListener("click", func);
	}
	_addHandlerExternalLinks(func) {
		const navLink = document.querySelector(".nav__links");
		navLink.addEventListener("click", func);
	}

	_generateMarkup() {
		const markup = `
		<div class="header__logo" data-href="#">
			<div>I'm <span class="ft-heavy">Jaxine Chang</span></div>
			<div><span class="ft-highlight">web developer</span>+ designer</div>
		</div>
		<nav class="header__nav">
			<ul class="nav__pages">
				<li class="nav__page" data-page="home">Home</li>
				<li class="nav__page-divider">|</li>
				<li class="nav__page" data-page="cv">CV</li>
				<li class="nav__page-divider">|</li>
				<li class="nav__page" data-page="contact">Contact</li>
			</ul>
			<div class="nav__links">
				<svg class="nav__link nav__links--github " data-url="https://github.com/jaxineC">
					<use href="${icons}#icon-github" />
				</svg>
				<svg class="nav__link nav__links--fb" data-url="https://www.facebook.com/chiahsing.chang.50">
					<use href="${icons}#icon-fb" />
				</svg>
				<svg class="nav__link nav__links--linkedIn"  data-url="https://www.linkedin.com/in/chia-hsing-chang-a41590136/">
					<use href="${icons}#icon-linkedIn" />
				</svg>
				<svg class="nav__link nav__links--email" data-url="mailto:jaxine.c@gmail.com">
					<use href="${icons}#icon-email"/>
				</svg>
			</div>
		</nav>
		<button class="header__menu">
			<svg class="header__menu-icon" name="icon-menu">
				<use href="${icons}#icon-menu" />
			</svg>
			<svg class="header__menu-icon" name="icon-close">
				<use href="${icons}#icon-close" />
			</svg>
		</button>
		<div class="header__background"></div>
    `;
		return markup;
	}
}

export default new HeaderView(".header");

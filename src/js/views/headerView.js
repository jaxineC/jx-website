import View from "./View.js";
import icons from "../../img/icons.svg";

class HeaderView extends View {
	constructor(parentClass) {
		super();
		this.parentClass = parentClass;
	}

	// PUBLIC METHODS
	addHandler(func1, func2, func3) {
		window.addEventListener("resize", this._handleResize);
		document
			.querySelector(".header__right-menuIcon")
			.addEventListener("click", this._handleToggleMenu);
		this._addHandlerLogo(func1);
		this._addHandlerNavPageTo(func2);
		this._addHandlerExternalLinks(func3);
	}

	// PRIVATE METHODS
	_addHandlerLogo(func) {
		const logo = document.querySelector(".header__left");
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
		<div class="header__left">
			<div>I'm <span class="ft-heavy">Jaxine Chang</span></div>
			<div><span class="ft-highlight">web developer</span>+ designer</div>
		</div>
		<nav class="header__right nav nav__pages">
				<div class="nav__home nav__page--to" data-page="home">Home</div>
				<div class="nav__cv nav__page--to"  data-page="cv">CV</div>
				<div class="nav__contact nav__page--to" data-page="contact">Contact</div>
				<div class="nav__links">
					<svg class="nav__links--github nav__link" data-url="https://github.com/jaxineC">
						<use href="${icons}#icon-github" />
					</svg>
					<svg class="nav__links--fb nav__link" data-url="https://www.facebook.com/chiahsing.chang.50">
						<use href="${icons}#icon-fb" />
					</svg>
					<svg class="nav__links--linkedIn nav__link"  data-url="https://www.linkedin.com/in/chia-hsing-chang-a41590136/">
						<use href="${icons}#icon-linkedIn" />
					</svg>
					<svg class="nav__links--email nav__link" data-url="mailto:jaxine.c@gmail.com">
						<use href="${icons}#icon-email"/>
					</svg>
				</div>
		</nav>
		<nav class="header__right-menu nav nav__pages">
			<svg class="header__right-menuIcon">
				<use href="${icons}#icon-menu" />
			</svg>
		</nav>
		<div class="header__background"></div>
		<div class="header__line"></div>
    `;
		return markup;
	}
}

export default new HeaderView(".header");

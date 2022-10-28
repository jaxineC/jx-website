import View from "./View.js";

class FooterView extends View {
	constructor(parentClass) {
		super();
		this.parentClass = parentClass;
	}

	// PUBLIC METHODS
	addHandler(func) {
		this._addHandlerBackToTop(func);
	}

	// PRIVATE METHODS
	_addHandlerBackToTop(func) {
		const btn = document.querySelector(".footer__backToTop");
		btn.addEventListener("click", func);
	}
	_generateMarkup() {
		const markup = `
			<div class="footer__text">
				UI/ UX is inspired by Wix.com templates + Udemy JavaScript online
				courses by Jonas Schmedtmann.
			</div>
			<div class="footer__backToTop">Back To Top</div>
			<div class="footer__background"></div>
		`;
		return markup;
	}
}

export default new FooterView(".footer");

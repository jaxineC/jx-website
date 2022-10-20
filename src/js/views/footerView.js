import View from "./View.js";

class FooterView {
	constructor(parentClass, markup) {
		this.parentClass = parentClass;
		this.markup = markup;
	}
	renderTemplate() {
		const parentElement = document.querySelector(`.${this.parentClass}`);
		// const markup = this._generateMarkup();
		// parentElement.insertAdjacentHTML("beforeend", markup);
		console.log(parentElement);
		parentElement.innerHTML = this.markup;
	}

	_generateMarkup() {
		const markupFooter = `
      <div class="footer__text">
        UI/ UX is inspired by Wix.com templates + Udemy JavaScript online
        courses by Jonas Schmedtmann.
      </div>
      <div class="footer__backToTop">Back To Top</div>
      <div class="footer__background"></div>
    `;
		return markupFooter;
	}
}

export default new FooterView(".footer");

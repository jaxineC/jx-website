import icons from "../../img/icons.svg";
import { TEMP_SEC, MOBILE_THREAD } from "../config.js";

export default class View {
	_target;
	constructor(parentClass) {
		this.parentClass = parentClass;
	}

	renderMarkup() {
		this._target = window.location.href.split("/").at(-1);
		const parentElement = document.querySelector(`${this.parentClass}`);
		const markup = this._generateMarkup();
		// parentElement.insertAdjacentHTML("beforeend", markup);
		parentElement.innerHTML = markup;
	}

	renderModal(icon, msg, detail) {
		const markup = `
      <svg class="modal__icon">
        <use href="${icons}#${icon}" />
      </svg>
      <div class="modal__msg">${msg}</div>
      <div class="modal__detail">${detail}</div>
    `;
		const parentElem = document.querySelector(".modal__window");
		const msgWindow = document.querySelector(".modal");
		parentElem.innerHTML = markup;
		msgWindow.classList.remove("hide");
		setTimeout(() => msgWindow.classList.add("hide"), TEMP_SEC * 1000);
	}
	// PUBLIC METHODS
	addHandler(func) {
		// take function args from index.js
		// querySelector
		// addEventListener
	}

	// PRIVATE METHODS
	_generateMarkup() {
		const markup = ``;
		return markup;
	}

	_handleToggleMenu() {
		const menu = document.querySelector(".header");
		menu.classList.toggle("header__nav--mobileOpenMenu");
	}
}

import icons from "../img/icons.svg";

export default class View {
	constructor() {}

	renderComponent(markup, className) {
		const element = document.createElement("div");
		element.classList.add(className);
		element.insertAdjacentHTML("afterbegin", markup);
		return element;
	}
	renderTemplate(parentClass, markup) {
		const parentElement = document.querySelector(`.${parentClass}`);
		// parentElement.insertAdjacentHTML("beforeend", markup);
		parentElement.innerHTML = markup;
	}
}

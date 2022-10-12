"use strict";
import "../scss/style.scss";
import gitHubIcon from "../img/github.png";
import icons from "../img/icons.svg";

const app = document.querySelector(".App");

const renderComponent = function (text, className) {
	const element = document.createElement("div");
	element.classList.add(className);
	element.insertAdjacentHTML("afterbegin", text);
	return element;
};

const renderImg = function (url, className, alt) {
	const element = document.createElement("img");
	element.classList.add(className);
	element.alt = alt;
	element.src = url;
	return element;
};

const renderIcon = function (iconId, className, viewbox, size) {
	const markup = `
		<use href="${icons}#${iconId}"></use>
	`;
	const element = document.createElement("svg");
	element.classList.add(className);
	element.viewbox = viewbox;
	element.height = size;
	element.width = size;
	element.insertAdjacentHTML("afterbegin", markup);
	return element;
};
// app.appendChild(renderComponent(`renderComponent`, "demo"));
// app.appendChild(renderImg(gitHubIcon, "demo-img", "demo-img"));
// app.appendChild(renderIcon("icon-smile", "demo-svg", "0 0 24 24", 512));

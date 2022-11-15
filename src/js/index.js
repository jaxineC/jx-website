import normalize from "normalize.css";
import "../scss/style.scss";
import footerView from "./views/footerView.js";
import mainView from "./views/mainView.js";
import headerView from "./views/headerView.js";
import { TEMP_SEC, MOBILE_THREAD } from "./config.js";

const stateObj = {
	user: "",
	page: "", //'home', 'cv', 'blog', 'contact',
	device: "",
};

// FUNCTIONS
const backToHome = function () {
	window.location = "./";
};
const navPageTo = function (e) {
	if (e.target.classList.contains("nav__page")) {
		history.replaceState(stateObj, "_", `${e.target.dataset.page}`);
		mainView.renderMarkup();
		mainView.addHandler(downloadPDF, sendMessage);
	}
	if (
		e.target.closest("header").classList.contains("header__nav--mobileOpenMenu")
	) {
		headerView.handleToggleMenu();
	}
};
const openExternalLink = function (e) {
	if (e.target.classList.contains("nav__link")) {
		window.open(e.target.dataset.url);
	}
};
const smoothScroll = function (e) {
	e.preventDefault();
	const href = this.getAttribute("href");
	if (href === "#") {
		window.scroll({
			top: 0,
			behavior: "smooth",
		});
	}
	if (href !== "#" && href.startsWith("#")) {
		const secElem = document.querySelector(href);
		secElem.scrollIntoView({
			behavior: "smooth",
		});
	}
};
const downloadPDF = function (url, fileName) {
	var link = document.createElement("a");
	link.href = url;
	link.download = fileName;
	link.dispatchEvent(new MouseEvent("click"));
};
const sendMessage = function (event) {
	event.preventDefault();
	console.log(this);
	(function () {
		emailjs.init("LoKIzut9EdFNqs_7j");
	})();
	this.contact_number.value = (Math.random() * 100000) | 0;
	emailjs.sendForm("service_da86wqm", "template_um6v3my", this).then(
		function () {
			mainView.renderModal(
				"icon-working",
				"Email Sent!",
				"Thank you for the message, I'll response as soon as I can."
			);
			console.log("SUCCESS!");
			mainView.renderMarkup();
		},
		function (error) {
			renderModal(
				"icon-warning",
				"Oops!",
				"Something went wrong, please try again."
			);
			console.log("FAILED...", error);
		}
	);
};
const checkDevice = function () {
	stateObj.device = window.innerWidth > MOBILE_THREAD ? "desktop" : "mobile";
};

// TEMP
const test = function (msg = "") {
	alert(`it works! ${msg}`);
};

const init = function () {
	checkDevice();
	headerView.renderMarkup();
	mainView.renderMarkup();
	footerView.renderMarkup();
	headerView.addHandler(backToHome, navPageTo, openExternalLink);
	mainView.addHandler(downloadPDF, sendMessage);
	footerView.addHandler(smoothScroll);
};
init();

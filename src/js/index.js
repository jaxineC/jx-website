import "../scss/style.scss";
import footerView from "./views/footerView.js";
import mainView from "./views/mainView.js";
import headerView from "./views/headerView.js";

const stateObj = {
	user: "",
	page: "", //'home', 'cv', 'blog', 'contact'
};

// FUNCTIONS
const backToHome = function () {
	window.location = "./";
};
const navPageTo = function (e) {
	if (e.target.classList.contains("nav__page--to")) {
		history.replaceState(stateObj, "_", `${e.target.dataset.page}`);
		mainView.renderMarkup();
		mainView.addHandler(downloadPDF, sendMessage);
	}
};
const openExternalLink = function (e) {
	if (e.target.classList.contains("nav__link")) {
		window.open(e.target.dataset.url);
	}
};
const backToTop = function (e) {
	window.scroll(0, 0);
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

// TEMP
const test = function (msg = "") {
	alert(`it works! ${msg}`);
};

const init = function () {
	headerView.renderMarkup();
	mainView.renderMarkup();
	footerView.renderMarkup();
	headerView.addHandler(backToHome, navPageTo, openExternalLink);
	mainView.addHandler(downloadPDF, sendMessage);
	footerView.addHandler(backToTop);
};
init();

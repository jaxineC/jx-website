import "../scss/style.scss";
import icons from "../img/icons.svg";
import demoBalancePro from "../img/img-bp-demo.gif";
import demoTpe from "../img/img-tpe-demo.png";
import { TEMP_SEC } from "./config.js";
// import cvPDF from "../img/Resume_EN.pdf";
// import { internalIP } from "webpack-dev-server";
import fileCV from "../img/Resume_EN.pdf";
const app = document.querySelector(".App");
const stateObj = {
	user: "",
	page: "", //'home', 'cv', 'blog', 'contact'
};

const renderTemplate = function (parentClass, markup) {
	const parentElement = document.querySelector(`.${parentClass}`);
	// parentElement.insertAdjacentHTML("beforeend", markup);
	parentElement.innerHTML = markup;
};

const markupHeader = `
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
let markupMain;

const markupFooter = `
	<div class="footer__text">
		UI/ UX is inspired by Wix.com templates + Udemy JavaScript online
		courses by Jonas Schmedtmann.
	</div>
	<div class="footer__backToTop">Back To Top</div>
	<div class="footer__background"></div>
`;

const addHandlerBackToTop = function () {
	const btn = document.querySelector(".footer__backToTop");
	btn.addEventListener("click", function () {
		window.scroll(0, 0);
	});
};

const generateMarkupMain = function () {
	const target = window.location.href.split("/").at(-1);
	switch (target) {
		case "cv":
			markupMain = `
				<div class="cv">
					<section class="cv__headline">
						<h1 class="cv__headline-title ft-heavy">CV</h1>
						<div class="cv__headline-highlight "></div>
					</section>
					<section class="cv__section cv__summary">
						<h2 class="cv__section-title">Professional Summary</h2>
						<p  class="cv__summary-p">
							I am a front-end developer who majored in architecture and had worked as an architectural designer for years. 
						</p>
						<p  class="cv__summary-p">
							It's lucky to learn in architecture that I learned to find problems and solve them, yet at the same time,  I was able to stay curious and open to possibilities.
						</p>
						<p  class="cv__summary-p">
							After self-learning to code for almost a year, I am ready to start a new career as a front-end developer.
						</p>
						<button  class="cv__summary-download downloadCV">Download full cv</button>

						
					</section>
					<section class="cv__section cv__skills">
						<div class="cv__section-highlight"></div>
						<h2 class="cv__section-title">Skills</h2>
							<p class="cv__section-p">
								<div class="cv__section-em">Front-end</div>
								<span>html</span>
								<span>CSS</span>
								<span>JavaScript</span>
								<span>React</span>
								<span>styled-components</span>
								<span>npm</span>
								<span>webpack</span>
								<span>babel</span>
								<span>Sass</span>
								<span>BEM</span>
							</p>
						<p class="cv__section-p">
							<div class="cv__section-em">Dev-tool/ Cloud Service</div>
							<span>Git</span>
							<span>Prettier</span>
							<span>ESlint</span>
							<span>AWS EC2</span>
							<span>Firebase Hosting/ Auth/ Firestore</span>
						</p>
						<p class="cv__section-p">
							<div class="cv__section-em">Back-end/ Others</div>
							<span>python</span>
							<span>Flask</span>
							<span>MySQL</span>
							<span>Adobe CC Photoshop</span>
							<span>Illustrator</span>
						</p>
					</section>
					<section class="cv__section cv__work">
						<div class="cv__section-highlight"></div>
						<h2 class="cv__section-title">Work Experience</h2>
							<ul>
								<li class="cv__section-list">
									<div class="cv__section-year">Jan - Jul .2022, Taiwan</div>
									<div class="cv__section-em">Trainee | WeHelp bootcamp</div>
									<ul class="cv__section-projects">
										<li>Taipei Day Trip Website</li>
										<li>balancePro</li>
									</ul>
									<p class="cv__section-p">
										Built a website - Taipei Day Trip with limited instruction, using back-end techniques
										including Python with Flask, MySQL, and AWS EC2.
										Cooperated with partners to build a weather app utilizing Git for version control.
										Developed a web application- balancePro with no guides.
										Implement techniques including infinite scroll, JWT, member system, etc.
									</p>
								</li>
								<li class="cv__section-list">
									<div class="cv__section-year">2020 - 2021, Taiwan
										1yr 10mo</div>
									<div class="cv__section-em">Project Designer | Yarch</div>
									<ul class="cv__section-projects">
										<li>NTU SPECS Education Building, Hsinchu Campus, Taiwan</li>
										<li>Tainan Long-term Nursing Home, Tainan, Taiwan</li>
									</ul>
									<p class="cv__section-p">
										Lead project designer, helped guide junior designers on tasks, and communicated with
										clients, consultants, and official supervision departments.
									</p>
								</li>
								<li class="cv__section-list">
									<div class="cv__section-year">2018 ~ , Taiwan</div>
									<div class="cv__section-em">Designer/ Freelancer | Elements Innovation Co.,Ltd
										, Fieldarchi, etc.</div>
									<ul class="cv__section-projects">
										<li>Eutopia Resort, Hsinch</li>
										<li>Hakka-themed Guandong Market Retrofit, Hsinchu</li>
									</ul>
									<p class="cv__section-p">
										Design works on interior design, and architectural competitions. Included 6-mo.
										full-time job in Elements Innovation executing projects cooperating with foreign
										firms.
									</p>
								</li>
								<li class="cv__section-list">
									<div class="cv__section-year">2016 - 2017, USA</div>
									<div class="cv__section-em">Architectural Designer | Studio19 Architects</div>
									<ul class="cv__section-projects">
										<li>Mountlake Terrace Townhouse, USA</li>
										<li>Hillstone House, USA</li>
									</ul>
									<p class="cv__section-p">
										Design jobs including early planning to late construction documents.
									</p>
								</li>
								<li class="cv__section-list">
									<div class="cv__section-year">2011 - 2013, Taiwan</div>
									<div class="cv__section-em">Architectural Designer  | Artech</div>
									<ul class="cv__section-projects">
										<li>High-Speed Rail Changhua Station, Taiwan</li>
										<li>High-Speed Rail Yunlin Station, Taiwan</li>
									</ul>
									<p class="cv__section-p">
										Designed/ executed a 2-billion-twd project with heavy team communication.
									</p>
								</li>
								<li class="cv__section-list">
									<div class="cv__section-year">2011 - 2013, Taiwan</div>
									<div class="cv__section-em">Assistant Designer  | SHEU Architects</div>
									<ul class="cv__section-projects">
										<li>Taiwan Taoyuan Airport Refurbishment, DD- early CA, Taiwan</li>
										<li>Ground Source Master Planning, Vietnam</li>
									</ul>
									<p class="cv__section-p">
										Assisted in executing multiple projects under supervision.
									</p>
								</li>
							</ul>
					</section>
					<section class="cv__section cv__education">
						<div class="cv__section-highlight"></div>
						<h2 class="cv__section-title">Education</h2>
							<ul>
								<li class="cv__section-list">
									<div class="cv__section-year">2014-2016</div>
									<div class="cv__section-em">Master of Architecture</div>
									<p class="cv__section-p">
										University of Michigan, USA
									</p>
								</li>
								<li class="cv__section-list">
									<div class="cv__section-year">2002-2006</div>
									<div class="cv__section-em">Bachelor of Science in
										Architecture</div>
									<p class="cv__section-p">
										National Cheng Kung University, Taiwan
									</p>
								</li>
							</ul>
					</section>
					<section  class="cv__section cv__honers">
						<div class="cv__section-highlight"></div>
						<h2 class="cv__section-title">Honers</h2>
							<ul>
								<li class="cv__section-list">
									<div class="cv__section-year">2016</div>
									<div class="cv__section-em">Taubman Annual Architecture
										Student Show</div>
									<p class="cv__section-p">
										Project: Exquisite Corb(As a studio) Exhibition location: Taubman College	CMYK Gallery.
						(Alumni Board of Governors Award, Honorable Mention)
									</p>
								</li>
								<li class="cv__section-list">
									<div class="cv__section-year">2016</div>
									<div class="cv__section-em">Architizer A+Awards</div>
									<p class="cv__section-p">
										Project: THSR Changhua Station / KRIS YAO | ARTECH
					(Global voting for the most popular bus & train stations category)
									</p>
								</li>
							</ul>
					</section>
				</div>
			`;
			break;
		case "contact":
			markupMain = `
			<div class="contact">
				<section class="contact__headline">
					<h1 class="contact__headline-title ft-heavy">Contact</h1>
					<div class="contact__headline-highlight "></div>
				</section>
				<section class="contact__section contact__msg">
					<h2 class="contact__section-title">Say HI here</h2>
					<p class="contact__section-p">
						<div class="contact__section-em">Jaxine Chang</div>
						<div> email: jaxine.c@gmail.com</div>
						<div> mobile: 0922 392 203</div>
					</p>
					<p class="contact__section-p">Contact me with the contact info above, </br> or leave me message here.
						<form class="contact__form">
							<input type="hidden" name="contact_number">
							<input class="contact__section-input contact__form-name input" type="text" name="user_name" placeholder="Name"/>
							<input class="contact__section-input contact__form-email input" type="email" name="user_email" placeholder="Email" required/>
							<textarea class="contact__section-input contact__form-msg input" name="message" rows="4" cols="50" placeholder="Message Here" required></textarea>
							<button class="contact__form-btn" type="submit">Send</button>
						</form>
					</p>
				</section>
			</div>
			`;
			break;
		default:
			markupMain = `
			<div class="home">
				<section class="sections__summary">
					<div class="sections__summary-text">
						Ready to take on challenges on
						<span class="ft-heavy ft-highlight">FRONT-END</span>
							development, and 
						<span class="ft-heavy">explore the world of code</span>.
					</div>
					<div class="sections__summary-image"></div>
					<div class="sections__summary-highlight"></div>
					<div class="sections__summary-background"></div>
				</section>
				<section class="sections__skills">
					<div class="sections__skills-highlight"></div>
					<div class="sections__skills-title">
						Me & <span class="ft-heavy">Skills</span>
					</div>
					<div class="sections__skills-text">
						<div>
							I am an inquisitive person, and I am ready to take on challenges in
							front-end development, find and solve problems. My passion is for
							exploring the world, and I am dedicated to learning more every day
							through life and work.
						</div>
						<span>HTML</span>
						<span>CSS</span>
						<span class="ft-heavy black">JavaScript</span>
						<span>npm</span>
						<span class="lightGrey">webpack</span>
						<span>babel</span>
						<span class="ft-heavy black">React</span>
						<span class="lightGrey">styled-components</span>
						<span>sass</span>
						<span class="lightGrey">AWS EC2</span>
						<span class="ft-heavy black">Firebase</span>
						<span>Python flask</span>
						<span class="lightGrey">MySQL</span>
						<span>Git</span>
						<span>Prettier</span>
						<span>Adobe CC Illustrator</span>
						<div><button class="sections__skills-download downloadCV">Download full CV</button>
						</div>
					</div>
				</section>
				<section class="sections__portfolio">
					<div class="sections__portfolio-highlight">portfolio</div>
					<div class="sections__portfolio-project">
						<div class="sections__portfolio-project-text">
							<div class="title">
								<span class="ft-heavy">balancePro</span> online Gantt chart tool
							</div>
							<div class="sub">
								balancePro is a front-end-oriented project. Focused on
								visualization of user actions with mouse events and
								timestamp-related methods in JavaScript.
							</div>
							<ul>
								<li>
									Used epoch timestamp as the original point and translated time
									units to pixels with the help of JavaScript math methods.
								</li>
								<li>Modularized with React hook and functional components.</li>
								<li>
									Utilized Firebase back-end services for hosting, database, and
									user authentication.
								</li>
								<li>Implemented styled-components for CSS in JS</li>
								<li>Executed version control with Git branches.</li>
							</ul>
						</div>
						<img class="sections__portfolio-project-image sections__portfolio-project-image-bp" src="${demoBalancePro}" alt="bp" />
					</div>
					<div class="sections__portfolio-project">
						<div class="sections__portfolio-project-text">
							<div class="title">
								<span class="ft-heavy">Taipei Day Trip</span> e-commerce website
							</div>
							<div class="sub">
								Taipei Day Trip website is a learning-from-doing full-stack
								development Built with Python and deployed on AWS EC2 with
								Ubuntu.
							</div>
							<ul>
								<li>
								RWD UI followed the design from Figma, involving infinite scroll and image slider.
								</li>
								<li>
									Client-side form validation with the pattern using regular
									expressions.
								</li>
								<li>Followed RESTful API regulation from Swagger.</li>
								<li>Used JWT for member system.</li>
								<li>Used a third-party API for online payment. (TapPay)</li>
								<li>
									CRUD in the database with MySQL, including initial multiple data
									handling from a given JSON file.
								</li>
							</ul>
						</div>
						<img class="sections__portfolio-project-image sections__portfolio-project-image-tpe" src="${demoTpe}" alt="tpe" />
					</div>
				</section>
				<div class="sections__training-title">My Learning Tools</div>
				<section class="sections__training">
					<div class="sections__training-course">
						<div class="svg-text">
							<svg>
								<use href="${icons}#icon-wehelp" />
							</svg>
							<span>WeHelp</span>
						</div>
			
						<div class="title">6 mo. bootcamp + Ongoing community</div>
						<ul>
							<li>Real-World project development process.</li>
							<li>Little guidance and no ready-to-follow solutions were provided.</li>
							<li>Common web development tools include Git, Figma, and Swagger.</li>
							<li>
								Ability to understand business requirements and translate them into
								features.
							</li>
							<li>Knowledge to web security and performance.</li>
						</ul>
					</div>
					<div class="sections__training-course">
						<svg>
							<use href="${icons}#icon-udemy" />
						</svg>
						<div class="title">online course resources</div>
						<ul>
							<li>Complete JavaScript taught by Jonas Schmedtmann - 69 hours</li>
							<li>
								Real-World Websites with HTML and CSS taught by Jonas Schmedtmann-
								37.5 hours
							</li>
							<li>Complete Python Developer by Andrei Neagoie- 30.5 hours</li>
							<li>JavaScript、React、Flask taught by彭兆蔚 - 24.5 hours</li>
						</ul>
					</div>
				</section>
			</div>
		`;
	}
};

// External Links
const addHandlerExternalLinks = function (func) {
	const navLink = document.querySelector(".nav__links");
	navLink.addEventListener("click", func);
};

const clearInput = function () {
	document.querySelectorAll(".input").forEach((element) => {
		element.value = "";
	});
};

const addHandler = function () {
	const target = window.location.href.split("/").at(-1);
	switch (target) {
		case "cv":
			break;
		case "contact":
			document
				.querySelector(".contact__form")
				.addEventListener("submit", function (event) {
					event.preventDefault();
					(function () {
						emailjs.init("LoKIzut9EdFNqs_7j");
					})();
					this.contact_number.value = (Math.random() * 100000) | 0;
					emailjs.sendForm("service_da86wqm", "template_um6v3my", this).then(
						function () {
							renderModal(
								"icon-working",
								"Email Sent!",
								"Thank you for the message, I'll response as soon as I can."
							);
							console.log("SUCCESS!");
							renderTemplate("main", markupMain);
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
				});
			break;
		default:
			document
				.querySelector(".sections__skills-download")
				.addEventListener("click", downloadPDF);
	}
};

const addHandlerNavPageTo = function (func) {
	const page = document.querySelector(".nav__pages");
	page.addEventListener("click", func);
};

const renderModal = function (icon, msg, detail) {
	const markup = `
		<svg class="modal__icon">
			<use href="${icons}#${icon}" />
		</svg>
		<div class="modal__msg">${msg}</div>
		<div class="modal__detail">${detail}</div>
	`;
	const parentElem = document.querySelector(".modal__window");
	parentElem.innerHTML = markup;
	document.querySelector(".modal").classList.remove("hide");
	setTimeout(
		() => document.querySelector(".modal").classList.add("hide"),
		TEMP_SEC * 1000
	);
};

// Controller

const openExternalLink = function (e) {
	if (e.target.classList.contains("nav__link")) {
		window.open(e.target.dataset.url);
	}
};

const navPageTo = function (e) {
	if (e.target.classList.contains("nav__page--to")) {
		history.replaceState(stateObj, "_", `${e.target.dataset.page}`);
		generateMarkupMain();
		renderTemplate("main", markupMain);
		addHandler();
	}
};

const addHendlerToggleMenu = function () {
	const menuIcon = document.querySelector(".header__right-menuIcon");
	menuIcon.addEventListener("click", function () {
		const menu = document.querySelector(".header__right");
		menu.style.display == "none"
			? (menu.style.display = "flex")
			: (menu.style.display = "none");
	});
};
const addHandlerWindowSize = function (func) {
	window.addEventListener("resize", handleResize);
};

const handleResize = function () {
	window.innerWidth >= 600
		? (document.querySelector(".header__right").style.display = "flex")
		: (document.querySelector(".header__right").style.display = "none");
};
const debounce = function (func, timeout = 1000) {
	let timer;
	return (...args) => {
		console.log("here");
		clearTimeout(timer);
		timer = setTimeout(() => {
			func.apply(this, args);
		}, timeout);
	};
};

const addHandlerDownload = function (url, fileName) {
	document.querySelector(".downloadCV").addEventListener("click", () => {
		downloadPDF(url, fileName);
	});
};

const downloadPDF = function (url, fileName) {
	var link = document.createElement("a");
	link.href = url;
	link.download = fileName;
	link.textContent = "Link created from btn";
	link.dispatchEvent(new MouseEvent("click"));
};

const init = function () {
	generateMarkupMain();
	renderTemplate("header", markupHeader);
	renderTemplate("main", markupMain);
	renderTemplate("footer", markupFooter);
	addHandlerExternalLinks(openExternalLink);
	addHandlerNavPageTo(navPageTo);
	addHendlerToggleMenu();
	addHandlerBackToTop();
	document.querySelector(".header__left").addEventListener("click", () => {
		console.log(window.innerWidth);
		// window.location = "./";
	});
	addHandlerWindowSize(handleResize);
	addHandlerDownload(fileCV, "cv_Jaxine_Chang");
};
init();

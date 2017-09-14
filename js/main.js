console.log("Page Loaded");

// Navigation
var navAbout = document.getElementById("nav-about");
var navPortfolio = document.getElementById("nav-portfolio");
var pageAbout = document.getElementById("page-about");
var pagePortfolio = document.getElementById("page-portfolio");

navAbout.addEventListener("click", function(){
	pageAbout.setAttribute("style", "display: block");
	pagePortfolio.setAttribute("style", "display: none");

	navAbout.setAttribute("style", "text-decoration: underline");
	navPortfolio.setAttribute("style", "text-decoration: none");
});

navPortfolio.addEventListener("click", function(){
	pageAbout.setAttribute("style", "display: none");
	pagePortfolio.setAttribute("style", "display: block");

	navAbout.setAttribute("style", "text-decoration: none");
	navPortfolio.setAttribute("style", "text-decoration: underline");
});

// Secret Hacker


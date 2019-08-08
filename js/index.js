const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png",
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);

let navLinks = document.getElementsByTagName("a");
navLinks[0].textContent = siteContent["nav"]["nav-item-1"];
navLinks[1].textContent = siteContent["nav"]["nav-item-2"];
navLinks[2].textContent = siteContent["nav"]["nav-item-3"];
navLinks[3].textContent = siteContent["nav"]["nav-item-4"];
navLinks[4].textContent = siteContent["nav"]["nav-item-5"];
navLinks[5].textContent = siteContent["nav"]["nav-item-6"];

let introText = document.querySelector("h1");
introText.textContent = siteContent["cta"]["h1"];

let getStarted = document.querySelector("button");
getStarted.textContent = siteContent["cta"]["button"];

let introImg = document.getElementById("cta-img");
introImg.setAttribute('src', siteContent["cta"]["img-src"]);


let topArticle = document.querySelector(".top-content").querySelectorAll("h4")
let topContent = document.querySelector(".top-content").querySelectorAll("p");

let features = topArticle[0];
features.textContent = siteContent["main-content"]["features-h4"];
let featureContent = topContent[0];
featureContent.textContent = siteContent["main-content"]["features-content"];

let about = topArticle[1];
about.textContent = siteContent["main-content"]["about-h4"];
let aboutContent = topContent[1];
aboutContent.textContent = siteContent["main-content"]["about-content"];

let imgBreak = document.getElementById("middle-img");
imgBreak.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

let bottomArticle = document.querySelector(".bottom-content").querySelectorAll("h4")
let bottomContent = document.querySelector(".bottom-content").querySelectorAll("p");

let services = bottomArticle[0];
services.textContent = siteContent["main-content"]["services-h4"];
let servicesContent = bottomContent[0];
servicesContent.textContent = siteContent["main-content"]["services-content"];

let product = bottomArticle[1];
product.textContent = siteContent["main-content"]["product-h4"];
let productContent = bottomContent[1];
productContent.textContent = siteContent["main-content"]["product-content"];

let vision = bottomArticle[2];
vision.textContent = siteContent["main-content"]["vision-h4"];
let visionContent = bottomContent[2];
visionContent.textContent = siteContent["main-content"]["vision-content"];

let contact = document.querySelector(".contact").querySelectorAll("h4");
let contactInfo = document.querySelector(".contact").querySelectorAll("p");

contact[0].textContent = siteContent["contact"]["contact-h4"];
let address = contactInfo[0].textContent = siteContent["contact"]["address"];
let phone = contactInfo[1].textContent = siteContent["contact"]["phone"];
let email = contactInfo[2].textContent = siteContent["contact"]["email"];

let footer = document.querySelector("footer").querySelectorAll("p");
footer[0].textContent = siteContent["footer"]["copyright"];


// let titleArticle = document.querySelectorAll("h4");
// titleArticle[0].textContent = siteContent["main-content"]["features-h4"];
// titleArticle[1].textContent = siteContent["main-content"]["about-h4"];
// titleArticle[2].textContent = siteContent["main-content"]["services-h4"];
// titleArticle[3].textContent = siteContent["main-content"]["product-h4"];
// titleArticle[4].textContent = siteContent["main-content"]["vision-h4"];

// let articleContent = document.querySelectorAll("p");
// articleContent[0].textContent = siteContent["main-content"]["features-content"];
// articleContent[1].textContent = siteContent["main-content"]["about-content"];
// articleContent[2].textContent = siteContent["main-content"]["services-content"];
// articleContent[3].textContent = siteContent["main-content"]["product-content"];
// articleContent[4].textContent = siteContent["main-content"]["vision-content"];

// //Using the last two querySelctorAll to fill in contact section
// titleArticle[5].textContent = siteContent["contact"]["contact-h4"];
// articleContent[5].textContent = siteContent["contact"]["address"];
// articleContent[6].textContent = siteContent["contact"]["phone"];
// articleContent[7].textContent = siteContent["contact"]["email"];

// articleContent[8].textContent = siteContent["footer"]["copyright"];


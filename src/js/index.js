"use strict"

import { Component } from "./component";

import "@fortawesome/fontawesome-free/js/all.js";
import "@fortawesome/fontawesome-free/css/all.css";

import '../css/reset.css';
import '../css/sticky-footer.css';
import '../css/index.css';

import Bio from '../text/bio.txt';

import RestaurantImg from '../image/beachhouse.jpg';
import mealpic1 from '../image/clams.jpg';
import mealpic2 from '../image/lobster.jpg';
import mealpic3 from '../image/salmon.jpg';


const onLoad = (() => {
  const body = document.body;
  const Components = new Component();

  const mainWrapper = Components.content();
  body.append(mainWrapper);
  const main = mainWrapper.querySelector(".main")

  const header = Components.header("Ocean Kitchen");
  const banner = Components.banner("Enjoy outdoor dining with an ocean breeze", RestaurantImg);
  const navbar = Components.navbar("Home", "Menu", "Visit");
  const footer = Components.footer();
  
  const home = Components.section("home");
  const homeBiography = Components.paragraph(Bio);
  
  const homeImgContainer = Components.div("home-images");
  const homeImages = [Components.img(mealpic1, "meal"),
  Components.img(mealpic2, "meal"),
  Components.img(mealpic3, "meal"),
  ];

  const homePullQuote = Components.pullquote("Come visit us today in Marin.")
  const homeToVisitButton = Components.button("Get Directions", "primary-button");

  // details
  const hookMessage = Components.pullquote("Serving fresh Pacific catches since 2001.");
  
  header.append(navbar); 
  mainWrapper.insertBefore(header, main);
  
  main.append(home);
  home.append(banner);
  home.append(hookMessage);
  home.append(homeBiography);

  home.append(homeImgContainer);
  homeImgContainer.append(...homeImages);

  home.append(homePullQuote, homeToVisitButton);

  body.append(footer);
  
  // Potential issue
  // Could be because the DOM hasn't loaded the element yet.
  // maybe, because #header works OK.
  // it's the way that FontAwesome works, it commented out the i and replaced
  // it with an SVG element. I'm guessing that it happened sometime after
  // the event listener was assigned.
  
  body.querySelector("#menu-button").addEventListener("click", (e) => {
    console.log("menu pressed.");
    document.querySelector("#navbar").classList.toggle("slide-in-out");
  });

  // console.log("Dab boi");
})();


//// TODO: Current workaround. So this is probably OK.
window.addEventListener('load', function () {
    document.querySelector("#menu-button").addEventListener("click", (e) => {
      console.log("menu pressed.");
      document.querySelector("#navbar").classList.toggle("slide-in-out");
    });
})


    // menuButton.addEventListener("click", (e) => {
    //   console.log("menu pressed.");
    //   document.querySelector("#navbar").classList.toggle("slide-in-out");
    // });
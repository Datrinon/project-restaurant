"use strict"

import { Component } from "./component";

import "@fortawesome/fontawesome-free/js/solid.js";
import "@fortawesome/fontawesome-free/css/solid.css";

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

  const main = Components.content();
  const header = Components.header("Ocean Kitchen");
  const banner = Components.banner("Enjoy outdoor dining with an ocean breeze", RestaurantImg);
  const navbar = Components.navbar("Home", "Menu", "Visit");
  const footer = Components.footer();
  
  const home = Components.section();
  const homeBiography = Components.paragraph(Bio);
  
  const homeImgContainer = Components.div("home-images");
  const homeImages = [Components.img(mealpic1, "meal"),
  Components.img(mealpic2, "meal"),
  Components.img(mealpic3, "meal"),
  ];


  // details
  const hookMessage = Components.pullquote("Serving fresh Pacific catches since 2001.");
  
  header.append(navbar); 
  main.append(header);
  main.append(banner);
  
  main.append(home);
  home.append(hookMessage);
  home.append(homeBiography);

  home.append(homeImgContainer);
  homeImgContainer.append(...homeImages);


  body.append(main);
  body.append(footer);
})();

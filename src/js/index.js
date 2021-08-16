"use strict"

import { Component } from "./component";

import "@fortawesome/fontawesome-free/js/solid.js";
import "@fortawesome/fontawesome-free/css/solid.css";

import '../css/reset.css';
import '../css/sticky-footer.css';
import '../css/index.css';

import RestaurantImg from '../image/beachhouse.jpg';


const onLoad = (() => {
  const body = document.body;
  const Components = new Component();

  const main = Components.content();
  const header = Components.header("Ocean Kitchen");
  const banner = Components.banner("Enjoy outdoor dining with an ocean breeze", RestaurantImg);
  const navbar = Components.navbar("Home", "Menu", "Visit");
  const footer = Components.footer();
  
  const home = Components.section();
  const homeBiography = // Import this through JSON please.

  // details
  const hookMessage = Components.pullquote("Since 2021. The Pacific's finest seafood.");
  
  header.append(navbar); 
  main.append(header);
  main.append(banner);
  
  main.append(home);
  home.append(hookMessage);

  body.append(main);
  body.append(footer);
})();

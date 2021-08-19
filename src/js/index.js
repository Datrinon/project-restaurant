"use strict"

import { Component } from "./component";

import "@fortawesome/fontawesome-free/js/all.js";
import "@fortawesome/fontawesome-free/css/all.css";

import '../css/reset.css';
import '../css/sticky-footer.css';
import '../css/index.css';
import '../css/menu.css';
import '../css/visit.css';

import Bio from '../data/bio.txt';
import Menu from '../data/entrees.json';
import Hours from '../data/schedule.csv';

import RestaurantImg from '../image/beachhouse.jpg';
import RestaurantInteriorImg from '../image/restaurantinterior.jpg';
import mealpic1 from '../image/clams.jpg';
import mealpic2 from '../image/lobster.jpg';
import mealpic3 from '../image/salmon.jpg';


function importAll(r) {

  let images = {};
  // r (require.context() returns a function upon call leading to the dist dirpath)
  // we use map to get an array that has key: src rel. filepath and value dist abs dirpath
  r.keys().map((item) => { images[item.replace('./', '')] = r(item); });
  return images;
  // return r.keys().map(r);
}

const homeSection = (() => {
  const Components = new Component();

  const home = Components.section("home");
  const banner = Components.banner("Enjoy outdoor dining with an ocean breeze", RestaurantImg);
  const hookMessage = Components.pullquote("Serving fresh Pacific catches since 2001.");
  const homeBiography = Components.paragraph(Bio);
  const homeImgContainer = Components.div("home-images");
  const homeImages = [Components.img(mealpic1, "meal"),
      Components.img(mealpic2, "meal"),
      Components.img(mealpic3, "meal"),];

  const homePullQuote = Components.pullquote("Come visit us today in Marin.")
  const homeToVisitButton = Components.button("Get Directions", "primary-button");

  home.append(banner);
  home.append(hookMessage);
  home.append(homeBiography);

  home.append(homeImgContainer);
  homeImgContainer.append(...homeImages);

  home.append(homePullQuote, homeToVisitButton);

  return home;
})();


const menuSection = (() => {
  const c = new Component();

  const menu = c.section("menu");
  const title = c.heading("Menu", 1, "menu-title");

  menu.append(title);
  menu.classList.add("no-display");
  
  const images = importAll(require.context('../image', false, /\.(png|jpe?g|svg)$/));
  // let dirpath = /^.+\//[Symbol.match](images[0][0]); //match returns an array, so we use [0] to retrieve match.
  // console.log(dirpath);
  //! Cannot use dirpath, since the image name is jumbled hash when exported to dist. You don't know which is which.
  //! Cannot use path, as this is a server node process, not the browser
  //// const path = require('path');

  //// console.log(path.resolve('../images'));
  // remember require.context returns a function that will give you the right path... so you need to call it.

  for (let section in Menu) {
    let sectionDiv = c.div("menu-area");
    let sectionHeading = c.heading(section, 2, "menu-section-header");

    sectionDiv.append(sectionHeading);
    let entreesDiv = c.div("entrees-area");
    for (let entree of Menu[section]) {
      let entreeDiv = c.div("entree");
      let name = c.heading(entree.name, 3);
      let price = c.paragraph(entree.price);
      let description = c.paragraph(entree.description);
      let img = c.img(images[entree.image], "entree-pic");
      
      entreeDiv.append(img, name, price, description);
      entreesDiv.append(entreeDiv);
    }

    sectionDiv.append(entreesDiv);
    menu.append(sectionDiv);
  }
  
  return menu;
})();

const visitSection =(() => {
  function initializeMap(map) {
    map.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1446.0598245802353!2d-122.51133701257287!3d37.76944511330641!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808587b9137328d5%3A0x5779caf7adb5889c!2sBeach%20Chalet%20Brewery%20and%20Restaurant!5e0!3m2!1sen!2sus!4v1629385295743!5m2!1sen!2sus";
    map.width = 600;
    map.height = 450;
    map.style.border = "0";
    map.allowFullscreen = "";
    map.setAttribute("loading", "lazy");

    return map;
  }
  
  const c = new Component();

  const visitWrapper = c.section("visit");
  const visit = c.section("visitContent");

  visitWrapper.append(visit);
  visitWrapper.classList.add("no-display");
  visitWrapper.style.backgroundImage = `url(${RestaurantInteriorImg})`;
  
  const title = c.heading("Come Visit Us", 2);

  const addressScheduleWrapper = c.section("directions-schedule");

  const addressDiv = c.div("directions-section");
  const addrHeading = c.heading("Address", 3);
  const address = c.paragraph("1000 Great Highway, San Francisco, CA 94121");
  const map = initializeMap(document.createElement("iframe"));
  addressDiv.append(addrHeading, address, map);
  
  const scheduleDiv = c.div("schedule-section");
  const hourHeading = c.heading("Hours", 3);
  const schedule = c.table("hours-table", Hours);
  scheduleDiv.append(hourHeading, schedule);
  // alert(JSON.stringify(Hours));

  addressScheduleWrapper.append(addressDiv, scheduleDiv);

  const contactDiv = c.div("contact-section");
  const contactHeading = c.heading("Contact Us", 3);
  const contactIcons = [c.faIcon("fab", "fa-facebook-messenger", "contact-icon"), c.faIcon("fab", "fa-instagram-square", "contact-icon")
  , c.faIcon("fab", "fa-twitter-square", "contact-icon")];
  contactDiv.append(contactHeading, ...contactIcons);


  visit.append(title, addressScheduleWrapper, contactDiv); // either this is legal or I use spread
    // [...] was not legal
    // ...array was legal. 
    // TODO dan write this down.
    // TODO also write down this visitSection, this a good way to format 
    // code
  return visitWrapper;
})();

const onLoad = (() => {
  const body = document.body;
  const Components = new Component();

  const mainWrapper = Components.content();
  body.append(mainWrapper);
  const main = mainWrapper.querySelector(".main")

  const header = Components.header("Ocean Kitchen");
  const navbar = Components.navbar("Home", "Menu", "Visit");
  const footer = Components.footer();
  
  // details
  
  header.append(navbar); 
  mainWrapper.insertBefore(header, main);
  body.append(footer);

  main.append(homeSection);
  main.append(menuSection);
  main.append(visitSection);

  window.addEventListener('load', function () {
    document.querySelector("#menu-button").addEventListener("click", (e) => {
      console.log("menu pressed.");
      document.querySelector("#navbar").classList.toggle("slide-in-out");
    });
  })
  
  /*
  Potential issue
  Could be because the DOM hasn't loaded the element yet.
  maybe, because #header works OK.
  it's the way that FontAwesome works, it commented out the i and replaced
  it with an SVG element. I'm guessing that it happened sometime after
  the event listener was assigned.
  
  
  // body.querySelector("#menu-button").addEventListener("click", (e) => {
  //   console.log("menu pressed.");
  //   document.querySelector("#navbar").classList.toggle("slide-in-out");
  // });
  */

})();


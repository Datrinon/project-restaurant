"use strict"

import './css/reset.css';
import './css/index.css';
import Banner from './image/beachhouse.jpg';

class Component {
  constructor() {

  }

  main() {
    let main = document.createElement("main");
    main.classList.add("content");
  
    return main;
  }

  header(title) {
    let header = document.createElement("header");
    let titleElem = document.createElement("h1");
    
    header.id = "banner";
    // header.style.background = `url(${img})`;
    
    titleElem.id = "page-title";
    titleElem.textContent = title;
    
    header.append(titleElem);
    
    return header;
  }

  navbar(...links) {
    const nav = document.createElement("nav");
    const linkContainer = document.createElement("ul");

    nav.id = "navbar";
    linkContainer.id = "navbar-buttons-container";

    for (let link of links) {
      const linkButton = document.createElement("li");
      const linkAnchor = document.createElement("a");

      linkButton.classList.add("navbar-button");
      
      linkAnchor.textContent = link;
      linkAnchor.setAttribute("href", "#");

      linkButton.append(linkAnchor);
      linkContainer.append(linkButton);
    }

    nav.append(linkContainer);

    return linkContainer;
  }

  footer() {
    let footer = document.createElement("footer");
    footer.classList.add("footer");

    return footer;
  }
}

const onLoad = (() => {
  const body = document.body;
  const Components = new Component();
  const main = Components.main();
  const header = Components.header("Ocean Kitchen", Banner);
  const navbar = Components.navbar("Home", "Menu", "Visit");
  const footer = Components.footer();
  
  header.append(navbar);
  
  main.append(header);

  body.append(main);
  body.append(footer);
})();

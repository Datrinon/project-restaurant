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

  header(title, img) {
    let header = document.createElement("header");
    let titleElem = document.createElement("h1");
    
    header.classList.add("banner");
    header.style.background = `url(${img})`;
    
    titleElem.classList.add("page-title");
    titleElem.textContent = title;
    
    header.append(titleElem);
    
    return header;
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
  const header = Components.header("Beachside Kitchens", Banner);
  const footer = Components.footer();
  

  main.append(header)

  body.append(main);
  body.append(footer);
})();

/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!*****************************!*\
  !*** ./src/js/component.js ***!
  \*****************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Component": () => (/* binding */ Component)
/* harmony export */ });
class Component {
  
  mql = window.matchMedia('(max-width: 600px)');

  constructor() {
    
  }

  content() {
    let content = document.createElement("div");
    content.classList.add("content");
    
    let main = document.createElement("main");
    main.classList.add("main");

    content.append(main);

    return content;
  }

  header(title) {
    let header = document.createElement("header");
    let titleElem = document.createElement("h1");
    let menuButton = document.createElement("i");

    menuButton.id = "menu-button";
    menuButton.classList.add("fas", "fa-bars", "no-display");

    this.mql.addEventListener("change", (e) => {
      if (e.matches) {
        menuButton.classList.remove("no-display");
      } else {
        // it bigger than the query rule.
        menuButton.classList.add("no-display");
        document.querySelector("#navbar").classList.remove("slide-in-out");
      }
    });

    //// TODO: Come back later and figure out why this isn't working.
    // Webpack and not instantiated in memory?
    // Because it also doesn't work in the OnLoad() function.
    // SOL: > The problem is that the element is recreated by font awesome,
    // it turns from an i to an svg.
    menuButton.addEventListener("click", (e) => {
      console.log("menu pressed.");
      document.querySelector("#navbar").classList.toggle("slide-in-out");
    });
    
    header.id = "header";
    // header.style.background = `url(${img})`;

    titleElem.id = "page-title";
    titleElem.textContent = title;
    
    titleElem.insertBefore(menuButton, titleElem.firstChild);
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

    return nav;
  }

  banner(text, img) {
    let bannerContainer = document.createElement("figure");
    let banner = document.createElement("div");
    let caption = document.createElement("figcaption");
    
    bannerContainer.id = "banner";
    banner.id = "banner-image";
    caption.id = "banner-caption";

    banner.style.backgroundImage = `url(${img})`;

    caption.textContent = text;

    bannerContainer.append(banner, caption);

    return bannerContainer;
  }

  footer() {
    let footer = document.createElement("footer");
    footer.classList.add("footer");

    let text = "Created in August 2021. Odin Project x Dan T.";
    let p = document.createElement("p");

    p.textContent = text;
    footer.append(p);

    return footer;
  }

  /**
   * Create an element with larger, emboldened, text,
   * similar to a pull quote in a magazine.
   * 
   * @param msg {string} Text to include in the block quote
   */
  pullquote(msg) {
    let pull = document.createElement("aside");
    pull.textContent = msg;

    pull.classList.add("pull-quote");

    return pull;
  }

  section(id) {
    let element = document.createElement("section");
    element.id = id;
    element.classList.add("section");

    return element;
  }

  /**
   * Creates a text heading element.
   * 
   * @param {*} text - The label for the header.
   * @param {*} level - The level of header.
   */
  heading(text, level) {
    if (level < 1 || level > 6) {
      throw Error("Heading levels can only be between 1 to 6!");
    }
    let header = document.createElement(`h${level}`);
  }

  paragraph(text) {
    let p = document.createElement("p");

    p.textContent = text;

    return p;
  }

  img(url, ...className) {
    let image = new Image();
    image.classList.add([...className]);

    image.src = url;

    return image;
  }

  div(...className) {
    let div = document.createElement("div");
    div.classList.add([...className]);

    return div;
  }

  button(label, ...className) {
    let btn = document.createElement("button");
    btn.classList.add([...className]);

    btn.textContent = label;
    return btn;
  }
}

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9uZW50LmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOztVQUFBO1VBQ0E7Ozs7O1dDREE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ05PO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0Esd0NBQXdDLElBQUk7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBDQUEwQyxJQUFJO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLFFBQVE7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxHQUFHO0FBQ2hCLGFBQWEsR0FBRztBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNENBQTRDLE1BQU07QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcm9qZWN0LXJlc3RhdXJhbnQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcHJvamVjdC1yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9wcm9qZWN0LXJlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9wcm9qZWN0LXJlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9wcm9qZWN0LXJlc3RhdXJhbnQvLi9zcmMvanMvY29tcG9uZW50LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFRoZSByZXF1aXJlIHNjb3BlXG52YXIgX193ZWJwYWNrX3JlcXVpcmVfXyA9IHt9O1xuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiZXhwb3J0IGNsYXNzIENvbXBvbmVudCB7XHJcbiAgXHJcbiAgbXFsID0gd2luZG93Lm1hdGNoTWVkaWEoJyhtYXgtd2lkdGg6IDYwMHB4KScpO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIFxyXG4gIH1cclxuXHJcbiAgY29udGVudCgpIHtcclxuICAgIGxldCBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGNvbnRlbnQuY2xhc3NMaXN0LmFkZChcImNvbnRlbnRcIik7XHJcbiAgICBcclxuICAgIGxldCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm1haW5cIik7XHJcbiAgICBtYWluLmNsYXNzTGlzdC5hZGQoXCJtYWluXCIpO1xyXG5cclxuICAgIGNvbnRlbnQuYXBwZW5kKG1haW4pO1xyXG5cclxuICAgIHJldHVybiBjb250ZW50O1xyXG4gIH1cclxuXHJcbiAgaGVhZGVyKHRpdGxlKSB7XHJcbiAgICBsZXQgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImhlYWRlclwiKTtcclxuICAgIGxldCB0aXRsZUVsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XHJcbiAgICBsZXQgbWVudUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpXCIpO1xyXG5cclxuICAgIG1lbnVCdXR0b24uaWQgPSBcIm1lbnUtYnV0dG9uXCI7XHJcbiAgICBtZW51QnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJmYXNcIiwgXCJmYS1iYXJzXCIsIFwibm8tZGlzcGxheVwiKTtcclxuXHJcbiAgICB0aGlzLm1xbC5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIChlKSA9PiB7XHJcbiAgICAgIGlmIChlLm1hdGNoZXMpIHtcclxuICAgICAgICBtZW51QnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoXCJuby1kaXNwbGF5XCIpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIC8vIGl0IGJpZ2dlciB0aGFuIHRoZSBxdWVyeSBydWxlLlxyXG4gICAgICAgIG1lbnVCdXR0b24uY2xhc3NMaXN0LmFkZChcIm5vLWRpc3BsYXlcIik7XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNuYXZiYXJcIikuY2xhc3NMaXN0LnJlbW92ZShcInNsaWRlLWluLW91dFwiKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8vLyBUT0RPOiBDb21lIGJhY2sgbGF0ZXIgYW5kIGZpZ3VyZSBvdXQgd2h5IHRoaXMgaXNuJ3Qgd29ya2luZy5cclxuICAgIC8vIFdlYnBhY2sgYW5kIG5vdCBpbnN0YW50aWF0ZWQgaW4gbWVtb3J5P1xyXG4gICAgLy8gQmVjYXVzZSBpdCBhbHNvIGRvZXNuJ3Qgd29yayBpbiB0aGUgT25Mb2FkKCkgZnVuY3Rpb24uXHJcbiAgICAvLyBTT0w6ID4gVGhlIHByb2JsZW0gaXMgdGhhdCB0aGUgZWxlbWVudCBpcyByZWNyZWF0ZWQgYnkgZm9udCBhd2Vzb21lLFxyXG4gICAgLy8gaXQgdHVybnMgZnJvbSBhbiBpIHRvIGFuIHN2Zy5cclxuICAgIG1lbnVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwibWVudSBwcmVzc2VkLlwiKTtcclxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNuYXZiYXJcIikuY2xhc3NMaXN0LnRvZ2dsZShcInNsaWRlLWluLW91dFwiKTtcclxuICAgIH0pO1xyXG4gICAgXHJcbiAgICBoZWFkZXIuaWQgPSBcImhlYWRlclwiO1xyXG4gICAgLy8gaGVhZGVyLnN0eWxlLmJhY2tncm91bmQgPSBgdXJsKCR7aW1nfSlgO1xyXG5cclxuICAgIHRpdGxlRWxlbS5pZCA9IFwicGFnZS10aXRsZVwiO1xyXG4gICAgdGl0bGVFbGVtLnRleHRDb250ZW50ID0gdGl0bGU7XHJcbiAgICBcclxuICAgIHRpdGxlRWxlbS5pbnNlcnRCZWZvcmUobWVudUJ1dHRvbiwgdGl0bGVFbGVtLmZpcnN0Q2hpbGQpO1xyXG4gICAgaGVhZGVyLmFwcGVuZCh0aXRsZUVsZW0pO1xyXG4gICAgXHJcbiAgICByZXR1cm4gaGVhZGVyO1xyXG4gIH1cclxuXHJcbiAgbmF2YmFyKC4uLmxpbmtzKSB7XHJcbiAgICBjb25zdCBuYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibmF2XCIpO1xyXG4gICAgY29uc3QgbGlua0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcclxuXHJcbiAgICBuYXYuaWQgPSBcIm5hdmJhclwiO1xyXG4gICAgbGlua0NvbnRhaW5lci5pZCA9IFwibmF2YmFyLWJ1dHRvbnMtY29udGFpbmVyXCI7XHJcblxyXG4gICAgZm9yIChsZXQgbGluayBvZiBsaW5rcykge1xyXG4gICAgICBjb25zdCBsaW5rQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xyXG4gICAgICBjb25zdCBsaW5rQW5jaG9yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XHJcblxyXG4gICAgICBsaW5rQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJuYXZiYXItYnV0dG9uXCIpO1xyXG4gICAgICBcclxuICAgICAgbGlua0FuY2hvci50ZXh0Q29udGVudCA9IGxpbms7XHJcbiAgICAgIGxpbmtBbmNob3Iuc2V0QXR0cmlidXRlKFwiaHJlZlwiLCBcIiNcIik7XHJcblxyXG4gICAgICBsaW5rQnV0dG9uLmFwcGVuZChsaW5rQW5jaG9yKTtcclxuICAgICAgbGlua0NvbnRhaW5lci5hcHBlbmQobGlua0J1dHRvbik7XHJcbiAgICB9XHJcblxyXG4gICAgbmF2LmFwcGVuZChsaW5rQ29udGFpbmVyKTtcclxuXHJcbiAgICByZXR1cm4gbmF2O1xyXG4gIH1cclxuXHJcbiAgYmFubmVyKHRleHQsIGltZykge1xyXG4gICAgbGV0IGJhbm5lckNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmaWd1cmVcIik7XHJcbiAgICBsZXQgYmFubmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGxldCBjYXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZpZ2NhcHRpb25cIik7XHJcbiAgICBcclxuICAgIGJhbm5lckNvbnRhaW5lci5pZCA9IFwiYmFubmVyXCI7XHJcbiAgICBiYW5uZXIuaWQgPSBcImJhbm5lci1pbWFnZVwiO1xyXG4gICAgY2FwdGlvbi5pZCA9IFwiYmFubmVyLWNhcHRpb25cIjtcclxuXHJcbiAgICBiYW5uZXIuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgke2ltZ30pYDtcclxuXHJcbiAgICBjYXB0aW9uLnRleHRDb250ZW50ID0gdGV4dDtcclxuXHJcbiAgICBiYW5uZXJDb250YWluZXIuYXBwZW5kKGJhbm5lciwgY2FwdGlvbik7XHJcblxyXG4gICAgcmV0dXJuIGJhbm5lckNvbnRhaW5lcjtcclxuICB9XHJcblxyXG4gIGZvb3RlcigpIHtcclxuICAgIGxldCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9vdGVyXCIpO1xyXG4gICAgZm9vdGVyLmNsYXNzTGlzdC5hZGQoXCJmb290ZXJcIik7XHJcblxyXG4gICAgbGV0IHRleHQgPSBcIkNyZWF0ZWQgaW4gQXVndXN0IDIwMjEuIE9kaW4gUHJvamVjdCB4IERhbiBULlwiO1xyXG4gICAgbGV0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuXHJcbiAgICBwLnRleHRDb250ZW50ID0gdGV4dDtcclxuICAgIGZvb3Rlci5hcHBlbmQocCk7XHJcblxyXG4gICAgcmV0dXJuIGZvb3RlcjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENyZWF0ZSBhbiBlbGVtZW50IHdpdGggbGFyZ2VyLCBlbWJvbGRlbmVkLCB0ZXh0LFxyXG4gICAqIHNpbWlsYXIgdG8gYSBwdWxsIHF1b3RlIGluIGEgbWFnYXppbmUuXHJcbiAgICogXHJcbiAgICogQHBhcmFtIG1zZyB7c3RyaW5nfSBUZXh0IHRvIGluY2x1ZGUgaW4gdGhlIGJsb2NrIHF1b3RlXHJcbiAgICovXHJcbiAgcHVsbHF1b3RlKG1zZykge1xyXG4gICAgbGV0IHB1bGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYXNpZGVcIik7XHJcbiAgICBwdWxsLnRleHRDb250ZW50ID0gbXNnO1xyXG5cclxuICAgIHB1bGwuY2xhc3NMaXN0LmFkZChcInB1bGwtcXVvdGVcIik7XHJcblxyXG4gICAgcmV0dXJuIHB1bGw7XHJcbiAgfVxyXG5cclxuICBzZWN0aW9uKGlkKSB7XHJcbiAgICBsZXQgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWN0aW9uXCIpO1xyXG4gICAgZWxlbWVudC5pZCA9IGlkO1xyXG4gICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKFwic2VjdGlvblwiKTtcclxuXHJcbiAgICByZXR1cm4gZWxlbWVudDtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENyZWF0ZXMgYSB0ZXh0IGhlYWRpbmcgZWxlbWVudC5cclxuICAgKiBcclxuICAgKiBAcGFyYW0geyp9IHRleHQgLSBUaGUgbGFiZWwgZm9yIHRoZSBoZWFkZXIuXHJcbiAgICogQHBhcmFtIHsqfSBsZXZlbCAtIFRoZSBsZXZlbCBvZiBoZWFkZXIuXHJcbiAgICovXHJcbiAgaGVhZGluZyh0ZXh0LCBsZXZlbCkge1xyXG4gICAgaWYgKGxldmVsIDwgMSB8fCBsZXZlbCA+IDYpIHtcclxuICAgICAgdGhyb3cgRXJyb3IoXCJIZWFkaW5nIGxldmVscyBjYW4gb25seSBiZSBiZXR3ZWVuIDEgdG8gNiFcIik7XHJcbiAgICB9XHJcbiAgICBsZXQgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChgaCR7bGV2ZWx9YCk7XHJcbiAgfVxyXG5cclxuICBwYXJhZ3JhcGgodGV4dCkge1xyXG4gICAgbGV0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuXHJcbiAgICBwLnRleHRDb250ZW50ID0gdGV4dDtcclxuXHJcbiAgICByZXR1cm4gcDtcclxuICB9XHJcblxyXG4gIGltZyh1cmwsIC4uLmNsYXNzTmFtZSkge1xyXG4gICAgbGV0IGltYWdlID0gbmV3IEltYWdlKCk7XHJcbiAgICBpbWFnZS5jbGFzc0xpc3QuYWRkKFsuLi5jbGFzc05hbWVdKTtcclxuXHJcbiAgICBpbWFnZS5zcmMgPSB1cmw7XHJcblxyXG4gICAgcmV0dXJuIGltYWdlO1xyXG4gIH1cclxuXHJcbiAgZGl2KC4uLmNsYXNzTmFtZSkge1xyXG4gICAgbGV0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBkaXYuY2xhc3NMaXN0LmFkZChbLi4uY2xhc3NOYW1lXSk7XHJcblxyXG4gICAgcmV0dXJuIGRpdjtcclxuICB9XHJcblxyXG4gIGJ1dHRvbihsYWJlbCwgLi4uY2xhc3NOYW1lKSB7XHJcbiAgICBsZXQgYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgIGJ0bi5jbGFzc0xpc3QuYWRkKFsuLi5jbGFzc05hbWVdKTtcclxuXHJcbiAgICBidG4udGV4dENvbnRlbnQgPSBsYWJlbDtcclxuICAgIHJldHVybiBidG47XHJcbiAgfVxyXG59XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==
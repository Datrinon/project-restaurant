export class Component {
  
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

      linkAnchor.addEventListener("click", (e) => {
        let currentSectionId = document.querySelector(".main > section:not(.no-display)").id.toLowerCase();
        let chosenSectionId = e.currentTarget.textContent.toLowerCase();

        if (currentSectionId !== chosenSectionId) {
          document.querySelector(`#${currentSectionId}`).classList.add("no-display");
          document.querySelector(`#${chosenSectionId}`).classList.remove("no-display");
        }

      });
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
  heading(text, level, ...className) {
    if (level < 1 || level > 6) {
      throw Error("Heading levels can only be between 1 to 6!");
    }
    let header = document.createElement(`h${level}`);

    header.classList.add(...className);
    header.textContent = text;

    return header;
  }

  paragraph(text, ...className) {
    let p = document.createElement("p");
    p.classList.add(...className);

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

  /**
   * Generates a basic table with single-cell columns and rows, based on the imported file.
   * 
   * @param {csv} data - Data to turn into a table. Please use webpack to import .csv files.
   */
  table(id = "", data) {
    let table = document.createElement("table");
    table.id = id;
    
    // Generate a table header row.
    let tableHeader = document.createElement("thead");
    let tableHeaderRow = document.createElement("tr");

    for (let col of Object.keys(data[0])) {
      let colCell = document.createElement("th");
      colCell.textContent = col;

      tableHeaderRow.append(colCell);
    }
    tableHeader.append(tableHeaderRow);
    
    table.append(tableHeader);

    const tableBody = document.createElement("tbody");
    // Generate table rows.
    for (let i = 0; i < data.length; i++) {
      let trow = document.createElement("tr");
      for (let prop in data[i]) {
        let tcell = document.createElement("td");
        
        tcell.textContent = data[i][prop];
        trow.append(tcell);
      }

      tableBody.append(trow);      
    }
    table.append(tableBody);
    
    return table;
  }

  faIcon(category, name, ...className){
    let fasIcon = document.createElement("i");
    fasIcon.classList.add(category, name, className);

    return fasIcon;
  }
}

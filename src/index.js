function mainComponent() {
  let main = document.createElement("main");
  main.classList.add("content");

  return main;
}

// above ^ create DOM elements with functions and append them.
// load here.
document.body.append(mainComponent());
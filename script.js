function script(url) {
  const head = document.getElementsByTagName("head")[0];
  const script = document.createElement("script");
  script.src = url;
  script.type = "module";
  head.appendChild(script);
}

// script("./01_by_codevolution/01_array.js");
script("./01_by_codevolution/07_stack_implementation.js");

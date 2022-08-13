"use strict";

const btn = document.getElementsByTagName("button")[0];
const txtarea = document.getElementsByTagName("textarea")[0];

btn.addEventListener("click", () => {
  for (const w of txtarea.value.trim().split("\n")) {
    const [w1, w2] = w.trim().split("_");
    console.log(w1.toLowerCase() + w2.replace(w2[0], w2[0].toUpperCase()));
  }
});

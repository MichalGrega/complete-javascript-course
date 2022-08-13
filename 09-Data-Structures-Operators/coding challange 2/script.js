"use strict";

// const btn = document.getElementsByTagName("button")[0];
// const txtarea = document.getElementsByTagName("textarea")[0];
const btn = document.querySelector("button");
const txtarea = document.querySelector("textarea");

btn.addEventListener("click", () => {
  for (const [i, w] of txtarea.value
    .toLowerCase()
    .trim()
    .split("\n")
    .entries()) {
    const [w1, w2] = w.trim().split("_");
    console.log(
      `${w1}${w2.replace(w2[0], w2[0].toUpperCase())}`.padEnd(20) +
        `${"✅".repeat(i + 1)}`
    );
  }
});

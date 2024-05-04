"use strict";

//section 1
const sect1 = document.querySelector(".card__section--one");
const ans1 = document.querySelector(".card__a1");
const plus1 = document.querySelector(".p1");
const minus1 = document.querySelector(".m1");

sect1.addEventListener("click", () => {
  ans1.classList.toggle("hidden");
  plus1.classList.toggle("hidden");
  minus1.classList.toggle("hidden");
});

//section 2
const sect2 = document.querySelector(".card__section--two");
const ans2 = document.querySelector(".card__a2");
const plus2 = document.querySelector(".p2");
const minus2 = document.querySelector(".m2");

sect2.addEventListener("click", () => {
  ans2.classList.toggle("hidden");
  plus2.classList.toggle("hidden");
  minus2.classList.toggle("hidden");
});

//section 2
const sect3 = document.querySelector(".card__section--three");
const ans3 = document.querySelector(".card__a3");
const plus3 = document.querySelector(".p3");
const minus3 = document.querySelector(".m3");

sect3.addEventListener("click", () => {
  ans3.classList.toggle("hidden");
  plus3.classList.toggle("hidden");
  minus3.classList.toggle("hidden");
});

//section 2
const sect4 = document.querySelector(".card__section--four");
const ans4 = document.querySelector(".card__a4");
const plus4 = document.querySelector(".p4");
const minus4 = document.querySelector(".m4");

sect4.addEventListener("click", () => {
  ans4.classList.toggle("hidden");
  plus4.classList.toggle("hidden");
  minus4.classList.toggle("hidden");
});

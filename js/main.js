const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");
const blob1 = document.querySelector("#blob1");
const frase = document.querySelector(".scale-in-hor-left");

abrir.addEventListener("click", () => {
  nav.classList.add("visible");
  frase.classList.remove("scale-in-hor-left");
});

cerrar.addEventListener("click", () => {
  nav.classList.remove("visible");
});

const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");
const blob1 = document.querySelector("#blob1");
const frase = document.querySelector(".scale-in-hor-left");
const logo = document.querySelector("#logo");

abrir.addEventListener("click", () => {
  nav.classList.add("visible");
  frase.classList.remove("scale-in-hor-left");
});

cerrar.addEventListener("click", () => {
  nav.classList.remove("visible");
});

logo.addEventListener("click", () => {
  //enlace de la pagina que quieras
  window.location.href = "./index.html";
});

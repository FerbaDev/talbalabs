const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");
const blob1 = document.querySelector("#blob1");
const frase = document.querySelector(".scale-in-hor-left");
const logo = document.querySelector("#logo");
const whatsappButton = document.querySelector(".whatsapp-float");

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

//boton de whatsapp
window.addEventListener("scroll", function() {
  console.log("Scroll position:", window.scrollY);
  if (window.scrollY > window.innerHeight * 0.8) {
      console.log("Mostrando botón de WhatsApp");
      whatsappButton.style.display = "flex";
  } else {
      console.log("Ocultando botón de WhatsApp");
      whatsappButton.style.display = "none";
  }
});
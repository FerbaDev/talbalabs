const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");
const blob1 = document.querySelector("#blob1");
const frase = document.querySelectorAll(".frase");
const logo = document.querySelector(".logo");
const whatsappButton = document.querySelector(".whatsapp-float");
const links = document.querySelectorAll(".nav-list li a");





abrir.addEventListener("click", () => {
  nav.classList.add("visible");
  //frase.classList.remove("scale-in-hor-left");
});

cerrar.addEventListener("click", () => {
  nav.classList.remove("visible");
});

// logo.addEventListener("click", () => {
//   //enlace de la pagina que quieras
//   window.location.href = "./index.html";
// });

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

gsap.from(logo, {
  x: "-300",
  rotate: 360,
  duration: 1,
  delay:0.05
})

gsap.from(frase, {
  x: "-1000",
  duration: "1",
  ease: "power3.out",
  stagger: "0.5"
})

gsap.from(".nav-list li a", {
  y: -1000,
  duration: 1,
  stagger: 0.5
});
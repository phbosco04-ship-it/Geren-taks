const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");
const navLinks = nav.querySelectorAll("a");
const sections = document.querySelectorAll("main section[id]");
const downloadBtn = document.getElementById("downloadBtn");
 
 
menuBtn.addEventListener("click", () => {
  nav.classList.toggle("open");
});
 
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
  });
});
 
function atualizarLinkAtivo() {
  const scrollPos = window.scrollY + 140;
 
  sections.forEach((section) => {
    const top = section.offsetTop;
    const height = section.offsetHeight;
    const id = section.getAttribute("id");
 
    if (scrollPos >= top && scrollPos < top + height) {
      navLinks.forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${id}`) {
          link.classList.add("active");
        }
      });
    }
  });
}
 
window.addEventListener("scroll", atualizarLinkAtivo);
window.addEventListener("load", atualizarLinkAtivo);
 
// Avisa caso o link de download ainda esteja vazio ("#")
downloadBtn.addEventListener("click", (event) => {
  if (downloadBtn.getAttribute("href") === "#") {
    event.preventDefault();
    alert("Adicione o link de download do Geren Tasks no atributo href do botão!");
  }
});
 
 
document.getElementById("year").textContent = new Date().getFullYear();
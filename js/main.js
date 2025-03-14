function alterarTema() {
    const body = document.body;
    const menu = document.getElementById("menu");
    const projetos = document.getElementById("projetos"); 
    const sobre = document.getElementById("sobre");
    body.classList.toggle("modo-escuro");
    
    document.querySelectorAll('.texto-grid').forEach(el => el.classList.toggle('texto-grid-noturno'));
    if (menu.classList.contains("scrolled") && body.classList.contains("modo-escuro")) {
        menu.classList.add("scrolled-escuro");
    } else {
        menu.classList.remove("scrolled-escuro");
    }
    document.querySelectorAll(".card-hab").forEach(el => {
        el.classList.toggle("card-hab-escuro");
    });
    document.querySelectorAll(".menu-items").forEach(el => {
        el.classList.toggle("menu-items-escuro");
    });
    document.querySelectorAll(".time-line-content").forEach(el => {
        el.classList.toggle("time-line-content-noturno");
    });
  
    if (projetos) {
        projetos.classList.toggle("projetos-noturno"); 
    }
    if (sobre) {
        sobre.classList.toggle("sobre-noturno"); 
    }

}



window.addEventListener("scroll", () => {
    const menu = document.getElementById("menu");

    if (window.scrollY > 30) {
        menu.classList.add("scrolled");
    } else {
        menu.classList.remove("scrolled");
    }
    if (menu.classList.contains("scrolled") && document.body.classList.contains("modo-escuro")) {
        menu.classList.add("scrolled-escuro");
    } else {
        menu.classList.remove("scrolled-escuro");
    }
});
function toggleMenu() {
    const menuItems = document.querySelector(".menu-items");
    menuItems.classList.toggle("active");
}
window.dispatchEvent(new Event("scroll"));

const primeiraLista = document.querySelector(".lista");

const segundaLista = primeiraLista.cloneNode(true);
segundaLista.setAttribute("aria-hidden", "true"); 


document.querySelector(".div-icons-lang .wrapper").appendChild(segundaLista);


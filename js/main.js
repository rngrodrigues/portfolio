function alterarTema() {
    const body = document.body;
    const menu = document.getElementById("menu");

    body.classList.toggle("modo-escuro");
    if (menu.classList.contains("scrolled") && body.classList.contains("modo-escuro")) {
        menu.classList.add("scrolled-escuro");
    } else {
        menu.classList.remove("scrolled-escuro");
    }
    document.querySelectorAll(".card-hab").forEach(el => {
        el.classList.toggle("card-hab-escuro");
    });
}


window.addEventListener("scroll", () => {
    const menu = document.getElementById("menu");

    if (window.scrollY > 70) {
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

window.dispatchEvent(new Event("scroll"));

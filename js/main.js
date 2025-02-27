function alterarTema() {
    document.querySelector("body").classList.toggle("modo-escuro");
}
window.onscroll = function () {
    let menu = document.getElementById("menu");
    if (window.scrollY > 50) {
        menu.classList.add("scrolled");
    } else {
        menu.classList.remove("scrolled");
    }
};

// Garante que o menu já carregue corretamente caso a página abra rolada
window.onscroll();

const tagBody = document.querySelector("body");
const btnMenu = document.getElementById("btn-menu");
const btnFechaMenu = document.getElementById("btn-fecha-menu");
const menuNav = document.querySelector("nav.menu");
const linksMenu = document.querySelectorAll(".menu ul li a");

function removerClasse(elemento, classe) {
    elemento = document.querySelector("." + classe);
    elemento.classList.remove(classe);
}

function adicionarClasse(elemento, classe) {
    elemento.classList.add(classe);
}

// Controle do tamanho da barra do header
window.addEventListener("scroll", () => {
    const rolouPagina = window.scrollY;

    if (rolouPagina > 0) {
        tagBody.classList.add("cabecalho-retraido");
    } else {
        tagBody.classList.remove("cabecalho-retraido");
    }
});

// Função que exibe ou oculta o menu e seus respectivos botões
function controlesMenu() {
    btnMenu.classList.toggle("hidden");
    btnFechaMenu.classList.toggle("hidden");
    menuNav.classList.toggle("hidden");
}

btnMenu.addEventListener("click", () => {
    controlesMenu();
});

btnFechaMenu.addEventListener("click", () => {
    controlesMenu();
});

// Controle da marcação da página atual
linksMenu.forEach((link) => {
    link.addEventListener("click", () => {
        removerClasse(link, "pagina-atual");
        adicionarClasse(link, "pagina-atual");
    });
});

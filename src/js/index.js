const tagBody = document.querySelector("body");
const btnMenu = document.getElementById("btn-menu");
const btnFechaMenu = document.getElementById("btn-fecha-menu");
const divLightbox = document.querySelector(".lightbox");
const menuNav = document.querySelector("nav.menu");
const linksMenu = document.querySelectorAll(".menu ul li a");
const paginaAtual = document.querySelector(".menu ul li a.pagina-atual");

// Função que exibe ou oculta o menu e seus respectivos botões
function controlesMenu() {
    btnMenu.classList.toggle("hidden");
    btnFechaMenu.classList.toggle("hidden");
    divLightbox.classList.toggle("hidden");
    menuNav.classList.toggle("hidden");
    if (tagBody.className == "") {
        btnFechaMenu.classList.add("fecha-menu-lateral");
    }
}

btnMenu.addEventListener("click", () => {
    controlesMenu();
});

btnFechaMenu.addEventListener("click", () => {
    controlesMenu();
});

divLightbox.addEventListener("click", () => {
    controlesMenu();
});

// Controle do tamanho da barra do header
window.addEventListener("scroll", () => {
    const rolouPagina = window.scrollY;

    marcaLinkAtivo(definePaginaAtual());

    if (rolouPagina > 48) {
        tagBody.classList.add("cabecalho-retraido");
        btnFechaMenu.classList.remove("fecha-menu-lateral");
    } else {
        tagBody.classList.remove("cabecalho-retraido");
        btnFechaMenu.classList.add("fecha-menu-lateral");
    }
});

// Controle da marcação da página atual
function definePaginaAtual() {
    return Math.trunc(window.scrollY / (window.innerHeight - 48));
}

function marcaLinkAtivo(pagina) {
    removerClasse(paginaAtual, "pagina-atual");
    adicionarClasse(linksMenu[pagina], "pagina-atual");
}

// Função genérica para remover classe de elemento
function removerClasse(elemento, classe) {
    elemento = document.querySelector("." + classe);
    elemento.classList.remove(classe);
}

// Função genérica para adicionar classe a elemento
function adicionarClasse(elemento, classe) {
    elemento.classList.add(classe);
}

const linksMenu = document.querySelectorAll(".menu ul li a");
const botoesCarouselSobre = document.querySelectorAll(
    ".botoes-carousel-sobre button"
);

clickControlesMenu("#btn-menu");
clickControlesMenu("#btn-fecha-menu");
clickControlesMenu(".lightbox");

adicionarClasse(".card .conteudo-card div p:first-of-type", "slide-atual");

// Controle do tamanho da barra do header
window.addEventListener("scroll", () => {
    const posicaoY = window.scrollY;

    marcaLinkAtivo(definePaginaAtual());

    if (posicaoY > 48) {
        adicionarClasse("body", "cabecalho-retraido");
        removerClasse("#btn-fecha-menu", "fecha-menu-lateral");
    } else {
        removerClasse("body", "cabecalho-retraido");
        adicionarClasse("#btn-fecha-menu", "fecha-menu-lateral");
    }
});

// Calcula em qual é a página atual do usuário ao rolar a página
function definePaginaAtual() {
    return Math.trunc(window.scrollY / (window.innerHeight - 48));
    // O cálculo é feito baseado na posição atual do scroll vertical
    // dividido pelo tamanho da tela menos 48px que é o tamanho do cabeçalho
}

// Marca a página atual no menu
function marcaLinkAtivo(pagina) {
    removerClasse(".menu ul li a.pagina-atual", "pagina-atual");
    linksMenu[pagina].classList.add("pagina-atual");
}

// Função que exibe ou oculta o menu e seus respectivos botões
function controlesMenu() {
    alternarClasse("#btn-menu", "hidden");
    alternarClasse("#btn-fecha-menu", "hidden");
    alternarClasse(".lightbox", "hidden");
    alternarClasse("nav.menu", "hidden");
    if (document.querySelector("body").className == "") {
        adicionarClasse("#btn-fecha-menu", "fecha-menu-lateral");
    }
}

// Marca o botão atual do carousel e altera o slide da página Sobre mim
function marcaCarouselSobre(botao, indice) {
    botao.classList.add("selecionado");
    removerClasse(".card .conteudo-card div p.slide-atual", "slide-atual");
    adicionarClasse(
        `.card .conteudo-card div p:nth-of-type(${indice + 1})`,
        "slide-atual"
    );
}

// Captura o botão clicado no carousel da página Sobre mim
botoesCarouselSobre.forEach((botaoClicado, indice) => {
    botaoClicado.addEventListener("click", () => {
        removerClasse(
            ".botoes-carousel-sobre button.selecionado",
            "selecionado"
        );
        marcaCarouselSobre(botaoClicado, indice);
    });
});

// Função genérica que dispara as ações de mostrar ou ocultar os controladores do menu
function clickControlesMenu(controle) {
    document.querySelector(controle).addEventListener("click", () => {
        controlesMenu();
    });
}

// Função genérica para adicionar classe a elemento
function adicionarClasse(elemento, classe) {
    document.querySelector(elemento).classList.add(classe);
}

// Função genérica para remover classe de elemento
function removerClasse(elemento, classe) {
    document.querySelector(elemento).classList.remove(classe);
}

// Função genérica para alternar classe de elemento
function alternarClasse(elemento, classe) {
    document.querySelector(elemento).classList.toggle(classe);
}

// Espera o conteúdo da página ser carregado completamente
document.addEventListener("DOMContentLoaded", function() {
    // Seleciona o botão do menu e a navegação do menu
    const menuButton = document.querySelector(".menu-btn");
    const mobileNav = document.querySelector(".mobile-nav");

    // Quando o botão for clicado, alterna a classe 'show' na navegação móvel
    menuButton.addEventListener("click", function() {
        mobileNav.classList.toggle("show");
    });
});
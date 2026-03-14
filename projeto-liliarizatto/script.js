document.addEventListener("DOMContentLoaded", () => {
    const btnMobile = document.getElementById("btn-mobile");
    const navbar = document.getElementById("navbar");

    // Abrir/Fechar Menu Mobile
    btnMobile.addEventListener("click", () => {
        navbar.classList.toggle("menu-aberto");
    });

    // Rolagem Suave para todos os links internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function(e) {
            const targetId = this.getAttribute("href");
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                e.preventDefault();
                targetElement.scrollIntoView({
                    behavior: "smooth"
                });

                // Fecha o menu mobile ao clicar
                navbar.classList.remove("menu-aberto");
            }
        });
    });
});
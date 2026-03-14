const botao = document.getElementById("btn-mobile")
const menu = document.getElementById("navbar")

botao.addEventListener("click" , function(){
    menu.classList.toggle("menu-aberto")
})

const linksDoMenu = document.querySelectorAll("#navbar a");

linksDoMenu.forEach(function(link) {
    
    link.addEventListener("click", function(evento) {
        
        evento.preventDefault();

        const idDoDestino = link.getAttribute("href");
        
        const sessaoDestino = document.querySelector(idDoDestino);

        sessaoDestino.scrollIntoView({
            behavior: "smooth"
        });

        menu.classList.remove("menu-aberto");
    });
    
});
// Função para rolar suavemente para um elemento específico
function smoothScrollTo(targetSelector) {
    const targetElement = document.querySelector(targetSelector);
  
    if (targetElement) {
      const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY;
      const startPosition = window.scrollY;
      const distance = targetPosition - startPosition;
      const duration = 1000; // Duração da rolagem em ms
      let startTime = null;
  
      function animationScroll(currentTime) {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const run = ease(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, run);
  
        if (timeElapsed < duration) {
          requestAnimationFrame(animationScroll);
        }
      }
  
      function ease(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return (c / 2) * t * t + b;
        t--;
        return (-c / 2) * (t * (t - 2) - 1) + b;
      }
  
      requestAnimationFrame(animationScroll);
    } else {
      console.error(`Elemento não encontrado para o seletor: ${targetSelector}`);
    }
  }
  
  // Seleciona os links do menu de navegação
  const linkHome = document.querySelector('.nav-links li:nth-child(1) a');
  const linkServicos = document.querySelector('#link1 a');
  const linkPrecos = document.querySelector('#link2 a');
  const linkFaleConosco = document.querySelector('#link3 a');
  
  // Adiciona os eventos de clique aos links
  linkHome.addEventListener('click', (e) => {
    e.preventDefault();
    smoothScrollTo('nav');
  });
  
  linkServicos.addEventListener('click', (e) => {
    e.preventDefault();
    smoothScrollTo('.features');
  });
  
  linkPrecos.addEventListener('click', (e) => {
    e.preventDefault();
    smoothScrollTo('.pricing');
  });
  
  linkFaleConosco.addEventListener('click', (e) => {
    e.preventDefault();
    smoothScrollTo('footer');
  });
  
  // Botão "Voltar ao Topo"
  const scrollToTopButton = document.createElement('button');
  scrollToTopButton.innerHTML = '<i class="ri-arrow-up-line"></i>'; // Ícone do Remix Icon
  scrollToTopButton.className = 'scroll-to-top';
  document.body.appendChild(scrollToTopButton);
  
  // Mostrar/ocultar botão "Voltar ao Topo" ao rolar a página
  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      scrollToTopButton.style.display = 'flex';
    } else {
      scrollToTopButton.style.display = 'none';
    }
  });
  
  // Clique no botão para rolar ao topo
  scrollToTopButton.addEventListener('click', () => {
    smoothScrollTo('nav');
  });

  document.addEventListener("DOMContentLoaded", function() {
    // Selecionando todos os botões com a classe 'btn'
    const buttons = document.querySelectorAll(".btn");
  
    // Função para redirecionar para o WhatsApp com a mensagem
    function enviarMensagemWhatsApp(mensagem) {
      const numeroWhatsApp = "5514996643204"; // Número do WhatsApp atualizado
      const urlWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensagem)}`;
  
      window.open(urlWhatsApp, "_blank");
    }
  
    // Adicionando evento de clique em cada botão
    buttons.forEach(button => {
      button.addEventListener("click", function() {
        let mensagem;
  
        // Verificando qual botão foi clicado e definindo a mensagem
        if (button.textContent.trim() === "Faça um orçamento") {
          mensagem = "Olá, vim através do site e gostaria de fazer um orçamento.";
        } else if (button.textContent.trim() === "Vamos iniciar seu projeto?") {
          mensagem = "Olá, vim através do site e gostaria de iniciar um projeto.";
        }
  
        // Enviando a mensagem para o WhatsApp
        enviarMensagemWhatsApp(mensagem);
      });
    });
  });

  document.addEventListener("DOMContentLoaded", function() {
    // Selecionando todos os botões com a classe 'btn'
    const buttons = document.querySelectorAll(".btn");
  
    // Função para redirecionar para o WhatsApp com a mensagem
    function enviarMensagemWhatsApp(mensagem) {
      const numeroWhatsApp = "5514996643204"; // Número do WhatsApp
      const urlWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensagem)}`;
  
      window.open(urlWhatsApp, "_blank");
    }
  
    // Adicionando evento de clique em cada botão
    buttons.forEach(button => {
      button.addEventListener("click", function() {
        let mensagem;
  
        // Verificando qual botão foi clicado e definindo a mensagem
        const buttonText = button.textContent.trim().toLowerCase(); // Transformando o texto para minúsculas
  
        if (buttonText === "faça um orçamento") {
          mensagem = "Olá, vim através do site e gostaria de fazer um orçamento.";
        } else if (buttonText === "vamos iniciar seu projeto?") {
          mensagem = "Olá, vim através do site e gostaria de iniciar um projeto.";
        } else if (buttonText === "contrate agora") {
          mensagem = "Olá, vim através do site e gostaria de saber mais sobre o plano.";
        }
  
        // Enviando a mensagem para o WhatsApp
        enviarMensagemWhatsApp(mensagem);
      });
    });
  });
  
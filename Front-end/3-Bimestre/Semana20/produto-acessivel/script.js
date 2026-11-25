window.addEventListener(
    'DOMContentLoaded',
    () => {
  
      const botaoComprar =
        document.getElementById('comprar');
  
      const botaoSaibaMais =
        document.getElementById('saiba-mais');
  
      const mensagem =
        document.getElementById('mensagem');
  
      botaoComprar.addEventListener(
        'click',
        () => {
          mensagem.textContent =
            'Produto adicionado ao carrinho com sucesso.';
        }
      );
  
      botaoSaibaMais.addEventListener(
        'click',
        () => {
          mensagem.textContent =
            'Mais informações sobre o produto serão exibidas aqui.';
        }
      );
  
      if (window.gsap) {
        window.gsap.from(
          '.produto',
          {
            opacity: 0,
            y: 30,
            duration: 1
          }
        );
      }
  
    }
  );
  
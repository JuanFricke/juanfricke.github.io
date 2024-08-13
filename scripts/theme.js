function toggleTheme() {
    // Verifica a preferência do sistema para o tema
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const htmlElement = document.documentElement;
    const myself = document.getElementById('myself');
    // Define o tema baseado na preferência do sistema
    if (prefersDarkScheme) {
      htmlElement.setAttribute('data-theme', 'light');
      myself.src = 'imgs/juanfricke.png'; // Imagem para o tema claro
    } else {
      htmlElement.setAttribute('data-theme', 'dark');
      myself.src = 'imgs/juanfrickeNight.jpeg'; // Imagem para o tema escuro
    }

    // Seleciona todos os elementos que possuem a classe 'light' ou 'dark'
    const elements = document.querySelectorAll('.light, .dark');

    // Itera sobre cada elemento encontrado
    elements.forEach((element) => {
      // Verifica se o elemento possui a classe 'light'
      if (element.classList.contains('light')) {
        element.classList.remove('light'); // Remove a classe 'light'
        element.classList.add('dark');
        if (element.classList.contains('bx-sun')){element.classList.remove('bx-spin')}
        if (element.classList.contains('bxs-moon')){element.classList.add('bx-tada')}
        myself.src = 'imgs/juanfrickeNight.jpeg';
         // Adiciona a classe 'dark'
        htmlElement.setAttribute('data-theme', 'dark');

      } 
      // Verifica se o elemento possui a classe 'dark'
      else if (element.classList.contains('dark')) {
        element.classList.remove('dark'); // Remove a classe 'dark'
        element.classList.add('light'); // Adiciona a classe 'light'
        if (element.classList.contains('bx-sun')){element.classList.add('bx-spin')}
        if (element.classList.contains('bxs-moon')){element.classList.remove('bx-tada')}
        myself.src = 'imgs/juanfricke.png';
        htmlElement.setAttribute('data-theme', 'light');
      }

      
    });
  }
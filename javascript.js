const titulo = document.querySelector('#nome-digitado');

function ativarMaquinaDeEscrever(elemento) {
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = '';
    
    textoArray.forEach((letra, index) => {
        setTimeout(() => {
            elemento.innerHTML += letra;
        }, 75 * index);
    });
}

if (titulo) {
    ativarMaquinaDeEscrever(titulo);
}


/* ==========================================
   2. ANIMAÇÃO DE SCROLL (Elementos aparecendo)
========================================== */
const observador = new IntersectionObserver((entradas) => {
    entradas.forEach((entrada) => {
        // Se o elemento entrou na tela do usuário...
        if (entrada.isIntersecting) {
            entrada.target.classList.add('mostrar'); // O CSS faz ele aparecer
        }
    });
});

// Pega todas as <sections> que receberam a classe 'escondido' no HTML
const elementosEscondidos = document.querySelectorAll('.escondido');

// Manda o observador vigiar cada uma delas
elementosEscondidos.forEach((elemento) => {
    observador.observe(elemento);
});
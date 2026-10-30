const botaoTema = document.getElementById('botaoTema');
const body = document.body;

botaoTema.addEventListener('click', (evento) => {
    
    if (!document.startViewTransition) {
        body.classList.toggle('tema-escuro');
        return;
    }

    const x = evento.clientX;
    const y = evento.clientY;

    document.documentElement.style.setProperty('--x', `${x}px`);
    document.documentElement.style.setProperty('--y', `${y}px`);

    document.startViewTransition(() => {
        body.classList.toggle('tema-escuro');
    });
});
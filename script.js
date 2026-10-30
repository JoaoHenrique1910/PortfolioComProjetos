const botaoTema = document.getElementById('botaoTema');
const body = document.body;
const modal = document.getElementById('modalProjeto');
const iframe = document.getElementById('iframeProjeto');
const linkRepo = document.getElementById('linkRepo');
const linkNovaAba = document.getElementById('linkNovaAba');
const botoesAbrir = document.querySelectorAll('.btnAbrirModal');
const botaoFechar = document.querySelector('.fecharModal');

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

botoesAbrir.forEach(botao => {
    botao.addEventListener('click', () => {
        const urlSite = botao.getAttribute('data-url');
        const urlRepo = botao.getAttribute('data-repo');

        iframe.src = urlSite;
        linkNovaAba.href = urlSite;
        linkRepo.href = urlRepo;

        modal.classList.add('ativo');
    });
});

botaoFechar.addEventListener('click', fecharModal);

modal.addEventListener('click', (evento) => {
    if (evento.target === modal) {
        fecharModal();
    }
});

function fecharModal() {
    modal.classList.remove('ativo');
    setTimeout(() => {
        iframe.src = "";
    }, 300);
}
document.addEventListener("DOMContentLoaded", () => {
    const botaoTema = document.getElementById('botaoTema');
    const body = document.body;
    const modal = document.getElementById('modalProjeto');
    const iframe = document.getElementById('iframeProjeto');
    const linkRepo = document.getElementById('linkRepo');
    const linkNovaAba = document.getElementById('linkNovaAba');
    const botoesAbrir = document.querySelectorAll('.btnAbrirModal');
    const botaoFechar = document.querySelector('.fecharModal');

    if (botaoTema) {
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
    }

    botoesAbrir.forEach(botao => {
        botao.addEventListener('click', () => {
            const urlSite = botao.getAttribute('data-url');
            const urlRepo = botao.getAttribute('data-repo');

            if (iframe) iframe.src = urlSite;
            if (linkNovaAba) linkNovaAba.href = urlSite;
            if (linkRepo) linkRepo.href = urlRepo;

            if (modal) modal.classList.add('ativo');
        });
    });

    if (botaoFechar) {
        botaoFechar.addEventListener('click', fecharModal);
    }

    if (modal) {
        modal.addEventListener('click', (evento) => {
            if (evento.target === modal) {
                fecharModal();
            }
        });
    }

    function fecharModal() {
        if (modal) modal.classList.remove('ativo');
        setTimeout(() => {
            if (iframe) iframe.src = "";
        }, 300);
    }

    const btnMenuCurriculo = document.getElementById('btnMenuCurriculo');
    const menuCurriculo = document.getElementById('menuCurriculo');

    if (btnMenuCurriculo && menuCurriculo) {
        btnMenuCurriculo.addEventListener('click', (evento) => {
            evento.stopPropagation();
            menuCurriculo.classList.toggle('ativo');
        });

        window.addEventListener('click', () => {
            if (menuCurriculo.classList.contains('ativo')) {
                menuCurriculo.classList.remove('ativo');
            }
        });
    }
});
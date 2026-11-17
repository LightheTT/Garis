document.addEventListener('DOMContentLoaded', () => {
    // 1. Menu Responsivo para Celular
    const menuToggle = document.getElementById('menu-toggle');
    const navMenu = document.getElementById('nav-menu');

    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });

    // Fecha o menu ao clicar em um link no celular
    document.querySelectorAll('.nav a').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
        });
    });

    // 2. Animação das Barras do Gráfico de Empregabilidade ao rolar a página
    const bars = document.querySelectorAll('.bar-fill');
    let animated = false;

    function animarGraficos() {
        const chartSection = document.getElementById('mercado');
        if (!chartSection) return;

        const rect = chartSection.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100 && !animated) {
            bars.forEach(bar => {
                const percent = bar.getAttribute('data-percent');
                bar.style.width = percent + '%';
            });
            animated = true;
        }
    }

    window.addEventListener('scroll', animarGraficos);
    animarGraficos(); // Executa caso já esteja visível

    // 3. Simulador Interativo de Salário + Insalubridade (Integração com Matemática)
    const btnSimulador = document.getElementById('btn-simulador');
    const resultadoBox = document.getElementById('resultado-simulador');

    btnSimulador.addEventListener('click', () => {
        const salarioBase = 1650.00;
        const adicionalInsalubridade = salarioBase * 0.40; // Grau máximo (40%)
        const valeAlimentacao = 550.00;
        const totalEstimado = salarioBase + adicionalInsalubridade + valeAlimentacao;

        resultadoBox.classList.remove('hidden');
        resultadoBox.innerHTML = `
            <strong>Composição Salarial Média (Grau Máximo):</strong><br>
            • Salário Base: R$ ${salarioBase.toFixed(2).replace('.', ',')}<br>
            • Adicional de Insalubridade (40%): + R$ ${adicionalInsalubridade.toFixed(2).replace('.', ',')}<br>
            • Vale-Alimentação médio: + R$ ${valeAlimentacao.toFixed(2).replace('.', ',')}<br>
            <strong>Total Bruto + Benefícios: R$ ${totalEstimado.toFixed(2).replace('.', ',')}</strong>
        `;
    });
});

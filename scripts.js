// Garante que o código só seja executado após o carregamento completo da página
document.addEventListener('DOMContentLoaded', () => {
    showSection('about'); // Mostra a seção "Sobre mim" ao carregar a página
});

// Função para exibir a seção clicada e ocultar as outras
function showSection(sectionId) {
    const sections = document.querySelectorAll('section'); // Seleciona todas as seções

    // Itera sobre todas as seções e exibe apenas a correspondente ao ID clicado
    sections.forEach(section => {
        if (section.id === sectionId) {
            section.classList.add('active');  // Exibe a seção correspondente
        } else {
            section.classList.remove('active');  // Oculta as outras
        }
    });
}
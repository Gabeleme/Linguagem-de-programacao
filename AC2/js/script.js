// Obtém o botão do dropdown
// dropdown: menu suspenso
const dropdownButton = document.getElementById('user-dropdown'); // Botão que ativa
const dropdownMenu = document.getElementById('user-options'); // Menu que será mostrado ou escondido

// Adiciona um evento de clique no botão do dropdown
dropdownButton.addEventListener('click', () => {
    // Verifica se o menu está visível
    const isVisible = dropdownMenu.style.display === 'block'; // se estiver block o menu vai estar visivel
    // Alterna a visibilidade do menu
    dropdownMenu.style.display = isVisible ? 'none' : 'block'; // Se visível, oculta; caso contrário, exibe
});

// Para fechar o menu se clicar fora dele
window.addEventListener('click', (event) => {
    //verifica se o clique foi dentro ou fora 
    if (!dropdownButton.contains(event.target) && !dropdownMenu.contains(event.target)) {
        dropdownMenu.style.display = 'none'; //oculta o menu se clicar fora
    }
});
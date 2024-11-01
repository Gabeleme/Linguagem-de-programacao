const dropdownButton = document.getElementById('user-dropdown');
    const dropdownMenu = document.getElementById('user-options');

    dropdownButton.addEventListener('click', () => {
        const isVisible = dropdownMenu.style.display === 'block';
        dropdownMenu.style.display = isVisible ? 'none' : 'block';
    });

    // Para fechar o menu se clicar fora dele
    window.addEventListener('click', (event) => {
        if (!dropdownButton.contains(event.target) && !dropdownMenu.contains(event.target)) {
            dropdownMenu.style.display = 'none';
        }
    });
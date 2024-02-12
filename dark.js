// Dark mode tugmasi bosilganda dark mode aktivlashtiriladi
document.getElementById('dark-mode-toggle').addEventListener('click', () => {
    document.body.classList.add('dark-mode');
    updateModalStyle('dark-mode'); // Modal oynaning stili ham o'zgartiriladi
    localStorage.setItem('mode', 'dark');
});

// Light mode tugmasi bosilganda light mode aktivlashtiriladi
document.getElementById('light-mode-toggle').addEventListener('click', () => {
    document.body.classList.remove('dark-mode');
    updateModalStyle('light-mode'); // Modal oynaning stili ham o'zgartiriladi
    localStorage.setItem('mode', 'light');
});

// Saqlangan rejimni tekshirib chiqish
const savedMode = localStorage.getItem('mode');
if (savedMode === 'dark') {
    document.body.classList.add('dark-mode');
    updateModalStyle('dark-mode'); // Modal oynaning stili ham o'zgartiriladi
}

// Modal oynaning stili
function updateModalStyle(mode) {
    const modalContent = document.querySelector('.modal-content');
    if (mode === 'dark-mode') {
        modalContent.classList.add('dark-mode-modal');
    } else {
        modalContent.classList.remove('dark-mode-modal');
    }
}


    const isDarkMode = document.body.classList.contains('dark-mode');





    const addToCartButton = document.getElementById('add-to-cart-button');
    if (isDarkMode) {
        addToCartButton.style.backgroundColor = '#1f1f1f';
        addToCartButton.style.color = '#ffffff'; 
    } else {
        addToCartButton.style.backgroundColor = '#ffffff'; 
        addToCartButton.style.color = '#1f1f1f'; 
    }





// Système de mode sombre/clair
const themeToggle = document.querySelector('.theme-toggle');
const themeIcon = document.getElementById('theme-icon');
const body = document.body;

if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark-mode');
    themeIcon.src = 'light-mode-icon.svg';
} else {
    themeIcon.src = 'dark-mode-icon.svg';
}

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    
    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
        themeIcon.src = 'light-mode-icon.svg';
    } else {
        localStorage.setItem('theme', 'light');
        themeIcon.src = 'dark-mode-icon.svg';
    }
});

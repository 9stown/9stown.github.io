// Système de mode sombre/clair
const themeToggle = document.querySelector('.theme-toggle');
const themeIcon = document.getElementById('theme-icon');
const body = document.body;

// Initialisation du mode en fonction du localStorage
if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark-mode');
    themeIcon.setAttribute("fill", "#ffffff"); // Couleur claire pour l'icône en mode sombre
} else {
    themeIcon.setAttribute("fill", "#111111"); // Couleur sombre pour l'icône en mode clair
}

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    
    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
        themeIcon.setAttribute("fill", "#ffffff");
    } else {
        localStorage.setItem('theme', 'light');
        themeIcon.setAttribute("fill", "#111111");
    }
});


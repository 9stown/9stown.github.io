// Gestion du thème sombre
const themeToggle = document.querySelector('.theme-toggle');
const themeIcon = document.getElementById('theme-icon');
const body = document.body;

let isDarkMode = false;

function setTheme() {
    if (isDarkMode) {
        body.classList.add('dark-theme');
        themeIcon.textContent = 'light_mode';
    } else {
        body.classList.remove('dark-theme');
        themeIcon.textContent = 'dark_mode';
    }
}

themeToggle.addEventListener('click', () => {
    isDarkMode = !isDarkMode;
    setTheme();
});

// Initialiser le thème clair
setTheme();

// Fonction pour l'effet de parallaxe
window.addEventListener('scroll', function() {
    const scrollPos = window.scrollY;
    document.querySelector('header').style.backgroundPositionY = `${scrollPos * 0.5}px`;
});

// Barre de progression du scroll
window.addEventListener('scroll', function() {
    const scrolled = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);
    document.querySelector('.scroll-progress').style.width = `${scrolled * 100}%`;
});

// Confirmation après l'envoi du formulaire
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Votre message a été envoyé avec succès !');
    this.reset();  // Réinitialise le formulaire
});

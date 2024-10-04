const themeToggle = document.querySelector('.theme-toggle');
const themeIcon = document.getElementById('theme-icon');
const body = document.body;

let isDarkMode = false;

function setTheme() {
    if (isDarkMode) {
        body.classList.add('dark-theme');
        body.classList.remove('light-theme');
        themeIcon.setAttribute('fill', '#f0f0f0');  // Icône en blanc pour le thème sombre
    } else {
        body.classList.add('light-theme');
        body.classList.remove('dark-theme');
        themeIcon.setAttribute('fill', '#111111');  // Icône en noir pour le thème clair
    }
}

themeToggle.addEventListener('click', () => {
    isDarkMode = !isDarkMode;
    setTheme();
});

// Initialiser le thème sur le mode clair
isDarkMode = false;
setTheme();

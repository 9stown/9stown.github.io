// Système de mode sombre/clair
const themeToggle = document.querySelector('.theme-toggle');
const themeIcon = document.getElementById('theme-icon');
const body = document.body;

if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark-mode');
    themeIcon.setAttribute("fill", "#111");
} else {
    themeIcon.setAttribute("fill", "#e8eaed");
}

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    
    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
        themeIcon.setAttribute("fill", "#111");
    } else {
        localStorage.setItem('theme', 'light');
        themeIcon.setAttribute("fill", "#e8eaed");
    }
});

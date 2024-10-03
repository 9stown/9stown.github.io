// Dark mode toggle
const toggleButton = document.querySelector('.btn-toggle');
const body = document.body;

toggleButton.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
});

// Ajout du mode sombre avec des transitions
body.classList.add('light-mode');
if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark-mode');
}

toggleButton.addEventListener('click', () => {
    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
});

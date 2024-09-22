// Register
function register(event) {
  event.preventDefault();
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Correct
      const user = userCredential.user;
      alert('Inscription réussie, utilisateur: ' + user.email);
    })
    .catch((error) => {
      // Error
      const errorCode = error.code;
      const errorMessage = error.message;
      alert('Erreur lors de l\'inscription: ' + errorMessage);
    });
}

// Login
function login(event) {
  event.preventDefault();
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  firebase.auth().signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Correct
      const user = userCredential.user;
      alert('Connexion réussie, utilisateur: ' + user.email);
    })
    .catch((error) => {
      // Error
      const errorCode = error.code;
      const errorMessage = error.message;
      alert('Erreur lors de la connexion: ' + errorMessage);
    });
}

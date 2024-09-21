<script src="https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js"></script>
<script src="https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js"></script>

<script>
  // Configuration Firebase (à récupérer dans la console Firebase)
  const firebaseConfig = {
    apiKey: "AIzaSyB6TIkXJJjCO5lubIAmla2HmIaRwuFq5qE",
    authDomain: "refresh4ever-dd97b.firebaseapp.com",
    projectId: "refresh4ever-dd97b",
    storageBucket: "refresh4ever-dd97b.appspot.com",
    messagingSenderId: "391655254933",
    appId: "1:391655254933:web:6f70a2ac65d264c69e649c"
  };

  // Initialiser Firebase
  const app = firebase.initializeApp(firebaseConfig);
  const auth = firebase.auth();

  // Fonction pour s'inscrire
  function register(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    auth.createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // L'utilisateur est inscrit
        console.log('Inscription réussie:', userCredential.user);
      })
      .catch((error) => {
        console.error('Erreur lors de l\'inscription:', error.message);
      });
  }

  // Fonction pour se connecter
  function login(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    auth.signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // L'utilisateur est connecté
        console.log('Connexion réussie:', userCredential.user);
      })
      .catch((error) => {
        console.error('Erreur lors de la connexion:', error.message);
      });
  }
</script>

<script src="https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js"></script>
<script src="https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js"></script>

<script>
  // Configuration Firebase (à récupérer dans la console Firebase)
  const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_PROJECT_ID.appspot.com",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID"
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

// Konfigurasi Firebase
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_AUTH_DOMAIN",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_STORAGE_BUCKET",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID"
};

// Inisialisasi Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

// Fungsi untuk sign-up pengguna baru
function signUp() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    auth.createUserWithEmailAndPassword(email, password)
        .then(userCredential => {
            alert('Sign Up Successful!');
        })
        .catch(error => {
            alert(error.message);
        });
}

// Fungsi untuk login pengguna
function login() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    auth.signInWithEmailAndPassword(email, password)
        .then(userCredential => {
            alert('Login Successful!');
            document.getElementById('auth-container').style.display = 'none';
            document.getElementById('content').style.display = 'block';
        })
        .catch(error => {
            alert(error.message);
        });
}

// Fungsi untuk logout pengguna
function logout() {
    auth.signOut().then(() => {
        alert('Logged out');
        document.getElementById('auth-container').style.display = 'block';
        document.getElementById('content').style.display = 'none';
    });
}

// Fungsi untuk menampilkan modal gambar
function openModal(imageSrc) {
    document.getElementById('modalImage').src = imageSrc;
    document.getElementById('imageModal').style.display = 'flex';
}

// Fungsi untuk menutup modal gambar
function closeModal() {
    document.getElementById('imageModal').style.display = 'none';
}

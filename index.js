const sign_in_btn = document.querySelector('#sign-in-form');
const sign_up_btn = document.querySelector('#sign-up-form');
const container = document.querySelector('.container');

sign_up_btn.addEventListener('click', () => {
  container.classList.add('sign-up-mode');
});

sign_in_btn.addEventListener('click', () => {
  container.classList.remove('sign-up-mode');
});

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCFRUqTp42cJCAt_F8t65S8MrBDFHLSvAY",
  authDomain: "teamreport-7ce2e.firebaseapp.com",
  projectId: "teamreport-7ce2e",
  storageBucket: "teamreport-7ce2e.appspot.com",
  messagingSenderId: "904775004812",
  appId: "1:904775004812:web:1d6dcda94a59ca3b1441a9",
  measurementId: "G-YWGFDWQ9KW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Let's code
// var datab  = firebase.database().ref('data');
function signup() {
  const email =document.getElementById("email").value
  const password =document.getElementById("password").value
  console.log(email, password)
  import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const auth = getAuth();
createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });

}
const auth = firebase.auth();
function SignIn(){
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    const promise = auth.signInWithEmailAndPassword(email,password);
    promise.catch( e => alert(e.msg));
    window.open("https://www.google.com","_self");
}

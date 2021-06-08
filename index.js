import { registerUser, loginUser } from './firebase/firebaseAuth.js';
import { createPost } from './firebase/firestore.js';

const formRegister = document.getElementById('formRegister');
const formLogin = document.getElementById('formLogin');
const formPosts = document.getElementById('formPosts');

formRegister.addEventListener('submit', (event) => {
  event.preventDefault();
  const emailRegister = document.getElementById('emailRegister').value;
  const passwordRegister = document.getElementById('passwordRegister').value;
  registerUser(emailRegister, passwordRegister);
});

formLogin.addEventListener('submit', (event) => {
  event.preventDefault();
  const emailLogin = document.getElementById('emailLogin').value;
  const passwordLogin = document.getElementById('passwordLogin').value;
  loginUser(emailLogin, passwordLogin);
});

formPosts.addEventListener('submit', (event) => {
  event.preventDefault();
  const postContent = document.getElementById('postContent').value;
  createPost(postContent);
});

// db.collection('publicaciones')
//   .get()
//   .then((gato) => {
//     return gato;
//   });

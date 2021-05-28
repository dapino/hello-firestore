import { registerUser, loginUser, createPost } from './firebaseAuth.js';

const formRegister = document.getElementById('formRegister');
const formLogin = document.getElementById('formLogin');
const createButton = document.getElementById('createPost');

formRegister.addEventListener('submit', (event) => {
  const emailRegister = document.getElementById('emailRegister').value;
  const passwordRegister = document.getElementById('passwordRegister').value;
  event.preventDefault();
  registerUser(emailRegister, passwordRegister);
});

formLogin.addEventListener('submit', (event) => {
  const emailLogin = document.getElementById('emailLogin').value;
  const passwordLogin = document.getElementById('passwordLogin').value;
  event.preventDefault();
  loginUser(emailLogin, passwordLogin);
});

createButton.addEventListener('click', () => {
  console.log('creating');
  createPost();
});

// db.collection('publicaciones')
//   .get()
//   .then((gato) => {
//     return gato;
//   });

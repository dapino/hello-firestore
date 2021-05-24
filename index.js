import { registerUser, loginUser } from './firebaseAuth.js';

const formRegister = document.getElementById('formRegister');
const formLogin = document.getElementById('formLogin');

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

db.ref('publicaciones/' + 1).set({
  titulo: 'nueva publicacion'
});

db.collection('publicaciones')
  .get()
  .then((gato) => {
    return gato;
  });

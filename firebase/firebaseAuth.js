export const registerUser = (email, password) => {
  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      console.log(userCredential);
      //cambiar de ruta
      //pintar algo
    })
    .catch((error) => {
      console.log('error', error);
    });
};

export const loginUser = (email, password) => {
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      console.log(userCredential);
      //cambiar a vista de publicaciones
    })
    .catch((error) => {
      console.log('error', error);
      // revisa tu contraseña
    });
};

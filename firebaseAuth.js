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

db.collection('publicaciones')
  .get()
  .then((querySnapshot) => {
    querySnapshot.forEach((perrito) => {
      const p = document.createElement('p');
      p.innerText = perrito.data().titulo;
      // doc.data() is never undefined for query doc snapshots
      posts.append(p);
    });
  })
  .catch((error) => {
    console.log('Error getting documents: ', error);
  });



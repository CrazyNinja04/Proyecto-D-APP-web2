const firebaseConfig = {
  apiKey: "AIzaSyByj4xGEXV0VRXz5qZ2qsjQfyZKaaIb9zM",
  authDomain: "crud-brewtopia.firebaseapp.com",
  projectId: "crud-brewtopia",
  storageBucket: "crud-brewtopia.appspot.com",
  messagingSenderId: "546586968137",
  appId: "1:546586968137:web:22adf2ad900635e11abf98",
  measurementId: "G-3E7YVF2SVD"
};
  

  firebase.initializeApp(firebaseConfig); 


  // Obtén una referencia al servicio de almacenamiento de Firebase
const storage = firebase.storage();

// Obtén una referencia a la base de datos de Firebase (si también la estás utilizando)
const database = firebase.database();

// Agrega un evento de escucha al campo de entrada de tipo "file"
const fileInput = document.getElementById("fileInput");
fileInput.addEventListener("change", (e) => {
  const file = e.target.files[0];

  // Crea una referencia al archivo en el almacenamiento de Firebase
  const storageRef = storage.ref().child(file.name);

  // Sube el archivo al almacenamiento de Firebase
  storageRef.put(file)
    .then((snapshot) => {
      // Obtiene la URL de descarga de la imagen
      return snapshot.ref.getDownloadURL();
    })
    .then((downloadURL) => {
      // Guarda la URL de la imagen en tu base de datos (si es necesario)
      // database.ref("ruta_en_la_base_de_datos").set(downloadURL);

      // Haz algo con la URL de la imagen (por ejemplo, mostrarla en la página)
      const imageElement = document.getElementById("imageElement");
      imageElement.src = downloadURL;
    })
    .catch((error) => {
      console.log(error);
    });
});
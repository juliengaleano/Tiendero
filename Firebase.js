// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAHy6rAT7LAz8L7HnWzIqk4h0oVkLJDDKg",
  authDomain: "tiendero-cca7a.firebaseapp.com",
  projectId: "tiendero-cca7a",
  storageBucket: "tiendero-cca7a.appspot.com",
  messagingSenderId: "527120679888",
  appId: "1:527120679888:web:739c54f6cf6b1329d42fd5",
  measurementId: "G-BTYFJ80Q15"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }
  
  // Obtén la referencia a Cloud Firestore
  const db = firebase.firestore();
  
  // Funciones CRUD para productos
  export const getProductos = async () => {
    try {
      const snapshot = await db.collection('productos').get();
      return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    } catch (error) {
      console.error('Error al obtener productos:', error);
      return [];
    }
  };
  
  export const agregarProducto = async (producto) => {
    try {
      await db.collection('productos').add(producto);
      console.log('Producto agregado con éxito');
    } catch (error) {
      console.error('Error al agregar producto:', error);
    }
  };
  
  export const actualizarProducto = async (id, nuevosDatos) => {
    try {
      await db.collection('productos').doc(id).update(nuevosDatos);
      console.log('Producto actualizado con éxito');
    } catch (error) {
      console.error('Error al actualizar producto:', error);
    }
  };
  
  export const borrarProducto = async (id) => {
    try {
      await db.collection('productos').doc(id).delete();
      console.log('Producto eliminado con éxito');
    } catch (error) {
      console.error('Error al eliminar producto:', error);
    }
};
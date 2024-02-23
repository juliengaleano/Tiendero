// Importa la base de datos desde firebase.js
import { db } from './firebase';

// Obtén todos los productos
const obtenerProductos = async () => {
  try {
    const snapshot = await db.collection('productos').get();
    const productos = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    console.log(productos);
  } catch (error) {
    console.error('Error al obtener productos', error);
  }
};

// Llama a la función para obtener productos
obtenerProductos();

// Importa la base de datos desde firebase.js
import { db } from './firebase';

// Agregar un nuevo producto
const agregarProducto = async (nombre, precio, stock) => {
  try {
    await db.collection('productos').add({ nombre, precio, stock });
    console.log('Producto agregado correctamente');
  } catch (error) {
    console.error('Error al agregar producto', error);
  }
};

// Llama a la función para agregar un producto
agregarProducto('Nuevo Producto', 100, 20);

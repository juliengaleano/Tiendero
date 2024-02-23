// Importa la base de datos desde firebase.js
import { db } from './firebase';

// Actualizar un producto existente
const actualizarProducto = async (id, nuevosDatos) => {
  try {
    await db.collection('productos').doc(id).update(nuevosDatos);
    console.log('Producto actualizado correctamente');
  } catch (error) {
    console.error('Error al actualizar producto', error);
  }
};

// Llama a la función para actualizar un producto
actualizarProducto('ID_DEL_PRODUCTO', { precio: 120 });

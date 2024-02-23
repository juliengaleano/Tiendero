// ProductosScreen.js
import React, { useEffect } from 'react';
import { View, Text, Button } from 'react-native';
import { getProductos, agregarProducto, actualizarProducto, borrarProducto } from '../../../Firebase';

const ProductosScreen = () => {
  useEffect(() => {
    // Ejemplo de cómo obtener y mostrar productos
    const obtenerProductos = async () => {
      const productos = await getProductos();
      console.log('Productos:', productos);
    };

    obtenerProductos();
  }, []);

  const agregarNuevoProducto = () => {
    // Ejemplo de cómo agregar un nuevo producto
    const nuevoProducto = { nombre: 'Nuevo Producto', precio: 10.99 };
    agregarProducto(nuevoProducto);
  };

  const actualizarProductoExistente = () => {
    // Ejemplo de cómo actualizar un producto existente
    const productoId = 'ID_DEL_PRODUCTO_A_ACTUALIZAR';
    const nuevosDatos = { precio: 12.99 };
    actualizarProducto(productoId, nuevosDatos);
  };

  const eliminarProducto = () => {
    // Ejemplo de cómo eliminar un producto
    const productoId = 'ID_DEL_PRODUCTO_A_ELIMINAR';
    borrarProducto(productoId);
  };

  return (
    <View>
      <Text>Productos Screen</Text>
      <Button title="Agregar Producto" onPress={agregarNuevoProducto} />
      <Button title="Actualizar Producto" onPress={actualizarProductoExistente} />
      <Button title="Eliminar Producto" onPress={eliminarProducto} />
    </View>
  );
};

export default ProductosScreen;

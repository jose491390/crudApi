// Importa pool desde tu archivo de conexión
import { pool } from '../db.js';

// Consultar todos los productos
export const listarProductos = async (req, res) => {
  try {
    const [rows] = await pool.execute('SELECT * FROM tablaproducto');
    res.json(rows);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error al obtener la lista de productos');
  }
};

// Consultar un producto por ID
export const obtenerProductoPorId = async (req, res) => {
  const { id } = req.params;
  try {
    const [rows] = await pool.execute('SELECT * FROM tablaproducto WHERE id = ?', [id]);
    if (rows.length > 0) {
      res.json(rows[0]);
    } else {
      res.status(404).send('Producto no encontrado');
    }
  } catch (error) {
    console.error(error);
    res.status(500).send('Error al obtener el producto');
  }
};



// Registrar un nuevo producto
export const registrarProducto = async (req, res) => {
  try {
    const {id, nombre, descripcion, precioUnidadCompra, precioUnidadVenta } = req.body;

    // Asegúrate de que todos los campos necesarios estén presentes
    if (!id || !nombre || !descripcion || !precioUnidadCompra || !precioUnidadVenta) {
      return res.status(400).send('Todos los campos son obligatorios');
    }

    // Realiza la inserción en la base de datos
    const [result] = await pool.execute(
      'INSERT INTO tablaproducto (id, nombre, descripcion, precioUnidadCompra, precioUnidadVenta) VALUES (?, ?, ?, ?, ?)',
      [id, nombre, descripcion, precioUnidadCompra, precioUnidadVenta]
    );

    // Devuelve la información del producto recién registrado
    const nuevoProductoId = result.insertId;
    const [nuevoProducto] = await pool.execute('SELECT * FROM tablaproducto WHERE id = ?', [nuevoProductoId]);
    
    res.status(201).json({ mensaje: 'Registro exitoso', producto: nuevoProducto[0] });
  } catch (error) {
    console.error(error);
    res.status(500).send('Error al registrar el producto');
  }
};
import { Router } from 'express';
import { eliminarProducto, listarProductos, obtenerProductoPorId, registrarProducto } from '../controllers/productos.controller.js';

const router = Router();

// Ruta para listar todos los productos
router.get('/productos', listarProductos);

// Ruta para obtener un producto por ID
router.get('/productos/:id', obtenerProductoPorId);

// Ruta para registrar un nuevo producto
router.post('/registrarproductos', registrarProducto);

// Ruta para eliminar un producto por ID
router.delete('/eliminarproductos/:id', eliminarProducto);

export default router;
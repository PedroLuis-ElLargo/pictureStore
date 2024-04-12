const express = require('express');
const router = express.Router();

const {
	getItems,
	getItem,
	createItem,
	updateItem,
	deleteItem,
	loginItem,
} = require('../Controllers/usuarioController');

const {
	validatorRegiste,
	validatorGetUsaurio,
	validatorLogin,
} = require('../Validator/usuarioValidator');

const uploadMiddleware = require('../Utils/handleStorage');

//TODO: Rutas de usuario

/**
 * Listar items
 */
router.get('/', getItems);
/**
 * Obtener detalle de Item
 */
router.get('/:id', validatorGetUsaurio, getItem);
/**
 * Crear un Item
 */
router.post('/', uploadMiddleware.single('imagen'), createItem);
/**
 * Actualizar un Item
 */
router.put(
	'/:id',
	validatorGetUsaurio,
	uploadMiddleware.single('imagen'),
	updateItem
);
/**
 * Eliminar Item
 */
router.delete('/:id', validatorGetUsaurio, deleteItem);
/**
 * Iniciar sesión de usuario
 */
router.post('/login', loginItem);

module.exports = router;

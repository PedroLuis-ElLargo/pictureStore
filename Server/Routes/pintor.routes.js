const express = require('express');
const router = express.Router();

const {
	getItems,
	getItem,
	createItem,
	updateItem,
	deleteItem,
} = require('../Controllers/pintorController');

const {
	validatorCreatePintor,
	validatorGetPintor,
} = require('../Validator/pintorValidator');

const uploadMiddleware = require('../Utils/handleStorage');

//TODO: Rutas de pintor

/**
 * Listar items
 */
router.get('/', getItems);
/**
 * Obtener detalle de Item
 */
router.get('/:id', validatorGetPintor, getItem);
/**
 * Crear un Item
 */
router.post('/', uploadMiddleware.single('imagen'), createItem);
/**
 * Actualizar un Item
 */
router.put(
	'/:id',
	validatorGetPintor,
	uploadMiddleware.single('imagen'),
	updateItem
);
/**
 * Eliminar Item
 */
router.delete('/:id', validatorGetPintor, deleteItem);

module.exports = router;

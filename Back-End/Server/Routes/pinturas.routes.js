const express = require('express');
const router = express.Router();

const {
	getItems,
	getItem,
	createItem,
	updateItem,
	deleteItem,
} = require('../Controllers/pinturasController');

const {
	validatorCreateItem,
	validatorGetItem,
} = require('../Validator/pinturasValidator');
const uploadMiddleware = require('../Utils/handleStorage');

//TODO: Rutas de pinturas

/**
 * Listar items
 */
router.get('/', getItems);
/**
 * Obtener detalle de Item
 */
router.get('/:id', validatorGetItem, getItem);
/**
 * Crear un Item
 */
router.post('/', uploadMiddleware.single('imagen'), createItem);
/**
 * Actualizar un Item
 */
router.put('/:id', validatorGetItem, uploadMiddleware.single('imagen'), updateItem);
/**
 * Eliminar Item
 */
router.delete('/:id', validatorGetItem, deleteItem);

module.exports = router;

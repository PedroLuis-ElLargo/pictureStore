const { check } = require('express-validator');
const validatorResults = require('../Utils/handleValidator');

const validatorCreateItem = [
	check('nombre_pintura').exists().notEmpty().isLength({ min: 5, max: 100 }),
	check('precio_estandar').exists().notEmpty().isInt(),
	check('precio_oferta').optional().isInt(),
	check('imagen').exists().notEmpty(),
	check('pintor_id').exists().notEmpty().isInt(),
	(req, res, next) => {
		return validatorResults(req, res, next);
	},
];

const validatorGetItem = [
	check('id').exists().notEmpty().isInt(),
	(req, res, next) => {
		return validatorResults(req, res, next);
	},
];

module.exports = { validatorCreateItem, validatorGetItem };

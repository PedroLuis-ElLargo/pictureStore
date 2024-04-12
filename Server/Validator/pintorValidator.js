const { check } = require('express-validator');
const validatorResults = require('../Utils/handleValidator');

const validatorCreatePintor = [
	check('nombre').exists().notEmpty().isLength({ min: 5, max: 65 }),
	check('apellido').exists().notEmpty().isLength({ min: 5, max: 65 }),
	check('imagen').exists().notEmpty(),
	(req, res, next) => {
		return validatorResults(req, res, next);
	},
];

const validatorGetPintor = [
	check('id').exists().notEmpty().isInt(),
	(req, res, next) => {
		return validatorResults(req, res, next);
	},
];

module.exports = { validatorCreatePintor, validatorGetPintor };

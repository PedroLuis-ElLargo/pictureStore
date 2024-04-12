const { check } = require('express-validator');
const validatorResults = require('../Utils/handleValidator');

// Validaciones para el registro de usuarios
const validatorRegister = [
	check('nombre').exists().notEmpty().isLength({ min: 2, max: 65 }),
	check('apellido').exists().notEmpty().isLength({ min: 2, max: 65 }),
	check('email').exists().notEmpty().isEmail().isLength({ max: 100 }),
	check('clave').exists().notEmpty().isLength({ min: 10, max: 50 }),
	(req, res, next) => {
		return validatorResults(req, res, next);
	},
];

// Validaciones para el inicio de sesión de usuarios
const validatorLogin = [
	check('email').exists().notEmpty().isEmail().isLength({ max: 100 }),
	check('clave').exists().notEmpty().isLength({ min: 8, max: 50 }),
	(req, res, next) => {
		return validatorResults(req, res, next);
	},
];

// Validaciones para la recuperación de contraseña por correo
const validatorPasswordRecovery = [
	check('email').exists().notEmpty().isEmail().isLength({ max: 100 }),
	(req, res, next) => {
		return validatorResults(req, res, next);
	},
];

const validatorGetUsaurio = [
	check('id').exists().notEmpty().isInt(),
	(req, res, next) => {
		return validatorResults(req, res, next);
	},
];

module.exports = {
	validatorRegister,
	validatorLogin,
	validatorPasswordRecovery,
	validatorGetUsaurio,
};

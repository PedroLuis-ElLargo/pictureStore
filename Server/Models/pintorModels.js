const { query } = require('express-validator');
const dbConnet = require('../Config/db');
const fs = require('fs');
const path = require('path');

/**
 * Obtener todos los pintores
 */
const getPintores = (callback) => {
	dbConnet.query('SELECT * FROM pintor', callback);
};

/**
 * Obtener un pintor por ID
 */
const getPintor = (id, callback) => {
	dbConnet.query('SELECT * FROM pintor WHERE pintor_id = ?', [id], callback);
};

/**
 * Crear un nuevo pintor
 */
const createPintor = (data, callback) => {
	const query = 'INSERT INTO pintor SET ?';
	const nuevaData = { ...data, imagen: data.imagen.filename };
	dbConnet.query(query, nuevaData, callback);
};

/**
 * Actualizar un pintor existente
 */
const updatePintor = (id, data, file, callback) => {
	const query = 'UPDATE pintor SET ? WHERE pintor_id = ?';

	// Verificar si se está actualizando la imagen
	if (file && data.imagen) {
		const imagenPath = path.join(__dirname, '../../storage', data.imagen);

		// Mover el archivo de la ubicación temporal a la carpeta storage
		fs.rename(file.path, imagenPath, (err) => {
			if (err) {
				return callback(err);
			}

			// Actualizar la imagen en la base de datos
			dbConnet.query(query, [data, id], callback);
		});
	} else {
		// Si no se está actualizando la imagen, simplemente actualiza los otros campos
		dbConnet.query(query, [data, id], callback);
	}
};

/**
 * Eliminar un pintor existente
 */
const deletePintor = (id, callback) => {
	dbConnet.query('DELETE FROM pintor WHERE pintor_id = ?', [id], callback);
};

module.exports = {
	getPintores,
	getPintor,
	createPintor,
	updatePintor,
	deletePintor,
};

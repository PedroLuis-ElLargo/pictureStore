const { query } = require('express-validator');
const dbConnet = require('../Config/db');
const fs = require('fs');
const path = require('path');

const getPinturas = (callback) => {
	const query = `
    SELECT p.*, pt.nombre, pt.apellido, pt.imagen
    FROM pinturas p
    INNER JOIN pintor pt ON p.pintor_id = pt.pintor_id
  `;
	dbConnet.query(query, callback);
};

const getPintura = (id, callback) => {
	const query = `
    SELECT p.*, pt.nombre, pt.apellido, pt.imagen
    FROM pinturas p
    INNER JOIN pintor pt ON p.pintor_id = pt.pintor_id
    WHERE p.pintura_id = ?
  `;
	dbConnet.query(query, [id], callback);
};

const createPintura = (data, callback) => {
	const query = 'INSERT INTO pinturas SET ?';
	const nuevaData = {
		...data,
		imagen: data.imagen.filename,
	};
	dbConnet.query(query, nuevaData, callback);
};

const updatePintura = (id, data, file, callback) => {
	const query = 'UPDATE pinturas SET ? WHERE pintura_id = ?';

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

const deletePintura = (id, callback) => {
	dbConnet.query('DELETE FROM pinturas WHERE pintura_id = ?', [id], callback);
};

module.exports = {
	getPinturas,
	getPintura,
	createPintura,
	updatePintura,
	deletePintura,
};

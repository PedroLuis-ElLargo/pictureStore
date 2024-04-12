const { query } = require('express-validator');
const dbConnet = require('../Config/db');
const fs = require('fs');
const path = require('path');
const bcrypt = require('bcrypt');

/**
 * Obtener todos los usuarios
 */
const getUsuarioss = (callback) => {
	dbConnet.query('SELECT * FROM usuario', callback);
};

/**
 * Obtener un usuario por ID
 */
const getUsuario = (id, callback) => {
	dbConnet.query('SELECT * FROM usuario WHERE usuario_id = ?', [id], callback);
};

/**
 * Crear un nuevo usuario
 */
const createUsuario = (data, callback) => {
	// Generar un hash de la contraseña
	bcrypt.hash(data.clave, 10, (err, hash) => {
		if (err) {
			return callback(err);
		}
		// Reemplazar la contraseña en texto plano con el hash
		data.clave = hash;
		// Insertar el usuario en la base de datos
		const query = 'INSERT INTO usuario SET ?';
		const nuevaData = { ...data, imagen: data.imagen.filename };
		dbConnet.query(query, nuevaData, callback);
	});
};

/**
 * Actualizar un usuario existente
 */
const updateUsuario = (id, data, file, callback) => {
	// Generar un hash de la contraseña
	bcrypt.hash(data.clave, 10, (err, hash) => {
		if (err) {
			return callback(err);
		}
		// Reemplazar la contraseña en texto plano con el hash
		data.clave = hash;
		// Actualizar el usuario en la base de datos
		const query = 'UPDATE usuario SET ? WHERE usuario_id = ?';

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
	});
};

/**
 * Eliminar un usuario existente
 */
const deleteUsuario = (id, callback) => {
	dbConnet.query('DELETE FROM usuario WHERE usuario_id = ?', [id], callback);
};

/**
 * Iniciar sesión de usuario
 */
const loginUsuario = (email, clave, callback) => {
	dbConnet.query(
		'SELECT * FROM usuario WHERE email = ? AND clave = ?',
		[email, clave],
		(err, results) => {
			if (err) {
				callback(`Algo salio mal: ${err}`);
			} else if (results.length === 0) {
				callback('Usuario no encontrado');
			} else {
				const user = results[0];
				delete user.clave; // Eliminar la contraseña del usuario antes de enviarla
				callback(null, user);
			}
		}
	);
};

module.exports = {
	getUsuarioss,
	getUsuario,
	createUsuario,
	updateUsuario,
	deleteUsuario,
	loginUsuario,
};

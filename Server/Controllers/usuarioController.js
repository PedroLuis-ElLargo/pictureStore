const {
	getUsuarioss,
	getUsuario,
	createUsuario,
	updateUsuario,
	deleteUsuario,
	loginUsuario,
} = require('../Models/usuarioModels');
const { handleHttpError } = require('../Utils/handleError');

/**
 * ¡Obtener lista de la base de datos!
 * @param {*} req
 * @param {*} res
 */
const getItems = (req, res) => {
	getUsuarioss((err, data) => {
		if (err) {
			handleHttpError(err, 'Error_En_Get_Usuarios');
			console.log(`Fallo: ${err}`);
		} else {
			res.json(data);
		}
	});
};

/**
 * Obtener un detalle
 * @param {*} req
 * @param {*} res
 */
const getItem = (req, res) => {
	const { id } = req.params;

	getUsuario(id, (err, data) => {
		if (err) {
			handleHttpError(err, 'Error_En_Get_Usuario');
			console.log(`Fallo: ${err}`);
		} else {
			res.json(data);
		}
	});
};

/**
 * Insertar un registro
 * @param {*} req
 * @param {*} res
 */
const createItem = (req, res) => {
	const data = req.body;
	data.imagen = req.file;

	createUsuario(data, (err, result) => {
		if (err) {
			handleHttpError(res, 'Error_En_Create_Usuario');
			console.log(`Fallo: ${err}`);
		} else {
			res.json({ message: 'Usuario creado exitosamente' });
		}
	});
};

/**
 * Actualizar un registro
 * @param {*} req
 * @param {*} res
 */
const updateItem = (req, res) => {
	const { id } = req.params;
	const data = req.body;

	if (req.file) {
		const { filename } = req.file;
		updateUsuario(id, { ...data, imagen: filename }, req.file, (err, result) => {
			if (err) {
				handleHttpError(res, 'Error_En_Update_Item_Usuario');
				console.log(`Fallo: ${err}`);
			} else {
				res.json({ message: 'Usuario actualizado exitosamente' });
			}
		});
	} else {
		updateUsuario(id, data, null, (err, result) => {
			if (err) {
				handleHttpError(res, 'Error_En_Update_Item_Usuario');
				console.log(`Fallo: ${err}`);
			} else {
				res.json({ message: 'Usuario actualizado exitosamente' });
			}
		});
	}
};

/**
 * Eliminar un registro
 * @param {*} req
 * @param {*} res
 */
const deleteItem = (req, res) => {
	const { id } = req.params;

	deleteUsuario(id, (err, result) => {
		if (err) {
			handleHttpError(res, 'Error_En_Delete_Item_Usuario');
			console.log(`Fallo: ${err}`);
		} else {
			res.json({ message: 'Usuario eliminado exitosamente' });
		}
	});
};

/**
 * Eliminar un registro
 * @param {*} req
 * @param {*} res
 */
const loginItem = (req, res) => {
	const { email, clave } = req.body;
	loginUsuario(email, clave, (err, user) => {
		if (err) {
			handleHttpError(res, 'Error_En_Login');
			console.log(`Fallo: ${err}`);
		} else {
			res.json({ message: 'Inicio de sesión exitoso', user });
		}
	});
};

module.exports = {
	getItems,
	getItem,
	createItem,
	updateItem,
	deleteItem,
	loginItem,
};

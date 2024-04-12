const {
	getPintor,
	getPintores,
	createPintor,
	updatePintor,
	deletePintor,
} = require('../Models/pintorModels');
const { handleHttpError } = require('../Utils/handleError');

/**
 * ¡Obtener lista de la base de datos!
 * @param {*} req
 * @param {*} res
 */
const getItems = (req, res) => {
	getPintores((err, data) => {
		if (err) {
			handleHttpError(err, 'Error_En_Get_Items_Pintores');
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

	getPintor(id, (err, data) => {
		if (err) {
			handleHttpError(err, 'Error_En_Get_Item_Pintor');
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

	createPintor(data, (err, result) => {
		if (err) {
			handleHttpError(res, 'Error_En_Create_Item_Pintor');
			console.log(`Fallo: ${err}`);
		} else {
			res.json({ message: 'Pintor creado exitosamente' });
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
		updatePintor(id, { ...data, imagen: filename }, req.file, (err, result) => {
			if (err) {
				handleHttpError(res, 'Error_En_Update_Item_Pintor');
				console.log(`Fallo: ${err}`);
			} else {
				res.json({ message: 'Pintor actualizado exitosamente' });
			}
		});
	} else {
		updatePintor(id, data, null, (err, result) => {
			if (err) {
				handleHttpError(res, 'Error_En_Update_Item_Pintor');
				console.log(`Fallo: ${err}`);
			} else {
				res.json({ message: 'Pintor actualizado exitosamente' });
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

	deletePintor(id, (err, result) => {
		if (err) {
			handleHttpError(res, 'Error_En_Delete_Item_Pintor');
			console.log(`Fallo: ${err}`);
		} else {
			res.json({ message: 'Pintor eliminado exitosamente' });
		}
	});
};

module.exports = { getItems, getItem, createItem, updateItem, deleteItem };

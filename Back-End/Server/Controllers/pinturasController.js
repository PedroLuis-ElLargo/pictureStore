const {
	getPinturas,
	getPintura,
	createPintura,
	updatePintura,
	deletePintura,
} = require('../Models/pinturasModels');
const { handleHttpError } = require('../Utils/handleError');

/**
 * ¡Obtener lista de la base de datos!
 * @param {*} req
 * @param {*} res
 */
const getItems = (req, res) => {
	getPinturas((err, data) => {
		if (err) {
			handleHttpError(res, 'Error_En_Get_Items_Pinturas');
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
	getPintura(id, (err, data) => {
		if (err) {
			handleHttpError(res, 'Error_En_Get_Item_Pinturas');
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
	createPintura(data, (err, result) => {
		if (err) {
			handleHttpError(res, 'Error_En_Create_Item_Pinturas');
			console.log(`Fallo: ${err}`);
		} else {
			res.json({ message: 'Pintura creada exitosamente' });
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
		updatePintura(id, { ...data, imagen: filename }, req.file, (err, result) => {
			if (err) {
				handleHttpError(res, 'Error_En_Update_Item_Pinturas');
				console.log(`Fallo: ${err}`);
			} else {
				res.json({ message: 'Pintura actualizada exitosamente' });
			}
		});
	} else {
		updatePintura(id, data, null, (err, result) => {
			if (err) {
				handleHttpError(res, 'Error_En_Update_Item_Pinturas');
				console.log(`Fallo: ${err}`);
			} else {
				res.json({ message: 'Pintura actualizada exitosamente' });
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
	deletePintura(id, (err, result) => {
		if (err) {
			handleHttpError(res, 'Error_En_Delete_Item_Pinturas');
			console.log(`Fallo: ${err}`);
		} else {
			res.json({ message: 'Pintura eliminada exitosamente' });
		}
	});
};

module.exports = { getItems, getItem, createItem, updateItem, deleteItem };

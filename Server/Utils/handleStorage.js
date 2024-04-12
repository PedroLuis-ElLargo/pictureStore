const multer = require('multer');

/**
 * Acceder a los directorios, cargar archivos con su sextenciones y almacenar
 */
const storage = multer.diskStorage({
	destination: function (req, file, cb) {
		const pathStorage = `${__dirname}/../../storage`;
		cb(null, pathStorage);
	},
	filename: function (req, file, cb) {
		//* obtener extención .pdf, .png, .jpg, .mp3, .mp4, etc.
		const ext = file.originalname.split('.').pop();
		const filename = `file-${Date.now()}.${ext}`;
		cb(null, filename);
	},
});

const uploadMiddleware = multer({ storage });

module.exports = uploadMiddleware;

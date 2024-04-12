require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');
const pinturasRoutes = require('./Routes/pinturas.routes');
const pintorRoutes = require('./Routes/pintor.routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use('/storage', express.static(path.join(__dirname, '..', 'storage')));

//* Definir puerto
const port = process.env.PORT || 4000;

/**
 * Aquí invocamos a las rutas 😎
 */
app.use('/api/pinturas', pinturasRoutes);
app.use('/api/pintor', pintorRoutes);

app.listen(port, () => {
	console.log(`Servidor corriendo en http://localhost:${port}`);
});

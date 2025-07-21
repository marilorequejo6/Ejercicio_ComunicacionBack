const Usuario = require('../../0.MODELOS/Factura.js');
// Middleware para crear una nueva factura

const crearFactura = (req, res, next) => {
    const { id, cliente, numFactura, data } = req.body;

    // Validación simple de los datos de la factura
    if (!id || !cliente || !numFactura || !data) {
        return res.status(400).json({ error: 'Todos los campos son obligatorios.' });
    }

    // Creamos una instancia de Factura
    const nuevaFactura = new Usuario(id, cliente, numFactura, data);

    // Guardamos la factura en la solicitud para que pueda ser utilizada en las siguientes etapas
    req.factura = nuevaFactura;

    console.log(Usuario.infoFactura(id, cliente, numFactura, data));
    res.send(nuevaFactura.datosFactura());

    // Llamamos al siguiente middleware
    next();
}

module.exports = crearFactura;

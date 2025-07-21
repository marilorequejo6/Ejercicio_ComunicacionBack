const Usuario = require('../../0.MODELOS/Usuario.js');
// Middleware para crear un nuevo usuario

const crearUser = (req, res, next) => {
    const { nombre, email, edad } = req.body;

    // Validación simple de los datos del usuario
    if (!nombre || !email || !edad) {
        return res.status(400).json({ error: 'Todos los campos son obligatorios.' });
    }

    // Creamos una instancia de Usuario
    const nuevoUsuario = new Usuario(nombre, email, edad);

    // Guardamos el usuario en la solicitud para que pueda ser utilizado en las siguientes etapas
    req.usuario = nuevoUsuario;

    console.log(Usuario.infoUsuario());
    res.send(usuario.datosUsuario());

    // Llamamos al siguiente middleware
    next();
}

module.exports = crearUser;
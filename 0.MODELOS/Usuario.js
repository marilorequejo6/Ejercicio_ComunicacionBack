// Creamos una clase Usuario con sus atributos y exportamos el módulo

class Usuario {
    constructor(nombre, email, edad) {
        this.nombre = nombre;
        this.email = email;
        this.edad = edad;
    }

    // Método para obtener los datos del usuario
    datosUsuario() {
        return {
            nombre: this.nombre,
            email: this.email,  
            edad: this.edad
        };
    }

    // Método estático para obtener información del usuario
    static infoUsuario(nombre, email, edad) {
        return `${this.nombre} tiene ${this.edad} años y su email es ${this.email}.`;
    }
}

module.exports = Usuario;
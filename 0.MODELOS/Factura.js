// Creamos una clase Factura con sus atributos y exportamos el módulo
class Factura {
    #id // Atributo privado para el ID de la factura
    cliente;
    numFactura;
    #fecha; // Atributo privado para la fecha de la factura
    // Constructor de la clase Factura
    constructor(id, cliente, numFactura, fecha) {
        this.#id = id;
        this.cliente = cliente;
        this.numFactura = numFactura;
        this.#fecha = fecha;
    }

    // Método de instancia para obtener los datos de la factura
    datosFactura() {
        return {
            id: this.#id,
            cliente: this.cliente,
            numFactura: this.numFactura,
            fecha: this.#fecha
        };
    }

    // Método estático para obtener información de la factura
    static infoFactura(id, cliente, numFactura, fecha) {
        return `Factura ID: ${id}, Cliente: ${cliente}, Número de Factura: ${numFactura}, Datos: ${JSON.stringify(fecha)}`;
    }
}

module.exports = Factura;
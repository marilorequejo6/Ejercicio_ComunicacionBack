// Creamos una clase Factura con sus atributos y exportamos el módulo
class Factura {
    #id // Atributo privado para el ID de la factura
    cliente;
    numFactura;
    #data; // Atributo privado para los datos de la factura
    // Constructor de la clase Factura
    constructor(id, cliente, numFactura, data) {
        this.#id = id;
        this.cliente = cliente;
        this.numFactura = numFactura;
        this.#data = data;
    }

    // Método de instancia para obtener los datos de la factura
    datosFactura() {
        return {
            id: this.#id,
            cliente: this.cliente,
            numFactura: this.numFactura,
            data: this.#data
        };
    }

    // Método estático para obtener información de la factura
    static infoFactura(id, cliente, numFactura, data) {
        return `Factura ID: ${id}, Cliente: ${cliente}, Número de Factura: ${numFactura}, Datos: ${JSON.stringify(data)}`;
    }
}

module.exports = Factura;
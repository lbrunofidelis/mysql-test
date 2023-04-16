const connection = require('../connection');

class CarroService {
    async buscarTodos() {
        const [query] = await connection.execute('SELECT * FROM speeds.carro');
        return query;
    }

    async buscar(id) {
        const [query] = await connection.execute(`SELECT * FROM speeds.carro WHERE ${id} = id_carro`);
        return query;
    }

    async inserir(marca, modelo, ano_fabri, pot_motor, num_marchas, preco_fabri, cap_tanque, con_medio) { 
        const [query] = await connection.execute(`INSERT INTO carro VALUE (NULL, "${marca}", "${modelo}", ${ano_fabri}, "${pot_motor}", 
        ${num_marchas}, ${preco_fabri}, "${cap_tanque}", "${con_medio}")`);
        return query
    }

    async excluir(id) {
        const [query] = await connection.execute(`DELETE FROM carro WHERE ${id} = id_carro`);
        return query;
    }
}

module.exports = { CarroService }

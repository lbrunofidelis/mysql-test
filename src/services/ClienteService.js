const connection = require('../connection');

class ClienteService { 
    async buscarTodos() {
        const [query] = await connection.execute('SELECT * FROM speeds.cliente');
        return query;
    }

}

module.exports = { ClienteService }

// const getCliente = async (id) => {
//     const [query] = await connection.execute(`SELECT * FROM speeds.cliente WHERE ${id} = id_cliente`)
//     return query;
// }

// const postCliente = async (nome, cpf, email, telefone, data_de_nascimento, senha, endereco) => {
//     const [query] = await connection.execute(`INSERT INTO cliente VALUE (NULL, "${nome}", "${cpf}", "${email}", "${telefone}", "${data_de_nascimento}", "${senha}", "${endereco}")`);
//     return query;
// }

// const deleteCliente = async (id) => {
//     const [query] = await connection.execute(`DELETE FROM cliente WHERE ${id} = id_cliente`);
//     return query;
// }
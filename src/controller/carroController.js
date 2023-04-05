const connection = require('../connection');

const todosCarros = async () => {
    const [query] = await connection.execute('SELECT * FROM speeds.carro');
    return query;
};

const getCarro = async (id) => {
    const [query] = await connection.execute(`SELECT * FROM speeds.carro WHERE ${id} = id_carro`);
    return query;
};

const postCarro = async (marca, modelo, ano_fabri, pot_motor, num_marchas, preco_fabri, cap_tanque, con_medio) => {
    const [query] = await connection.execute(`INSERT INTO carro VALUE 
    (NULL, "${marca}", "${modelo}", ${ano_fabri}, "${pot_motor}", ${num_marchas}, ${preco_fabri}, "${cap_tanque}", "${con_medio}")`);
    
    return query
}

const deleteCarro = async (id) => {
    const [query] = await connection.execute(`DELETE FROM carro WHERE ${id} = id_carro`);
    return query;
}

module.exports = {
    todosCarros,
    getCarro,
    postCarro,
    deleteCarro
};

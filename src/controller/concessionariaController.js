const connection = require('../connection');

const todasConcessionarias = async () => {
    const [query] = await connection.execute('SELECT * from speeds.concessionaria');
    return query;
};

const getConcessionaria = async (id) => {
    const [query] = await connection.execute(`SELECT * from speeds.concessionaria WHERE ${id} = id_concessionaria`);
    return query;
};

const postConcessionaria = async (nome_con, endereco, descricao, nivel_satisfacao, info_contrato, estado_id_estado) => {
    const [query] = await connection.execute(`INSERT INTO concessionaria VALUE (NULL, "${nome_con}", "${endereco}", "${descricao}", ${nivel_satisfacao}, "${info_contrato}", ${estado_id_estado})`);
    return query;
}

const deleteConcessionaria = async (id) => {
    const [query] = await connection.execute(`DELETE FROM concessionaria WHERE ${id} = id_concessionaria`);
    return query;
}

module.exports = {
    todasConcessionarias,
    getConcessionaria,
    postConcessionaria,
    deleteConcessionaria
};  

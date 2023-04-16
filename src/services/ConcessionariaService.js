const connection = require('../connection');

class ConcessionariaService {

}

module.exports = { ConcessionariaService }

// const buscarTodas = async () => {
//     const [query] = await connection.execute('SELECT * from speeds.concessionaria');
//     return query;
// };

// const buscar = async (id) => {
//     const [query] = await connection.execute(`SELECT * from speeds.concessionaria WHERE ${id} = id_concessionaria`);
//     return query;
// };

// const inserir = async (nome_con, endereco, descricao, nivel_satisfacao, info_contrato, estado_id_estado) => {
//     const [query] = await connection.execute(`INSERT INTO concessionaria VALUE (NULL, "${nome_con}", "${endereco}", "${descricao}", ${nivel_satisfacao}, "${info_contrato}", ${estado_id_estado})`);
//     return query;
// }

// const excluir = async (id) => {
//     const [query] = await connection.execute(`DELETE FROM concessionaria WHERE ${id} = id_concessionaria`);
//     return query;
// }

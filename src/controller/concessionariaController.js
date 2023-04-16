const { ConcessionariaService } = require('../services/ConcessionariaService');

class ConcessionariaController { 

}

module.exports = { ConcessionariaController }

// app.get('/concessionarias', async (request, response) => {
//     const concessionarias = await todasConcessionarias();
//     return response.status(200).json(concessionarias);
// });

// app.get('/concessionaria/:id', async(request, response) => {
//     const id = request.params.id;
//     const concessionaria = await getConcessionaria(id);
//     return response.status(200).json(concessionaria);
// });

// app.post('/concessionaria/novo', async (request, response) => {
//     const{nome_con, endereco, descricao, nivel_satisfacao, info_contrato, estado_id_estado} = request.body;
//     const resultado = await postConcessionaria(nome_con, endereco, descricao, nivel_satisfacao, info_contrato, estado_id_estado);
//     return response.status(200).json("Concessionaria inserida com sucesso");
// });

// app.delete('/concessionaria/:id', async (request, response) => {
//     const id = request.params.id;
//     const resultado = await deleteConcessionaria(id);
//     return response.status(200).json(`A Concessionaria ${id} foi excluída com sucesso`);
// });

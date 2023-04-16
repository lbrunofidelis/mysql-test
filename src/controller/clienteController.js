const { ClienteService } = require('../services/ClienteService');

class ClienteController { 
    async getTodos(request, response) {
        const clienteService = new ClienteService();
        const clientes = await clienteService.buscarTodos();
        return response.status(200).json(clientes);
    }

}

module.exports = { ClienteController }

// app.get('/clientes', async (request, response) => {
//     const clientes = await todosClientes();
//     return response.status(200).json(clientes);
// });

// app.get('/cliente/:id',async (request, response) => {
//     const id = request.params.id;
//     const cliente = await getCliente(id);
//     return response.status(200).json(cliente);
// });

// app.post('/cliente/novo', async (request, response) => {
//     const{nome, cpf, email, telefone, data_de_nascimento, senha, endereco} = request.body;
//     const resultado = await postCliente(nome, cpf, email, telefone, data_de_nascimento, senha, endereco);
//     return response.status(200).json("Cliente inserido com sucesso");
// });

// app.delete('/cliente/:id', async (request, response) => {
//     const id = request.params.id;
//     const resultado = await deleteCliente(id);
//     return response.status(200).json(`Cliente ${id} excluído com sucesso`);
// });

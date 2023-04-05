const express = require('express');
const { todosCarros, getCarro, postCarro, deleteCarro } = require('./controller/carroController');
const { todosClientes, getCliente, postCliente, deleteCliente } = require('./controller/clienteController');
const { todasConcessionarias, getConcessionaria, postConcessionaria, deleteConcessionaria} = require('./controller/concessionariaController');

const app = express();

app.use(express.json());

app.listen(3333, () => { console.log("Server is running on port 3333") });

// Carro
app.get('/carros', async (request, response) => {
    const carros = await todosCarros();
    return response.status(200).json(carros);
});

app.get('/carro/:id', async (request, response) => {
    const id = request.params.id;
    const carro = await getCarro(id);

    if(carro.length === 0) {
        return response.status(400).json("Carro não existente");
    }

    return response.status(200).json(carro);
});

app.post('/carro/novo', async (request, response) => {
    const { marca, modelo, ano_fabri, pot_motor, num_marchas, preco_fabri, cap_tanque, con_medio } = request.body;

    const resultado = await postCarro(marca, modelo, ano_fabri, pot_motor, num_marchas, preco_fabri, cap_tanque, con_medio);
    
    return response.status(200).json("Carro inserido com sucesso");
});

app.delete('/carro/:id', async (request, response) => {
    const id = request.params.id;

    const resultado = await deleteCarro(id);

    return response.status(200).json(`Carro ${id} excluído com sucesso`);
})

// Cliente
app.get('/clientes', async (request, response) => {
    const clientes = await todosClientes();
    return response.status(200).json(clientes);
});

app.get('/cliente/:id',async (request, response) => {
    const id = request.params.id;
    const cliente = await getCliente(id);
    return response.status(200).json(cliente);
});

app.post('/cliente/novo', async (request, response) => {
    const{nome, cpf, email, telefone, data_de_nascimento, senha, endereco} = request.body;
    const resultado = await postCliente(nome, cpf, email, telefone, data_de_nascimento, senha, endereco);
    return response.status(200).json("Cliente inserido com sucesso");
});

app.delete('/cliente/:id', async (request, response) => {
    const id = request.params.id;
    const resultado = await deleteCliente(id);
    return response.status(200).json(`Cliente ${id} excluído com sucesso`);
});

// Concessionária
app.get('/concessionarias', async (request, response) => {
    const concessionarias = await todasConcessionarias();
    return response.status(200).json(concessionarias);
});

app.get('/concessionaria/:id', async(request, response) => {
    const id = request.params.id;
    const concessionaria = await getConcessionaria(id);
    return response.status(200).json(concessionaria);
});

app.post('/concessionaria/novo', async (request, response) => {
    const{nome_con, endereco, descricao, nivel_satisfacao, info_contrato, estado_id_estado} = request.body;
    const resultado = await postConcessionaria(nome_con, endereco, descricao, nivel_satisfacao, info_contrato, estado_id_estado);
    return response.status(200).json("Concessionaria inserida com sucesso");
});

app.delete('/concessionaria/:id', async (request, response) => {
    const id = request.params.id;
    const resultado = await deleteConcessionaria(id);
    return response.status(200).json(`A Concessionaria ${id} foi excluída com sucesso`);
});

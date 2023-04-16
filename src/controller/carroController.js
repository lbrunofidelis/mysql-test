const { CarroService } = require('../services/CarroService');

class CarroController {
    async getTodos(request, response) {
        const carroService = new CarroService();
        const carros = await carroService.buscarTodos();
        return response.status(200).json(carros);
    }

    async getCarro(request, response) { 
        const id = request.params.id;
        const carroService = new CarroService();
        const carro = await carroService.buscar(id);

        if(carro.length === 0) {
            return response.status(400).json("Carro não existente");
        }

        return response.status(200).json(carro);
    }

    async criar(request, response) { 
        const { marca, modelo, ano_fabri, pot_motor, num_marchas, preco_fabri, cap_tanque, con_medio } = request.body;
        const carroService = new CarroService();
        const resultado = await carroService.inserir(marca, modelo, ano_fabri, pot_motor, num_marchas, preco_fabri, cap_tanque, con_medio);
    
        return response.status(200).json("Carro inserido com sucesso");
    }

    async excluir(request, response) { 
        const id = request.params.id;
        const carroService = new CarroService();
        const resultado = await carroService.excluir(id);

        return response.status(200).json(`Carro ${id} excluído com sucesso`);
    }
}

module.exports = { CarroController }

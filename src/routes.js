const express = require("express");
const { CarroController } = require("./controller/CarroController");
const { ClienteController } = require("./controller/clienteController");

const router = express.Router();

const carroController = new CarroController();
const clienteController = new ClienteController();

router.get('/carros', carroController.getTodos);
router.get('/carro/:id', carroController.getCarro);
router.post('/carro/novo', carroController.criar);
router.delete('/carro/:id', carroController.excluir);

router.get('/clientes', clienteController.getTodos);

module.exports = router;

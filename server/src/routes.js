const express = require('express')
const routes = express.Router();

const devController = require('./controllers/DevsController')

// GET /api/dev - Lista os desenvolvedores
routes.get('/api/dev', devController.index);

// POST /api/dev - Cadastra um desenvolvedor
routes.post('/api/dev', devController.create);

// GET /api/dev/:id - Recupera um desenvolvedor pelo ID
routes.get('/api/dev/:id', devController.findOneDev)

// DELETE /api/dev/:id - Remove um desenvolvedor do sistema
routes.delete('/api/dev/:id', devController.remove)

module.exports = routes

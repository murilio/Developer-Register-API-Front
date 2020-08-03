const Sequelize = require('sequelize')
const databaseCofig = require('../config/database')

// models da aplicação
const Dev = require('../models/Dev')

const connection = new Sequelize(databaseCofig)

// conectar o model
Dev.init(connection)

module.exports = connection

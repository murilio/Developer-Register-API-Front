const Dev = require('../models/Dev')

module.exports = {
  async index(req, res) {
    const devs = await Dev.findAll()
    return res.status(200).json(devs)
  },

  async create(req, res) {
    const { name, email, data_nascimento, file } = req.body

    if(await Dev.findOne({ where: { email } })) {
      return res.status(400).json({ error: 'Usuário já existe' })
    }

    const dev = await Dev.create({ name, email, data_nascimento, file })

    return res.status(201).json(dev)

  },

  async findOneDev(req, res) {
    const { id } = req.params

    const dev = await Dev.findByPk(id)

    if(!dev) {
      return res.status(404).json({ error: 'Usuário não encontrado' })
    }

    return res.status(200).json(dev)
  },

  async remove(req, res) {
    const { id } = req.params

    const dev = await Dev.findByPk(id)

    if(!dev) {
      return res.status(404).json({ error: 'Usuário não encontrado' })
    }

    await dev.destroy()

    return res.status(200).json({ message: 'Usuário removido' })
  }
}

const { Model, DataTypes } = require('sequelize')
const { uuid } = require('uuidv4')

class Dev extends Model {
  static init(sequelize) {
    super.init({
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      data_nascimento: DataTypes.STRING,
      file: DataTypes.STRING,
    }, {
      sequelize,
      hooks: {
        beforeCreate: async(dev, options) => {
          const hash = await uuid()
          dev.id = hash
        }
      }
    }
    )
  }
}

module.exports = Dev

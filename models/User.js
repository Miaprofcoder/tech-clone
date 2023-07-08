const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require("../config");

class User extends Model {

}
User.init({
  id: {
    type: DataTypes.UUID,
    allowNull: false,
    primaryKey: true,
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      len: [6],
    },
  },
},
{
  hooks: {
    beforeCreate: async (data) => {
      data.password = await bcrypt.hash(data.password, 10);
      return data;
    }
  }
})
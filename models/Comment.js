const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config");

class Comment extends Model {}

Comment.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    comment: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    post_id: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: "post",
      },
    },
    user_id: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: "user",
      },
    },
  },
  {
    sequelize,
    timestamps: true,
    freezeTableName: true,
    modelName: "comment",
  }
);

module.exports = Comment;

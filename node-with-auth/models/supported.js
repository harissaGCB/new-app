import { DataTypes } from "sequelize";
import sequelize from "../database.js";

const supported = sequelize.define(
  "supporteds",
  {
    imgUrl: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: true,
  }
);

export default supported;

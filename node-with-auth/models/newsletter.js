import { DataTypes } from "sequelize";
import sequelize from "../database.js";

const newsletter = sequelize.define(
  "newsletters",
  {
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
  },
  {
    timestamps: true,
  }
);

export default newsletter;

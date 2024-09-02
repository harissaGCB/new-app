import { DataTypes } from "sequelize";
import sequelize from "../database.js";

const location = sequelize.define(
  "locations",
  {
    nameEn: {
      type: DataTypes.STRING,
    },
    nameTr: {
      type: DataTypes.STRING,
    },
  },
  {
    timestamps: true,
  }
);

export default location;

import { DataTypes } from "sequelize";
import sequelize from "../database.js";

const district = sequelize.define(
  "districts",
  {
    nameEn: {
      type: DataTypes.STRING,
    },
    nameAr: {
      type: DataTypes.STRING,
    },
  },
  {
    timestamps: true,
    paranoid: true
  }
);

export default district;

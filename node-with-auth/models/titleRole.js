import { DataTypes } from "sequelize";
import sequelize from "../database.js";

const titleRole = sequelize.define(
  "titleRoles",
  {
    nameEn: {
      type: DataTypes.STRING,
    },
    nameTr: {
      type: DataTypes.STRING,
    },
    roleId: {
      type: DataTypes.INTEGER,
      references: {
        model: "roles",
        key: "id",
      },
    },
  },
  {
    timestamps: true,
  }
);

export default titleRole;

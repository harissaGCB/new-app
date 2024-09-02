import { DataTypes } from "sequelize";
import sequelize from "../database.js";

const role = sequelize.define(
  "roles",
  {
    isCanAddAdmin: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    isCanAdd: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    isCanEdit: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    isCanDelete: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  },
  {
    timestamps: true,
  }
);

export default role;

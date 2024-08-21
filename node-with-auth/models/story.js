import { DataTypes } from "sequelize";
import sequelize from "../database.js";

const story = sequelize.define(
  "stories",
  {
    name: {
      type: DataTypes.STRING,
    },
    type: {
      type: DataTypes.ENUM(["Volunteer", "Patient", "Survivor"]),
    },
    imgUrl: {
      type: DataTypes.STRING,
      defaultValue: "default.png",
    },
  },
  {
    timestamps: true,
    paranoid: true,
  }
);

export default story;

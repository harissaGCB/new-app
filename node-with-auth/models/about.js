import { DataTypes } from "sequelize";
import sequelize from "../database.js";

const about = sequelize.define(
  "abouts",
  {
    titleEn: {
      type: DataTypes.STRING,
    },
    titleAr: {
      type: DataTypes.STRING,
    },
    descriptionEn: {
      type: DataTypes.TEXT,
    },
    descriptionAr: {
      type: DataTypes.TEXT,
    },
    imgUrl: {
      type: DataTypes.STRING,
      defaultValue: "default.png",
    },
    link: {
      type: DataTypes.STRING,
    },
  },
  {
    timestamps: true,
    paranoid: true,
  }
);

export default about;

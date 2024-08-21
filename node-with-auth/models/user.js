import { DataTypes } from "sequelize";
import sequelize from "../database.js";

const user = sequelize.define(
  "users",
  {
    fullName: {
      type: DataTypes.STRING,
    },
    phoneNumber: {
      type: DataTypes.STRING,
    },
    gender: {
      type: DataTypes.ENUM(["Male", "Female"]),
    },
    yearOfBirthday: {
      type: DataTypes.DATEONLY,
    },
    districtId: {
      type: DataTypes.INTEGER,
      references: {
        model: "districts",
        key: "id",
      },
    },
    imgUrl: {
      type: DataTypes.TEXT,
      defaultValue: "default.png",
    },
    email: {
      type: DataTypes.STRING,
    },
    password: {
      type: DataTypes.STRING,
    },
    role: {
      type: DataTypes.INTEGER,
    },
    isVerified: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  },
  {
    timestamps: true,
    paranoid: true
  }
);

export default user;

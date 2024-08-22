import user from "./models/user.js";
import district from "./models/district.js";

// district - user
district.hasMany(user, {
  foreignKey: { name: "districtId" },
});
user.belongsTo(district, {
  foreignKey: "districtId",
});

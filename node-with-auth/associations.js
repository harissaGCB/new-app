import user from "./models/user.js";
import location from "./models/location.js";
import role from "./models/role.js";
import titleRole from "./models/titleRole.js";

// user - location
location.hasMany(user, {
  foreignKey: { name: "locationId" },
});
user.belongsTo(location, {
  foreignKey: "locationId",
});

// user - titleRole
titleRole.hasMany(user, {
  foreignKey: { name: "titleRoleId" },
});
user.belongsTo(titleRole, {
  foreignKey: "titleRoleId",
});

// titleRole - role
role.hasMany(titleRole, {
  foreignKey: { name: "roleId" },
});
titleRole.belongsTo(role, {
  foreignKey: "roleId",
});

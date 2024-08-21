import user from "./models/user.js";
import district from "./models/district.js";
import contact from "./models/contact.js";
import about from "./models/about.js";
import supported from "./models/supported.js";
import story from "./models/story.js";
import newsletter from "./models/newsletter.js";

// district - user
district.hasMany(user, {
  foreignKey: { name: "districtId" },
});
user.belongsTo(district, {
  foreignKey: "districtId",
});

const mongo = require("../DB/db");
const UserSchema = require("../Schemas/UserSchema");

const UsersModel = new mongo.model("Users", UserSchema);

module.exports = UsersModel;

const mongoose = require("mongoose");

const UsersSchema = new mongoose.Schema({
    nome: String,
    email: String,
    senha: String
});

module.exports = UsersSchema;

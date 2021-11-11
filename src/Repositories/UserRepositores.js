const UsersModels = require("../Models/UserModel");

class UsersRepositores {
    async findAll(){
        try{
            const rows = await UsersModels.find();
            return rows;
        }catch {
            return {Error: "Houve um erro"}
        }
    }

    async findByEmail({email}){
        const rows = await UsersModels.find({email: email});
        return rows;
    }

    async create({nome, email, senha}){
        try{
            const usuario = new UsersModels({
                nome: nome,
                email: email,
                senha: senha
            })
            const rows = await usuario.save();
            return rows;
        }catch (e){
            return e;
        }
    }

    async update({nome, email, senha}, id){
        try{
            const rows = UsersModels.findByIdAndUpdate(id, {
                nome: nome,
                email: email,
                senha: senha
            });
            return rows;
        }catch(e){
            return e;
        }
    }

}

module.exports = new UsersRepositores();

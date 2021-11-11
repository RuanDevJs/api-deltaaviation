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

    async findById(id){
        try{
            const rows = await UsersModels.find({_id: id});
            return rows;
        }catch (e){
            return {error: "User not found"};
        }
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

    async delete(id){
        try{
            await UsersModels.findByIdAndDelete(id);
            return rows;
        }catch(e){
            return e;
        }
    }

    async login({email, senha}){
        try{
            const rows = await UsersModels.find({email, senha});
            return rows;
        }catch (e){
            return e;
        }
    }
}

module.exports = new UsersRepositores();

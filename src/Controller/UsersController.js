const UserRepositores = require("../Repositories/UserRepositores")

class UsersController {
    async index(req, res){
        try{
            const rows = await UserRepositores.findAll();
            return res.status(200).json(rows);
        }catch(e){
            return res.status(400).json({error: e});
        }
    }

    async store(req, res){
        const {nome, email, senha} = req.body;

        const verificateEmail = await UserRepositores.findByEmail({email});

        if(verificateEmail.length){
            console.log(verificateEmail)
            return res.status(400).json({error: "This e-mail is already exists!"});
        }

        const rows = await UserRepositores.create({nome, email, senha});
        return res.status(200).json(rows);
    }

    async update(req, res){
        const {nome, email, senha} = req.body;
        const {id} = req.params;

        try{
            const rows = await UserRepositores.update({nome, email, senha}, id);
            res.status(200).json(rows);
        }catch(e){
            return res.status(400).json({erro: "User does not exists!"});
        }
    }
}

module.exports = new UsersController();

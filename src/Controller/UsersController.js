const UserRepositores = require("../Repositories/UserRepositores");

class UsersController {
    async show(req, res) {
        try {
            const {id} = req.params;

            const rows = await UserRepositores.findById(id);

            if(!rows.length){
                return res.status(404).json({ error: "User not found" });
            }

            return res.status(200).json(rows);
        } catch (e) {
            return res.status(400).json({ error: rows });
        }
    }

    async store(req, res) {
        const { nome, email, senha } = req.body;

        const verificateEmail = await UserRepositores.findByEmail({ email });

        if (verificateEmail.length) {
            console.log(verificateEmail);
            return res
                .status(400)
                .json({ error: "This e-mail is already exists!" });
        }

        const rows = await UserRepositores.create({ nome, email, senha });
        return res.status(200).json(rows);
    }

    async update(req, res) {
        const { nome, email, senha } = req.body;
        const { id } = req.params;

        try {
            const rows = await UserRepositores.update(
                { nome, email, senha },
                id
            );
            res.status(201).json({ userUpdated: true });
        } catch (e) {
            return res.status(400).json({ erro: "User does not exists!" });
        }
    }

    async delete(req, res) {
        const { id } = req.params;

        try {
            const findById = await UserRepositores.findById(id);

            if (!findById.length) {
                console.log(findById);
                return res.status(404).json({ error: "User Not Found" });
            }

            const rows = await UserRepositores.delete(id);
            res.status(201).json({ userDeleted: true });
        } catch (e) {
            return res.status(400).json({ erro: "User does not exists!" });
        }
    }

    async login(req, res) {
        const { email, senha } = req.body;

        try {
            const rows = await UserRepositores.login({ email, senha });
            return res.status(200).json(rows);
        } catch (e) {
            return res.status(400).json({ error: e });
        }
    }
}

module.exports = new UsersController();

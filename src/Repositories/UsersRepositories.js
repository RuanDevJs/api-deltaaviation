const { Query } = require("../DB/Query");

class UsersRepositores {
    async findEmail({email}){
        const rows = await Query(`
            SELECT *
            FROM usuarios
            WHERE email = $1
        `, [email]);
        return rows;
    }

    async create(){
        const rows = await Query(`
            INSERT INTO usuarios(nome, email, senha)
            VALUES('Nando Moura', 'nando@gmail.com', 'malakoi123')
            RETURNING *
        `);
        return rows;
    }

    async index(){
        const rows = await Query(`
            SELECT * FROM usuarios
        `);
        return rows;
    }
}

module.exports = new UsersRepositores();

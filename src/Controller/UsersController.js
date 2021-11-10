const UsersRepositories = require("../Repositories/UsersRepositories");

class UsersController {
    async store(req, res) {
        res.json({true: true});
    }

    async index(req, res){
        const rows = await UsersRepositories.index();
        res.status(200).json(rows);
    }
}

module.exports = new UsersController();

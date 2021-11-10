const {Router} = require("express");
const UsersController = require("./Controller/UsersController");
const routes = Router();

routes.post("/user", UsersController.store);
routes.get("/", UsersController.index);

module.exports = routes;

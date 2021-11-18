const {Router} = require("express");
const UsersController = require("./Controller/UsersController");
const routes = Router();

routes.get("/user", UsersController.index);
routes.get("/user/:id", UsersController.show);
routes.post("/user", UsersController.store);
routes.put("/user/:id", UsersController.update);
routes.delete("/user/:id", UsersController.delete);
routes.post("/login", UsersController.login);

module.exports = routes;

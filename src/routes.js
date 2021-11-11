const {Router} = require("express");
const UsersController = require("./Controller/UsersController");
const routes = Router();


// const dotenv = require("dotenv");
// const articleModel = require("./article");

// dotenv.config();

// const mongoose = require("mongoose");
// const UsersController = require("./Controller/UsersController");
// mongoose.connect(process.env.DB_URL);

// const Article = mongoose.model("Article", articleModel);

// const artigo = new Article({
//     title: "React do Zero",
//     author: "Ruan",
//     special: true,
//     body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
//     resume: {
//         content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since",
//         author: "Ruan"
//     }
// });

// artigo.save().then(res => {
//     console.log(res);
// })

routes.get("/", UsersController.index);
routes.post("/user", UsersController.store);
routes.put("/user/:id", UsersController.update);

module.exports = routes;

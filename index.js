const express = require("express");
const routes = require("./src/routes");
const app = express();
const port = process.env.PORT || 3000

app.use(express.json());
app.use(routes);

app.listen(3000, () => {
    console.log("server started")
});


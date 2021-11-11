const mongo = require("mongoose");

mongo.connect(process.env.DB_URL)
.then(res => {
    console.debug("DB", "Connected");
})
.catch(res => {
    console.debug("DB", "Rejected");
});

module.exports = mongo;

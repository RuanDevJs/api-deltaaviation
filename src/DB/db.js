const mongo = require("mongoose");

mongo.connect("mongodb+srv://ruan:V99cvirzdD4AqUTB@cluster0.i3z0l.mongodb.net/myFirstDatabase?retryWrites=true")
.then(res => {
    console.debug("DB", "Connected");
})
.catch(res => {
    console.debug("DB", "Rejected");
});

module.exports = mongo;

const mongoose = require("mongoose");

var instance = mongoose.Schema({
    caption: String,
    user: String,
    indeximage: {
        data: Buffer,
        contentType: String,
    },
    comments : [],
})
module.exports = mongoose.model("dbModel", instance);

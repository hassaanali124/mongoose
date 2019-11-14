const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const contactsSchema = new Schema({
    name: {
        type: String
    },
    email: {
        type: String
    },
    mobile: {
        type: String
    }
})

module.exports = mongoose.model("contacts", contactsSchema)
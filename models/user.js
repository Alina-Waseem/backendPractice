const { type } = require('express/lib/response');
const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://admin:admin@cluster0.liqc9va.mongodb.net/postapp");

const userSchema = mongoose.Schema({
    username: String,
    name: String,
    age: Number,
    email: String,
    password: String,
    profilepic: {
        type: String,
        default: "default.jpg"
    },
    posts: [
        {type: mongoose.Schema.Types.ObjectId, ref: "post"}
    ],
});

module.exports = mongoose.model('user', userSchema);
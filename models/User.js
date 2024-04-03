const mongoose = require ("mongoose")

const signupSchema = mongoose.Schema ({
email:{
type: String,
required: true,
unique: true
},
password: {
type: String,
required: true,
unique: true
}

}, {timestamps: true})

const Signup = mongoose.model("signup", signupSchema)

module.exports = Signup;

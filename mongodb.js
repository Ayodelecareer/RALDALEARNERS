const mongoose=require("mongoose")

const connectDB = async() =>{

try{
    await mongoose.connect("mongodb+srv://ayodeleakinyode:Myfamily25@cluster0.aalj10b.mongodb.net/")
    .then(console.log("Mongodb connected"))

}catch(error){

    console.log(error.message)
}





}

module.exports = connectDB
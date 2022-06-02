const mongoose=require("mongoose");

module.exports=()=>{
    return mongoose.connect("mongodb+srv://tushar:99795422@cluster0.kauh7.mongodb.net/evaluation_2?retryWrites=true&w=majority")
}
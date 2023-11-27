const mongoose=require("mongoose")

const taskSchema=mongoose.Schema({
    title:{
        type:String,
        required:[true,"Title is required"],
        trim:true
    },
    description:{
        type:String,
        required:[true,"Description is required"],
        trim:true
    },
    status:{
        type:String,
        enum:["todo","in-progress","completed"],
        default:"todo"
        },
},
{
    timestamps: true,
})
const Task=mongoose.model("Task",taskSchema)
module.exports=Task
const express=require("express")
const router=express.Router()
const taskController=require('../controllers/taskController')
router
.route("/")
.get(taskController.getAllTask)
.post(taskController.createTask)
router.route("/:id")
.get(taskController.getTask)
.delete(taskController.deleteTask)
.put(taskController.updateTask)

module.exports=router
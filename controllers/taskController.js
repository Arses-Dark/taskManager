const { StatusCodes } = require("http-status-codes");
const Task = require("../models/taskModel");
exports.getAllTask = async (req, res) => {
  const tasks = await Task.find({});
  res.status(StatusCodes.OK).json({
    success: true,
    count: tasks.length,
    data: tasks,
  });
};
exports.createTask = async (req, res) => {
  const task = await Task.create(req.body);
  res.status(StatusCodes.CREATED).json({
    success: true,
    data: task,
  });
};
exports.getTask = async (req, res) => {
  const task = await Task.findById(req.params.id);
  if (!task) {
    res.statusCode = StatusCodes.NOT_FOUND;
    return res.json({ status: "error", message: "Task not found" });
  }
  res.statusCode = StatusCodes.OK;
  return res.json({ status: "success", data: task });
};
exports.updateTask = async (req, res) => {
    const task = await Task.findByIdAndUpdate(req.params.id, req.body, {
       new: true,
       runValidators: true,
    });
    if (!task) {
       res.statusCode =StatusCodes.NOT_FOUND;
       return res.json({ error: "No task found" });
    }
    res.statusCode =StatusCodes.OK;
    return res.json({ success: true, data: task });
   };
exports.deleteTask = async (req, res) => {
  const task = await Task.findByIdAndDelete(req.params.id);
  if (!task) {
    return res.status(StatusCodes.NOT_FOUND).json({
      error: "No task found",
    });
  }
  res.status(StatusCodes.OK).json({
    success: true,
    data: task,
  });
};

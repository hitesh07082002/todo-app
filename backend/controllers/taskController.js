// backend/controllers/taskController.js
const Task = require('../models/Task');

// Create Task
const createTask = async (req, res) => {
  const { title, description, deadline } = req.body;

  try {
    const task = await Task.create({
      title,
      description,
      deadline,
      user: req.user.id
    });
    res.status(201).json(task);
  } catch (error) {
    res.status(400).json({ message: 'Failed to create task' });
  }
};

// Get Tasks with Search, Filter, and Sort
const getTasks = async (req, res) => {
  const { search, status, sortBy } = req.query;
  const query = { user: req.user.id };

  if (search) {
    query.$or = [
      { title: { $regex: search, $options: 'i' } },
      { description: { $regex: search, $options: 'i' } }
    ];
  }

  if (status) {
    query.status = status;
  }

  const sortOption = {};
  if (sortBy === 'deadline') sortOption.deadline = 1;
  if (sortBy === 'status') sortOption.status = 1;

  try {
    const tasks = await Task.find(query).sort(sortOption);
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch tasks' });
  }
};

// Update Task
const updateTask = async (req, res) => {
  const { title, description, status, deadline } = req.body;

  try {
    const task = await Task.findById(req.params.id);
    if (!task) return res.status(404).json({ message: 'Task not found' });

    if (title) task.title = title;
    if (description) task.description = description;
    if (status) task.status = status;
    if (deadline) task.deadline = deadline;

    const updatedTask = await task.save();
    res.json(updatedTask);
  } catch (error) {
    res.status(500).json({ message: 'Failed to update task' });
  }
};

// Delete Task
const deleteTask = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);
    if (!task) return res.status(404).json({ message: 'Task not found' });

    await task.deleteOne();
    res.json({ message: 'Task removed' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to delete task' });
  }
};

module.exports = { createTask, getTasks, updateTask, deleteTask };

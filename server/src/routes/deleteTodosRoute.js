const TodoModel = require('../models/TodoModel');

module.exports = async (req, res) => {
  const {id} = req.params;
  const todos = await TodoModel.findById(id);
  await todos.deleteOne();
  res.status(204).json(todos);
}
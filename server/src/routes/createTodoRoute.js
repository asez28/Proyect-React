const TodoModel = require('../models/TodoModel');

module.exports = async (req,res) => {
  const {title, subtitle, text, place, country, url, imgDescription, emogi} = req.body;
  const todo = new TodoModel({
    title, subtitle, text, place, country, url, imgDescription, emogi,
  })
  const newTodo = await todo.save();
  res.json(newTodo)
};
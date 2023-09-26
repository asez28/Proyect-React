const TodoModel = require('../models/TodoModel');

module.exports = async (req, res) => {
    const {id} = req.params;
    const todos = await TodoModel.findById(id);
    todos.title = req.body.title;
    todos.subtitle = req.body.subtitle;
    todos.text = req.body.text;
    todos.place = req.body.place;
    todos.country = req.body.country;
    todos.emogi = req.body.emogi;
    await todos.save();
    res.json(todos);
};
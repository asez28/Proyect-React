const express = require('express');

const isLoggedln = require('./middleware/isLoggedln')
const router =express.Router();

const updateTodosRoute = require('./routes/updateTodosRoute');
const createTodoRoute = require('./routes/createTodoRoute');
const readTodosRoute = require('./routes/readTodosRoute');
const deleteTodosRoute = require('./routes/deleteTodosRoute');

router.post('/login', require('./routes/loginRoute'));

router.get('/todos', isLoggedln, readTodosRoute);
router.post('/todos', isLoggedln, createTodoRoute);
router.put('/todos/:id', isLoggedln, updateTodosRoute);
router.delete('/todos/:id', isLoggedln, deleteTodosRoute);

module.exports = router; 
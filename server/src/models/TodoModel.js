const mongoose = require('mongoose');

const TodoSchema = new mongoose.Schema({

    title: {
        type: String,
    },
    subtitle: {
        type: String,
    },
    text: {
        type: String,
    },
    place: {
        type: String,
    },
    country: {
        type: String,
    },
    url: {
        type: String,
    },
    imgDescription: {
        type: String,
    },
    emogi: {
        type: String,
    }
});

const TodoModel = mongoose.model('Todo', TodoSchema);

module.exports = TodoModel;
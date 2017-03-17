var mongoose = require('mongoose');

var todoSchema = mongoose.Schema ({
    title: String
});

var Todo = mongoose.model('Todo',todoSchema);

module.exports = Todo;

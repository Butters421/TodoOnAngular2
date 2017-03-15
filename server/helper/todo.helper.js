var mongoose = require('mongoose');

var todoSchema = mongoose.Schema({
    title: String
});

module.exports = {
    getTodos: getTodos,
    deleteTodo: deleteTodo,
    deleteThisTodo: deleteThisTodo,
    createTodo: createTodo
};

function getTodos(req, res, err) {

    console.log('полная лажа');
}

function deleteTodo() {
    console.log('удаление');
}

function  deleteThisTodo(req, res, err) {
    console.log('удаление этого');
}

function createTodo(req, res, err) {
    var Todos = mongoose.model('Todos', todoSchema);

    var title = req;

    var butters = new Todos ({
        title: title
    });

    butters.save(function (err) {
        if (err) console.log(err);
        console.log('Добавлена новая запись');
    });

    res.send('Добавлено');

}
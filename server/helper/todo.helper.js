var mongoose = require('mongoose');

var todoSchema = mongoose.Schema({
    title: String,
    name: String
});

module.exports = {
    getTodos: getTodos,
    deleteTodo: deleteTodo,
    deleteThisTodo: deleteThisTodo,
    createTodo: createTodo
};



var todo = {
    title: 'Вот это первая хрень'
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

    var butters = new Todos ({
        title: 'butters',
        name: 'aaaaaa'
    });

    butters.save(function (err) {
        if (err) console.log(err);
        console.log('Добавлена новая запись');
    });

}
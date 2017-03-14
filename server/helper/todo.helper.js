var mongoose = require('mongoose');

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

    mongoose.collection('Todo').insert(todo, function(err, result) {
        if(err) {
            console.log(err);
            res.sendStatus(500);
        }
        res.send(todo);
    })

}
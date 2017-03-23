var Todo =  require('../models/todo.models');
var mongoose = require('mongoose');


module.exports = {
    getTodos: getTodos,
    deleteTodo: deleteTodo,
    deleteThisTodo: deleteThisTodo,
    createNewTodo: createNewTodo
};

function getTodos(res) {
    res.send();
}

function deleteTodo() {
    console.log('удаление');
}

function  deleteThisTodo() {
    console.log('удаление этого');
}

function createNewTodo(title) {
    var todo = new Todo({
        title: title
    });
    return todo.save()

}
var helper = require('../helper/todo.helper');

module.exports = {
    getTodos: getTodos,
    deleteTodo: deleteTodo,
    deleteThisTodo: deleteThisTodo
};

function getTodos(req, res) {
    helper.getTodos();

}

function deleteTodo(req, res) {
    helper.deleteTodo();
}

function deleteThisTodo(req, res) {
    helper.deleteThisTodo();
}
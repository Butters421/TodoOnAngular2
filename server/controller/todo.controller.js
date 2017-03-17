var helper = require('../helper/todo.helper');

module.exports = {
    getTodos: getTodos,
    deleteTodo: deleteTodo,
    deleteThisTodo: deleteThisTodo,
    createTodo: createTodo
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

function createTodo(req, res) {
    var title = req.body.title;
    return helper.createNewTodo(title).then(function (data) {
        res.send(data);
    }).catch(function (err) {
        console.log(err);
        res.status(400);
        res.send('None shall pass!');
    });
}
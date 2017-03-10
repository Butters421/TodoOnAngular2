var express = require('express');
var router = express.Router();
var controller = require('../controller/todo.controller');


router.get('/', controller.getTodos);
router.delete('/', controller.deleteTodo);
router.delete('/:id', controller.deleteThisTodo);






module.exports = router;

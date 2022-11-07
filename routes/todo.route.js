const { Router } = require("express");
const { todoControllers } = require("../controllers/todo.controller");
const { userControllers } = require("../controllers/user.controllers");
const TodoRoute = Router();

TodoRoute.post("/add", todoControllers.addTodo);

module.exports = { TodoRoute };

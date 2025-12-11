const {
  getAllTodos,
  createTodo,
  getTodo,
} = require("../../../../controllers/todoController");

function todoRouter(fastify, options) {
  fastify.get("/", getAllTodos);
  fastify.post("/", createTodo);
  fastify.get("/:id", getTodo);
}

module.exports = todoRouter;

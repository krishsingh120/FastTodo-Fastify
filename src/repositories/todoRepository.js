const fp = require("fastify-plugin");

class TodoRepository {
  constructor(db) {
    this.db = db;
  }

  async create(todoText) {
    const todoList = await this.db.todos;
    await this.db.todos.push({
      id: todoList.length,
      text: todoText,
    });

    return await this.db.todos;
  }

  async getOne(id) {
    const response = await this.db.todos.find(todo => todo.id == id);
    return response;
  }

  async getAll() {
    const response = await this.db.todos;
    return response;
  }

  async deleteOne(id) {}

  async deleteAll() {}
}

async function todoRepository(fastify, options) {
  const { db } = fastify;
  const repo = new TodoRepository(db);
  fastify.decorate("todoRepository", repo);
}

module.exports = fp(todoRepository);

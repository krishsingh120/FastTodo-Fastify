const fp = require("fastify-plugin");

class TodoService {
  constructor(todoRepository) {
    this.todoRepository = todoRepository;
  }

  async create(todoText) {
    const response = await this.todoRepository.create(todoText);
    return response;
  }

  async getOne(id) {
    const response = await this.todoRepository.getOne(id);
    return response;
  }

  async getAll() {
    return await this.todoRepository.getAll();
  }

  async deleteOne(id) {
    return this.todoRepository.deleteOne(id);
  }

  async deleteAll() {
    return this.todoRepository.deleteAll();
  }
}

async function todoService(fastify, options) {
  const { todoRepository } = fastify;
  const service = new TodoService(todoRepository);
  fastify.decorate("todoService", service);
}

module.exports = fp(todoService);

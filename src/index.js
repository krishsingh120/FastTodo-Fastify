const fastify = require("fastify")({ logger: false }); // Root application instance

const app = require("./app");
const { PORT } = require("./config/serverConfig");

fastify.register(app);

async function start() {
  try {
    await fastify.listen({ port: PORT, host: "0.0.0.0" });
    console.log(`Server is listening on port http://localhost:${PORT}`);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
}

start();

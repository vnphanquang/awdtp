import Fastify from 'fastify';

const fastify = Fastify({ logger: true });

// Health Check
fastify.get('/healthz', async () => {
	return { status: 'ok' };
});

try {
  await fastify.listen({ port: 3000 });
} catch (err) {
  fastify.log.error(err);
  process.exit(1);
}
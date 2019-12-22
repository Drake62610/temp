const fastify = require('fastify')({
    logger: true
});

fastify.get('/', function (request, reply) {
    reply.send('Some production Santa CTF app');
});

fastify.listen(3000, '0.0.0.0', function (err, address) {
    if (err) {
        fastify.log.error(err);
        process.exit(1);
    }
    fastify.log.info(`Server listening on ${address}`);
});

process.on('SIGTERM', function () {
    fastify.close(function(){
        process.exit(0);
    });
});

const express = require('express');
const helmet = require('helmet');

const projectsRouter = require('../projects/projects-router.js');
const actionsRouter = require('../projects/actions-router.js');

const server = express();

server.use(helmet());
server.use(express.json());

server.use('/api/projects', projectsRouter);
server.use('/api/actions', actionsRouter);

// sanity check route
server.get('/', (req, res) => {
  res.status(200).json({ hello: 'World!' });
});

module.exports = server;

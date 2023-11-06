const express = require('express');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const router = require('./routes/index');
const database = require('./database');
const { requestLogger, errorLogger } = require('./middlewares/eventLogger');

dotenv.config();
server = express();

server.use(requestLogger);
server.use(router);
server.use(express.json());
server.use(bodyParser.json());

server.use(errorLogger);

server.listen(
    process.env.PORT,
    () => console.log(`server running on port ${process.env.PORT}`)
);

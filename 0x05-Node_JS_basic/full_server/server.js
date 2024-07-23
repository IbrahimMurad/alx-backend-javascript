import express from 'express';
import router from './routes/index';

const http = require('http');

const app = express();

app.user('/', router);

const server = http.createServer(app);

server.listen(1245);

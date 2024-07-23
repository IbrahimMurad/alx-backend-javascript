import express from 'express';
import router from './routes/index';

const app = express();

app.user('/', router);

app.listen(1245);

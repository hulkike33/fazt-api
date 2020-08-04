import express from 'express';
import cors from 'cors';
import morgan from 'morgan';

import routes from './routes';

const app = express();

app.set('port', process.env.PORT || 3000);

app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', routes);

export default app;

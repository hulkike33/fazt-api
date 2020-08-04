import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import * as swaggerDocument from './swagger.json';
import * as swaggerUi from 'swagger-ui-express';

import routes from './routes';

const app = express();

app.set('port', process.env.PORT || 3000);

app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', routes);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

export default app;

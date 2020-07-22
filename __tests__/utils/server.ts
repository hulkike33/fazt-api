import express from 'express';
import handleErrorMiddleware from '../../src/middlewares/error.middleware';
import supertest from 'supertest';

function testServer(route: any) {
  const app = express();
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));

  app.use('/', route);
  app.use(handleErrorMiddleware);
  return supertest(app);
}

export default testServer;

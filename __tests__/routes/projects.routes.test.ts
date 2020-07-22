import router from '../../src/routes/projects.routes';
import server from '../utils/server';
import { OK } from 'http-status-codes';

const request = server(router);

describe('GET /projects', () => {
  it('Get Empty Array', async () => {
    const {
      body: { data: projects },
      status
    } = await request.get('/');

    expect(status).toBe(OK);
    expect(projects).toEqual([]);
  });
});

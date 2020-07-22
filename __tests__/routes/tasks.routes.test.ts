import router from '../../src/routes/tasks.routes';
import server from '../utils/server';
import { OK } from 'http-status-codes';

const request = server(router);

describe('GET /tasks', () => {
  it('Get Empty Array', async () => {
    const result = await request.get('/');

    expect(result.status).toBe(OK);
    expect(result.body.data).toEqual([]);
  });
});

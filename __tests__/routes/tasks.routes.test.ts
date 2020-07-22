import router from '../../src/routes/tasks.routes';
import server from '../utils/server';

describe('Route - Discord', () => {
  const request = server(router);
  it('Get list of Discord', async () => {
    const result = await request.get('/');
    expect(result.status).toBe(200);
    expect(result.body.data).toEqual([]);
  });
});

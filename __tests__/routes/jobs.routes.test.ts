import router from '../../src/routes/jobs.routes';
import server from '../utils/server';

describe('Route - Jobs', () => {
  const request = server(router);
  it('Get list of Jobs', async () => {
    const result = await request.get('/');
    expect(result.status).toBe(200);
    expect(result.body.data).toEqual([]);
  });
});

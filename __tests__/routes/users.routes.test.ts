import router from '../../src/routes/users.routes';
import server from '../utils/server';
import { OK, UNAUTHORIZED } from 'http-status-codes';

import { createUser } from '../utils/users';

const request = server(router);

describe('GET  /user', () => {
  it('Get Empty Array', async () => {
    const result = await request.get('/');
    expect(result.status).toBe(OK);
    expect(result.body.data).toEqual([]);
  });

  it('Get Array with User', async () => {
    const { user } = await createUser(request);
    const { body, status } = await request.get('/');
    const [resUser] = body.data;

    expect(status).toBe(OK);
    expect(body.message).toBe('Ok!');
    expect(body.data).toHaveLength(1);
    expect(resUser.nickname).toEqual(user.nickname);
    expect(resUser.password).not.toBe(user.password);
    expect(resUser.email).toEqual(user.email);
  });
});

describe('GET /user/:id', () => {
  it('Get User', async () => {
    const { user: newUser } = await createUser(request);
    const {
      body: { data: users }
    } = await request.get('/');
    const {
      body: { data: user },
      status
    } = await request.get(`/${users[0]._id}`);

    expect(status).toBe(OK);
    expect(newUser.nickname).toEqual(user.nickname);
    expect(newUser.email).toEqual(user.email);
  });
});

describe('POST /user/signin', () => {
  it('Create User', async () => {
    const { body, status } = await createUser(request);

    expect(status).toBe(OK);
    expect(body.message).toEqual('User Created!');
    expect(body.data).toBeDefined();
  });
});

describe('POST /user/login', () => {
  it('Login User', async () => {
    const { user } = await createUser(request);

    const { body, status } = await request.post('/login').send(user);

    expect(status).toBe(OK);
    expect(body.message).toEqual('User Connected!');
    expect(body.data).toBeDefined();
  });
});

describe('PUT /user', () => {
  it('Update User Without Token', async () => {
    const { body, status } = await request.put('/');

    expect(status).toBe(UNAUTHORIZED);
    expect(body.message).toEqual('no token provided');
  });

  it('Update User', async () => {
    const {
      body: { data: token }
    } = await createUser(request);

    const newUser = {
      nickname: 'new-test',
      email: 'testing@gmail.com'
    };

    const { body, status } = await request
      .put('/')
      .send(newUser)
      .set('authorization', token);

    expect(status).toBe(OK);
    expect(body.message).toEqual('User Updated!');
    expect(body.data.nickname).toBe(newUser.nickname);
    expect(body.data.email).toBe(newUser.email);
  });
});

describe('DELETE /user', () => {
  it('Delete User Without Token', async () => {
    const { body, status } = await request.delete('/');

    expect(status).toBe(UNAUTHORIZED);
    expect(body.message).toEqual('no token provided');
  });

  it('Delete User', async () => {
    const {
      body: { data: token }
    } = await createUser(request);
    const { body, status } = await request.delete('/').set('authorization', token);

    expect(status).toBe(OK);
    expect(body.message).toEqual('User Deleted!');
  });
});

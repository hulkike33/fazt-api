export async function createUser(request: any, customUser?: object) {
  const user = {
    nickname: 'test',
    password: '123456',
    email: 'test@gmail.com'
  };

  const { body, status } = await request.post('/signin').send(customUser || user);
  return { user, body, status };
}

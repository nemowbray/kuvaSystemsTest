import { test, expect, request } from '@playwright/test';

test('Create User', async () => {
  const context = await request.newContext();
  const result = await context.post('https://petstore.swagger.io/v2/user/createWithArray', {
    data: {
      id: 0,
      username: 'test',
      firstName: 'user',
      lastName: 'test',
      email: 'myemail@email.com',
      password: 'password',
      phone: '123-123-1234',
      userStatus: 0
    }
});
await expect (result).toBeOK
});

test('Get User', async () => {
  const context = await request.newContext();
  const result = await context.get('https://petstore.swagger.io/v2/user/login?username=test&password=password');
  await expect(result).toBeOK
});





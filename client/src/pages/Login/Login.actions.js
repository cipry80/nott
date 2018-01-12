export const doLogin = (username, password) =>
  new Promise(res => {
    const body = { token: '123' };
    setTimeout(() => res({ body }), 1000);
  });

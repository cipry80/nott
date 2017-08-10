// Promise Cheat Sheet

const lg = console.log;

// 1. Promises fall through

// The code below logs `2` because of what is passed as argument to the first `then`
// `then` accepts a function as an argument. If something else is passed, it's the same as
// passing `null`, which makes the promise fall through
Promise.resolve(2).then(Promise.resolve(3)).then(res => lg(res));

// How to fix
// The code below logs `3` as expected
Promise.resolve(2).then(res => Promise.resolve(3)).then(res => lg(res));

// 2. Not returning promises from `then`

const a = () => new Promise((resolve, reject) => setTimeout(() => resolve('a'), 1000));
const b = () => new Promise((resolve, reject) => setTimeout(() => resolve('b'), 2000));

// Even though this time, we pass in a function to the first `then`, the second then
// executes without waiting for the first one (and logs `a`). This is because the first `then`
// returns `undefined` (a function that has no `return` specified, basically returns `undefined`)
// which is instant.
a().then(b()).then(res => lg(res));

// The code above is like writing
a()
  .then(res => {
    // Start something asyc but do NOT wait for it to finish...
    return undefined;
  })
  .then(res => lg(res));

// How to fix
// The code below logs `a` after one second and b` after two more
a()
  .then(res => {
    lg(res);
    return b();
  })
  .then(res => lg(res));

// 3. Nesting promises

const id = () => new Promise((resolve, reject) => setTimeout(() => resolve('id'), 1000));
const v = id => new Promise((resolve, reject) => setTimeout(() => resolve(id), 2000));
const z = id => new Promise((resolve, reject) => setTimeout(() => resolve(id), 3000));

// Bad example of nesting
id().then(res => {
  lg(`Log from first 'then': ${res}`);
  v(res).then(res => {
    lg(`Log from second 'then' with parameter passed: ${res}`);
    z(res).then(res => lg(`Log from third 'then' with parameter passed: ${res}`));
  });
});

// How to fix
// Always return promises instead of nesting them
// If you need access to shared data, keep a variable in an outer scope
id()
  .then(res => {
    lg(`Log from first 'then': ${res}`);
    return v(res);
  })
  .then(res => {
    lg(`Log from second 'then' with parameter passed: ${res}`);
    return z(res);
  })
  .then(res => lg(`Log from third 'then' with parameter passed: ${res}`));

// 4. To return or not to return ... that is the question!

// Not returning after `resolve` makes the code go on. Most of the time, this is NOT
// what we want
const c = () =>
  new Promise((resolve, reject) =>
    setTimeout(() => {
      resolve('c');
      lg('Show MUST go on!');
    }, 1000)
  );

// How to fix
// I'd say always use `return` with `resolve` or `reject`
const d = () =>
  new Promise((resolve, reject) =>
    setTimeout(() => {
      return resolve('d');
      lg('Show FAILED!');
    }, 1000)
  );

c()
  .then(res => {
    lg(res);
    return d(res);
  })
  .then(res => lg(res));

// 5. Pokemon! Gotta catch 'em all!

const g = () => new Promise((resolve, reject) => setTimeout(() => resolve('g'), 1000));
const h = () => new Promise((resolve, reject) => setTimeout(() => reject('h'), 1000));
const i = () => new Promise((resolve, reject) => setTimeout(() => reject('i'), 1000));
const j = () => new Promise((resolve, reject) => setTimeout(() => resolve('j'), 1000));

// You can have one `catch` at the end, but you will not know which `then` failed
// You only have the error at your disposal to infer information
g()
  .then(res => {
    lg(res);
    return h();
  })
  .then(res => {
    lg(res);
    return i();
  })
  .then(res => {
    lg(res);
    return j();
  })
  .catch(err => lg(`Error: ${err}`));

// How to fix
// Use a `catch` after each `then` if you want individual error treatment.
// Do NOT use second argument of the `then`, because it will not catch potential errors
// that may happen in the success method passed to `then`

// Bad - do NOT do this
g().then(
  res => {
    const n = null;
    n.split(''); // This errors out
    return h();
  },
  err => {
    // This catches any error that `g` might throw, but not the `null` related error above
    lg(err);
  }
);

// Good - DO this, especially if you care about error treating
g()
  .then(res => {
    lg(res);
    return h();
  })
  .catch(err => lg(`Error 'h': ${err}`))
  .then(res => {
    lg(res); // `res` here will be UNDEFINED because `h` failed!
    return i();
  })
  .catch(err => lg(`Error 'i': ${err}`))
  .then(res => {
    lg(res); // `res` here will be UNDEFINED because `i` failed!
    return j();
  })
  .catch(err => lg(`Error 'j': ${err}`))
  .then(res => {
    lg(res); // `res` here will be 'j' because `j` was resolved!
    return i();
  });

// 6. Summary

// a) Always pass a function that returns a promise or a static value to `then`
// b) Always return functions or static values from `then`
// c) Always return `resolve` and `reject` (99% of the times that's what you want anyway)
// d) Do NO nest promises. Instead, return them in each `then`. If you need access to shared data, keep a variable in outer scope
// e) Use `catch` after each `then` if you need individual error handling, or a single `catch` at the end if you don't
// f) Do NOT use second argument of `then`

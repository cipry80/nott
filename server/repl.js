const repl = require('repl').start({});
const models = require('./models');

repl.context.models = models;
Object.keys(models).forEach(key => {
  repl.context[key] = models[key];
});

repl.context.lg = console.log;

const express = require('express');
const helmet = require('helmet');
const app = express();

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

app.use(helmet());
// Add `CSP` and `referrerPolicy` manually (they are not included in Helmet's initial bundle)
app.use(
  helmet.contentSecurityPolicy({
    directives: {
      defaultSrc: ["'self'"]
    }
  })
);
app.use(helmet.referrerPolicy());

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const morgan = require('morgan');
const morganToolkit = require('morgan-toolkit')(morgan);
app.use(morganToolkit());

const logs = require('./routers/logs/logs');
app.use('/logs', logs);
app.use('*', (req, res) => res.end());

const port = 4000;
const host = 'localhost';
const args = process.env.NODE_ENV === 'production' ? [port] : [port, host];

app.listen.apply(app, args);
console.log(`Listening: http://${host}:${port}\n`);

app.use((err, req, res, next) => {
  if (res.headersSent) {
    return next(err);
  }

  if (err.stack) {
    err = err.stack;
  }

  res.json(err);
});

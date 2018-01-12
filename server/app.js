const express = require('express');
const app = express();

// ----------------------------------------
// ENV
// ----------------------------------------
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

// ----------------------------------------
// Body Parser
// ----------------------------------------
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// ----------------------------------------
// Logging
// ----------------------------------------
const morgan = require('morgan');
const morganToolkit = require('morgan-toolkit')(morgan);
app.use(morganToolkit());

// ----------------------------------------
// Routes
// ----------------------------------------
app.use('*', (req, res) => res.end());

// ----------------------------------------
// Server
// ----------------------------------------
const port = 4000;
const host = 'localhost';
const args = process.env.NODE_ENV === 'production' ?
  [port] :
  [port, host];

app.listen.apply(app, args);
console.log(`Listening: http://${ host }:${ port }\n`);

// ----------------------------------------
// Error Handling
// ----------------------------------------
app.use((err, req, res, next) => {
  if (res.headersSent) {
    return next(err);
  }

  if (err.stack) {
    err = err.stack;
  }

  res.status(500).render('errors/500', { error: err });
});







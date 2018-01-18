const fs = require('fs');
const path = require('path');
const express = require('express');
const router = express.Router();

const filePath = path.join(__dirname, '/logs/csp.txt');

router.post('/report-csp-violation', (req, res) => {
  try {
    const data = req.body
      ? `
    ********************
    CSP Violation: ${JSON.stringify(req.body)}
    ********************
    `
      : `
    ********************
    CSP Violation: No data received!
    ********************
    `;

    const stream = fs.createWriteStream(filePath, { flags: 'a' });
    stream.write(data + '\n\n');
    stream.end();
  } catch (err) {
    console.log(err);
  }

  res.status(204).end();
});

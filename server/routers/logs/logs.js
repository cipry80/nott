const fs = require('fs');
const path = require('path');
const express = require('express');
const router = express.Router();

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
    fs.appendFileSync(path.join(__dirname, '/logs/csp.txt'), data);
  } catch (err) {
    console.log(err);
  }

  res.status(204).end();
});

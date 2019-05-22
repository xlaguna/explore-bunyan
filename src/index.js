const express = require('express');
const bunyan = require('bunyan')

const app = express();
const logger = bunyan.createLogger({name: 'explore-bunyan'});

app.get('/', function (req, res) {
  const { "user-agent": userAgent, "x-forwarded-for": forwardedFor } = req.headers
  logger.info({ userAgent, ip: forwardedFor, message: 'Request to /' })
  res.send('Hello World!');
});

app.listen(3000, function () {
  logger.info('Example app listening on port 3000!');
})
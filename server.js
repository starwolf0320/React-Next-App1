require('dotenv').config();
const express = require('express');
const next = require('next');

const routes = require('./routes');

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';

console.log('MONGO_URI is', process.env.MONGO_URI);

const app = next({ dev });

const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  server.use('/api', routes);

  server.all('*', (req, res) => {
    return handle(req, res);
  });

  server.listen(port, err => {
    if (err) throw err;
    console.log(`👍  on http://localhost:${port}`);
  });
});

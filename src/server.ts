import express, { response } from 'express';

const app = express();

app.get('/users', (req, res) => {
  return res.json('get users');
});

app.listen(3030);
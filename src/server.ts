import express, { response } from 'express';

const app = express();
app.use(express.json());

app.get('/users', (req, res) => {
  return res.json('get users');
});

app.listen(3030);
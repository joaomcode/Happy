import express from 'express';

const app = express();

app.get('/users', (request, response) => {
  return response.json({ message: 'Hi there!'});
});

app.listen(3333);

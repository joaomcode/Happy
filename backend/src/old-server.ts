import express from 'express';

const app = express();

app.use(express.json());

// Rota = conjunto
// Recurso = usuário

// Métodos HTTP = GET, POST, PUT, DELETE

// Parâmetros
// - GET = Buscar informção (listar, item)
// - POST = Criar uma informação
// - PUT = Editando uma informação
// - DELETE = Deletando uma informação

// Query Params: http://localhost:3333/users?name=João
// Route Params: http://localhost:3333/users/1 (Identificar um recurso)
// Body: http://localhost:3333/users (Identificar um recurso)

app.post('/users/:id', (request, response) => {
  console.log(request.query);
  console.log(request.params);
  console.log(request.body);
  
  return response.json({ message: 'Hi there!'});
});

app.listen(3333);

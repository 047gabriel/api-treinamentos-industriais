const express = require('express');
const dotenv = require('dotenv');
const instrutorRoutes = require('./routes/instrutorRoutes');
const salaRoutes = require('./routes/salaRoutes');
const treinamentoRoutes = require('./routes/treinamentoRoutes');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.json({
    message: 'API de treinamentos industriais funcionando.',
    endpoints: {
      instrutores: '/instrutores',
      salas: '/salas',
      treinamentos: '/treinamentos'
    }
  });
});

app.use('/instrutores', instrutorRoutes);
app.use('/salas', salaRoutes);
app.use('/treinamentos', treinamentoRoutes);

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
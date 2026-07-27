import express from 'express';
import cors from 'cors';
import alunoRoutes from './routes/alunoRoutes.js';

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('API de Alunos rodando com sucesso!');
});

app.use('/api/alunos', alunoRoutes);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}: http://localhost:${PORT}`);
});

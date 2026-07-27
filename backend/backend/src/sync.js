import sequelize from './config/database.js';
import './models/aluno.js';

async function syncDatabase() {
  try {
    await sequelize.sync({ force: true });
    console.log('✅ Banco de dados e tabela "Alunos" criados com sucesso!');
  } catch (error) {
    console.error('❌ Erro ao sincronizar o banco de dados:', error);
  } finally {
    await sequelize.close();
  }
}

syncDatabase();

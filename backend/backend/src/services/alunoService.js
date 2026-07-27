import Aluno from '../models/aluno.js';

export const listarAlunos = async () => {
  return await Aluno.findAll();
};

export const buscarAlunoPorId = async (id) => {
  return await Aluno.findByPk(id);
};

export const criarAluno = async (dados) => {
  return await Aluno.create(dados);
};

export const atualizarAluno = async (id, dados) => {
  const aluno = await Aluno.findByPk(id);
  if (!aluno) return null;
  return await aluno.update(dados);
};

export const deletarAluno = async (id) => {
  const aluno = await Aluno.findByPk(id);
  if (!aluno) return null;
  await aluno.destroy();
  return true;
};

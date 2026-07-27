import api from './api';

export const retornarAlunos = async () => {
  return await api.get('/alunos');
};

export const retornarAlunoPorId = async (id) => {
  return await api.get(`/alunos/${id}`);
};

export const cadastrarAluno = async (aluno) => {
  return await api.post('/alunos', aluno);
};

export const atualizarAluno = async (id, aluno) => {
  return await api.put(`/alunos/${id}`, aluno);
};

export const deletarAluno = async (id) => {
  return await api.delete(`/alunos/${id}`);
};

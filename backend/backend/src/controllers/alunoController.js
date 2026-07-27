import * as alunoService from '../services/alunoService.js';

export const listar = async (req, res) => {
  try {
    const alunos = await alunoService.listarAlunos();
    res.json(alunos);
  } catch (error) {
    res.status(500).json({ erro: error.message });
  }
};

export const buscarPorId = async (req, res) => {
  try {
    const aluno = await alunoService.buscarAlunoPorId(req.params.id);
    if (!aluno) return res.status(404).json({ erro: 'Aluno não encontrado' });
    res.json(aluno);
  } catch (error) {
    res.status(500).json({ erro: error.message });
  }
};

export const criar = async (req, res) => {
  try {
    const novoAluno = await alunoService.criarAluno(req.body);
    res.status(201).json(novoAluno);
  } catch (error) {
    res.status(400).json({ erro: error.message });
  }
};

export const atualizar = async (req, res) => {
  try {
    const alunoAtualizado = await alunoService.atualizarAluno(
      req.params.id,
      req.body
    );
    if (!alunoAtualizado)
      return res.status(404).json({ erro: 'Aluno não encontrado' });
    res.json(alunoAtualizado);
  } catch (error) {
    res.status(400).json({ erro: error.message });
  }
};

export const remover = async (req, res) => {
  try {
    const removido = await alunoService.deletarAluno(req.params.id);
    if (!removido)
      return res.status(404).json({ erro: 'Aluno não encontrado' });
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ erro: error.message });
  }
};

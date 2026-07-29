import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Formulario from '../../componentes/formulario';
import { cadastrarAluno, atualizarAluno } from '../../api/alunorequest';
import './AlunoCadastro.css';

export default function AlunoCadastro() {
  const location = useLocation();
  const navigate = useNavigate();
  const alunoParaEditar = location.state?.alunoParaEditar;

  const handleSubmit = async (dadosAluno) => {
    try {
      if (alunoParaEditar?.id) {
        await atualizarAluno(alunoParaEditar.id, dadosAluno);
        alert('Aluno atualizado com sucesso!');
      } else {
        await cadastrarAluno(dadosAluno);
        alert('Aluno cadastrado com sucesso!');
      }
      navigate('/alunos');
    } catch (erro) {
      console.error('Erro ao salvar aluno:', erro);
      alert('Ocorreu um erro ao salvar o aluno.');
    }
  };

  return (
    <div className="cadastro-container">
      <h2 className="cadastro-titulo">
        {alunoParaEditar ? '✏️ Editar Aluno' : '➕ Novo Cadastro'}
      </h2>
      <Formulario aoSubmeter={handleSubmit} alunoInicial={alunoParaEditar} />
    </div>
  );
}
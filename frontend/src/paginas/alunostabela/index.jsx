import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Tabela from '../../componentes/Tabela';
import { retornarAlunos, deletarAluno } from '../../api/alunorequest';
import './AlunosTabela.css';

export default function AlunosTabela() {
  const [alunos, setAlunos] = useState([]);
  const [carregando, setCarregando] = useState(true);
  const navigate = useNavigate();

  const carregarAlunos = async () => {
    try {
      setCarregando(true);
      const resposta = await retornarAlunos();
      setAlunos(resposta.data);
    } catch (erro) {
      console.error('Erro ao buscar alunos:', erro);
    } finally {
      setCarregando(false);
    }
  };

  useEffect(() => {
    carregarAlunos();
  }, []);

  const handleDeletar = async (id) => {
    if (window.confirm('Tem certeza que deseja excluir este aluno?')) {
      try {
        await deletarAluno(id);
        carregarAlunos(); 
      } catch (erro) {
        alert('Erro ao excluir aluno.');
      }
    }
  };

  const handleEditar = (aluno) => {
    navigate(`/cadastro`, { state: { alunoParaEditar: aluno } });
  };

  return (
    <div className="alunos-container">
      <h2 className="alunos-titulo">📋 Lista de Alunos</h2>
      {carregando ? (
        <p className="alunos-loading">Carregando alunos...</p>
      ) : (
        <Tabela
          alunos={alunos}
          aoDeletar={handleDeletar}
          aoEditar={handleEditar}
        />
      )}
    </div>
  );
}
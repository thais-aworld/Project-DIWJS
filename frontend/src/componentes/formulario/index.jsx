import React, { useState, useEffect } from 'react';
import './Formulario.css';

export default function Formulario({ aoSubmeter, alunoInicial }) {
  const [aluno, setAluno] = useState({
    nome: '',
    cpf: '',
    data_nascimento: '',
    endereco: '',
  });

  useEffect(() => {
    if (alunoInicial) {
      setAluno(alunoInicial);
    }
  }, [alunoInicial]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAluno((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    aoSubmeter(aluno);
  };

  return (
    <form className="formulario-aluno" onSubmit={handleSubmit}>
      <div className="campo">
        <label>Nome Completo:</label>
        <input
          type="text"
          name="nome"
          value={aluno.nome}
          onChange={handleChange}
          required
        />
      </div>

      <div className="campo">
        <label>CPF:</label>
        <input
          type="text"
          name="cpf"
          value={aluno.cpf}
          onChange={handleChange}
          maxLength="11"
          required
        />
      </div>

      <div className="campo">
        <label>Data de Nascimento:</label>
        <input
          type="date"
          name="data_nascimento"
          value={aluno.data_nascimento}
          onChange={handleChange}
        />
      </div>

      <div className="campo">
        <label>Endereço:</label>
        <input
          type="text"
          name="endereco"
          value={aluno.endereco}
          onChange={handleChange}
        />
      </div>

      <button type="submit" className="btn-salvar">
        Salvar Aluno
      </button>
    </form>
  );
}

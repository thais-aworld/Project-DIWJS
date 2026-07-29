import React, { useState } from 'react';
import './Formulario.css';

export default function Formulario({ aoSubmeter, alunoInicial }) {
  const [nome, setNome] = useState(alunoInicial?.nome || '');
  const [cpf, setCpf] = useState(alunoInicial?.cpf || '');
  const [dataNascimento, setDataNascimento] = useState(alunoInicial?.dataNascimento || '');
  const [endereco, setEndereco] = useState(alunoInicial?.endereco || '');

  const handleSubmit = (e) => {
    e.preventDefault();
    aoSubmeter({ nome, cpf, dataNascimento, endereco });
  };

  return (
    <form onSubmit={handleSubmit} className="formulario-container">
      <div className="form-group">
        <label>Nome Completo:</label>
        <input 
          type="text" 
          value={nome} 
          onChange={(e) => setNome(e.target.value)} 
          placeholder="Digite o nome completo"
          required 
        />
      </div>

      <div className="form-group">
        <label>CPF:</label>
        <input 
          type="text" 
          value={cpf} 
          onChange={(e) => setCpf(e.target.value)} 
          placeholder="000.000.000-00"
          required 
        />
      </div>

      <div className="form-group">
        <label>Data de Nascimento:</label>
        <input 
          type="date" 
          value={dataNascimento} 
          onChange={(e) => setDataNascimento(e.target.value)} 
          required 
        />
      </div>

      <div className="form-group">
        <label>Endereço:</label>
        <input 
          type="text" 
          value={endereco} 
          onChange={(e) => setEndereco(e.target.value)} 
          placeholder="Rua, número, bairro"
          required 
        />
      </div>

      <button type="submit" className="btn-salvar">Salvar Aluno</button>
    </form>
  );
}
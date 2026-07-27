import React from 'react';
import { Link } from 'react-router-dom';
import './Cabecalho.css';

export default function Cabecalho() {
  return (
    <header className="cabecalho">
      <div className="cabecalho-logo">
        <h2>🎓 Sistema de Alunos</h2>
      </div>
      <nav className="cabecalho-nav">
        <Link to="/">Início</Link>
        <Link to="/alunos">Lista de Alunos</Link>
        <Link to="/cadastro">Novo Aluno</Link>
      </nav>
    </header>
  );
}

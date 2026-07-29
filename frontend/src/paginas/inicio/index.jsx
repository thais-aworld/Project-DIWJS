import React from 'react';
import { Link } from 'react-router-dom';
import './Inicio.css';

export default function Inicio() {
  return (
    <div className="inicio-container">
      <h1 className="inicio-titulo">Bem-vindo ao Sistema de Gestão de Alunos</h1>
      <p className="inicio-subtitulo">
        Gerencie cadastros, atualize informações e consulte a lista completa de
        estudantes de forma simples.
      </p>
      <div className="inicio-botoes">
        <Link to="/alunos" className="btn-primary">
          Ver Alunos
        </Link>
        <Link to="/cadastro" className="btn-success">
          Cadastrar Novo Aluno
        </Link>
      </div>
    </div>
  );
}
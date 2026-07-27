import React from 'react';
import { Link } from 'react-router-dom';

export default function Inicio() {
  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h1>Bem-vindo ao Sistema de Gestão de Alunos 🎓</h1>
      <p style={{ marginTop: '1rem', color: '#64748b' }}>
        Gerencie cadastros, atualize informações e consulte a lista completa de
        estudantes de forma simples.
      </p>
      <div
        style={{
          marginTop: '2rem',
          display: 'flex',
          gap: '1rem',
          justifyContent: 'center',
        }}
      >
        <Link
          to="/alunos"
          style={{
            padding: '0.75rem 1.5rem',
            backgroundColor: '#2563eb',
            color: 'white',
            borderRadius: '6px',
            textDecoration: 'none',
          }}
        >
          Ver Alunos
        </Link>
        <Link
          to="/cadastro"
          style={{
            padding: '0.75rem 1.5rem',
            backgroundColor: '#16a34a',
            color: 'white',
            borderRadius: '6px',
            textDecoration: 'none',
          }}
        >
          Cadastrar Novo Aluno
        </Link>
      </div>
    </div>
  );
}

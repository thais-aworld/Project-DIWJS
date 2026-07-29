import React from 'react';
import './Tabela.css';

export default function Tabela({ alunos, aoDeletar, aoEditar }) {
  return (
    <div className="tabela-container">
      <table className="tabela-alunos">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>CPF</th>
            <th>Data Nasc.</th>
            <th>Endereço</th>
          </tr>
        </thead>
        <tbody>
          {alunos.map((aluno) => (
            <tr key={aluno.id}>
              <td>{aluno.id}</td>
              <td>{aluno.nome}</td>
              <td>{aluno.cpf}</td>
              <td>{aluno.data_nascimento}</td>
              <td>{aluno.endereco}</td>
              <td className="acoes">
                <button className="btn-editar" onClick={() => aoEditar(aluno)}>
                  Editar
                </button>
                <button
                  className="btn-deletar"
                  onClick={() => aoDeletar(aluno.id)}
                >
                  Excluir
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

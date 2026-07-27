import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cabecalho from './componentes/Cabecalho';
import Inicio from './paginas/Inicio';
import AlunosTabela from './paginas/AlunosTabela';
import AlunoCadastro from './paginas/AlunoCadastro';

export default function App() {
  return (
    <BrowserRouter>
      <Cabecalho />
      <main>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/alunos" element={<AlunosTabela />} />
          <Route path="/cadastro" element={<AlunoCadastro />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

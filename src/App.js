import React from 'react';
import Home from './pages/home/Home';
import Criartarefas from './pages/criartarefas/Criartarefa';
import Tarefas from './pages/tarefas/Tarefas';
import Editar from './pages/Editartarefas/EditarTarefa';
import Contato from './pages/contato/Contato';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />}>
        </Route>
        <Route path='/criartarefas' element={<Criartarefas />}>
        </Route>
        <Route path='/tarefas' element={<Tarefas />}>
        </Route>
        <Route path='/tarefas/:id' element={<Editar />}>
        </Route>
        <Route path='/contato' element={<Contato />}>
        </Route>
      </Routes>
    </Router>

  );
}

export default App;

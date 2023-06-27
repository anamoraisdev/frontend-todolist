
import { useState } from 'react';
import './App.css';
import Form from './componentes/form';

function App() {
  const [tarefas, setTarefas] = useState([])
  
  return (
    <div className="App">
      <Form setTarefas={setTarefas} tarefas={tarefas}/>
    </div>
  );
}

export default App;
                                                                                                                      
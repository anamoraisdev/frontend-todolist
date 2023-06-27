
import { useState } from 'react';
import './App.css';
import Form from './componentes/form';
import CardTarefa from './componentes/cardTarefa';

function App() {
  const [tarefas, setTarefas] = useState([])

  return (
    <div className="App">
      <Form setTarefas={setTarefas} tarefas={tarefas}/>
      {tarefas.map((tarefa) =>
        <CardTarefa tarefa={tarefa}/> 
      )}
    </div>
  );
}

export default App;
                                                                                                                      
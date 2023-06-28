
import { useState } from 'react';
import './App.css';
import Form from './componentes/form';
import CardTarefa from './componentes/cardTarefa';

function App() {
  const [tarefas, setTarefas] = useState([])

  return (
    <div className="App">
      <Form setTarefas={setTarefas} tarefas={tarefas} acaoForm={"add-tarefa"}/>
      {tarefas.map((tarefa) =>
        <div>
          <CardTarefa tarefa={tarefa}/> 
        </div>
      )}
    </div>
  );
}

export default App;
                                                                                                                      
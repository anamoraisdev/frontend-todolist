
import { useEffect, useState } from 'react';
import Form from '../componentes/form';
import CardTarefa from '../componentes/cardTarefa';
import { Box, Modal } from "@mui/material"


const style = {
    position: 'absolute',
    display: 'flex',
    justify: "between",
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 200,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
    borderRadius: 8
};

const Home = () => {
  const [tarefas, setTarefas] = useState([])
  const [open, setOpen] = useState(false)
  const [tarefaAEditar, setTarefaAEditar] = useState(null)
  const [acaoForm, setAcaoForm] = useState("add-tarefa")

  const excluirTarefa = (tarefaAExcluir) => {
    let tarefasAtualizadas = tarefas.filter((tarefa) => tarefa.id != tarefaAExcluir.id)
    setTarefas(tarefasAtualizadas)
  }
  
  const openModal = (tarefa) => {
    setAcaoForm("edit-tarefa")
    setOpen(true)
    console.log("tarefa recebida:",  tarefa)
    setTarefaAEditar(tarefa)
  }

  const closeModal = () => {
    setAcaoForm("add-tarefa")
    setOpen(false)
    setTarefaAEditar(null)
  }

  useEffect(() => {
    console.log(tarefas)
  },[tarefas])
  return (
    <div className="App">
      <Form setTarefas={setTarefas} tarefas={tarefas} acaoForm={acaoForm} />
      {tarefaAEditar != undefined && tarefaAEditar != null &&
        <Modal
          open={open}
          onClose={closeModal}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
              <Form setTarefas={setTarefas} tarefas={tarefas} tarefaAEditar={tarefaAEditar} acaoForm={acaoForm}/>
          </Box>
        </Modal>
      }

      {tarefas.map((tarefa) =>
        <div>
          <CardTarefa tarefa={tarefa} openModal={openModal} excluirTarefa={excluirTarefa}/> 
        </div>
      )}
    </div>
  );
}

export default Home
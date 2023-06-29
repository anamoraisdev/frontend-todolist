
import { useEffect, useState } from 'react';
import Form from '../componentes/form';
import CardTarefa from '../componentes/cardTarefa';
import { Box, Modal } from "@mui/material"
import FormCategorias from '../componentes/formCategorias';
import FormLembrete from '../componentes/formlembrete';


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
  const [categorias, setCategorias] = useState([])
  const [lembretes, setLembretes] = useState([])
  const [tarefaAEditar, setTarefaAEditar] = useState(null)
  const [categoriaAEditar, setCategoriaAEditar] = useState(null)

  const [open, setOpen] = useState(false)
  const [view, setView] = useState(false)
  const [acaoForm, setAcaoForm] = useState("add-tarefa")
  const [ativo, setAtivo] = useState(false)

  
  const openModal = (tarefa) => {
    setAcaoForm("edit-tarefa")
    setOpen(true)
    setTarefaAEditar(tarefa)
  }

  const closeModal = () => {
    setAcaoForm("add-tarefa")
    setOpen(false)
    setTarefaAEditar(null)
  }
  
  const closeCategorias = () => {
    setOpen(false)
  }

  const excluirTarefa = (tarefaAExcluir) => {
    let tarefasAtualizadas = tarefas.filter((tarefa) => tarefa.id != tarefaAExcluir.id)
    setTarefas(tarefasAtualizadas)
  }
  
  const mudarVisualizacao = () => {
    if(view){
      setView(false)
    }else(
      setView(true)
    )
  }

  const filtrarPorCategoria= (categoria) => {
    return tarefas.filter((tarefa) => tarefa.categoria[0].id === categoria.id)
  }

  const excluirCategoria = (categoria) => {
    let categoriasAtualizadas = categorias.filter((item) => item.id !== categoria.id)
    setCategorias(categoriasAtualizadas)
  }

  const pegarCategoria = (categoria) => {
    setCategoriaAEditar(categoria)
  }

  const ativarLembrete = (tarefa) => {
    if(!ativo){
      setOpen(true)
      setAtivo({bolean: true, tarefa: tarefa})
    }else {
      let lembretesAtualizados = lembretes.filter((lembrete) => lembrete.tarefa.id !== tarefa.id)
      setLembretes(lembretesAtualizados)
      setAtivo(false)
    }
  }

  const salvarInfoDoLembrete = (hora, data) => {
    let lembrete = new Date(data)
    let lembreteFormatado = (lembrete.getFullYear() + "-" + ((lembrete.getMonth() + 1)) + "-" + (lembrete.getDate() + 1)) 
    setLembretes([...lembretes, {data: lembreteFormatado, tarefa: ativo.tarefa, hora: hora}])
    
  }

  const enviarLembrete = () => {
    let data = new Date
    let dataFormatada = (data.getFullYear() + "-" + ((data.getMonth() + 1)) + "-" + (data.getDate()));                                                                                                             

    lembretes.map((lembrete) => {
      let horaAtual = Date.now()
      if(lembrete.data == dataFormatada && lembrete.hora === horaAtual){
        alert("kkk")
      }
    })
  }

  useEffect(() => {
    enviarLembrete()
  },[lembretes])


  return (
    <div className="App">
      <header>
        <FormCategorias categorias={categorias} setCategorias={setCategorias} setOpen={setOpen}/>
        <Form setTarefas={setTarefas} tarefas={tarefas} acaoForm={acaoForm} categorias={categorias}/>
      </header>

      {tarefaAEditar != undefined && tarefaAEditar != null &&
        <Modal
          open={open}
          onClose={closeModal}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
              <button onClick={() => setOpen(false)}>X</button>
              <Form setTarefas={setTarefas} tarefas={tarefas} tarefaAEditar={tarefaAEditar} acaoForm={acaoForm} closeModal={closeModal}/>
          </Box>
        </Modal>
      }

      <Modal
            open={open}
            onClose={closeCategorias}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
                <button onClick={() => setOpen(false)}>X</button>
                {categoriaAEditar == null ? categorias?.map((categoria) => 
                  <div key={categoria.id}>
                    <p>{categoria.nome}</p>
                    <button onClick={() => excluirCategoria(categoria)}>excluir</button>
                    <button onClick={() => pegarCategoria(categoria)}>editar</button>
                  </div>)
                  :
                  <FormCategorias categoriaAEditar={categoriaAEditar} setCategoriaAEditar={setCategoriaAEditar} categorias={categorias}/>
                }
                
            </Box>
      </Modal>

      <Modal
            open={open}
            onClose={closeCategorias}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <FormLembrete salvarInfoDoLembrete={salvarInfoDoLembrete}/>
            </Box>
      </Modal>


      <main>
        <button onClick={() => mudarVisualizacao()}>mudar visualizacao</button>
        {view && categorias.map((categoria) => {
          const tarefasDaCategoria = filtrarPorCategoria(categoria)
          return(<div>
            <p>
             {categoria.nome}
            </p>
          
            {tarefasDaCategoria.map((tarefa) => 
              <CardTarefa key={tarefa.id} tarefa={tarefa} ativarLembrete={ativarLembrete}/>
            )}
          </div>)
        })}

        {!view && tarefas.map((tarefa) =>
          <div key={tarefa.id}>
            <CardTarefa tarefa={tarefa} openModal={openModal} excluirTarefa={excluirTarefa} ativarLembrete={ativarLembrete}/> 
          </div>
        )}
      </main>
    </div>
  );
}

export default Home
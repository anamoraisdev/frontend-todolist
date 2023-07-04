
import { useState } from 'react';
import Form from '../componentes/form';
import CardTarefa from '../componentes/cardTarefa';
import { Box, Modal } from "@mui/material"
import FormCategorias from '../componentes/formCategorias';


const style = {
  position: 'absolute',
  display: 'flex',
  justify: "center",
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  bgcolor: "#c7d2fe",
  boxShadow: 24,
  p: 4,
  borderRadius: 8
};

const Home = () => {
  const [tarefas, setTarefas] = useState(JSON.parse(localStorage.getItem("tarefas")) || [])
  const [categorias, setCategorias] = useState(JSON.parse(localStorage.getItem("categorias"))|| [] )
  const [tarefaAEditar, setTarefaAEditar] = useState(null)
  const [categoriaAEditar, setCategoriaAEditar] = useState(null)

  const [open, setOpen] = useState(false)
  const [openCategoria, setOpenCategoria] = useState(false)
  const [view, setView] = useState(false)
  const [acaoForm, setAcaoForm] = useState("add-tarefa")
  const [controlForms, setControlForms] = useState("")



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
    setOpenCategoria(false)
  }

  const openCategorias = () => {
    setOpenCategoria(true)
  }

  const excluirTarefa = (tarefaAExcluir) => {
    let tarefasAtualizadas = tarefas.filter((tarefa) => tarefa.id !== tarefaAExcluir.id)
    setTarefas(tarefasAtualizadas)
    localStorage.setItem("tarefas", JSON.stringify([tarefasAtualizadas]))
  }

  const mudarVisualizacao = () => {
    if (view) {
      setView(false)
    } else (
      setView(true)
    )
  }

  const filtrarPorCategoria = (categoria) => {
    console.log(categoria)
    console.log("tarefas:",tarefas)
    return tarefas.filter((tarefa) => tarefa.categoria === categoria.nome)
  }

  const excluirCategoria = (categoria) => {
    let categoriasAtualizadas = categorias.filter((item) => item.id !== categoria.id)
    setCategorias(categoriasAtualizadas)
    localStorage.setItem("categorias", JSON.stringify([categoriasAtualizadas]))
  }

  const pegarCategoria = (categoria) => {
    setCategoriaAEditar(categoria)
  }


  return (
    <div className="App">
      <header>
        <div className='flex justify-center gap-2 m-2'>
          <button onClick={() => setControlForms("categoria")} className="py-1 px-3 bg-indigo-400 rounded-md text-white hover:bg-indigo-500">adicionar categoria</button>
          <button onClick={() => setControlForms("tarefa")} className="py-1 px-3 bg-indigo-400 rounded-md text-white hover:bg-indigo-500">adicionar tarefa</button>
        </div>
        {controlForms === "categoria" && 
          <div className='bg-indigo-200 m-4 p-5 shadow-lg rounded-lg'>
            <FormCategorias categorias={categorias} setCategorias={setCategorias} openCategorias={openCategorias} />
          </div>
        }
        {controlForms === "tarefa" && 
          <div className='bg-indigo-200 m-4 p-5 shadow-lg rounded-lg'>
            <Form setTarefas={setTarefas} tarefas={tarefas} acaoForm={acaoForm} categorias={categorias} />
          </div>
        }
      </header>

      {tarefaAEditar !== undefined && tarefaAEditar !== null &&
        <Modal
          open={open}
          onClose={closeModal}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Form setTarefas={setTarefas} tarefas={tarefas} tarefaAEditar={tarefaAEditar} acaoForm={acaoForm} categorias={categorias} closeModal={closeModal} />
          </Box>
        </Modal>
      }

      {openCategoria && <Modal
        open={openCategoria}
        onClose={closeCategorias}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className='flex flex-col rounded-lg w-[100%] gap-3'>
            <div className='flex justify-between'>
              <p>suas categorias</p>
              {!categoriaAEditar && 
                <button onClick={closeCategorias}>X</button>
              }
            </div>
            {categoriaAEditar == null ? categorias?.map((categoria) =>
              <div key={categoria.id} className='flex justify-between bg-indigo-300 py-3 px-4 rounded-lg items-center'>
                <p>{categoria.nome}</p>
                <div className='flex gap-3'>
                  <button onClick={() => excluirCategoria(categoria)} className="py-1 px-3 bg-indigo-400 rounded-md text-white hover:bg-indigo-500">excluir</button>
                  <button onClick={() => pegarCategoria(categoria)} className="py-1 px-3 bg-indigo-400 rounded-md text-white hover:bg-indigo-500">editar</button>
                </div>
              </div>)
              :
              <FormCategorias categoriaAEditar={categoriaAEditar} setCategoriaAEditar={setCategoriaAEditar} categorias={categorias} openCategorias={openCategorias} />
            }
          </div>
        </Box>
      </Modal>
      }




      <main className='flex flex-col justify-center bg-indigo-200 shadow m-3 rounded-lg'>
        <button onClick={() => mudarVisualizacao()} className="m-5 py-1 px-3 bg-indigo-400 rounded-md text-white hover:bg-indigo-500">mudar visualizacao</button>
        <div className='flex overflow-x-scroll text-center text-slate-700 w-[100%]'>
          {view && categorias.map((categoria) => {
            const tarefasDaCategoria = filtrarPorCategoria(categoria)
            return (
              <div className='flex flex-col min-w-[100%]'>
                  <p>
                    {categoria?.nome}
                  </p>
                {tarefasDaCategoria.map((tarefa) =>
                  <CardTarefa key={tarefa.id} tarefa={tarefa} openModal={openModal} excluirTarefa={excluirTarefa} tarefas={tarefas} setTarefas={setTarefas}/>
                )}
              </div>)
          })}
        </div>

        {!view && tarefas.map((tarefa) =>
          <div key={tarefa.id}>
            <CardTarefa tarefa={tarefa} openModal={openModal} excluirTarefa={excluirTarefa} tarefas={tarefas}  setTarefas={setTarefas}/>
          </div>
        )}
      </main>
    </div>
  );
}

export default Home
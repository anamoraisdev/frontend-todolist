
import { useState } from 'react';
import Form from '../componentes/form';
import CardTarefa from '../componentes/cardTarefa';
import { Box, Modal } from "@mui/material"
import FormCategorias from '../componentes/formCategorias';
import Historico from './historico';
import Navbar from '../componentes/navbar';
import Aviso from '../componentes/aviso';



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


const Home = ({ darkMode, setDarkMode }) => {
  const [tarefas, setTarefas] = useState(JSON.parse(localStorage.getItem("tarefas")) || [])
  const [categorias, setCategorias] = useState(JSON.parse(localStorage.getItem("categorias")) || [])
  const [tarefaAEditar, setTarefaAEditar] = useState(null)
  const [categoriaAEditar, setCategoriaAEditar] = useState(null)
  const [tarefasConcluidas, setTarefasConcluidas] = useState(JSON.parse(localStorage.getItem("tarefasConcluidas")) || [])

  const [open, setOpen] = useState(false)
  const [openCategoria, setOpenCategoria] = useState(false)
  const [openHistorico, setOpenHistorico] = useState(false)

  const [acaoForm, setAcaoForm] = useState("add-tarefa")
  const [controlForms, setControlForms] = useState("categoria")
  const [view, setView] = useState(true)


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
    if (tarefasAtualizadas.length === 0) {
      setTarefas([])
      localStorage.setItem("tarefas", JSON.stringify([]))
    } else {
      setTarefas(tarefasAtualizadas)
      localStorage.setItem("tarefas", JSON.stringify([tarefasAtualizadas]))
    }

  }

  const filtrarPorCategoria = (categoria) => {
    console.log(categoria)
    console.log("tarefas:", tarefas)
    return tarefas.filter((tarefa) => tarefa.categoria === categoria.nome)
  }

  const excluirCategoria = (categoria) => {
    let categoriasAtualizadas = categorias.filter((item) => item.id !== categoria.id)
    if(categoriasAtualizadas.length === 0){
      setCategorias([])
      localStorage.setItem("categorias", JSON.stringify([]))
    }else{
      setCategorias(categoriasAtualizadas)
      localStorage.setItem("categorias", JSON.stringify([categoriasAtualizadas]))

    }
  }

  const pegarCategoria = (categoria) => {
    setCategoriaAEditar(categoria)
  }

  const reativarTarefa = (tarefa) => {
    setTarefas([...tarefas, tarefa])
    let tarefasConcluidasAtualizadas = tarefasConcluidas.filter((item) => item.id !== tarefa.id)
    setTarefasConcluidas(tarefasConcluidasAtualizadas)
    localStorage.setItem("tarefas", JSON.stringify(tarefas))
    localStorage.setItem("tarefasConcluidas", JSON.stringify(tarefasConcluidasAtualizadas))
  }

  const mudarMode = () => {
    if (darkMode) {
      setDarkMode(false)
    } else {
      setDarkMode(true)
    }
  }

  return (
    <div className={``}>
      <Navbar setOpenHistorico={setOpenHistorico} openHistorico={openHistorico} mudarMode={mudarMode} darkMode={darkMode} />
      {!openHistorico ?
        <div className={`fixed top-14 left-0 right-0`}>
          <header className='flex flex-col items-center'>
            <div className='flex justify-center gap-2 m-7'>
              <button onClick={() => setControlForms("categoria")} className="py-1 px-3 bg-indigo-500 dark:bg-indigo-600 rounded-md text-white hover:bg-indigo-500">adicionar categoria</button>
              <button onClick={() => setControlForms("tarefa")} className="py-1 px-3 bg-indigo-500 dark:bg-indigo-600 rounded-md text-white hover:bg-indigo-500">adicionar tarefa</button>
            </div>
            {controlForms === "categoria" &&
              <div className={`bg-indigo-200 dark:bg-indigo-950 m-4 p-5 shadow-lg rounded-lg lg:max-w-[50%] lg:min-w-[50%] min-w-[90%] sm:min-w-[70%] xl:min-w-[40%] xl:max-w-[40%]`}>
                <FormCategorias categorias={categorias} setCategorias={setCategorias} openCategorias={openCategorias} />
              </div>
            }
            {controlForms === "tarefa" &&
              <div className={` bg-indigo-200 dark:bg-indigo-950 m-4 p-5 shadow-lg rounded-lg lg:max-w-[50%] lg:min-w-[50%] min-w-[90%] sm:min-w-[70%] xl:min-w-[40%] xl:max-w-[40%]`}>
                <Form setTarefas={setTarefas} tarefas={tarefas} acaoForm={acaoForm} categorias={categorias} />
              </div>
            }
          </header>

          <div className='flex flex-col items-center'>
            <main className={` dark:bg-indigo-950 flex flex-col items-center bg-indigo-200 shadow-lg m-3 rounded-lg lg:max-w-[50%] lg:min-w-[50%] min-w-[90%] sm:min-w-[70%] xl:min-w-[40%] xl:max-w-[40%]`}>
              <div className='flex mt-4'>
                <button onClick={() => setView(true)} className="m-1 px-12 sm:px-24 md:px-24 lg:px-24 xl:px-24 bg-indigo-500 rounded-md text-white hover:bg-indigo-400 dark:bg-indigo-600 dark:hover:bg-indigo-500">todas</button>
                <button onClick={() => setView(false)} className="m-1 px-12 sm:px-24 md:px-24 lg:px-24 xl:px-24 bg-indigo-500 rounded-md text-white hover:bg-indigo-400 dark:bg-indigo-600 dark:hover:bg-indigo-500">filtrar</button>
              </div>
              <div className={`flex text-center text-slate-700 dark:text-white w-[100%] ${!view && tarefas.length > 0 ? "overflow-x-scroll" : ""}`}>
                {!view && tarefas.length > 0 &&
                  categorias.map((categoria) => {
                    const tarefasDaCategoria = filtrarPorCategoria(categoria)
                    if (tarefasDaCategoria.length > 0) {
                      return (
                        <div className='flex flex-col min-w-[100%] ' key={categoria.id}>
                          <p className='m-7 font-medium'>
                            {categoria?.nome}
                          </p>
                          {tarefasDaCategoria.map((tarefa) =>
                            <CardTarefa key={tarefa.id} darkMode={darkMode} tarefa={tarefa} openModal={openModal} excluirTarefa={excluirTarefa} tarefas={tarefas} setTarefas={setTarefas} tarefasConcluidas={tarefasConcluidas} setTarefasConcluidas={setTarefasConcluidas} />
                          )}
                        </div>
                      )
                    } else {
                      return (
                        ""
                      )
                    }

                  })}
              </div>

              {view &&
                tarefas.map((tarefa) =>
                  <div key={tarefa.id} className='min-w-[100%]'>
                    <CardTarefa darkMode={darkMode} tarefa={tarefa} openModal={openModal} excluirTarefa={excluirTarefa} tarefas={tarefas} setTarefas={setTarefas} tarefasConcluidas={tarefasConcluidas} setTarefasConcluidas={setTarefasConcluidas} />
                  </div>
                )
              }

              {tarefas.length === 0 && <Aviso texto={"voce nao tem tarefas"}/>}

            </main>
          </div>
        </div>
        :
        <Historico reativarTarefa={reativarTarefa} tarefasConcluidas={tarefasConcluidas} tarefas={tarefas} />
      }


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
          <div className='flex flex-col rounded-lg w-[100%] gap-1'>
         
            {!categoriaAEditar &&
                <button className="flex justify-end" onClick={closeCategorias}>X</button>
            }
           

            {categorias.length > 0 ?
              <p>suas categorias</p>
              : <Aviso texto={"voce nao tem categorias"}/>
            }

            {categoriaAEditar == null ? categorias?.map((categoria) =>
              <div key={categoria.id} className='flex justify-between bg-indigo-200 shadow-lg py-3 px-4 rounded-lg items-center'>
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
    </div>
  );
}

export default Home
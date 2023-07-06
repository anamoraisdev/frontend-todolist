import { useState } from "react"
import {v4 as uuidv4} from "uuid"


const Form = ({setTarefas, tarefas, acaoForm, tarefaAEditar, closeModal, categorias, darkMode}) => {
    
    const tarefaInicial = {
        titulo: "",
        descricao: "",
        categoria:{},
        prazo: "",
    }

    const [titulo, setTitulo] = useState(tarefaAEditar ? tarefaAEditar.titulo : tarefaInicial.titulo)
    const [descricao, setDescricao] = useState(tarefaAEditar ? tarefaAEditar.descricao : tarefaInicial.descricao)
    const [categoria, setCategoria] = useState(tarefaAEditar ? tarefaAEditar.categoria : tarefaInicial.categoria)
    const [prazo, setPrazo] = useState(tarefaAEditar ? tarefaAEditar.prazo : tarefaInicial.prazo)
    
    const aoSalvarTarefa = () => {
        setTarefas([...tarefas, {titulo: titulo,descricao: descricao, categoria: categoria, prazo: prazo, id: uuidv4(), concluido: false}])
        localStorage.setItem("tarefas", JSON.stringify([...tarefas, {titulo: titulo,descricao: descricao, categoria: categoria, prazo: prazo, id: uuidv4(), concluido: false}]))
        setTitulo("")
        setCategoria("")
        setDescricao("")
        setPrazo("")
    }

    const aoEditarTarefa = (tarefaAEditar) => {
        tarefas.map((tarefa) => {
            if(tarefa.id === tarefaAEditar.id){
                tarefa.titulo = titulo
                tarefa.descricao = descricao
                tarefa.categoria = categoria
                tarefa.prazo = prazo
            }
        })
        localStorage.setItem("tarefas", JSON.stringify([tarefas]))
        return tarefas
    }

    const aoSubmeterForm = (event) => {
        event.preventDefault()
        if(acaoForm === "add-tarefa"){
            aoSalvarTarefa()
        }else if(acaoForm === "edit-tarefa"){
            aoEditarTarefa(tarefaAEditar)
            closeModal()
        }
    }

    return (
        <form onSubmit={(event) => aoSubmeterForm(event)} className={`flex flex-col items-start rounded-md gap-5 text-slate-700`}>
            <h1 className="dark:text-indigo-200">Criar nova tarefa</h1>
            <div className="flex flex-col gap-3 items-start">
                <label className="flex flex-col gap-2 dark:text-indigo-200">
                    Titulo
                </label>
                    <input className="rounded-lg p-2 dark:bg-indigo-300 dark:text-indigo-950 dark:placeholder-slate-500 focus:outline-1 focus:outline-indigo-400"
                        placeholder="digite um titulo para sua tarefa" 
                        required
                        value={titulo} 
                        onChange={(event) => setTitulo(event.target.value)}>
                    </input>

                <label className="flex flex-col gap-2 dark:text-indigo-200">
                    Descricao
                </label>
                    <textarea className="rounded-lg p-2 dark:bg-indigo-300 dark:text-indigo-950 dark:placeholder-slate-500 focus:outline-1 focus:outline-indigo-400"
                        placeholder="descreva sua tarefa..." 
                        value={descricao} 
                        onChange={(event) => setDescricao(event.target.value)}>
                    </textarea>

                <label className="flex flex-col gap-2 dark:text-indigo-200">
                    Categoria
                </label>
                    <select required value={categoria} onChange={(event) => setCategoria(event.target.value)} className="rounded-lg p-2 dark:bg-indigo-300 dark:text-indigo-950 dark:placeholder-slate-500 focus:outline-1 focus:outline-indigo-400 dark:text-slate-500">
                        <option className="text-sm" selected> categoria </option>
                       {categorias?.map((categoria) => 
                            <option key={categoria.id} className="text-sm dark:text-indigo-950">{categoria.nome}</option>
                        )}
                    </select>

                <label className="flex flex-col gap-2 dark:text-indigo-200">
                    Prazo de entrega
                </label>
                    <input type="date" value={prazo} onChange={(event) => setPrazo(event.target.value)} className="text-sm rounded-lg p-2 dark:bg-indigo-300 dark:text-indigo-950 dark:placeholder-slate-500 focus:outline-1 focus:outline-indigo-400"/>

            </div>

            <button type="submit" className="py-1 px-3 bg-indigo-500 rounded-md text-white hover:bg-indigo-400 dark:bg-indigo-600">salvar</button>
        </form>
    )
}

export default Form
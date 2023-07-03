import { useState } from "react"
import {v4 as uuidv4} from "uuid"


const Form = ({setTarefas, tarefas, acaoForm, tarefaAEditar, closeModal, categorias}) => {
    
    const tarefaInicial = {
        titulo: "",
        descricao: "",
        categoria: {nome: "", cor: "", id:""},
        prazo: "",
    }

    const [titulo, setTitulo] = useState(tarefaAEditar ? tarefaAEditar.titulo : tarefaInicial.titulo)
    const [descricao, setDescricao] = useState(tarefaAEditar ? tarefaAEditar.descricao : tarefaInicial.descricao)
    const [categoria, setCategoria] = useState(tarefaAEditar ? tarefaAEditar.categoria : tarefaInicial.categoria)
    const [prazo, setPrazo] = useState(tarefaAEditar ? tarefaAEditar.prazo : tarefaInicial.prazo)
    

    const aoSalvarTarefa = () => {
        let categoriaCompleta = categorias.filter((item) => item.nome === categoria)
        setTarefas([...tarefas, {titulo: titulo,descricao: descricao, categoria: categoriaCompleta, prazo: prazo, id: uuidv4(), concluido: false}])
        localStorage.setItem("tarefas", JSON.stringify([...tarefas, {titulo: titulo,descricao: descricao, categoria: categoriaCompleta, prazo: prazo, id: uuidv4(), concluido: false}]))
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
        <form onSubmit={(event) => aoSubmeterForm(event)} className=" flex flex-col items-start rounded-md gap-3 text-slate-700">
            <h1>Criar nova tarefa</h1>
            <div className="flex flex-col gap-3 items-start">
                <label className="flex flex-col">
                    Titulo
                    <input className="rounded-md"
                        placeholder="Digite um titulo para sua tarefa" 
                        value={titulo} 
                        onChange={(event) => setTitulo(event.target.value)}>
                    </input>
                </label>

                <label className="flex flex-col">
                    Descricao
                    <textarea className="rounded-md"
                        placeholder="Descreva sua tarefa..." 
                        value={descricao} 
                        onChange={(event) => setDescricao(event.target.value)}>
                    </textarea>
                </label>

                <label className="flex flex-col">
                    categoria
                    <select value={categoria} onChange={(event) => setCategoria(event.target.value)} className="rounded-md">
                        {categorias?.map((categoria) => 
                            <option key={categoria.id}>{categoria.nome}</option>
                        )}
                    </select>
                </label>

                <label className="flex flex-col">
                    Prazo de entrega
                    <input type="date" value={prazo} onChange={(event) => setPrazo(event.target.value)} className="rounded-md"/>
                </label>

            </div>

            <button type="submit" className="py-1 px-3 bg-indigo-400 rounded-md text-white hover:bg-indigo-500">salvar</button>
        </form>
    )
}

export default Form
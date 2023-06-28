import { useEffect, useState } from "react"
import {v4 as uuidv4} from "uuidv4"

const Form = ({setTarefas, tarefas, acaoForm}) => {
    
    const [titulo, setTitulo] = useState("")
    const [descricao, setDescricao] = useState("")
    const [categoria, setCategoria] = useState("")
    const [prazo, setPrazo] = useState("")

    const aoSalvarTarefa = () => {
        setTarefas([...tarefas, {titulo: titulo,descricao: descricao,categoria: categoria,prazo: prazo, id: uuidv4(), concluido: false}])
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
        return tarefas
    }

    const aoSubmeterForm = (event) => {
        event.preventDefault()
        if(acaoForm === "add-task"){
            aoSalvarTarefa()
        }else if(acaoForm === "edit-tarefa"){
            aoEditarTarefa(tarefaAEditar)
        }
    }

    return (
        <form onSubmit={(event) => aoSubmeterForm(event)}>
            <label>
                Titulo
                <input 
                    placeholder="Digite um titulo para sua tarefa" 
                    value={titulo} 
                    onChange={(event) => setTitulo(event.target.value)}>
                </input>
            </label>

            <label>
                Descricao
                <textarea 
                    placeholder="Descreva sua tarefa..." 
                    value={descricao} 
                    onChange={(event) => setDescricao(event.target.value)}>
                </textarea>
            </label>

            <label>
                categoria
                <select value={categoria} onChange={(event) => setCategoria(event.target.value)}>
                    <option>a</option>
                </select>
            </label>

            <label>
                Prazo de entrega
                <input type="date" value={prazo} onChange={(event) => setPrazo(event.target.value)} />
            </label>

            <button type="submit">adicionar tarefa</button>
        </form>
    )
}

export default Form
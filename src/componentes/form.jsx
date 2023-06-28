import {useEffect, useState } from "react"
import {v4 as uuidv4} from "uuid"


const Form = ({setTarefas, tarefas, acaoForm, tarefaAEditar, closeModal, categorias}) => {
    
    const tarefaInicial = {
        titulo: "",
        descricao: "",
        categoria: {},
        prazo: "",
    }
    const [titulo, setTitulo] = useState(tarefaAEditar ? tarefaAEditar.titulo : tarefaInicial.titulo)
    const [descricao, setDescricao] = useState(tarefaAEditar ? tarefaAEditar.descricao : tarefaInicial.descricao)
    const [categoria, setCategoria] = useState(tarefaAEditar ? tarefaAEditar.categoria : tarefaInicial.categoria)
    const [prazo, setPrazo] = useState(tarefaAEditar ? tarefaAEditar.prazo : tarefaInicial.prazo)
    

    const aoSalvarTarefa = () => {
        let categoriaCompleta = categorias.filter((item) => item.nome === categoria)
        setTarefas([...tarefas, {titulo: titulo,descricao: descricao, categoria: categoriaCompleta, prazo: prazo, id: uuidv4(), concluido: false}])
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
                    {categorias.map((categoria) => 
                        <option key={categoria.id}>{categoria.nome}</option>
                    )}
                </select>
            </label>

            <label>
                Prazo de entrega
                <input type="date" value={prazo} onChange={(event) => setPrazo(event.target.value)} />
            </label>

            <button type="submit">salvar</button>
        </form>
    )
}

export default Form
import { useState } from "react"

const Form = ({setTarefas, tarefas}) => {
    
    const [titulo, setTitulo] = useState("")
    const [descricao, setDescricao] = useState("")
    const [categoria, setCategoria] = useState("")
    const [prazo, setPrazo] = useState("")

    const aoSalvarTarefa = (event) => {
        event.preventDefault()
        setTarefas([...tarefas, {titulo: titulo,descricao: descricao,categoria: categoria,prazo: prazo}])
    }

    return (
        <form onSubmit={(event) => aoSalvarTarefa(event)}>
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
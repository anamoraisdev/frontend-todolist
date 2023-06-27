import { useState } from "react"

const Form = () => {
    const [titulo, setTitulo] = useState()
    const [descricao, setDescricao] = useState()
    const [categoria, setCategoria] = useState()
    const [prazo, setPrazo] = useState()

    return(
        <form>
            <label>
                Titulo
                <input placeholder="Digite um titulo para sua tarefa"></input>
            </label>

            <label>
                Descricao
                <textarea placeholder="Descreva sua tarefa..."></textarea>
            </label>

            <label>
                categoria
                <select>
                    <option>a</option>
                </select>
            </label>
            
            <label>
                Prazo de entrega
                <input type="date"/>
            </label>
            
            <button type="submit">adicionar tarefa</button>
        </form>
    )
}

export default Form
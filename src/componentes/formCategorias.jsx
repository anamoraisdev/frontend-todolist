import { useEffect, useState } from "react"
import {v4 as uuidv4} from "uuid"

const FormCategorias = ({categorias, setCategorias}) => {
    const [nome, setNome]= useState("")
    const [cor, setCor]= useState()

    const salvarCategoria = (event) => {
        event.preventDefault()
        setCategorias([...categorias, {nome: nome, cor: cor, id: uuidv4()}])
    }

    return (
        <main>
            <form onSubmit={(event) => salvarCategoria(event)}>
                <label>
                    nome da categoria
                    <input type="text" placeholder="digite um nome para sua categoria" value={nome} onChange={(event) => setNome(event.target.value)}></input>
                </label>
                <label>
                    cor da categoria 
                    <input type="color" value={cor} onChange={(event) => setCor(event.target.value)}></input>
                </label>

                <button type="submit">salvar</button>
            </form>

        </main>
    )
}
export default FormCategorias
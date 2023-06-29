import { useEffect, useState } from "react"
import {v4 as uuidv4} from "uuid"

const FormCategorias = ({categorias, setCategorias, setOpen, categoriaAEditar, setCategoriaAEditar}) => {
    const [nome, setNome]= useState("")
    const [cor, setCor]= useState("#000000")

    const salvarCategoria = () => {
        setCategorias([...categorias, {nome: nome, cor: cor, id: uuidv4()}])
        setNome("")
    }

    const editarCategoria = (categoriaAEditar) => {
        categorias.map((categoria) => {
            if(categoria.id === categoriaAEditar.id){
               categoria.nome = nome
               categoria.cor = cor
            }
        })
        return categorias
    }

    const aoSubmeterForm = (event) => {
        event.preventDefault()
        if(categoriaAEditar != null){
            editarCategoria(categoriaAEditar)
            setCategoriaAEditar(null)
        }else {
            salvarCategoria()
        }
    }

    return (
        <main>
            <form onSubmit={(event) => aoSubmeterForm(event)}>
                <label>
                    nome da categoria
                    <input type="text" placeholder="digite um nome para sua categoria" value={nome} onChange={(event) => setNome(event.target.value)}></input>
                </label>
                <label>
                    cor da categoria 
                    <input type="color" value={cor} onChange={(event) => setCor(event.target.value)}></input>
                </label>
                {!categoriaAEditar && 
                    <button onClick={() => setOpen(true)}>editar categorias</button>
                }
                <button type="submit">salvar</button>
            </form>
        </main>
    )
}
export default FormCategorias
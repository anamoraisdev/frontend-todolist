import {useState } from "react"
import {v4 as uuidv4} from "uuid"

const FormCategorias = ({categorias, setCategorias, openCategorias, categoriaAEditar, setCategoriaAEditar}) => {
    const [nome, setNome]= useState(categoriaAEditar ? categoriaAEditar.nome : "")
    const [cor, setCor]= useState(categoriaAEditar ? categoriaAEditar.cor : "#000000")

    const salvarCategoria = () => {
        setCategorias([...categorias, {nome: nome, cor: cor, id: uuidv4()}])
        localStorage.setItem("categorias", JSON.stringify([...categorias,{nome: nome, cor: cor, id: uuidv4()} ]))
        setNome("")
    }

    const editarCategoria = (categoriaAEditar) => {
        categorias.map((categoria) => {
            if(categoria.id === categoriaAEditar.id){
               categoria.nome = nome
               categoria.cor = cor
            }
        })
        localStorage.setItem("categorias", JSON.stringify([categorias]))
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
      
        <form onSubmit={(event) => aoSubmeterForm(event)} className=" flex flex-col items-start rounded-md gap-3 text-slate-700">
            <label className="flex flex-col">
                nome da categoria
                <input type="text" placeholder="digite um nome para sua categoria" value={nome} onChange={(event) => setNome(event.target.value)}></input>
            </label>
            <label className="m-2">
                cor da categoria 
                <input type="color" value={cor} onChange={(event) => setCor(event.target.value)} className=""></input>
            </label>
            <div className="flex gap-2">
                <button type="submit" className="py-1 px-3 bg-indigo-400 rounded-md text-white hover:bg-indigo-500">salvar</button>
                {!categoriaAEditar && 
                    <button onClick={openCategorias} className="py-1 px-3 bg-indigo-400 rounded-md text-white hover:bg-indigo-500">editar categorias</button>
                }
            </div>
        </form>
       
    )
}
export default FormCategorias
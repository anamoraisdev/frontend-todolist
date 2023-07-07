import {useState } from "react"
import {v4 as uuidv4} from "uuid"

const FormCategorias = ({categorias, setCategorias, openCategorias, categoriaAEditar, setCategoriaAEditar}) => {
    const [nome, setNome]= useState(categoriaAEditar ? categoriaAEditar.nome : "")
    

    const salvarCategoria = () => {
        setCategorias([...categorias, {nome: nome,  id: uuidv4()}])
        localStorage.setItem("categorias", JSON.stringify([...categorias,{nome: nome, id: uuidv4()} ]))
        setNome("")
    }

    const editarCategoria = (categoriaAEditar) => {
        categorias.map((categoria) => {
            if(categoria.id === categoriaAEditar.id){
               categoria.nome = nome
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
      
        <form onSubmit={(event) => aoSubmeterForm(event)} className=" flex flex-col items-start rounded-md gap-5 text-slate-700">
            <label className="flex flex-col gap-2 dark:text-indigo-200">
                nome da categoria
            </label>
            
            <input type="text" placeholder="digite um nome para categoria"  value={nome} onChange={(event) => setNome(event.target.value)} className="rounded-lg p-2 dark:bg-indigo-300 dark:text-indigo-950 dark:placeholder-slate-500 focus:outline-1 focus:outline-indigo-400"></input>
            <div className="flex gap-2">
                <button type="submit" className="py-1 px-3 bg-indigo-500 rounded-md text-white hover:bg-indigo-400 dark:bg-indigo-600">salvar</button>
                {!categoriaAEditar && 
                    <button onClick={openCategorias} className="py-1 px-3 bg-indigo-500 rounded-md text-white hover:bg-indigo-400 dark:bg-indigo-600">editar categorias</button>
                }
            </div>
        </form>
       
    )
}
export default FormCategorias
import { useState } from "react"


const CardTarefa = ({tarefa, openModal, excluirTarefa, tarefas, setTarefas, tarefasConcluidas, setTarefasConcluidas}) => {
    const [concluido, setConcluido] = useState(false)

    const concluirTarefa = (valor) => {
        setConcluido(valor)
        tarefa.concluido = concluido
        let tarefasNaoConcluidas = tarefas.filter((item) => item.id !== tarefa.id)
        setTarefas(tarefasNaoConcluidas)
        setTarefasConcluidas([...tarefasConcluidas, tarefa])
        localStorage.setItem("tarefas", JSON.stringify([tarefasNaoConcluidas]))
        localStorage.setItem("tarefasConcluidas", JSON.stringify([...tarefasConcluidas, tarefa]))

    }
    
    return (
            <main className="bg-indigo-200 shadow-lg flex p-4 m-4 justify-between rounded-md gap-3 text-slate-700">
                <div className="flex w-100 gap-2">
                    <input type="checkbox" value={tarefa.concluido} onChange={(event) => concluirTarefa(event.target.checked)} className="p-2 rounded-lg"></input>
                    <h2 className="text-slate-700">{tarefa.titulo}</h2>
                </div>
                <div className="flex gap-3">
                    <button onClick={() => openModal(tarefa)} className=" px-3 bg-indigo-500 rounded-md text-white hover:bg-indigo-400">editar</button>
                    <button onClick={() => excluirTarefa(tarefa)} className="px-3 bg-indigo-500 rounded-md text-white hover:bg-indigo-400">excluir</button>
                </div>
            </main>
    )
}

export default CardTarefa
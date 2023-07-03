
const CardTarefa = ({tarefa, openModal, excluirTarefa}) => {
    
    return (
            <main className="bg-indigo-200 shadow-lg flex p-4 m-4 justify-between rounded-md gap-3 text-slate-700 w-[100%]">
                <div className="flex">
                    <input type="checkbox"></input>
                    <h2>{tarefa.titulo}</h2>
                </div>
                <div className="flex gap-3">
                    <button onClick={() => openModal(tarefa)} className=" px-3 bg-indigo-500 rounded-md text-white hover:bg-indigo-400">editar</button>
                    <button onClick={() => excluirTarefa(tarefa)} className="px-3 bg-indigo-500 rounded-md text-white hover:bg-indigo-400">excluir</button>
                </div>
            </main>
    )
}

export default CardTarefa
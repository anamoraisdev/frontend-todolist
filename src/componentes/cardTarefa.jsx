
const CardTarefa = ({tarefa, openModal, excluirTarefa}) => {
    
    return (
            <main className="bg-indigo-200 shadow-lg flex p-4 m-4 justify-between rounded-md gap-3 text-slate-700">
                <div className="flex">
                    <input type="checkbox"></input>
                    <h2>{tarefa.titulo}</h2>
                </div>
                <div className="flex gap-3">
                    <button onClick={() => openModal(tarefa)} className=" px-3 bg-indigo-400 rounded-md text-white hover:bg-indigo-500">editar</button>
                    <button onClick={() => excluirTarefa(tarefa)} className="px-3 bg-indigo-400 rounded-md text-white hover:bg-indigo-500">excluir</button>
                </div>
            </main>
    )
}

export default CardTarefa
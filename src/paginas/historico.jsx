

const Historico = ({ reativarTarefa, tarefasConcluidas }) => {

    return (
        <div className="mt-16 text-slate-700 flex justify-center">
            <div className="w-[400px] bg-indigo-200 shadow-lg rounded-lg p-4">
                {tarefasConcluidas.length > 0 && <h1 className="text-center my-2">Historico de tarefas concluidas</h1>}
                {tarefasConcluidas.length > 0 ? tarefasConcluidas.map((tarefa) =>

                    <div className="bg-indigo-200 p-2 flex justify-between rounded-lg shadow mx-2 my-2">
                        <p>{tarefa.titulo}</p>
                        <button onClick={() => reativarTarefa(tarefa)} className="px-3 bg-indigo-500 rounded-md text-white hover:bg-indigo-400">reativar tarefa</button>
                    </div>
                )
                    :
                    <div className="flex justify-center">
                        <div className="bg-indigo-200 p-2 rounded-lg shadow-lg m-2 text-center">
                            <h1 className="py-2">Voce nao tem historico de tarefas concluidas</h1>
                            <p className="bg-indigo-100 p-2 rounded-lg shadow-lg">Ao concluir suas tarefas elas ficam aguardadas aqui, isso te permite reativa-las quando quiser</p>
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}

export default Historico

const Historico = ({reativarTarefa, tarefasConcluidas}) => {
    
    return (
        <div className="text-slate-700 flex justify-center">
            <div className="mx-5 w-[600px]">
                <div className="text-center bg-indigo-600 p-4 rounded-lg text-indigo-100 mb-4 mt-24">
                    <h1>Historico de tarefas concluidas</h1>
                </div>
                <div className="bg-indigo-200 dark:bg-indigo-950 shadow-lg rounded-lg p-4 flex flex-col gap-3">
                    {tarefasConcluidas.length > 0 ? tarefasConcluidas.map((tarefa) =>

                        <div key={tarefa.id} className="bg-indigo-200 p-4 flex justify-between rounded-lg shadow-lg">
                            <p>{tarefa.titulo}</p>
                            <button onClick={() => reativarTarefa(tarefa)} className="px-3 bg-indigo-500 rounded-md text-white hover:bg-indigo-400">reativar tarefa</button>
                        </div>
                    )
                        :
                        <div className="flex justify-center dark:text-indigo-200">
                            <div className="bg-indigo-200 dark:bg-indigo-900 p-5 rounded-lg shadow-lg m-2 text-center">
                                <h1 className="py-2 font-medium">Voce nao tem tarefas concluidas</h1>
                                <p className="bg-indigo-100 dark:bg-indigo-600 p-8 rounded-lg shadow-lg m-2">Ao concluir suas tarefas elas ficam aguardadas aqui, isso te permite reativa-las quando quiser</p>
                            </div>
                        </div>
                    }

                </div>
            </div>
        </div>
    )
}

export default Historico
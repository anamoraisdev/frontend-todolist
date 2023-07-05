

const Historico = ({reativarTarefa, tarefasConcluidas}) => {

    return (
        <div className="mt-16">
            {tarefasConcluidas.map((tarefa) => 
                <div>
                    <p>{tarefa.titulo}</p>
                    <button onClick={() => reativarTarefa(tarefa)}>reativar tarefa</button>
                </div>
            )}
        </div>
    )
}

export default Historico
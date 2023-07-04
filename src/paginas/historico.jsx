

const Historico = ({reativarTarefa}) => {
    const tarefasConcluidas = JSON.parse(localStorage.getItem("tarefasConcluidas")) || []

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
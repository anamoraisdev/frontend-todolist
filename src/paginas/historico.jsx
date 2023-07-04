const Historico = () => {
    const [tarefasConcluidas , setTarefasConcluidas] = useState(JSON.parse(localStorage.getItem("tarefasConcluidas")) || [])

    return (
        <div>
            {tarefasConcluidas.map((tarefa) => 
                <div>
                    <p>{tarefa.titulo}</p>
                    <button onClick={() => reativarTarefa()}>reativar tarefa</button>
                </div>
            )}
        </div>
    )
}

export default Historico
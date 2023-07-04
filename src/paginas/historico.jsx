import { useState } from "react"

const Historico = ({reativarTarefa}) => {
    const [tarefasConcluidas , setTarefasConcluidas] = useState(JSON.parse(localStorage.getItem("tarefasConcluidas")) || [])

    return (
        <div>
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
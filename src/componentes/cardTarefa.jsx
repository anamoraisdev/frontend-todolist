
import { useState } from "react"


const CardTarefa = ({tarefa, openModal, excluirTarefa}) => {

    return (
        <div>
            <main>
                <input type="checkbox"></input>
                <h2>{tarefa.titulo}</h2>
                <p>{tarefa.descricao}</p>
                <p>{tarefa.prazo}</p>

                <button onClick={() => openModal(tarefa)}>editar tarefa</button>
                <button onClick={() => excluirTarefa(tarefa)}>excluir tarefa</button>
            </main>
        </div>
    )
}

export default CardTarefa
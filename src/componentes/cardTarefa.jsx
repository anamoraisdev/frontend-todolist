
const CardTarefa = ({tarefa, openModal, excluirTarefa, ativarLembrete}) => {
    
    return (
        <div>
            <main>
                <input type="checkbox"></input>
                <h2>{tarefa.titulo}</h2>
                <p>{tarefa.descricao}</p>
                <p>{tarefa.prazo}</p>

                <button onClick={() => openModal(tarefa)}>editar tarefa</button>
                <button onClick={() => excluirTarefa(tarefa)}>excluir tarefa</button>
                <button onClick={() => ativarLembrete(tarefa)}>ativar lembrete</button>
            </main>

            
        </div>
    )
}

export default CardTarefa
const CardTarefa = ({tarefa}) => {
    return (
        <div>
            <input type="checkbox"></input>
            <h2>{tarefa.titulo}</h2>
            <p>{tarefa.descricao}</p>
            <p>{tarefa.prazo}</p>
            <button>editar tarefa</button>
            <button>excluir tarefa</button>
        </div>
    )
}

export default CardTarefa
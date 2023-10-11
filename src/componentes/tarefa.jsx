const Tarefa = ({ tarefa, fecharTarefa }) => {
    
    return (
        <div className="w-[100%]">
            <header className="flex justify-between items-start">
                <div className="">
                    <h1 className="font-medium text-indigo-900 text-4xl m-0 break-all">
                        {tarefa.titulo}
                    </h1>
                    <div className=" flex gap-3 font medium text-slate-500">
                        <p className="">
                            {tarefa.categoria}
                        </p>
                        <p>
                            {tarefa.prazo}
                        </p>
                    </div>

                </div>
                <button className="mt-3" onClick={() => fecharTarefa()}>X</button>
            </header>
            <p className="py-5">
                {tarefa.descricao}
            </p>
        </div>
    )
}

export default Tarefa
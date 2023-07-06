const Navbar = ({setOpenHistorico, openHistorico, mudarMode, darkMode}) => {

    const exibirHistorico = () => {
        if(!openHistorico){
            
            setOpenHistorico(true)
        }else{
            setOpenHistorico(false)
        }
    }

    return (
        <main className={`bg-indigo-400 w-[100%] flex justify-between p-4 fixed top-0 left-0 right-0 text-indigo-100`}>
            <h1>tarefas</h1>
            <div>
                <button onClick={() => exibirHistorico()}>{openHistorico  ? "tarefas" : "historico"}</button>
                <button onClick={() => mudarMode()}>dark mode</button>
            </div>
        </main>
    )
}

export default Navbar
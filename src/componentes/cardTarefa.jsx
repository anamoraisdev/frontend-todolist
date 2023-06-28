
import { useState } from "react"
import Form from "./form"
import { Box, Modal } from "@mui/material"

const style = {
    position: 'absolute',
    display: 'flex',
    justify: "between",
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 200,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
    borderRadius: 8
};

const CardTarefa = ({tarefa}) => {
    const [open, setOpen] = useState(false)

    const openModal = () => {
        setOpen(true)
    }

    const closeModal = () => {
        setOpen(false)
    }

    return (
        <div>
           <Modal
                open={open}
                onClose={closeModal}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Form tarefaAeditar={tarefa} acaoForm={"edit-tarefa"}/>
                </Box>
            </Modal>

            <main>
                <input type="checkbox"></input>
                <h2>{tarefa.titulo}</h2>
                <p>{tarefa.descricao}</p>
                <p>{tarefa.prazo}</p>

                <button onClick={() => openModal()}>editar tarefa</button>
                <button>excluir tarefa</button>
            </main>
        </div>
    )
}

export default CardTarefa
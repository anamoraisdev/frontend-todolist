import { useState } from "react"

const FormLembrete = ({salvarInfoDoLembrete}) => {
    const [data, setData] = useState("")
    return (
        <div>
            <p>Quando gostaria de ser lembrado?</p>
            <input type='date' value={data} onChange={(event) => setData(event.target.value)}></input>
            <button onClick={() => salvarInfoDoLembrete(data)}>salvar</button>
        </div>
    )
}
export default FormLembrete
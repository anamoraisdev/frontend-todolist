import { useState } from "react"

const FormLembrete = ({salvarInfoDoLembrete}) => {
    const [hora, setHora] = useState("")
    const [data, setData] = useState("")
    return (
        <div>
            <p>Quando gostaria de ser lembrado?</p>
            <input type='time' value={hora} onChange={(event) => setHora(event.target.value)}></input>
            <input type='date' value={data} onChange={(event) => setData(event.target.value)}></input>
            
        </div>
    )
}
export default FormLembrete
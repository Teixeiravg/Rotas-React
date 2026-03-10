import '../styles/style.css'

import { useState } from "react"
function Contato(){
const[nome,setNome] = useState("")
const[email,setEmail] = useState("")
const[mensagem,setMensagem] = useState("")
function enviarFormulario(e){
e.preventDefault()
alert("Mensagem enviada com sucesso!")
}
return(
<div className="container">
<h1>Contato</h1>
<form onSubmit={enviarFormulario} className="form">
<input
type="text"
placeholder="Nome"
onChange={(e)=>setNome(e.target.value)}
required
/>
<input
type="email"
placeholder="Email"
onChange={(e)=>setEmail(e.target.value)}
required
/>
<textarea
placeholder="Mensagem"
onChange={(e)=>setMensagem(e.target.value)}
required
/>
<button type="submit">
Enviar
</button>
</form> <br />
<h2>Outras formas de contato</h2>
<p><b>Telefone:</b> (21) 99999-9999</p>
<p><b>E-mail:</b> Support@SolutionsTech.com.br</p>

</div>
)
}
export default Contato

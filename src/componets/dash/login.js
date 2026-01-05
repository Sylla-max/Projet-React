import { useState } from "react";

export default function Login({onLogin}) {
  const [user, setUser] = useState('')
  const[mdp, setMdp] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    if(user === "admin" && mdp === "1234") {
      onLogin(true)
    }else{
       alert("Nom d'utilisateur ou mot de passe incorrect !");
    }
  }

  return(
    <div style={{marginTop: "50px"}}>
      <h2 style={{textAlign: "center"}}>Connection au Tableau de Bord</h2>
        <div className="formm">
          <form onSubmit={handleSubmit} className="form-login"> 
          <input className="form-control" placeholder="nom" type="text" value={user} onChange={(e) => 
setUser(e.target.value)} /> 
          <input className="form-control" placeholder="mot de passe" type="password"  value={mdp} onChange={(e) => 
setMdp(e.target.value)}/> 
          <button className="btn btn-warning" type="submit"> Se connecter </button> 
      </form>
        </div>
    </div>
  )
}

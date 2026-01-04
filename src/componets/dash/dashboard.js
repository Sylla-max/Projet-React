import { useState,useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Dashboard(){

  const [art,setArt] = useState([])

  useEffect(() => {
      axios.get("http://localhost:3001/articles").then(res => {
        setArt(res.data)
      })
      
    },[])

      
    const supp = async (id) => {
    const confi = window.confirm('Voulez-vous supprimer cet article ?');
    
    if (confi === true) {
      try {
        await axios.delete(`http://localhost:3001/articles/${id}`);
        setArt(prevArt => prevArt.filter((at) => at.id !== id));
        alert('Supprimé avec succès');
      } 
      catch (error) {
        console.error("Erreur de suppression:", error);
        alert("Erreur lors de la suppression");
      }
    }
  };
    
  return(
    <div>
      <h1 className="d-flex justify-content-center mt-2 align-items-center">Gestion des articles</h1>
      <button className="btn btn-dark"><Link className="btn-link" to="/dashboard/ajouter">Ajouter un article</Link></button>

      <div className="container2">
      {art.map((article) => (
        <div className="card shadow-sm" key={article.id}>
          <img
              className="bd-placeholder-img card-img-top"
              src={`/images/${article.img}`}
              alt={article.nom}
              style={{ height: "200px", width: "220px"}}
            />
            <div className="card-body">
              <p className="card-title">{article.nom}</p>
              <p className="card-text">{article.prix}</p>
              <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex justify-content-between gap-3">
                  <button className="btn btn-warning"><Link className="btn-link2" to={`/modifier/${article.id}`}>Modifier</Link></button>
                  <button onClick={() => supp(article.id)} className="btn btn-danger">Supprimer</button>
                </div>
              </div>
            </div>
        </div>
      ))}
    </div>

    <div className="foot2"> 
      © 2025 Réalisé par Ousman Sylla
    </div>
    </div>
  )
}

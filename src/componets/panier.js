import { useState } from "react";
import { usePanierContext } from "./Context/panierContext";

export default function Panier() {
  
  const [quantite, setQuantite] = useState(1);
  const [total, setTotal] = useState();
  const {panier,supprimerPanier} = usePanierContext();

  function augmenter(){
    setQuantite(quantite + 1)
    setTotal(total * quantite)
  }

  function diminuer(){
    setQuantite(quantite - 1)
    setTotal(total * quantite)
  }


  if(panier && panier.length > 0) {
    return(
       <div className="container2">
              {panier.map((article) => (
            
            <div className="">
             <div className="card shadow-sm">
            <img
              className="bd-placeholder-img card-img-top"
              src={`/images/${article.img}`}
              alt={article.nom}
              style={{ height: "200px", width: "200px"}}
            />
            <div className="card-body">
              <p className="card-title">{article.nom}</p>
              <p className="card-text">{article.prix}</p>
              <div className="d-flex justify-content-between align-items-center">
                <div className="pan-group">
                  <div>
                    <button className="btn btn-success" onClick={augmenter}>+</button>
                    <span style={{marginLeft: "5px"}}>{quantite}</span>
                    <button style={{marginLeft: "5px"}} className="btn btn-success" disabled={quantite <= 1} onClick={diminuer}>-</button>
                  </div>
                  <button type="button" onClick={() => supprimerPanier(article.id)} className="btn btn-sm btn-outline-danger">
                   suppimer
                  </button>
                </div>
              </div>
            </div>
          </div>
          </div>
              ))}
      </div> 
    )
  }

  return <div className="d-flex justify-content-center mt-4 align-items-center">
     <h2>Aucun article dans le panier</h2>
  </div>
  
}

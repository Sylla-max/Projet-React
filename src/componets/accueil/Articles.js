import { usePanierContext } from "../Context/panierContext";

export default function Articles({article}) {

  const {ajoutPanier,supprimerPanier,CPanier} = usePanierContext()

  const articlesPan = CPanier(article.id)

  function PanierClick(e) {
    e.preventDefault()
    if (articlesPan) {
      supprimerPanier(article.id)
    }else{
      ajoutPanier(article)
    }
  }

  return(
     <div className="">
          <div>
            <div className="card shadow-sm">
              <img className="bd-placeholder-img card-img-top" src={`/images/${article.img}`} alt={article.nom} style={{ height: "200px", width: "220px"}}
            />
            <div className="card-body">
              <p className="card-title">{article.nom}</p>
              <p className="card-text">{article.prix}</p>
              <div className="d-flex justify-content-between align-items-center">
                <div className="btn-group">
                  <button type="button" onClick={PanierClick} className="btn btn-sm btn-outline-secondary">
                    {articlesPan ? 'Retirer du panier' : 'Ajouter au panier'}
                  </button>
                </div>
              </div>
            </div>
            </div>
          </div>
      </div> 
  )
}
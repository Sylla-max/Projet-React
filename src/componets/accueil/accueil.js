import Articles from "./Articles";
import { useEffect, useState } from "react";
import axios from 'axios';

export default function Accueil(){

  const [articles, setArticles] = useState([])
  const [search, setSearch] = useState('')
  const [resultat, setResultat] = useState([])

  useEffect(() => {
      axios.get("http://localhost:3001/articles").then(res => {
        setArticles(res.data)
      })
      
    },[])

    const handleRecherche = (e) => {
      const terme = e.target.value.toLowerCase()
      setSearch(terme)

      if(terme.trim() === ''){
        setResultat(articles)
      }
      else{
        const filtre = articles.filter((at) => at.nom.toLowerCase().includes(terme))
        setResultat(filtre)
      }
    }

     const articlesAAfficher = search.trim() === '' ? articles : resultat;

  return(
    <div className="container3">
     <div className="container1">
      <img className="imagess" src="/sofa.png"/>
      
      <div>
        <div className="present">
          <ul>
          <li>
            "Votre maison, votre style. Nous créons des intérieurs qui vous ressemblent."
          </li>
          <li>
            Spécialiste de l'aménagement intérieur, notre société allie savoir-faire traditionnel et tendances contemporaines pour vous proposer des meubles qui font de votre maison un véritable foyer.
          </li>
          </ul>
      </div>
         <div className="input-group mt-4">
          <input type="text" class="form-control" placeholder="Rechercher...." aria-label="Recipient’s username" aria-describedby="button-addon2" value={search} onChange={handleRecherche} />
         </div>
      </div>
         

      
     </div>

     {articlesAAfficher && articlesAAfficher.length === 0 ? (
      <div className="d-flex justify-content-center mt-4 align-items-center">
        <h3>Aucun article trouvé</h3>
        <div className="foot2 fixed-bottom"> 
          © 2025 Réalisé par Ousman Sylla
        </div>

        
      </div>
     ) : (

      <div>
        <div className="container2">
          {articlesAAfficher.map((article) => (
            <div key={article.id}>
              <Articles article={article} /> 
            </div>  
          ))}
        
      </div>

        <div className="foot2"> 
          © 2025 Réalisé par Ousman Sylla
        </div>

      </div>
     )}  
    
    </div>

    
  )
}



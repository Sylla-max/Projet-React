import { useState } from "react";
import axios from "axios";

export default function AjouterArticle(){

  const[nom,setNom] = useState('')
  const[prix,setPrix] = useState('')
  const[img,setImg] = useState('')
  const getImage = (e) => {
      const fichier = e.target.files[0].name;
      if(fichier){
      setImg(fichier)
      }
    }

    const ajouter = async () => {  

      if(nom.trim() === '' || prix.trim() === ''){
        alert("Veuillez remplir tous les champs");
        return;
      }
      if(isNaN(prix)){
        alert("Entrez des nombres valides");
        return;
      }

    try{
        const newArticle = {nom: nom, prix: `${parseFloat(prix)} dhs`, img: `/${img}` }
        await axios.post("http://localhost:3001/articles", newArticle)
        alert('Ajouté avec succès');

      setNom('');
      setPrix('');
      setImg('');      
      document.querySelector('input[type="file"]').value = '';

    }catch(error){
        console.error("Erreur lors de l'ajout:", error);
        alert("Erreur lors de l'ajout");
      }
    }

      return(
        <div  className="card p-4 shadow-sm mb-5">
          <h4>Ajouter un Article</h4>

          <input type="text" className="form-control" placeholder="Nom de l'article" value={nom} onChange={(e) => setNom(e.target.value)}/>

          <input type="text" className="form-control" placeholder="Prix de l'article" value={prix} onChange={(e) => setPrix(e.target.value)}/>

          <input type="file" className="form-control" accept="image/*" onChange={getImage} />

          <button className="btn btn-success" onClick={ajouter}>Ajouter</button>

          {img ? (
            <img src={`/images/${img}`}  style={{ height: "150px", width: "150px", marginTop:"30px" }}/>) : ('')
          }
        </div>
      )
    }
  
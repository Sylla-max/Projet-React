import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Modifier(){

  const {id} = useParams()
  const [nom, setNom] = useState('')
  const [prix, setPrix] = useState('')
  const [img, setImg] = useState('')
  const [editAt, setEditAt] = useState(null)
  const[article, setArticle] = useState([])

  useEffect(() => {
    chargerArticle()
  },[id])


  const getImage = (e) => {
    const fichier = e.target.files[0].name
    setImg(fichier)
  }

  const chargerArticle = async () => {

    try{
      const reponse = await axios.get(`http://localhost:3001/articles/${id}`);
      const article = reponse.data
    
      setNom(article.nom)
      setPrix(article.prix.replace(' dhs', ''));
      setImg(article.img)
     }catch(error){
        alert('article non trouve')
        console.log(error)
      }
    }

  const modifier = async () => {
    try{
      const modif = {
        nom: nom, 
        prix: `${parseFloat(prix)} dhs`, 
        img: `/${img}`
      }

      await axios.put(`http://localhost:3001/articles/${id}`,modif)
      setArticle(article.map(a => a.id === editAt ? {...a,...modif} : a))
      alert('Modifié avec succès');

      setEditAt(null)
      setNom('')
      setPrix('')
      setImg('')
    }

    catch(error){
      alert('Erreur lors de la modification')
      console.log('Erreur lors de la modification',error)
    }
  }

  return(
    <div>
        <div  className="card p-4 shadow-sm mb-5">
          <h4>Modifier un Article</h4>

          <form onSubmit={chargerArticle}>
            <input type="text" className="form-control" placeholder="" value={nom} onChange={(e) => setNom(e.target.value)}/>

          <input type="text" className="form-control" placeholder="" value={prix} onChange={(e) => setPrix(e.target.value)}/>

          <input type="file" className="form-control" accept="image/*" onChange={getImage} />

          <button type="submit" className="btn btn-info" onClick={modifier}>Modifier</button>
          </form>

      
        </div>
    </div>
  )
}
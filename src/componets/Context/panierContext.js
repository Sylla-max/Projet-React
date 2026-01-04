import { createContext,useEffect,useContext,useState } from "react";

export const PanierContext = createContext();

export const usePanierContext = () => {
  return useContext(PanierContext)
}

export const PanierProvider = ({children}) => {
  const [panier, setPanier] = useState([])

  useEffect(() => {
    const stockPanier = localStorage.getItem('panier');

    if (stockPanier) setPanier(JSON.parse(stockPanier))
  },[])

  useEffect(()=>{
    localStorage.setItem('panier', JSON.stringify(panier))
  },[panier])

  const ajoutPanier = (article) => {
    setPanier(prev => [...prev, article])
  }

  const supprimerPanier = (panierId) => {
    setPanier(prev => prev.filter(article => article.id !== panierId))
  }

  const CPanier = (panierId) => {
    return panier.some(article => article.id === panierId)
  }

  const value = {
    panier,ajoutPanier,supprimerPanier,CPanier
  }

  return <PanierContext.Provider value={value}>
    {children}
  </PanierContext.Provider>
}
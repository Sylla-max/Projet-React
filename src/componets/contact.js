export default function Contact(){

  const adresse = "ISGI AZLI OFPPT MARRAKECH";
  const zoom = 16;

   const mapUrl = 
  `https://www.google.com/maps?q=${encodeURIComponent(adresse)}&t=&z=${zoom}&ie=UTF
  8&iwloc=B&output=embed`; 

  return(
    <div>
      <div className="contact">
        <h1>Contactez-nous</h1>
        <p>osmanakebesylla@gmail.com</p>
      </div>

    <div className="mapp">
      <iframe 
        title="Carte ISGI AZLI OFPPT Marrakech" 
        width="100%" height="100%" style={{ border: "2px solid" }} 
        loading="lazy"  allowFullScreen 
        src={mapUrl} 
      ></iframe>
    </div>


      <div className="foot2"> 
        © 2025 Réalisé par Ousman Sylla
      </div> 
    </div>
  )
}
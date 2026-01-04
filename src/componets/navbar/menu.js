import React from "react";
import {Link} from 'react-router-dom';

export default function Menu(){
  return(
    <nav className="navbar navbar-expand-lg">
    <div className="container">
      <a className="navbar-brand">Maison360</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
         <ul className="navbar-nav ms-lg-auto" >
        <li className="nav-item py-lg-3">
          <Link className="n-link" to="/">Accueil</Link>
        </li>
        <li className="nav-item py-lg-3">
          <Link className="n-link" to="/contact">Conctact</Link>
        </li>
        <li className="nav-item py-lg-3">
          <Link className="n-link" to="/dashboard">Dashboard</Link>
        </li>
        <li className="nav-item py-lg-3">
          <Link className="n-link" to="/panier"><i class="bi bi-cart3 fs-5"></i></Link>
        </li>
      </ul>
      </div>
    </div>
    </nav>
  )
}
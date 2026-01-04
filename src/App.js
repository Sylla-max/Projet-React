import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './App.css';
import Menu from './componets/navbar/menu';
import { BrowserRouter as Router, Routes, Route, BrowserRouter} from "react-router-dom"; 
import Accueil from './componets/accueil/accueil';
import Contact from './componets/contact';
import Dashboard from './componets/dash/dashboard';
import Panier from './componets/panier';
import { PanierProvider } from './componets/Context/panierContext';
import AjouterArticle from './componets/dash/ajouterArticle';
import Modifier from './componets/dash/modifierArticle';
import Login from './componets/dash/login';
import { useState } from 'react';

function App() {
  const [loggedIn, setLoggedIn] = useState(false); 

  const DashboardLogin = () => {
    if(!loggedIn) {
      return <Login onLogin={setLoggedIn} />
    }else{
      return <Dashboard />
    }
  }

  return (

      <PanierProvider>
      <Router>
        <Menu/>

        <Routes>
          <Route path="/" element={<Accueil />} /> 
          <Route path="/contact" element={<Contact />} /> 
          <Route path="/dashboard" element={<DashboardLogin />} />
          <Route path="/dashboard/ajouter" element={<AjouterArticle />} />
          <Route path="/modifier/:id" element={<Modifier />} />
          <Route path="/panier" element={<Panier />} /> 
        </Routes>

    </Router>
    </PanierProvider>
    
  );
}

export default App;

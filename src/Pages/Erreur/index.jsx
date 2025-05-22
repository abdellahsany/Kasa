import { Component } from "react";
import { Link } from "react-router-dom";
import "./Erreur.scss"

export default class Erreur extends Component{

   render(){
      return <main className="main page-erreur">
         <p className="page-erreur__404">404</p>
         <p className="page-erreur__msg">Oups! La page que vous demandez n'existe pas!</p>
         <Link className="page-erreur__lien active" to ="/">Retourner sur la page d'accueil</Link>
      </main>
   }
} 
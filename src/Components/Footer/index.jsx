import { Component } from "react";
import FooterLogo from '../../assets/images/FooterLogo.svg'
import './Footer.scss'

//Création du composant Footer
export default class Footer extends Component{
   render(){
      return <footer className="footer">
         <img className="footer__logo" src={FooterLogo} alt="logo Kasa" />
         <p className="footer__lien">© 2023 Kasa. All rights reserved</p>
   </footer>
   }
   
} 
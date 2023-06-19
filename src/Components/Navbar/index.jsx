import { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import { ReactComponent as NavbarLogo } from '../../assets/images/NavbarLogo.svg'
import './Navbar.scss'

//Creation du composant NavBar 
export default class Navbar extends Component{

   render(){
      return <header className="navbar">              
         <Link to="/">
            <NavbarLogo className="navbar__logo"  alt="logo Kasa" />
         </Link>
         <nav className="navbar__nav">
            <NavLink className="navbar__nav__link" to='/' >Accueil</NavLink>
            <NavLink className="navbar__nav__link" to='/apropos' >A Propos</NavLink>
         </nav>
   </header>
   }
}

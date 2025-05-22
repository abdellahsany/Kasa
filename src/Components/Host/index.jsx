import propTypes from "prop-types";
import { Component } from "react";
import './Host.scss'

//Création du composant profil :photo+nom
export default class Host extends Component{

   render(){
      const{picture, name} = this.props
      return <aside className="host">
            <div className="host__name">{name}</div>
            <img className="host__img" src={picture} alt="hostImage" />
   </aside>
   }
}

//Valider les types des proprs
Host.propType = {
   picture: propTypes.string,
   name: propTypes.string,
}
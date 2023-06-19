import propTypes from 'prop-types'
import { Component } from 'react'
import { Link } from 'react-router-dom'
import './Card.scss'

//Création du composant Card logement = image+titre
export default class Card extends Component{

      render(){
         const{id, titre, cover} = this.props
         //on cliquant sur card on se redirige vers la page Annonce (caroussel+titre+host+ration..)
         
         return <article  className="logement-card">
               <Link to={'/annonce/' + id}>
                  <div className="logement-card__overlay"></div>
                  <img className="logement-card__img" src={cover} alt="logement" />
                  <h2 className="logement-card__titre">{titre}</h2>
               </Link>
            </article>
      }
}

//Valider le type des propriétés
Card.propTypes ={
      id: propTypes.string.isRequired,
      titre: propTypes.string,
      cover: propTypes.string,
}
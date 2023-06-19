import propTypes from "prop-types";
import { Component } from "react";
import './Banner.scss'

//Création du composant Banner
export default class Banner extends Component{

   render(){
      const {bannerClass, title } = this.props
      const classcss = "banner " + bannerClass

      return <section className={classcss}>
         {
            //pour ne pas afficher la balise <h1> vide si title est vide cas page apropos
            title !== "" && <h1 className="banner__title"> {title} </h1>
         }
      </section>
   }
} 

//Valider les types des proprs
Banner.propType = {
   title: propTypes.string,
   bannerClass: propTypes.string,
}
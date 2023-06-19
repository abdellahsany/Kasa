import propTypes from "prop-types";
import React, { Component } from "react"
import { ReactComponent as ArrowLeft }  from '../../assets/images/ArrowLeft.svg'
import { ReactComponent as ArrowRight }  from '../../assets/images/ArrowRight.svg'
import './Caroussel.scss'


//Création du composant Caroussel
export default class Caroussel extends Component{
   // constructor
   constructor(props){
      super(props);
      this.state = {currentIndexSelected: 0};
   }
   /**
    * Nombre total des images à afficher dans le Caroussel
    * @returns 
    */
   getTotalPictures(){
      const {pictures} = this.props
      return  pictures.length - 1
   }

   /**
    * Afficher l'image précedente
    */
   prevSlide(){      
      let newCurrentIndex = this.state.currentIndexSelected
      if(newCurrentIndex === 0 ){ 
         newCurrentIndex = this.getTotalPictures()      
      }else{
         newCurrentIndex--
      }
      this.setState({currentIndexSelected:newCurrentIndex})
   }


   /**
    * Afficher l'image suivante
    */
   nextSlide(){
      let newCurrentIndex = this.state.currentIndexSelected

      if(newCurrentIndex < this.getTotalPictures()){         
         newCurrentIndex++;
      }else{
         newCurrentIndex = 0
      }
      this.setState({currentIndexSelected: newCurrentIndex})
   }

   /**
    * Affiche le numéro de l'image sur le nombre total des images
    * @returns 
    */
   getLegend(){
      return  (this.state.currentIndexSelected+1) + ' / ' + (this.getTotalPictures()+1)
   }

   render (){

      const {pictures} = this.props    
      return <section className="caroussel">
            {
               //on affiche les boutons de navigation si le nbre des images est > 1
               (this.getTotalPictures() > 1) &&  (<div className="caroussel__navigation">
                  <ArrowRight alt="arrow" className="caroussel__chevron-g" onClick={(e) => this.prevSlide()}/>
                  <ArrowLeft alt="arrow" className="caroussel__chevron-d" onClick={(e) => this.nextSlide()}/>
               </div>)
            }
           

         {
            pictures.map((picture, index) => { 
               const imgClass = (index === this.state.currentIndexSelected ) ? "caroussel__image" : "caroussel__hidden"          
               return  <img src={picture} key={`caroussel-${index}`}  id={`caroussel-${index}`} alt="Carousselimage" className={imgClass} />
            })
         } 


         <div className="caroussel__legend">
               {
                  this.getLegend()
               }
         </div> 

      </section>
   }
}

//Valider les types des proprs
Caroussel.propType = {
   pictures: propTypes.object,
}
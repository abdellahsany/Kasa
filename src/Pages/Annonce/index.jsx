import { Component } from "react"
import Api from '../../Api/Api.js'
import Tag from "../../Components/Tag";
import Host from "../../Components/Host/index.jsx";
import Caroussel from "../../Components/Caroussel";
import Erreur from "../Erreur";
import './Annonce.scss'
import Stars from "../../Components/Stars/index.jsx";
import Accordion from "../../Components/Accordion/index.jsx";
 
// Page Annonce
export default class Annonce extends Component{
   render(){
      // id de l'annonce selectionné
      const id = window.location.pathname.split("/annonce/").pop();
      const api = new Api();
      //Récuperer les données de l'annonce par id.
      const logementData = api.getLogement(id);
      //si les données n'existent pas afficher la page d'erreur
      if(!logementData){
         return <Erreur />
      }     

      return <main className="main annonce">
         <Caroussel pictures={logementData.pictures}/>
         
         <section className="annonce__blocs">
           
            <div className="annonce__blocs__bloc">
               {
               // Création titre + localisation.
               }
               <section className="annonce__blocs__bloc__titre">
                  <h1>{logementData.title}</h1>
                  <h3>{logementData.location}</h3>
               </section>   
               {
               // Création des Tags.
               }
               <section className="tags">
                  {
                     logementData.tags.map((tag, index) => { 
                     return  <Tag key={`tag-${index}`} name={tag} />
                     })
                  }
               </section>
            </div>
            {
               // Création d'Host + stars.
            }
            <div className="annonce__blocs__bloc">
               <Host name={logementData.host.name} picture={logementData.host.picture}/>            
               <Stars rating={logementData.rating}/>
            </div>
         </section>   
         {
            // Création des deux accordions.
         }
         <section className="annonce__warpper">
               <Accordion content={logementData.description} titre="Déscription"/>
               <Accordion content={logementData.equipments} titre="Équipements"/>
         </section>
      </main>
   }
}

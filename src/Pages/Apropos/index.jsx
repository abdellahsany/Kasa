import { Component } from "react";
import Api from '../../Api/Api.js'
import './Apropos.scss'
import Banner from "../../Components/Banner";
import Accordion from "../../Components/Accordion/index.jsx";
import '../../Components/Accordion/Accordion.scss'


export default class Apropos extends Component{
   

   render(){
      const api = new Api();
      const aproposData = api.getDataAccordions();
      
      return <main className="main apropos">
         <Banner bannerClass="banner__apropos" title='' />
         <section className="accordions__apropos">
            {
                aproposData.map(({id, description, titre}) => {
                  return <Accordion key={id} id={id} titre={titre} content={description} />
                  })

            }
         </section>    
         
         
      </main>
   }
} 
import { Component } from 'react'
import Card from '../../Components/Card'
import Banner from '../../Components/Banner'
import Api from '../../Api/Api.js'
import './Accueil.scss'


export default class Accueil extends Component{

   render(){
      const api = new Api();
      const logementsData = api.getLogements();

      return <main className="main page-accueil">
         <Banner bannerClass="banner__accueil" title='Chez vous, partout et ailleurs' />
         <section className="annonces">
         {
            logementsData.map(({id, title, cover}) => {            
            return  <Card key={id} id={id} titre={title} cover={cover} />
            })
         }
         </section>
      </main>
   }
} 
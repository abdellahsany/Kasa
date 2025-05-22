import { Component } from "react";
import propTypes from "prop-types";
import './Tag.scss'

export default class Tag extends Component{
   render (){
      const {name} = this.props
      return <div className="tag">
         {name}
      </div>
   }
}
//Valider les types des proprs
Tag.propType = {
   name: propTypes.string,
}
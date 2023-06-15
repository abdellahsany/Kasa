import { Component, Fragment } from 'react';
import './App.scss';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import Router from './Routes/Routes';

// Composant de démarrage 
export default class App extends Component {
  render(){
    return (
      <Fragment>
        <Navbar />
        <Router />
        <Footer />
      </Fragment>
    );
  } 
}


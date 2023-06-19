// IMPORTATION DES DONNÉES DES LOGEMENTS DEPUIS LE FICHIER LOGEMENTS.JSON 
import data from '../datas/logements.json'; 

// IMPORTATION DES DONNÉES DE LA PAGE APROPOS DEPUIS LE FICHIER APROPOS.JSON 
import dataAccordions from '../datas/apropos.json'; 

export default class Api {
  // RÉCUPÉRER LES DONNÉES DES LOGEMENTS 
  getLogements() {
    return data; // Retourne les données des logements
  }

  // RÉCUPÉRER LES DONNÉES D'UN LOGEMENT SPÉCIFIQUE EN UTILISANT L'ID PASSÉ EN PARAMÈTRE
  getLogement(id) {
    return data.find(current => current.id === id); // Retourne les données du logement correspondant à l'ID spécifié
  }

  // RÉCUPÉRER LES DONNÉES DE LA PAGE APROPOS
  getDataAccordions() {
    return dataAccordions; // Retourne les données de la page apropos
  }
}

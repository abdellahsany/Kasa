import { Routes, Route } from "react-router-dom";
import Accueil from "../Pages/Accueil";
import Annonce from "../Pages/Annonce";
import Apropos from "../Pages/Apropos";
import Erreur from "../Pages/Erreur";

// Englober toutes les routes dans le Router = Routes dans la nouvelle version.
export default function Router() {
   return (
      <Routes>
         <Route path="/" element={<Accueil />} exact={true} />
         <Route path="/apropos" element={<Apropos />} />
         <Route path="/annonce/:id" element={<Annonce />} />
         <Route path="*" element={<Erreur />} />
      </Routes>
   );
}


import logo from "./logo.svg";
import "./App.css";
import { ProfilePhoto } from "./Component/Profile/ProfilePhoto";
import { FullName } from "./Component/Profile/FullName";
import { Address } from "./Component/Profile/Address";
import "bootstrap/dist/css/bootstrap.min.css";
import { InfoDetail } from "./Component/Profile/InfoDetail";
import { QualiteDetail } from "./Component/Profile/QualiteDetail";
import { LangueDetail } from "./Component/Profile/LangueDetail";
import { CentreInteret } from "./Component/Profile/CentreInteret";
import { FormationInfo } from "./Component/Profile/FormationInfo";
import { ParcourProfessio } from "./Component/Profile/ParcourProfessio";
import { StageProf } from "./Component/Profile/StageProf";

function App() {
  return (
    <div className="App">
      <header>
        
        <ProfilePhoto />
      </header>

      <section>
       
        <FullName />
      </section>

      <aside>
        
        <InfoDetail />
        <Address />
        <QualiteDetail />
        <CentreInteret />
      </aside>

      <footer>
      
        <FormationInfo />
        <ParcourProfessio />
        <StageProf />
      </footer>
    </div>
  );
}

export default App;

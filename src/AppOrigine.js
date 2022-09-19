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
      <FullName />
      <ProfilePhoto />
      
        <div className="colInfoTotal">
        <InfoDetail />
        <Address />
        <QualiteDetail />
        {/* <LangueDetail /> */}
        <CentreInteret />
        </div>
      

      <div className="collInfoTotal2">
      <FormationInfo />
      <ParcourProfessio />
      <StageProf />
      </div>
    </div>
  );
}

export default App;
